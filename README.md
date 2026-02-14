# ⚔️ RPG Character Creator - React + TypeScript

Este es un proyecto interactivo desarrollado para practicar la gestión de **estados complejos** y la **lógica de validación** en React, utilizando TypeScript para asegurar la integridad de los datos.

## 🚀 Funcionalidades

- **Gestión de Atributos**: Sistema para aumentar o disminuir Fuerza, Agilidad y Magia.
- **Sistema de Presupuesto**: El usuario cuenta con un máximo de 10 puntos para repartir entre sus estadísticas.
- **Validaciones en Tiempo Real**:
  - No se permite asignar más de 10 puntos totales.
  - Los atributos no pueden tener valores negativos.
- **Estado Derivado**: Cálculo automático de puntos restantes basado en el estado actual del héroe.

## 🧠 Conceptos Técnicos Aplicados

- **Componentes Funcionales y Props**: Comunicación entre el padre (`CharacterCard`) y el hijo (`PointsCard`).
- **Hooks (`useState`)**: Manejo de objetos como estado único.
- **TypeScript**:
  - Interfaces para definir estructuras de datos (`HeroStats`).
  - Uso de `as keyof` para actualizaciones dinámicas de propiedades de objetos.
- **Lógica Separada**: Funciones de cálculo matemático aisladas en su propio archivo para facilitar pruebas.

## 📂 Estructura del Proyecto

- `src/components/`: Componentes visuales de la interfaz.
- `src/logic/`: Funciones puras para el cálculo de puntos.
- `src/types/`: Definiciones de interfaces y tipos de TypeScript.

## 💻 Cómo ejecutarlo

1. Clona el repositorio.
2. Instala las dependencias: `npm install`.
3. Inicia el proyecto: `npm run dev`.

---

Desarrollado como parte de mi formación en Ingeniería en Computación. 🇻🇪
