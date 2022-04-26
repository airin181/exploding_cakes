import React, { Component } from 'react'
import ProductItem from './ProductItem'
import dataCakes from './cakes.json';

export class ProductList extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      cakes: dataCakes, //si se le llamase en el import como "cakes" aquí podemos poner solo cakes (y no cakes:dataCakes) para abreviar
      lastCake: {}
    }
  }

  addCake = (event) => {

    event.preventDefault(); //esto para el formulario para leer los inputs
    const name = event.target.cake.value
    const price = event.target.price.value
    const image = event.target.image.value

    //añadir al estado lastCake el último cake. Para acceder al estado: SET STATE
    const newCake = {price,name,image} //primero formo el objeto y luego se lo chuto al estado
    this.setState({lastCake: newCake}) //el state a cambiar + la cosa a cambiar

    //Añadir al estado cakes el nuevo Cake
    this.setState({cakes: [...this.state.cakes, newCake]}) //aquí se está usando un Spread Operator

  }

  paintCakes = () => {
    //leer estado de cakes y pintarlos. Para ello: recorrer cakes con map
    return this.state.cakes.map((cake, i)=><ProductItem data={cake} key = {i} remove={() => this.removeCake(i)}/>)
  }

  removeAllCakes = () => this.setState({cakes:[]})

  resetCakes = () => this.setState({cakes:dataCakes})

  

  removeCake = (i) => {
      //recibe la posicion de entrada y busca en el array de datos y lo borras
      //FILTER: filtra un array, elimina el que cumpla una condición (posición i) y devuelve un nuevo array (sin ese elemento con posición i)
    const remainingCakes = this.state.cakes.filter((cake, j)=> i!== j);
    this.setState({cakes:remainingCakes});
  }
  

  render() {
    /* let cakes = this.state.cakes; */
    let {name,price} = this.state.lastCake;
    return (
      <div>
        <h1>Añadir nuevo cake</h1>

        <form onSubmit={this.addCake}>
          <label htmlFor="cake">Nombre de tarta:</label> <br />
          <input type="text" name="cake"id="cake"/> <br />
          <label htmlFor="price">Precio:</label><br />
          <input type="text" name="price"id="price"/><br />
          <label htmlFor="image">URL imagen:</label><br />
          <input type="url" name="image"id="image"/><br />
          <input type="submit" value="Enviar"/>
        </form>

       


        {this.paintCakes()}
        <button onClick={this.addCake}>Haz click y añade tarta</button>
        <button onClick={this.removeAllCakes}>Elimina todas las tartas</button>
        <button onClick={this.resetCakes}>Recargar</button>
        {
        name&&price? <p>Novedad: {name} {price}€</p>
      :""}
        
      </div>
    )
  }
}

export default ProductList