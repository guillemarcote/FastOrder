# FastOrder Mobile App

## 🍽️ Descripción del Proyecto

**FastOrder** es una aplicación móvil diseñada para optimizar la gestión de pedidos en restaurantes. Está orientada principalmente a **Mozos** (toma de pedidos, seguimiento de estado) y **Administradores/Dueños** (gestión de stock e insumos).

La aplicación está construida con **Angular** e **Ionic** utilizando la arquitectura de **Standalone Components** para ofrecer una experiencia móvil nativa con tecnologías web.

---

## 🚀 Instalación y Requisitos Previos

Para clonar y levantar el proyecto **FastOrder**, necesitarás las siguientes herramientas instaladas en tu sistema:

### Requisitos Esenciales

1.  **Node.js y npm (Node Package Manager):**
    * Asegúrate de tener una versión reciente de Node.js (preferiblemente LTS).
    * Verifica la instalación:
        ```bash
        node -v
        npm -v
        ```

2.  **Angular CLI (Command Line Interface):**
    * Instalación global:
        ```bash
        npm install -g @angular/cli
        ```

3.  **Ionic CLI:**
    * Instalación global:
        ```bash
        npm install -g @ionic/cli
        ```

### Pasos para Clonar y Levantar el Proyecto

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/guillemarcote/FastOrder.git
    cd FastOrder    
    cd frontend

    ```

2.  **Instalar Dependencias:**
    * Desde la carpeta raíz del proyecto frontend (`/frontend`):
        ```bash
        npm install
        ```

3.  **Ejecutar la Aplicación (Modo Desarrollo):**
    * La aplicación estará disponible en `http://localhost:8100/` (o el puerto que muestre la consola).
        ```bash
        ionic serve
        ```

---

## 🔑 Cuentas de Acceso Simuladas

Para probar las diferentes funcionalidades y flujos de usuario, utiliza estas credenciales de acceso simuladas:

| Rol | Usuario | Contraseña | Destino Principal |
| :--- | :--- | :--- | :--- |
| **Mozo** | `mozo` | `1234` | Selección de Mesa (`/table-selection`) |
| **Admin** | `admin` | `1234` | Menú de Administración (`/admin-dashboard`) |
| **Cocina** | N/A | N/A | Dashboard de Cocina (`/kitchen-dashboard`) |

---

## 🗺️ Estructura del Proyecto

El proyecto sigue una arquitectura con **Componentes Standalone** (sin `NgModules` en los componentes de página):

| Carpeta | Descripción |
| :--- | :--- |
| `src/app/models` | Contiene todas las interfaces TypeScript (modelos de datos): `Mesa`, `Producto`, `Insumo`, etc. |
| `src/app/pages` | Contiene los componentes principales de la aplicación: `login`, `pedido`, `stock-admin`, `kitchen-dashboard`. |
| `src/app/services` | (Pendiente) Aquí se alojarán los servicios que manejan la lógica de negocio y la **conexión con la BD/API**. |
| `src/app/app.routes.ts` | Define el mapa de navegación y el *Lazy Loading* de los componentes Standalone. |

---

## 💻 Siguientes Pasos (Pendientes)

La próxima fase crucial es la conexión real de datos:

1.  **Conexión a Backend (BD/API):** Reemplazar los datos simulados en todos los componentes (`cargarMesasSimuladas()`, `cargarMenuSimulado()`, etc.) con llamadas **HTTP reales** a una API.
2.  **Servicios en Tiempo Real:** Implementar WebSockets (o similar) para la actualización instantánea del Dashboard de Cocina.