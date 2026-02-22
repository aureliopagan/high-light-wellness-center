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

Los archivos optimizados se generarán en la carpeta `dist/`

## 🌐 Deployment

### Opción 1: Netlify (Recomendado - Más Fácil)

1. **Conecta tu repositorio a Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Click en "Add new site" → "Import an existing project"
   - Conecta tu repositorio de GitHub

2. **Configuración de Build:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy:**
   - Netlify automáticamente hará deploy cada vez que hagas push a tu repo
   - Tu sitio estará en `https://tu-proyecto.netlify.app`

### Opción 2: Vercel

1. **Conecta tu repositorio:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio

2. **Configuración:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy automático en cada push**

### Opción 3: GitHub Pages

1. **Instala gh-pages:**

```bash
npm install --save-dev gh-pages
```

2. **Agrega en package.json:**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://tu-usuario.github.io/tu-repo"
}
```

3. **Actualiza vite.config.js:**

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/tu-repo/', // Nombre de tu repositorio
})
```

4. **Deploy:**

```bash
npm run deploy
```

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: '#8B3FBF',    // Purple
  secondary: '#CDFD02',  // Greenish-yellow
  accent: '#6B2D91',     // Dark purple
}
```

### Agregar Imágenes

1. **Coloca las imágenes en** `public/images/`

2. **Reemplaza los placeholders en los componentes:**

```jsx
// ANTES (placeholder):
<div className="bg-gray-200 h-96 flex items-center justify-center">
  <p className="text-gray-500">[Imagen del centro]</p>
</div>

// DESPUÉS (con imagen):
<img 
  src="/images/tu-imagen.jpg" 
  alt="Descripción"
  className="w-full h-96 object-cover rounded-lg"
/>
```

### Fotos de la Sección Herencia

Para las fotos del PDF en la sección Heritage:

1. Extrae las fotos del PDF `02182026145421.pdf`
2. Guárdalas como:
   - `heritage-hero.jpg` (Página 5/6 - grupo grande)
   - `heritage-medicine.jpg` (Página 3 - ceremonia con plantas)
   - `heritage-community.jpg` (Página 7/9 - procesión)
   - `heritage-wisdom.jpg` (Página 2/4 - detalle ceremonial)
3. Colócalas en `public/images/`
4. Edita `src/components/Heritage.jsx` y reemplaza los placeholders

### Traducciones

Edita `src/i18n/translations.js` para modificar o agregar textos en español e inglés.

## 🌍 Características

- ✅ **Bilingüe** - Español / English
- ✅ **Responsive** - Mobile, tablet, desktop
- ✅ **SEO-friendly** - Meta tags y estructura semántica
- ✅ **Fast** - Optimizado con Vite
- ✅ **Modern** - React hooks y componentes funcionales
- ✅ **Accesible** - ARIA labels y navegación por teclado

## 📧 Formulario de Contacto

El formulario actualmente muestra un alert. Para conectarlo a un backend:

1. **Opción 1: Netlify Forms** (Sin backend)

En `src/components/Contact.jsx`:

```jsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
```

2. **Opción 2: EmailJS**

```bash
npm install @emailjs/browser
```

Configura en Contact.jsx siguiendo la [documentación de EmailJS](https://www.emailjs.com/docs/)

3. **Opción 3: Tu propio backend**

Conecta a tu API en el handleSubmit del componente Contact

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build producción
npm run preview  # Preview del build
```

## 📱 Contacto

High Light Healing and Wellness Center  
Maleza Alta, Carretera 110, Km. 32.0  
Aguadilla, Puerto Rico

---

**Desarrollado con ❤️ para el Centro de Estudios Indígenas de las Américas, Inc.**
