import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./GlossCard.module.scss";

// Самописный throttle — легковесный, без lodash
const throttle = (func, delay) => {
  let lastCall = 0;
  let timeoutId = null;

  return (...args) => {
    const now = Date.now();
    if (now - lastCall < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func(...args);
      }, delay - (now - lastCall));
    } else {
      lastCall = now;
      func(...args);
    }
  };
};

const GlossCard = React.memo(({ children, className, width }) => {
  const cardRef = useRef(null);

  // Управляем блик-позицией в state, но оптимизируем обновления через throttle
  const [glossPos, setGlossPos] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [lockedPos, setLockedPos] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [clickFlash, setClickFlash] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Храним throttled функцию в ref, чтобы сохранять один и тот же инстанс
  const throttledSetGlossPosRef = useRef(null);

  // Функция обновления позиции блика
  const updateGlossPos = useCallback((e) => {
    if (lockedPos) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlossPos({ x, y });
    setIsVisible(true);
    setFadeOut(false);
  }, [lockedPos]);

  // Инициализация throttled функции один раз
  useEffect(() => {
    throttledSetGlossPosRef.current = throttle(updateGlossPos, 16); // ~60fps
  }, [updateGlossPos]);

  // Обработчик движения мыши — вызывает throttled функцию
  const handleMouseMove = useCallback((e) => {
    throttledSetGlossPosRef.current?.(e);
  }, []);

  // Обработчик ухода мыши
  const handleMouseLeave = useCallback(() => {
    if (!lockedPos) {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setFadeOut(false);
      }, 500);
    }
  }, [lockedPos]);

  // Обработчик клика
  const handleClick = useCallback(() => {
    if (lockedPos) {
      setLockedPos(null);
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setFadeOut(false);
      }, 500);
    } else {
      setLockedPos(glossPos);
      setIsVisible(true);
    }
    setClickFlash(true);
    setTimeout(() => setClickFlash(false), 300);
  }, [lockedPos, glossPos]);

  // Параллакс - оптимизированный обработчик с useCallback
  const handleParallax = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setParallax({ x: offsetX, y: offsetY });
  }, []);

  // Подписка на события параллакса и очистка
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    node.addEventListener("mousemove", handleParallax);
    node.addEventListener("mouseleave", () => setParallax({ x: 0, y: 0 }));

    return () => {
      node.removeEventListener("mousemove", handleParallax);
      node.removeEventListener("mouseleave", () => setParallax({ x: 0, y: 0 }));
    };
  }, [handleParallax]);

  // CSS-переменные для позиции блика — обновляем напрямую в DOM, чтобы не вызывать ререндер
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const pos = lockedPos || glossPos;
    node.style.setProperty("--gloss-x", `${pos.x}%`);
    node.style.setProperty("--gloss-y", `${pos.y}%`);
  }, [glossPos, lockedPos]);

  return (
    <div
      ref={cardRef}
      className={`${styles.glassContainer} ${className} ${clickFlash ? styles.clickFlash : ""} ${isVisible ? styles.visible : ""} ${fadeOut ? styles.fadeOut : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        cursor: lockedPos ? "pointer" : "default",
        transform: `perspective(500px) rotateX(${parallax.y}deg) rotateY(${parallax.x}deg)`,
        // пример использования CSS-переменных в стиле (если нужно)
        // backgroundPosition: `var(--gloss-x) var(--gloss-y)`,
        width: width || "auto",
      }}
    >
      {[...Array(3)].map((_, i) => {
        const sizes = [180, 120, 80];
        const opacities = [0.45, 0.3, 0.15];
        const glowSizes = [25, 20, 15];

        return (
          <div
            key={i}
            className={styles.glossEffect}
            style={{
              left: `var(--gloss-x)`,
              top: `var(--gloss-y)`,
              width: width,
              height: sizes[i],
              boxShadow: `0 0 ${glowSizes[i]}px rgba(255, 255, 255, ${opacities[i] * 0.8})`,
              background: `radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, ${opacities[i]}) 0%,
                rgba(255, 255, 255, 0.05) 60%,
                transparent 100%
              )`,
              filter: "blur(25px)",
              mixBlendMode: "screen",
              position: "absolute",
              borderRadius: "50%",
              pointerEvents: "none",
              opacity: isVisible ? 1 : 0,
              transformOrigin: "center center",
              transition: "opacity 0.4s ease, left 0.15s ease, top 0.15s ease",
              animation: isVisible ? "pulseGlow 3s infinite ease-in-out" : "none",
            }}
          />
        );
      })}

      {children}
    </div>
  );
});

export default GlossCard;
