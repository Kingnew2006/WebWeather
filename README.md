# 🌦️ WebWeather


## URL: [web-weather-tau.vercel.app](https://web-weather-tau.vercel.app)
### Project URL: [weather-app](https://roadmap.sh/projects/weather-app)
A simple weather app built with React and Vite.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite)

---

## ✨ Features

- 🔍 City search
- 🌡️ Current weather display
- 🌤️ Weather details (humidity, wind, pressure)
- 🌍 Multi-language support (English, Russian)
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Axios** - HTTP requests
- **React Router** - Navigation
- **i18next** - Internationalization

---

## 📁 Project Structure

```
src/
├── API/           # API handlers
├── components/    # React components (SearchForm, GlossCard)
├── data/          # Static data
├── functions/     # Utility functions
├── i18n/          # Translations (en.json, ru.json)
├── layouts/       # Layout components
├── pages/         # Page components (Header, SearchPage, Weather)
├── style/         # SCSS styles
├── App.jsx        # Main component
└── main.jsx      # Entry point
```

---

## 🚀 Getting Started

### Install

```bash
npm install
```

### Configure

Create `.env.local`:

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

Get your free API key at [openweathermap.org](https://openweathermap.org/api)

### Run

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📜 License

GPL-3.0

---

## 👤 Author

Maivand Rahmani

- GitHub: [@Kingnew2006](https://github.com/Kingnew2006)
- Email: maivand123r@gmail.com
