import React, { Component } from 'react'
import './ProductItem.css'

export class ProductItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       company: this.props.data.company || 'Cat Cake SA'
    }
  }

  render() {
    //destructuring
    const {name,price,image} = this.props.data;
    return (
      <div>
        <h4>Tarta de {name}</h4>
        <p>Precio:{price}€</p>
        <p>Company:{this.state.company}€</p>
        <img className="cake" src={image} alt="tarta" /><br />

        <button onClick={this.props.remove}>Borrar tarta</button>
      </div>
    )
  }
}

export default ProductItem
