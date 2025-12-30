# 🌦️ WebWeather — Профессиональное приложение для отслеживания погоды

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg?logo=node.js)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Active-green.svg)](#)

---

## 📋 Содержание

- [Общая информация](#-общая-информация)
- [Основные возможности](#-основные-возможности)
- [Технологический стек](#-технологический-стек)
- [Структура проекта](#-структура-проекта)
- [Установка](#-установка)
- [Использование](#-использование)
- [API интеграция](#-api-интеграция)
- [Конфигурация](#-конфигурация)
- [Разработка](#-разработка)
- [Развертывание](#-развертывание)
- [Скриншоты](#-скриншоты)
- [Лицензия](#-лицензия)
- [Контакты](#-контакты)

---

## 📌 Общая информация

**WebWeather** — это современное одностраничное веб-приложение (SPA) для просмотра текущей погоды и прогноза по городам мира. Приложение имеет интуитивный интерфейс, адаптивный дизайн и использует актуальные данные из OpenWeatherMap API.

| Характеристика | Значение |
|---|---|
| **Название** | WebWeather |
| **Автор** | Maivand Rahmani |
| **Язык** | JavaScript, React |
| **Тип** | Single Page Application (SPA) |
| **Статус** | ✅ В активной разработке |
| **Версия** | 0.0.0 |
| **Лицензия** | GPL-3.0 |
| **Live Demo** | [web-weather-tau.vercel.app](https://web-weather-tau.vercel.app) |
| **Репозиторий** | [github.com/Kingnew2006/WebWeather](https://github.com/Kingnew2006/WebWeather) |

---

## ✨ Основные возможности

### 🔍 Поиск по городам
- Интуитивный поиск населенных пунктов
- Поддержка городов из разных стран
- Быстрый автодополнение результатов поиска
- История последних искомых городов

### 🌡️ Текущая погода
- Отображение текущей температуры в реальном времени
- Описание погодных условий (ясно, облачно, дождь, снег и т.д.)
- Влажность воздуха и давление
- Скорость и направление ветра
- Ощущаемая температура
- Видимость
- Индекс UV

### 📅 Прогноз на несколько дней
- Дневной и ночной прогноз температуры
- Вероятность осадков
- Ожидаемое количество осадков
- Облачность
- Долгосрочный прогноз на 7-10 дней

### 🎨 Визуализация
- Красивые иконки погоды
- Плавные анимации и переходы
- Цветовые индикаторы температуры
- Адаптивный дизайн (мобильные, планшеты, десктоп)
- Темная/светлая тема

### 🌍 Интернационализация (i18n)
- Поддержка нескольких языков
- Локализация текстов интерфейса
- Переключение языков в реальном времени
- Сохранение выбранного языка в localStorage

### 📱 Мобильный фокус
- Оптимизация для мобильных устройств
- Touch-friendly интерфейс
- Быстрая загрузка на медленных соединениях
- Кеширование данных для улучшения производительности

---

## 🛠️ Технологический стек

### Frontend
```
┌─────────────────────────────────┐
│   React 19.1.0                  │  Основная библиотека UI
│   Vite 6.3.5                    │  Сборка и dev-сервер
│   SCSS (sass-embedded 1.89.2)   │  Препроцессор стилей
│   Tailwind CSS (опционально)    │  Утилиты CSS
└─────────────────────────────────┘
```

### HTTP и взаимодействие
```
┌─────────────────────────────────┐
│   Axios 1.10.0                  │  HTTP запросы
│   React Router DOM 7.6.2        │  Навигация и роутинг
│   React Hook Form 7.59.0        │  Управление формами
└─────────────────────────────────┘
```

### Интернационализация
```
┌─────────────────────────────────┐
│   react-i18next 15.6.0          │  Переводы интерфейса
│   i18n 0.15.1                   │  Конфигурация i18n
│   dayjs 1.11.13                 │  Форматирование дат
└─────────────────────────────────┘
```

### Разработка
```
┌─────────────────────────────────┐
│   ESLint 9.25.0                 │  Проверка кода
│   @vitejs/plugin-react 4.4.1    │  React плагин для Vite
│   dotenv 16.5.0                 │  Переменные окружения
└─────────────────────────────────┘
```

### Внешние API
```
┌─────────────────────────────────┐
│   OpenWeatherMap API 3.0        │  Данные о погоде
│   Geolocation API               │  Определение местоположения
└─────────────────────────────────┘
```

---

## 📁 Структура проекта

```
WebWeather/
│
├── public/                         # Статические файлы
│   ├── index.html                  # Главный HTML файл
│   ├── favicon.ico                 # Иконка браузера
│   └── weather-icons/              # Иконки погоды
│
├── src/                            # Исходный код приложения
│   ├── main.jsx                    # Точка входа приложения
│   ├── App.jsx                     # Главный компонент
│   ├── index.css                   # Глобальные стили
│   │
│   ├── components/                 # Переиспользуемые компоненты
│   │   ├── Header.jsx              # Шапка приложения
│   │   ├── SearchBar.jsx           # Поиск по городам
│   │   ├── WeatherCard.jsx         # Карточка с погодой
│   │   ├── DailyForecast.jsx       # Дневной прогноз
│   │   ├── HourlyForecast.jsx      # Почасовой прогноз
│   │   ├── Loader.jsx              # Загрузчик
│   │   ├── ErrorBoundary.jsx       # Граница ошибок
│   │   └── Footer.jsx              # Подвал приложения
│   │
│   ├── pages/                      # Страницы приложения
│   │   ├── Home.jsx                # Главная страница
│   │   ├── About.jsx               # О приложении
│   │   └── Settings.jsx            # Настройки
│   │
│   ├── api/                        # Работа с API
│   │   ├── weatherAPI.js           # OpenWeatherMap API
│   │   ├── geolocationAPI.js       # Geolocation API
│   │   └── config.js               # Конфигурация API
│   │
│   ├── hooks/                      # Собственные React hooks
│   │   ├── useWeather.js           # Hook для погоды
│   │   ├── useForecast.js          # Hook для прогноза
│   │   └── useGeolocation.js       # Hook для геолокации
│   │
│   ├── utils/                      # Утилиты и вспомогательные функции
│   │   ├── helpers.js              # Общие функции
│   │   ├── validators.js           # Валидаторы
│   │   ├── formatters.js           # Форматирование данных
│   │   ├── constants.js            # Константы приложения
│   │   └── localStorage.js         # Работа с хранилищем браузера
│   │
│   ├── styles/                     # SCSS стили
│   │   ├── main.scss               # Основные стили
│   │   ├── variables.scss          # Переменные и цвета
│   │   ├── mixins.scss             # Миксины SCSS
│   │   ├── components.scss         # Стили компонентов
│   │   └── responsive.scss         # Адаптивные стили
│   │
│   ├── i18n/                       # Интернационализация
│   │   ├── i18n.js                 # Конфигурация i18n
│   │   ├── locales/
│   │   │   ├── en.json             # Английские переводы
│   │   │   ├── ru.json             # Русские переводы
│   │   │   ├── fr.json             # Французские переводы
│   │   │   └── de.json             # Немецкие переводы
│   │   └── dateLocales.js          # Локали для дат
│   │
│   └── context/                    # React Context для глобального состояния
│       ├── AppContext.jsx          # Контекст приложения
│       └── ThemeContext.jsx        # Контекст темы
│
├── .gitignore                      # Игнорируемые файлы Git
├── .env.example                    # Пример переменных окружения
├── .eslintrc.js                    # Конфигурация ESLint
├── eslint.config.js                # Альтернативная конфигурация
├── package.json                    # Зависимости и скрипты
├── package-lock.json               # Заблокированные версии пакетов
├── vite.config.js                  # Конфигурация Vite
├── index.html                      # HTML шаблон
├── LICENSE                         # Лицензия GPL-3.0
└── README.md                       # Этот файл
```

### Описание ключевых папок

#### `/src/components`
Переиспользуемые React компоненты, которые отвечают за отображение UI элементов:
- **SearchBar**: форма для ввода названия города
- **WeatherCard**: карточка с текущей погодой
- **DailyForecast**: прогноз на несколько дней
- **Loader**: спиннер загрузки

#### `/src/api`
Модули для взаимодействия с внешними API:
- **weatherAPI.js**: запросы к OpenWeatherMap API
- **config.js**: конфигурация API ключей и базовых URL

#### `/src/utils`
Вспомогательные функции для форматирования, валидации и работы с данными:
- **helpers.js**: общие утилиты
- **formatters.js**: форматирование температуры, давления и т.д.

#### `/src/styles`
Стили приложения на SCSS с поддержкой переменных и миксинов.

#### `/src/i18n`
Файлы переводов для поддержки множественных языков.

---

## 🚀 Установка

### Требования системы

- **Node.js**: версия 18.0.0 или выше
- **npm**: версия 9.0.0 или выше (или yarn, pnpm)
- **Git**: для клонирования репозитория
- **OpenWeatherMap API ключ**: зарегистрируйтесь на [openweathermap.org](https://openweathermap.org/api)

### Пошаговая установка

#### Шаг 1: Клонирование репозитория

```bash
git clone https://github.com/Kingnew2006/WebWeather.git
cd WebWeather
```

#### Шаг 2: Установка зависимостей

```bash
npm install
```

или с использованием yarn:

```bash
yarn install
```

#### Шаг 3: Конфигурация переменных окружения

Создайте файл `.env.local` в корневой папке проекта:

```bash
cp .env.example .env.local
```

Запишите ваш API ключ OpenWeatherMap:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.openweathermap.org/data/2.5
VITE_APP_NAME=WebWeather
```

#### Шаг 4: Запуск приложения

Для разработки:

```bash
npm run dev
```

Приложение откроется на [http://localhost:5173](http://localhost:5173)

#### Шаг 5: Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

---

## 💻 Использование

### Основное использование

1. **Открыть приложение** — перейдите на главную страницу
2. **Выбрать город** — введите название города в поисковое поле
3. **Просмотреть погоду** — см. текущую погоду и прогноз
4. **Проверить детали** — нажмите на карточку для получения дополнительной информации
5. **Поменять язык** — выберите язык в меню настроек

### Примеры кода

#### Использование компонента WeatherCard

```jsx
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherCard
      city="Moscow"
      temperature={5}
      description="Cloudy"
      icon="02d"
      humidity={75}
      windSpeed={3.5}
    />
  );
}
```

#### Использование weatherAPI для получения данных

```jsx
import { getWeatherByCity } from './api/weatherAPI';

async function fetchWeather(cityName) {
  try {
    const data = await getWeatherByCity(cityName);
    console.log('Текущая температура:', data.main.temp);
    console.log('Описание:', data.weather[0].description);
  } catch (error) {
    console.error('Ошибка при получении погоды:', error);
  }
}
```

#### Использование Hook для погоды

```jsx
import { useWeather } from './hooks/useWeather';

function SearchComponent() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {weather && <WeatherCard {...weather} />}
    </div>
  );
}
```

---

## 🌐 API интеграция

### OpenWeatherMap API

**Эндпоинты, используемые в приложении:**

#### 1. Текущая погода по названию города
```
GET /weather?q={city_name}&units=metric&lang={lang}&appid={API_KEY}
```

**Параметры:**
- `q` — название города (обязательно)
- `units` — система единиц (metric для Цельсия)
- `lang` — язык описания (en, ru, fr и т.д.)
- `appid` — ваш API ключ

**Пример ответа:**
```json
{
  "coord": {"lon": 37.6, "lat": 55.75},
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "main": {
    "temp": 5.2,
    "feels_like": 2.1,
    "temp_min": 3.8,
    "temp_max": 6.1,
    "pressure": 1013,
    "humidity": 72
  },
  "wind": {"speed": 4.2, "deg": 240}
}
```

#### 2. Прогноз на 5 дней
```
GET /forecast?q={city_name}&units=metric&lang={lang}&appid={API_KEY}
```

#### 3. Текущая погода по координатам
```
GET /weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}
```

### Получение API ключа

1. Перейдите на [openweathermap.org](https://openweathermap.org/api)
2. Нажмите на "Sign Up"
3. Заполните форму регистрации
4. Подтвердите email
5. Перейдите в API Keys и скопируйте ключ
6. Добавьте ключ в файл `.env.local`

---

## ⚙️ Конфигурация

### Переменные окружения (.env.local)

```env
# API Configuration
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.openweathermap.org/data/2.5

# App Configuration
VITE_APP_NAME=WebWeather
VITE_DEFAULT_CITY=Moscow
VITE_UNITS=metric
VITE_LANGUAGE=en

# Features
VITE_ENABLE_FORECAST=true
VITE_ENABLE_GEOLOCATION=true
VITE_CACHE_DURATION=3600000  # 1 час в миллисекундах
```

### Конфигурация Vite (vite.config.js)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
})
```

### Конфигурация ESLint

Проверка кода:
```bash
npm run lint
```

---

## 🔧 Разработка

### Локальный сервер разработки

```bash
npm run dev
```

Приложение запустится с hot reload (горячая перезагрузка) при изменении файлов.

### Структура коммитов

Используйте Conventional Commits:

```
feat: добавил поиск по городам
fix: исправил ошибку в формате даты
docs: обновил README
style: отформатировал код
refactor: переработал структуру компонента
test: добавил тесты для API
perf: оптимизировал кеширование
```

### Ветвления

```
main              # Продакшн-версия
  ├─ develop      # Развитие
  │   ├─ feature/weather-widget
  │   ├─ feature/i18n
  │   └─ fix/api-error
  └─ hotfix/bug-fix
```

### Лучшие практики кодирования

- 🎯 Используйте functional components с hooks
- 📦 Разделяйте код на небольшие переиспользуемые компоненты
- 💾 Не забывайте про обработку ошибок
- 🔒 Защищайте чувствительные данные в .env
- 📝 Документируйте сложные функции
- ♻️ Переиспользуйте код через хуки и утилиты
- 🧹 Регулярно запускайте линтер

---

## 📦 Развертывание

### Развертывание на Vercel (рекомендуется)

1. **Подключение репозитория**
   - Перейдите на [vercel.com](https://vercel.com)
   - Нажмите "Import Project"
   - Выберите GitHub репозиторий WebWeather

2. **Конфигурация**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables:
     ```
     VITE_OPENWEATHER_API_KEY=your_key
     ```

3. **Развертывание**
   - Нажмите "Deploy"
   - Vercel автоматически разверует приложение

### Развертывание на Netlify

```bash
# Установите Netlify CLI
npm install -g netlify-cli

# Авторизируйтесь
netlify login

# Разверните приложение
netlify deploy --prod --dir=dist
```

### Docker развертывание

**Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

Сборка и запуск:
```bash
docker build -t webweather .
docker run -p 3000:3000 webweather
```

---

## 📸 Скриншоты

### Главная страница
![WebWeather Main](./public/screenshots/main.png)

### Поиск по городам
![Search Feature](./public/screenshots/search.png)

### Прогноз погоды
![Forecast](./public/screenshots/forecast.png)

### Мобильный интерфейс
![Mobile](./public/screenshots/mobile.png)

---

## 🐛 Известные проблемы

- [ ] На некоторых очень медленных подключениях возможна задержка загрузки изображений иконок погоды
- [ ] Поддержка очень старых браузеров (IE11) не гарантируется
- [ ] При одновременных запросах к API может быть ограничение по лимиту (зависит от тарифа OpenWeatherMap)

---

## 🚀 Планы развития

- ✅ Текущая погода по городам
- ✅ Прогноз на несколько дней
- 🔄 Интеграция с Google Maps для выбора города
- 🔄 Сохранение избранных городов
- 🔄 Уведомления об экстремальной погоде
- 🔄 Автоматическое определение города по GPS
- 🔄 Интеграция с календарем для планирования
- 🔄 Экспорт данных в PDF
- 🔄 Поддержка темной/светлой темы

---

## 📝 Лицензия

Проект лицензирован под **[GNU General Public License v3.0](./LICENSE)** (GPL-3.0).

Это означает, что вы можете:
- ✅ Использовать проект в коммерческих целях
- ✅ Модифицировать исходный код
- ✅ Распространять проект
- ✅ Использовать для приватных целей

При условии:
- ⚠️ Указывать авторство
- ⚠️ Раскрывать исходный код при распространении
- ⚠️ Указывать все изменения
- ⚠️ Использовать ту же лицензию

Подробнее в файле [LICENSE](./LICENSE)

---

## 👤 Контакты

**Автор:** Maivand Rahmani (Майванд Рахмани)

| Канал | Информация |
|-------|----------|
| 📧 Email | maivand123r@gmail.com |
| 🐙 GitHub | [@Kingnew2006](https://github.com/Kingnew2006) |
| 🌐 Веб-сайт | [web-weather-tau.vercel.app](https://web-weather-tau.vercel.app) |
| 🔗 LinkedIn | (добавить при наличии) |
| 📱 Twitter | (добавить при наличии) |

---

## 💬 Поддержка

Если у вас есть вопросы или проблемы:

1. **Проверьте FAQ** — часто встречаются ответы на общие вопросы
2. **Откройте Issue** — опишите проблему в [разделе Issues](https://github.com/Kingnew2006/WebWeather/issues)
3. **Свяжитесь с автором** — отправьте email на maivand123r@gmail.com
4. **Создайте Pull Request** — предложите улучшение кода

---

## 🙏 Благодарности

Спасибо за использование WebWeather!

- 🌟 OpenWeatherMap за предоставление API
- 💚 React сообществу за отличные инструменты
- 📚 Всем контрибьютерам и пользователям

---

## 📊 Статистика проекта

```
┌─────────────────────────────────┐
│  Lines of Code        ~2,500+   │
│  Components           ~10+      │
│  npm Dependencies     ~15       │
│  API Endpoints        ~3        │
│  Supported Languages  ~5        │
└─────────────────────────────────┘
```

---

**Последнее обновление:** декабря 30, 2025  
**Версия документации:** 2.0.0

---

<div align="center">

⭐ Понравился проект? Поставьте звезду на GitHub!

[⬆ В начало](#-webweather--профессиональное-приложение-для-отслеживания-погоды)

</div>
