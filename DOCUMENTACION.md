# 📋 Documentación Completa — Consultorios Condas

> Sitio web institucional para **Consultorios Condas**, centro odontológico ubicado en Mar del Plata, Buenos Aires, Argentina. Sitio de una sola página (SPA) con diseño premium y animaciones avanzadas.

---

## 📐 Arquitectura General

El proyecto sigue una arquitectura **component-based SPA** (Single Page Application), donde toda la navegación es interna vía anchor links (`#servicios`, `#nosotros`, etc.) con scroll suave.

```
index.html                    ← Punto de entrada HTML
├── src/
│   ├── main.tsx              ← Bootstrap de React
│   ├── App.tsx               ← Compositor principal de secciones
│   ├── index.css             ← Design system y tokens CSS
│   ├── assets/               ← Imágenes estáticas (logos)
│   ├── constants/            ← Datos de contenido
│   └── components/
│       ├── layout/           ← Estructura global (Navbar, Footer, Layout)
│       ├── sections/         ← Secciones de la página
│       └── ui/               ← Componentes reutilizables de interfaz
├── public/                   ← Archivos estáticos (favicon)
├── package.json              ← Dependencias y scripts
├── vite.config.ts            ← Configuración de Vite
├── tsconfig.json             ← Configuración de TypeScript
└── eslint.config.js          ← Reglas de linting
```

### Flujo de datos

```
constants/ (datos)  →  sections/ (presentación)  →  App.tsx (composición)  →  Layout (estructura)
```

Los datos (servicios, equipo, testimonios, navegación) están **separados de la presentación**. Los componentes de UI son **genéricos y reutilizables**. Las secciones **consumen datos y UI** para construir cada bloque visual.

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Versión | Propósito |
|-----------|------------|---------|-----------|
| **Framework** | React | 19.2.0 | UI declarativa con componentes |
| **Lenguaje** | TypeScript | ~5.9.3 | Tipado estático |
| **Bundler** | Vite | 7.3.1 | Build tool ultra-rápido |
| **Estilos** | Tailwind CSS | 4.2.0 | Utility-first CSS framework |
| **Animaciones** | Framer Motion | 12.34.3 | Animaciones declarativas |
| **Iconos** | Lucide React | 0.575.0 | Iconos SVG como componentes |
| **Formularios** | React Hook Form | 7.71.2 | Manejo de formularios |
| **Tipografía** | Google Fonts | — | Inter (sans) + Playfair Display (serif) |

### Scripts disponibles

| Comando | Función |
|---------|---------|
| `npm run dev` | Servidor de desarrollo (Vite) en `localhost:5173` |
| `npm run build` | Compilación de TypeScript + build de producción |
| `npm run lint` | Linting con ESLint |
| `npm run preview` | Preview del build de producción |

---

## 🎨 Design System

Definido en `src/index.css` usando `@theme` de Tailwind CSS 4.

### Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#0B1D3A` | Azul oscuro — textos, navbar, hero, footer |
| `--color-primary-light` | `#132B54` | Variante clara del primario |
| `--color-primary-dark` | `#071225` | Variante oscura del primario |
| `--color-accent` | `#5EC4C6` | Teal — CTAs, enlaces activos, acentos |
| `--color-accent-light` | `#7DD4D6` | Variante clara del accent |
| `--color-accent-dark` | `#4AA8AA` | Variante oscura del accent |
| `--color-gold` | `#C8A96E` | Dorado — alternancia con accent, detalles premium |
| `--color-gold-light` | `#D4BC8A` | Variante clara del gold |
| `--color-gold-dark` | `#B08F52` | Variante oscura del gold |
| `--color-surface` | `#F8FAFB` | Fondo claro para secciones alternadas |
| `--color-surface-dark` | `#EDF1F3` | Bordes y separadores |

### Tipografía

| Familia | Variable CSS | Uso |
|---------|-------------|-----|
| **Inter** | `--font-sans` | Texto general, UI, navegación |
| **Playfair Display** | `--font-serif` | Títulos de secciones, headings decorativos |

### Utilidades CSS personalizadas

| Clase | Efecto |
|-------|--------|
| `.glass` | Efecto glassmorphism (blur 12px, bg semitransparente, borde sutil) |
| `.gradient-text` | Texto con gradiente accent → gold |

### Scrollbar personalizado

El scrollbar usa los colores del brand: thumb en `accent`, track en `surface`.

---

## 🧩 Modularización de Componentes

