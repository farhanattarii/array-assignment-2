//                           Array Assignment
/* 
Part 1: Basic Arrays - Product Inventory
Challenge:
 You are taskd with Creating a Inventory System.Implement functions and logic to manage object manupulation effectively.

 1.Define a type alias named product to represent a product with the following properties:
 . name(string): The name of the product.
 . price(number): The price of producr.
 . inventory(Object): An object containing invemtory details including:
 . stock(number):The number of products is available.
 . colorOptions(string[]):An array listing available color
*/

type product = {
    name: string,
    price: number,
    intventory: {
        stock :number
        colorOptions :string[]
    }
    };

/* 2. Create an Array named products containing at least three product objects. Each product object shuold include a name, price and inventory details*/

let products: product[]=[
    {
       name: "bridal dress",
       price: 40000,
       intventory:{
        stock : 50,
        colorOptions:["white", "red"]
       }
    },
    {
        name: "shoes",
        price: 5000,
        intventory:{
            stock: 100,
            colorOptions: ["Black", "Brown"]
        }
    },
    {
        name: "boys cap",
        price: 1000,
        intventory:{
            stock: 200,
            colorOptions: ["white", "Black"]
        }
    }
];

/*3.Impelment a function name changeColor that takes a product object and a new color as input.This function shuld update the color property
of the product and adjust the price based on the new color (implement your own logic, e.g increase by 10 % for red decrease 5% for blue).
*/

//Accoring to this question we add color property in type product

type products = {
    name: string,
    price: number,
    color: string,
    intventory: {
        stock :number
        colorOptions :string[]
    }
    };
    // we place object in an Array

    let product: products[]=[
        {
           name: "bridal dress",
           price: 40000,
           color: "blue",
           intventory:{
            stock : 50,
            colorOptions:["white", "red", "blue"]
           }
        },
        {
            name: "shoes",
            price: 5000,
            color: "white",
            intventory:{
                stock: 100,
                colorOptions: ["Black", "Brown","white"]
            }
        },
        {
            name: "Boys Cap",
            price: 1000,
            color: "grey",
            intventory:{
                stock: 200,
                colorOptions: ["white", "Black","grey"]
            }
        }
    ];

    function changeColor(product:products,newColor: string){
        product.color = newColor
        switch (newColor) {
            case "red" :
                product.price *=1.10;
                break;
            case "blue" :
                product.price *=0.95;
                break;
        
            default:
                // no price change for other colors
                break;
        }
    }

    changeColor(product[2],'red')
console.log(product[2])


// Now i explain what is [0] index, as we all know this index start from 0 and all these objects in an Array named products and his 3 object in 
//Array like   products:string[] = ["Louis Vuitton","Gucci","M.k"],  So as you can see How it is so when we call products[0] it's mean we are  
// calling "Louis Vuitton" , similarly for [1] index means we are calling "Gucci" object so in this part we learn how to add object in an Array
// and when implemnting a function in an Object than how we can execute it.



/* 4. Display each product's name,price,stock and available colors.Iterate through the products array and print each product's details.

or iteration in an Array we use of loop*/

for(let product of products){
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.intventory.stock}`);
    console.log(`Available Colors: ${product.intventory.colorOptions}`);
}

console.log('---')  // it,s a seprator
