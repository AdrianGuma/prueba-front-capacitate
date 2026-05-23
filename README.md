# Academic Dashboard - Angular

Aplicación desarrollada en Angular como prueba técnica Front-End para consumo y visualización de información desde un endpoint REST.

---

## Tecnologías utilizadas

- Angular 20
- TypeScript
- Bootstrap 5
- HTML5
- CSS3

---

## Características

- Consumo de API REST
- Manejo de estados loading/error
- Componentes reutilizables
- Arquitectura modular
- Diseño responsivo
- Filtros y búsqueda
- Vista previa de cursos
- Modal interactivo

---

## Estructura del proyecto

```bash
src/app
├── core
│   └── services
├── models
├── pages
│   └── dashboard
├── shared
│   └── components
│       ├── course-card
│       └── stats-card
```

---

## Instalación

```bash
npm install
```

---

## Ejecutar proyecto

```bash
ng serve
```

Abrir en navegador:

```bash
http://localhost:4200
```

---

## Funcionalidades implementadas

- Listado dinámico de cursos
- Filtrado por estado
- Filtrado por sector
- Búsqueda de cursos
- Indicadores estadísticos
- Modal de vista previa
- UI moderna y minimalista

---

## Decisiones técnicas

Se implementó una arquitectura modular utilizando componentes reutilizables para facilitar mantenimiento y escalabilidad.

El diseño fue replanteado con un enfoque más moderno y académico respecto a la plataforma original.

El documento de la prueba menciona validaciones relacionadas con producto, precio y categoría.
Sin embargo, el endpoint proporcionado devuelve información de cursos e inscripciones.
---

## Mejoras futuras

- Agregar inicio de sesión.
- Crear una página individual para cada curso.
- Guardar cursos favoritos.
- Mejorar animaciones e interacción visual.
- Optimizar experiencia móvil.
- Agregar pruebas unitarias.