### Capa 1: Layout (`components/layout/`)

Componentes que definen la **estructura global** de la página.

#### Layout.tsx
- **Propósito**: Wrapper principal que envuelve toda la app
- **Estructura**: `Navbar` + `<main>` (children) + `Footer`
- **Patrón**: Flexbox columna con `min-h-screen`

#### Navbar.tsx
- **Propósito**: Barra de navegación fija
- **Features**:
  - **Scroll detection**: Cambia estilos al scrollear (transparente → glassmorphism)
  - **Glassmorphism**: `backdrop-blur-xl` + fondo teal translúcido (`rgba(240,249,249,0.78)`)
  - **Mobile responsive**: Menú hamburguesa con animación de apertura
  - **Logo**: Importado desde `assets/`, altura 3.5rem
  - **CTA**: Botón "Contactar" con ícono de teléfono, enlace a WhatsApp
  - **Animación**: Entrada desde arriba con framer-motion

#### Footer.tsx
- **Propósito**: Pie de página con información de contacto y links
- **Estructura**: Grid 4 columnas (Brand, Navegación, Contacto, Redes Sociales)
- **Features**: Logo invertido, links de navegación, teléfono/email/dirección, Instagram/Facebook, botón scroll-to-top
- **Fondo**: `#0B1D3A` (primary)

---

### Capa 2: UI (`components/ui/`)

Componentes **reutilizables y genéricos**, sin lógica de negocio.

#### Button.tsx
- **Variantes**: `primary` (teal con hover oscuro), `outline` (borde blanco, fondo transparente)
- **Tamaños**: `sm`, `md`, `lg`
- **Estilos**: Aplicados via inline styles para garantizar consistencia (workaround de Tailwind)
- **Animación**: Hover scale con framer-motion

#### Input.tsx
- **Tipos**: `input`, `textarea`, `select`
- **Features**: Label flotante, estados de error con mensajes, integración con React Hook Form

#### Card.tsx
- **Propósito**: Contenedor genérico con borde, sombra y hover elevation
- **Variantes**: Con o sin padding

#### Badge.tsx
- **Propósito**: Etiqueta pequeña (pill) para categorías/especialidades
- **Estilo**: Fondo accent translúcido, texto accent

#### SectionHeading.tsx
- **Propósito**: Título de sección estandarizado
- **Props**: `label` (subtítulo superior en accent), `title` (h2 en serif), `subtitle`
- **Animación**: Fade-in on scroll con framer-motion
- **Variante**: `light` para fondos oscuros

#### SectionDivider.tsx
- **Propósito**: Onda SVG entre secciones
- **Props**: `fillColor` (color de la onda), `flip` (invertir)
- **Implementación**: SVG con path curvo Bézier, `preserveAspectRatio="none"` para stretch

#### AnimatedSection.tsx
- **Propósito**: Wrapper para animar cualquier contenido al entrar en viewport
- **Props**: `direction` (up/left/right), `delay`
- **Implementación**: framer-motion `whileInView` con `viewport: { once: true }`

#### WhatsAppFloat.tsx
- **Propósito**: Botón flotante de WhatsApp (bottom-right fijo)
- **Features**: Icono SVG oficial, color verde WhatsApp, animación pulse ring, hover scale
- **Link**: Conecta directo al WhatsApp del consultorio

---

### Capa 3: Secciones (`components/sections/`)

Cada sección implementa un bloque visual completo de la landing page.

#### Hero.tsx
- **Propósito**: Sección principal (above-the-fold) con CTA
- **Features**:
  - **Parallax**: Background a 30% velocidad, contenido a 15%, usando `useScroll` + `useTransform`
  - **Contadores animados**: Stats (20+ Años, 5000+ Pacientes, 5 Profesionales) cuentan desde 0 con `IntersectionObserver`
  - **Fade on scroll**: Contenido se desvanece al scrollear via `useTransform` de opacidad
  - **Fondo**: Gradiente primario con orbes decorativos con blur
  - **Grid pattern**: Líneas sutiles de fondo (opacity 0.03)
  - **Scroll indicator**: Flecha animada que invita a scrollear
- **Fondo**: `bg-gradient-to-br from-primary via-primary-light to-primary`

#### Services.tsx
- **Propósito**: Grilla de 6 servicios odontológicos
- **Layout**: Grid 3 columnas (responsive: 1 → 2 → 3)
- **Features**:
  - Cards con borde superior alternando accent/gold
  - Iconos con fondo tintado alternando
  - Stagger animation en la grilla
  - Hover: elevación + sombra
