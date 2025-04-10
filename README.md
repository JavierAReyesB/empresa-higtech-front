# Empresa HigTech - Web Corporativa

## 📌 Descripción

Este es el repositorio oficial de la página web corporativa de **Empresa HigTech**, diseñada con **Next.js, TypeScript, Tailwind CSS, Framer Motion y shadcn/ui**.

El sitio presenta información sobre la empresa, su producto principal **BlackGestionTime**, servicios personalizados y soluciones de IA educativa. La aplicación está optimizada para rendimiento, SEO y una experiencia de usuario fluida.

---

## 🚀 Tecnologías Utilizadas

- **Next.js** v13.x - Framework React para aplicaciones optimizadas
- **React** v18.x - Biblioteca principal para la UI
- **TypeScript** - Tipado estático y mejora en desarrollo
- **Tailwind CSS** - Utilidad para diseño responsivo y rápido
- **Framer Motion** - Animaciones fluidas en la UI
- **shadcn/ui** - Componentes estilizados reutilizables
- **Lucide Icons** - Librería de iconos moderna
- **Vercel** - Plataforma de despliegue

---

## 📂 Estructura del Proyecto

```bash
empresa-higtech-front/
├── public               # Archivos estáticos
│   ├── window.svg       # Ícono específico del sitio
├── src                  # Código fuente principal
│   ├── app              # Directorio de Next.js con Layouts y Pages
│   │   ├── favicon.ico  # Ícono de la aplicación
│   │   ├── globals.css  # Estilos globales
│   │   ├── layout.tsx   # Layout principal (Header, Footer)
│   │   ├── page.tsx     # Página principal (Home)
│   ├── assets           # Recursos estáticos adicionales
│   ├── components       # Componentes reutilizables
│   │   ├── about-section
│   │   ├── Footer
│   │   ├── Header
│   │   ├── hero-section
│   │   ├── services-section
│   │   ├── testimonials-section
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── index.ts
│   │   ├── ui
│   ├── lib              # Utilidades y funciones auxiliares
│   ├── pages            # Rutas de la aplicación
│   │   ├── aiteacher
│   │   ├── blackgestiontime
│   │   │   ├── ComoFunciona.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── features.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── index.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── productDemo.tsx
│   │   │   ├── testimonialsSection.tsx
│   │   ├── paginas-web-a-medida
│   │   ├── _app.tsx
│   ├── styles
│   ├── utils
├── .gitignore
├── eslint.config.mjs
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md

```

## 📄 Descripción de Páginas y Secciones

### 🏠 **Home** (`/`)

- **Hero Section:** Presentación de la empresa y su impacto
- **About Section:** Información sobre la empresa y su filosofía
- **Services Section:** Servicios personalizados de desarrollo web
- **Testimonials Section:** Opiniones de clientes

### 🏢 **BlackGestionTime** (`/blackgestiontime`)

- **Hero Section:** Introducción a la herramienta
- **Features:** Características principales de la plataforma
- **Como Funciona:** Explicación detallada del uso
- **Product Demo:** Vista previa interactiva
- **Testimonials:** Opiniones de usuarios
- **Pricing:** Planes y precios disponibles
- **FAQ:** Respuestas a preguntas comunes
- **Contact:** Formulario para consultas

### 🛠️ **Páginas Web a Medida** (`/paginas-web-a-medida`)

- Servicios de desarrollo web personalizados para negocios

### 🤖 **Proyecto AI Teacher** (`/aiteacher`)

- Plataforma educativa con Inteligencia Artificial

---

## 🔧 Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tuusuario/empresa-higtech.git
   cd empresa-higtech
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`

4. Para realizar un build optimizado para producción:

   ```bash
   npm run build
   ```

5. Desplegar en Vercel:
   ```bash
   vercel
   ```

---

## 📢 Contribución

Si deseas contribuir, por favor sigue estas pautas:

- Crea una rama nueva: `git checkout -b feature/nueva-feature`
- Haz commit de tus cambios: `git commit -m "Agrega nueva feature"`
- Haz push de la rama: `git push origin feature/nueva-feature`
- Crea un Pull Request

---

## 📞 Contacto

Para consultas o soporte:

- 📧 Email: [info@empresa-higtech.com](mailto:info@empresa-higtech.com)
- 🌎 Web: [https://empresa-higtech.com](https://empresa-higtech.com)
- 📍 Ubicación: Madrid, España

🔗 Colaboración en el Proyecto
Si eres colaborador en este repositorio, sigue estos pasos para trabajar en el proyecto:

Clonar el repositorio (solo la primera vez):

bash
Copiar
Editar
git clone https://github.com/TU_USUARIO/empresa-higtech-front.git
cd empresa-higtech-front
Actualizar el código antes de trabajar:

bash
Copiar
Editar
git pull origin main
Crear una nueva rama para cada cambio:

bash
Copiar
Editar
git checkout -b feature/nueva-funcionalidad
Añadir cambios y subirlos:

bash
Copiar
Editar
git add .
git commit -m "Descripción breve del cambio"
git push origin feature/nueva-funcionalidad
Crear un Pull Request (PR) en GitHub para revisión y fusión en main.

## Dependencias

{
"name": "empresa-higtech-front",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
},
"dependencies": {
"@radix-ui/react-avatar": "^1.1.3",
"@radix-ui/react-dialog": "^1.1.6",
"@radix-ui/react-dropdown-menu": "^2.1.6",
"@radix-ui/react-label": "^2.1.2",
"@radix-ui/react-separator": "^1.1.2",
"@radix-ui/react-slot": "^1.1.2",
"@radix-ui/react-switch": "^1.1.3",
"@radix-ui/react-tabs": "^1.1.3",
"class-variance-authority": "^0.7.1",
"clsx": "^2.1.1",
"framer-motion": "^12.4.7",
"lucide-react": "^0.476.0",
"next": "^15.3.0",
"next-themes": "^0.4.6",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"tailwind-merge": "^3.0.2",
"tailwindcss-animate": "^1.0.7"
},
"devDependencies": {
"@eslint/eslintrc": "^3",
"@types/node": "^20",
"@types/react": "^19",
"@types/react-dom": "^19",
"autoprefixer": "^10.4.20",
"eslint": "^9",
"eslint-config-next": "15.2.0",
"postcss": "^8.5.3",
"tailwindcss": "^3.3.3",
"typescript": "^5"
}
}
