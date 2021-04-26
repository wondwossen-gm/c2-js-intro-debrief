let myNumber = 262;
if(typeof myNumber !== 'number'){
    console.log('myNumber is not a number type.');
}
else if(myNumber %3 === 0){
    console.log('Gen');
}
else if(myNumber % 5 === 0){
    console.log('Buzz');
}
else if(myNumber % 3 === 0 && myNumber % 5 === 0){
    console.log('Gen Buzz');
}
else{
    console.log(myNumber);
}
//*****************************/
/*let myArray = ['Shoes', 'Jean', 'Hat','Socks' ];
//let myItem;
for(let i = 0; i < myArray.length; i++){
    switch (myArray[i]){
    case 'Shoes':
        console.log('Price is $ 2,00');
        break;
    }
    
}*/
 let item1 = 'Shoes'; let item2 = 'Jeans'; 
 let item3 = 'Hat'; let item4 = 'Socks';

 let myItem  = 'Shoes';
 switch (myItem){
    case 'Shoes':
        console.log('The price of Shoes is $50.00.');
        break;
    case 'Jeans':
        console.log('The price of Jeans is $25.00.');
        break;
    case 'Hat':
        console.log('The price of Hat is $12.00.');
        break;
    case 'Socks':
        console.log('The price of Socks is $2.00.');
        break;
    default:
        console.log('Invalid item')
 }
 /*************************************** */
 //console.log((Math.floor(Math.random()) * (100 - 50)));

 console.log(Math.floor(Math.random() * (100-50)  +50));
 
 