// cart managment
console.log('Cart Management...')

// empty cart
let cart = []

// functions for actions
const add_item = (obj) => {
    //console.log(obj)
    cart.push(obj)
    return
}

const remove_item = (id) => {
    //console.log(id)
    cart = cart.filter(item => item.id !== id)
    
    return
}

const display = () => {
    if(cart.length == 0){
        return console.log('Nothing in cart...')
    }
    //console.log(cart)
    for(i=0;i<cart.length;i++){
        console.log(cart[i])
    }
}

// actions list
const action_list = [
    '1.add item',
    '2.remove item',
    '3.display items',
    '4.exit'
    ]

// while true 
while(true){
    for(i=0;i<action_list.length;i++){
        console.log(action_list[i])
    }
    
    const ch = prompt('enter choice : ').trim()
    
    if(ch == '1'){
        const payload = {}
        const name = prompt('product name : ')
        const price = prompt('price : ')
        payload['name'] = name
        payload['price'] = Number(price)
        payload['id'] = cart.length+1
        
        // add item
        //console.log(payload)
        add_item(payload)
        
    }
    else if(ch == '2'){
        const id = prompt('remove an item by id : ')
        
        // remove item using id 
        remove_item(Number(id))
    }
    else if(ch == '3'){
        // display cart items
        display()
    }
    else if(ch == '4'){
        // exit
        console.log('thanks for coming...')
        break;
    }
}

/*
output result :

Cart Management...
1.add item
2.remove item
3.display items
4.exit
enter choice : 1
product name : apple
price : 100
1.add item
2.remove item
3.display items
4.exit
enter choice : 1
product name : mango
price : 150
1.add item
2.remove item
3.display items
4.exit
enter choice : 1
product name : bread
price : 50
1.add item
2.remove item
3.display items
4.exit
enter choice : 1
product name : milk
price : 20
1.add item
2.remove item
3.display items
4.exit
enter choice : 3
{ name: 'apple', price: 100, id: 1 }
{ name: 'mango', price: 150, id: 2 }
{ name: 'bread', price: 50, id: 3 }
{ name: 'milk', price: 20, id: 4 }
1.add item
2.remove item
3.display items
4.exit
enter choice : 2
remove an item by id : 2
1.add item
2.remove item
3.display items
4.exit
enter choice : 3
{ name: 'apple', price: 100, id: 1 }
{ name: 'bread', price: 50, id: 3 }
{ name: 'milk', price: 20, id: 4 }
1.add item
2.remove item
3.display items
4.exit
enter choice : 1
product name : cake
price : 450
1.add item
2.remove item
3.display items
4.exit
enter choice : 2
remove an item by id : 1
1.add item
2.remove item
3.display items
4.exit
enter choice : 3
{ name: 'bread', price: 50, id: 3 }
{ name: 'milk', price: 20, id: 4 }
{ name: 'cake', price: 450, id: 4 }
1.add item
2.remove item
3.display items
4.exit
enter choice : 4
thanks for coming...

*/
