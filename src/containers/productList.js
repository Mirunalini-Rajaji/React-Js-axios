import React from 'react';
// import { bindActionCreators } from 'redux';
import {connect } from 'react-redux'

class ProductList extends React.Component {
    state = {  }
    renderAll=()=>{
        return this.props.allProducts.map(p=>{
            return (
                // <li key={p.id}>
                //     {p.name}
                // </li>
                <tr
                 key={p.id}> 
                <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.category}</td>
                  <td><button onClick={this.editById}>Edit</button></td>
                  <td><button onClick={this.deleteById}>Delete</button></td>
                  </tr>
            )
        })
    }
    deleteById=(id)=>{
        console.log(id)
    }
    search=(e)=>{
        let searchV =e.target.value
        console.log(searchV)
        if(searchV===''){
            this.renderAll();
        }
        this.setState({searchValue:searchV})
        console.log(searchV)
        let searchF = this.props.allProducts.filter(f=>{
            return f.name.toLowerCase().match(searchV.toLowerCase().trim())
        })
        console.log(searchF)
        this.setState({allProducts:searchF})
        
    }
    render() { 
        
        return ( 
          
            <div>
                 {/* <input type="text" placeholder="Search" onChange={this.search}></input> */}
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                        <tbody>{this.renderAll()}
                        </tbody>
                        
                </table>

            </div>
         );
    }
}
function dispatchToProps(store){
   console.log("store created" )
       return {
        allProducts:store.allProducts
       }
   
}
 
export default connect(dispatchToProps) (ProductList);