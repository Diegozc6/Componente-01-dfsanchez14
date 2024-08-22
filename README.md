# Componente-01-dfsanchez14_espe
# My Stencil Table

## Descripción

`my-stencil-table` es un componente web reutilizable construido con Stencil. Este componente permite renderizar datos desde una API REST en una tabla. Incluye soporte para manejo de errores y un estado de carga mientras se obtienen los datos.

## Instalación

Puedes instalar el componente a través de npm:





`npm install my-stencil-table.`

## Uso
1. Importar el Componente
Para utilizar el componente en tu proyecto, primero debes importarlo:
import 'my-stencil-table';

2. Usar el Componente en tu HTML
Agrega el componente en tu HTML, especificando la URL de la API REST desde la cual obtendrás los datos:
`<my-table api-url="https://api.example.com/products"></my-table>`

## Ejemplo Completo

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Stencil Table Example</title>
  <script type="module">
    import 'my-stencil-table';
  </script>
</head>

<body>
  <my-table api-url="https://api.example.com/products"></my-table>
</body>
</html>
```
## Propiedades
El componente acepta la siguiente propiedad:

apiUrl: (Requerido) La URL de la API REST desde la cual se obtendrán los datos. El formato esperado es un array de objetos JSON, donde cada objeto representa una fila en la tabla.
Manejo de Errores
El componente maneja automáticamente errores durante la solicitud a la API. Si ocurre un error, como una respuesta 404 o 500, el componente mostrará un mensaje de error en lugar de la tabla.

## Estilos
El componente tiene estilos básicos para asegurar que la tabla sea legible y atractiva visualmente. Puedes sobrescribir estos estilos utilizando CSS personalizado si lo necesitas.

##Ejemplo de Estilos Personalizados

```
custom-table {
  width: 100%;
  border: 2px solid #ddd;
}

custom-table th, custom-table td {
  padding: 12px;
}

custom-table thead {
  background-color: #f8f8f8;
}

```
