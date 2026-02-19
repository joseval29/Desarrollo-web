# Taller Wiki  
## Aplicación Web con Spring Boot y Thymeleaf

---

## Descripción del Proyecto

Este proyecto corresponde al **Taller: Wiki**, una aplicación web *server-side* desarrollada con **Spring Boot** y **Thymeleaf**, cuyo objetivo es simular un portal de documentación técnica (Wiki).

La aplicación implementa:

- Arquitectura **MVC (Modelo – Vista – Controlador)**
- Renderizado dinámico con **Thymeleaf**
- Uso de **layouts y fragmentos reutilizables**
- Navegación funcional entre secciones
- Formulario de contacto con **validaciones en JavaScript**
- Despliegue en **contenedor Docker**

El enfoque principal del proyecto está en la **estructura, arquitectura y buenas prácticas web**.

---

# Arquitectura (MVC)

## Controladores (`controller`)
Manejan las solicitudes HTTP y envían datos a las vistas Thymeleaf.

## Modelo (`model`)
Representa las páginas o secciones de la Wiki.

## Vistas (`templates`)
Renderizan dinámicamente la información utilizando Thymeleaf.

## Fragmentos Reutilizables (`templates/fragments`)
Incluyen **header**, **menú** y **footer**, compartidos entre páginas.

## Recursos Estáticos (`static`)
Contienen los estilos CSS y las validaciones JavaScript.

---

# Funcionalidades

- Página de inicio de la Wiki
- Navegación entre secciones
- Renderizado dinámico con Thymeleaf
- Uso de fragmentos reutilizables
- Formulario de contacto con validaciones:

  - Nombre obligatorio (mínimo 3 caracteres)
  - Correo electrónico con formato válido
  - Teléfono numérico (7–15 dígitos)
  - Asunto obligatorio
  - Mensaje entre 20 y 400 caracteres
  - Contador de caracteres
  - Retroalimentación visual

- Aplicación desplegada en Docker y accesible vía URL

---

# Despliegue con Docker

## Requisito del Taller

La aplicación **no debe ejecutarse desde el IDE**.  
Debe ejecutarse exclusivamente dentro de un **contenedor Docker**.

---

## Requisitos Previos

- Docker instalado
- Maven o Maven Wrapper (`mvnw`) incluido en el proyecto

Verificar instalación de Docker:

```bash
docker --version
