import React from 'react';
import addProductBroadCast from '../actions/addProductBroadCast';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class AddProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:0,
            quantity:0,
            category:''
        }
    }
    getName=(event)=>{
        this.setState({name:event.target.value})
    }
    getPrice=(event)=>{
        this.setState({price:event.target.value})
    }
    getQuantity=(event)=>{
        this.setState({quantity:event.target.value})
    }
    getCategory=(event)=>{
        this.setState({category:event.target.value})
    }
    add=()=>{
        let products={
            name:this.state.name,
            price:this.state.price,
            quantity:this.state.quantity,
            category:this.state.category
        }
        console.log(products)
        this.props.setProducts(products)
    }
    render() { 
        return ( 
            <div>
                <center>
                <form>
                    <fieldset>
                        <h2>Add Product</h2>
                        <input type="text" placeholder="product name" onChange={this.getName}></input><br></br>
                        <input type="number" placeholder="price" onChange={this.getPrice}></input><br></br>
                        <input type="number" placeholder="quantity" onChange={this.getQuantity}></input><br></br>
                        <input type="text" placeholder="category" onChange={this.getCategory}></input><br></br>
                        <button onClick={this.add}>Add</button>
                    </fieldset>
                </form> 
                </center>
            </div>
         );
    }
}
function actionDispatch(dispatch){
    console.log("dispatch")
    return bindActionCreators({
        setProducts:addProductBroadCast
    },dispatch)
}
 
export default connect(null,actionDispatch) (AddProduct);