- **Fondo**: Gradiente `white → #F0F9F9 → #F8FAFB`

#### About.tsx
- **Propósito**: Información institucional del consultorio
- **Estructura**: Párrafo central + 4 highlights en grid + 4 stats en grid
- **Features**:
  - Highlights con ícono CheckCircle y borde izquierdo accent/gold
  - Stats con ícono, valor grande, y label
  - Cards con hover elevation
- **Fondo**: Gradiente `#F8FAFB → #EEF6F6 → #F4F0E8`

#### Team.tsx
- **Propósito**: Presentación de los 5 profesionales
- **Layout**: Fila 1 (3 cards) + Fila 2 centrada (2 cards)
- **Features**:
  - Cards con fondo tintado sutil (gradientes alternados)
  - Borde superior coloreado
  - Inicial del apellido como elemento decorativo
  - Badge de especialidad coloreado
  - Stagger animation
- **Fondo**: Gradiente `white → #F0F4F8 → #F8FAFB`

#### Testimonials.tsx
- **Propósito**: Carrusel de testimonios de pacientes
- **Features**:
  - Auto-avance cada 5 segundos
  - Navegación con flechas (prev/next) y dots
  - Transición animada con framer-motion `AnimatePresence`
  - Ícono Quote decorativo con gradiente
  - Estrellas de rating amarillas
  - Badge de tratamiento
- **Fondo**: `#F8FAFB`

#### Appointment.tsx
- **Propósito**: Formulario de solicitud de turno
- **Features**:
  - React Hook Form con validación
  - Campos: nombre, email, teléfono, servicio (select), fecha, mensaje
  - Panel lateral con horarios e info de contacto
  - Estado de éxito con animación
  - Loading state en el botón
- **Fondo**: Gradiente `white → #F2F8F8 → #F0F4F8`

#### MapSection.tsx
- **Propósito**: Mapa de ubicación embebido
- **Features**:
  - Google Maps Embed API (Mar del Plata)
  - Filtro CSS grayscale + contrast para aspecto refinado
  - Título "Nuestra Ubicación" con descripción
  - Animación de entrada

---

### Capa 4: Constantes (`constants/`)

Datos **puros** separados de la presentación. Cada archivo exporta interfaces TypeScript y arrays/objetos tipados.

#### navigation.ts
- `NAV_LINKS`: Array de `{ label, href }` para la navegación
- `CONTACT_INFO`: Objeto con `phone`, `whatsapp`, `email`, `address`, `instagram`, `facebook`

#### services.ts
- `Service` interface: `id`, `title`, `description`, `icon`
- `SERVICES`: Array de 6 servicios (Ortodoncia, Endodoncia, Periodoncia, Estética, Cirugías/Implantes, Prótesis)

#### team.ts
- `TeamMember` interface: `id`, `name`, `role`, `specialty`, `bio`, `image`
- `TEAM_MEMBERS`: Array de 5 profesionales

#### testimonials.ts
- Estructura de testimonios con `id`, `name`, `text`, `rating`, `treatment`
- Array de testimonios de pacientes

---

## 🎬 Animaciones y Efectos

| Efecto | Componente | Tecnología | Descripción |
|--------|-----------|------------|-------------|
| **Parallax** | Hero | framer-motion `useScroll`/`useTransform` | Fondo a 30% vel, contenido a 15% |
| **Fade on scroll** | Hero | framer-motion `useTransform` | Contenido se desvanece al scrollear |
| **Contadores animados** | Hero | `IntersectionObserver` + `setInterval` | Números cuentan desde 0 al entrar en viewport |
| **Stagger grid** | Services, Team | framer-motion `staggerChildren` | Cards aparecen en secuencia |
| **Scroll-triggered fade-in** | Todas las secciones | framer-motion `whileInView` | Elementos aparecen al scrollear |
| **Glassmorphism** | Navbar | CSS `backdrop-blur-xl` | Efecto vidrio esmerilado al scrollear |
| **Carousel** | Testimonials | framer-motion `AnimatePresence` | Transición slide entre testimonios |
| **Pulse ring** | WhatsAppFloat | CSS `@keyframes` | Anillo pulsante en botón WhatsApp |
| **Hover effects** | Cards, botones | CSS `transition` + transform | Elevación y sombra en hover |
| **Wave dividers** | SectionDivider | SVG path | Ondas suaves entre secciones |

