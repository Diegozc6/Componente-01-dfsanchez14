import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',  // Archivo CSS donde definiremos los estilos
  shadow: true,
})
export class MyTable {
  @Prop() apiUrl: string; // Propiedad que recibe la URL de la API
  @State() data: any[] = []; // Estado para almacenar los datos de la API
  @State() error: string = ''; // Estado para manejar los errores

// Llamamos a fetchData cuando el componente esté por cargarse
  componentWillLoad() {
    this.fetchData();
  }
 // Método para obtener datos de la API
  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      this.error = error.message;
    }
  }
 // Renderización del componente
  render() {
    if (this.error) {
      return <div class="error">Error: {this.error}</div>;
    }

    if (this.data.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <table class="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen referencia</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img src="data:image/png;base64,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" alt={item.name} /></td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
