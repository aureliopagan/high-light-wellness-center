# High Light Healing and Wellness Center 🌿

Website oficial del Centro de Sanación Holística en Aguadilla, Puerto Rico.

## 🚀 Stack Tecnológico

- **React** 18.2
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos utility-first
- **React Hooks** - State management

## 📁 Estructura del Proyecto

```
high-light-wellness-react/
├── public/
│   └── images/              # Imágenes del sitio
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── QuickServices.jsx
│   │   ├── About.jsx
│   │   ├── Heritage.jsx    # Sección de Herencia Cultural
│   │   ├── Areas.jsx
│   │   ├── Services.jsx
│   │   ├── Location.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useLanguage.jsx  # Hook de idiomas ES/EN
│   ├── i18n/
│   │   └── translations.js  # Traducciones completas
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Instalación Local

### Prerequisitos

- Node.js 16+ y npm instalados

### Pasos

1. **Clona o descarga el proyecto**

```bash
cd high-light-wellness-react
```

2. **Instala dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```