---

## 📱 Responsive Design

El sitio es **mobile-first** con breakpoints de Tailwind CSS:

| Breakpoint | Ancho | Cambios principales |
|------------|-------|---------------------|
| Default | < 640px | 1 columna, menú hamburguesa, texto más pequeño |
| `sm` | ≥ 640px | 2 columnas en grids |
| `md` | ≥ 768px | Grid expandido, stats en 4 columnas |
| `lg` | ≥ 1024px | 3 columnas en Services, layout completo |

- **Max-width**: `1024px` en todos los contenedores
- **Tipografía fluid**: `clamp()` para títulos (`clamp(1.875rem, 4vw, 3rem)`)
- **Navbar**: Hamburguesa en mobile, links horizontales en desktop

---

## 🔒 SEO y Performance

### SEO
- **Meta description** descriptiva en español
- **Title tag**: "Consultorios Condas — Centro Odontológico"
- **HTML semántico**: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`
- **Lang**: `es` en `<html>`
- **Anchor links**: Cada sección tiene `id` para deep-linking

### Performance
- **Font preconnect**: `fonts.googleapis.com` y `fonts.gstatic.com`
- **Font display**: `swap` para evitar FOIT
- **Lazy loading**: Mapa con `loading="lazy"`
- **Tree shaking**: Imports específicos de Lucide (no el paquete completo)
- **Viewport animations**: `{ once: true }` — animaciones no se repiten
- **Bundle size**: ~127 KB gzipped (JS) + ~5.5 KB (CSS)

### Seguridad
- **External links**: `rel="noopener noreferrer"` en todos los enlaces externos
- **Iframe**: `referrerPolicy="no-referrer-when-downgrade"` en el mapa

---

## 📂 Assets

| Archivo | Ubicación | Uso |
|---------|-----------|-----|
| `LOGO-CONDAS_Mesa-de-trabajo-1-copia-3-300x101.png` | `src/assets/` | Logo principal (navbar, footer) |
| `LOGO-CONDAS_favicon.png` | `src/assets/` | Fuente del favicon |
| `favicon.png` | `public/` | Favicon activo del sitio |

---

## 🏗️ Configuración del Proyecto

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### TypeScript
- **Target**: ES2022+ (navegadores modernos)
- **Strict mode**: Habilitado
- **Module resolution**: Bundler

### Tailwind CSS 4
- Configurado via plugin de Vite (`@tailwindcss/vite`)
- Tokens de diseño definidos con `@theme` en `index.css`
- No usa archivo `tailwind.config.js` (Tailwind 4 syntax)

---

## 🗺️ Mapa de Navegación

```
┌─────────────────────────────────────┐
│  Navbar (fijo, glassmorphism)       │
├─────────────────────────────────────┤
│  #inicio    → Hero                  │
│  ────────── → Wave divider          │
│  #servicios → Services (6 cards)    │
│  ────────── → Wave divider (teal)   │
│  #nosotros  → About                 │
│  ────────── → Wave divider (gold)   │
│  #equipo    → Team (5 cards)        │
│  ────────── → Wave divider (teal)   │
│  #testimonios → Testimonials        │
│  ────────── → Wave divider (gold)   │
│  #turnos    → Appointment (form)    │
│             → MapSection            │
├─────────────────────────────────────┤
│  Footer (4 columnas)                │
├─────────────────────────────────────┤
│  WhatsAppFloat (botón fijo)         │
└─────────────────────────────────────┘
```

---

## 🎯 Decisiones de Diseño

1. **Inline styles sobre Tailwind para sizing**: Se detectó que algunas clases de Tailwind (padding, font-size) no se aplicaban consistentemente. Se resolvió usando inline styles para propiedades críticas de sizing.

2. **Separación datos/presentación**: Todos los textos y datos están en `constants/`. Cambiar un servicio o agregar un profesional no requiere tocar componentes.

3. **Alternancia accent/gold**: Cards, bordes y badges alternan entre teal (`#5EC4C6`) y dorado (`#C8A96E`) para romper monotonía sin perder cohesión de marca.

4. **Gradientes de fondo por sección**: Cada sección tiene su propio gradiente sutil, creando transiciones de color naturales a lo largo de la página.

5. **SPA sin router**: Al ser landing page, no se necesita React Router. La navegación es via `scrollTo` y anchor links.

---

*Documentación generada el 23 de febrero de 2026.*
