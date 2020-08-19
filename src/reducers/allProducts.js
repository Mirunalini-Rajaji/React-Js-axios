const allProductsReducer = function productsReducer(state=null,action){
  var products = [
        {
            id:1,
            name:'nokia',
            price:'2500',
            quantity:'5',
            category:'mobile'
        },
        {
            id:2,
            name:'jbl',
            price:'700',
            quantity:'3',
            category:'earphone'
        },
        {
            id:3,
            name:'jeans',
            price:'500',
            quantity:'10',
            category:'dress'
        }
    ]
    switch(action.type){
        case "NEW_PRODUCT":
            let length=state.length
            let newProduct = [{id:length+1,name:action.payload.name,
                                price:action.payload.price,
                                quantity:action.payload.quantity,
                                category:action.payload.category},...state]
            console.log(newProduct)
            return newProduct;
            
            default:break;
    }
    return products
}

export default allProductsReducer