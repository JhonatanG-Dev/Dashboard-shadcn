# Shadcn Dashboard UI

Dashboard moderno construido con Next.js y shadcn/ui.

## Librerías Principales

### Framework y Core
- **Next.js** (v16.1.1) - Framework de React para aplicaciones web con renderizado del lado del servidor, enrutamiento y optimizaciones automáticas.
- **React** (v19.2.3) - Librería de JavaScript para construir interfaces de usuario.
- **TypeScript** - Tipado estático para JavaScript.

### UI Components (Radix UI)
Componentes accesibles y sin estilos base:
- **@radix-ui/react-avatar** - Componente de avatar de usuario.
- **@radix-ui/react-collapsible** - Componente colapsable/expandible.
- **@radix-ui/react-dialog** - Modales y diálogos.
- **@radix-ui/react-dropdown-menu** - Menús desplegables.
- **@radix-ui/react-separator** - Separadores visuales.
- **@radix-ui/react-slot** - Utilidad para componer componentes.
- **@radix-ui/react-tooltip** - Tooltips informativos.

### Estilos y Temas
- **Tailwind CSS** (v4) - Framework de CSS utility-first para estilos rápidos.
- **next-themes** - Gestión de temas (modo claro/oscuro).
- **class-variance-authority** - Utilidad para variantes de componentes.
- **clsx** - Utilidad para construir nombres de clases condicionalmente.
- **tailwind-merge** - Fusiona clases de Tailwind sin conflictos.

### Componentes y Utilidades
- **shadcn/ui** - Sistema de componentes construido sobre Radix UI y Tailwind CSS (configurado en `components.json`).
- **lucide-react** - Biblioteca de iconos SVG para React.
- **recharts** - Librería de gráficos y visualización de datos para React.

## Uso

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción
```bash
npm run build
```

### Producción
```bash
npm start
```

## Estructura del Proyecto

- `src/app/` - Páginas y rutas de Next.js App Router
- `src/components/` - Componentes reutilizables
- `src/components/ui/` - Componentes UI de shadcn/ui
- `src/hooks/` - Hooks personalizados de React
- `src/lib/` - Utilidades y funciones auxiliares

## Componentes UI Disponibles

El proyecto utiliza componentes de shadcn/ui con el estilo "new-york". Los componentes disponibles incluyen:
- Avatar, Badge, Breadcrumb, Button, Card
- Chart, Collapsible, Dropdown Menu, Input
- Separator, Sheet, Sidebar, Skeleton, Table, Tooltip
