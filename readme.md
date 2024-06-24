# API Aggregator Web Page

Este proyecto es una página web que reúne varias APIs en una sola página, proporcionando información sobre países y usuarios.

## Rutas Disponibles

### Countries

- **`GET /countries`**: Muestra todos los países con los siguientes detalles:
  - Nombre
  - Capital
  - Región
  - Bandera
  - Moneda
  - Lenguaje

- **`GET /countries/:name`**: Muestra los detalles de un país específico por su nombre, incluyendo:
  - Nombre
  - Capital
  - Región
  - Bandera
  - Moneda
  - Lenguaje

**Créditos**: La información de los países es proporcionada por [Country Info API](https://countryinfoapi.com/).

### User

- **`GET /user`**: Muestra un usuario aleatorio con los siguientes detalles:
  - Nombre y Apellido
  - Email
  - Teléfono
  - Género
  - Foto

- **`GET /user?results=x`**: Muestra `x` usuarios aleatorios. Por ejemplo, `GET /user?results=10` devuelve 10 usuarios aleatorios.

**Créditos**: La información de los usuarios es proporcionada por [Random User API](https://randomuser.me/).

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/JosephLondono/API
    ```


2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Inicia el servidor:
    ```sh
    npm run dev

    ```
El servidor se iniciará en `http://localhost:3000`.

## Uso
Una vez que el servidor está en funcionamiento, puedes acceder a las rutas mencionadas anteriormente desde tu navegador o utilizando herramientas como curl o Postman.

## Contribuciones
Las contribuciones son bienvenidas. Si tienes alguna idea o mejora, por favor abre un issue o un pull request.

## Licencia
Este proyecto está licenciado bajo la MIT License.
