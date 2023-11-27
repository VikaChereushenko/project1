/*let room = {
  height: 3,
  tv: 'samsung',
  big: true,
}
alert(room.big);

let user = {
  name: "John",
  age: 30
};
alert('age' in user)
console.log(user)

let findUser;

let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
}

for(let user in users) {
  if(users[user].name == "Bob") {
    findUser = users[user];
  }else if (users[user].name == "Anna"){
    delete users.user_3
  }
}
console.log(users)


let obj = {
  id: 5,
  token: 12343423,
}
for(key in obj){
  if(obj[key] == 5){
    const id = obj[key];
    console.log(id);
  }else{
    break;
  }
};
6.
7.

let shoppingList = [
  sugar = {
    name: 'Sugar',
    number: 2, 
    price: 5, 
    state:'purchased',
    total(){
      return this.number * this.price;
     }
  },
  bread = {
    name: 'Bread',
    number: 1, 
    price: 30, 
    state:'not purchased',
    total(){
      return this.number * this.price;
    }
  },
  beetroot = {
    name: 'Beetroot',
    number: 3, 
    price: 2, 
    state:'purchased',
    total(){
      return this.number * this.price;
    }
  },
  socks = {
    name: 'Socks',
    number: 4, 
    price: 15, 
    state:'not purchased',
    total(){
      return this.number * this.price;
    }
  },
];
let newShoppingList = shoppingList.slice();
let newProduct = {};

function showProducts(){
  let list = 'Expecting' + ' : \n';
  for(let item of shoppingList){
     if(item.state == 'not purchased'){
      list += item.name + '\n';
     };
  };
  list += 'Done'  + ' : \n';
  for(let item of shoppingList){
    if(item.state == 'purchased'){
     list += item.name  + '\n';
    };
 };
  alert(list);
};
function buyProduct(){
  let option = prompt('Choose item you want to buy: 1 - Bread, 2 - Socks, 3 - all');
  if(option == 1){
    for(let i = 0; i < shoppingList.length; i++){
      if(shoppingList[i].name == 'Bread'){
        shoppingList[i].state = 'purchased';
      }
    }
  }else if(option == 2){
    for(let i = 0; i < shoppingList.length; i++){
      if(shoppingList[i].name == 'Socks'){
        shoppingList[i].state = 'purchased';
      }
    }
  }else if(option == 3){
    for(let i = 0; i < shoppingList.length; i++){
      if(shoppingList[i].state == 'not purchased'){
        shoppingList[i].state = 'purchased';
     }
   }
  }else {
       buyProduct ()
      }
  };

function newList(){
  let option = prompt('Choose item you want to delete: 1 - Sugar,2 - Bread,3 - Beetroot,4 - Socks,5 - all');
  if(option == 1){
    for(let i = 0; i < newShoppingList.length; i++){
      if(shoppingList[i].name == 'Sugar'){
        newShoppingList.splice(0,1);
        console.log(newShoppingList);
      }
    }
  }else if(option == 2){
    for(let i = 0; i < newShoppingList.length; i++){
      if(shoppingList[i].name == 'Bread'){
        newShoppingList.splice(1,1);
        console.log(newShoppingList);
      }
    }
  }else if(option == 3){
    for(let i = 0; i < newShoppingList.length; i++){
      if(shoppingList[i].name == 'Beetroot'){
        newShoppingList.splice(2,1);
        console.log(newShoppingList);
      }
    }
  }else if(option == 4){
    for(let i = 0; i < newShoppingList.length; i++){
      if(shoppingList[i].name == 'Socks'){
        newShoppingList.splice(3,1);
        console.log(newShoppingList);
      }
    }
  }else if(option == 5){
    for(let i = 0; i < newShoppingList.length; i++){
      newShoppingList.splice(0,4);
        console.log(newShoppingList);
    }
  }else {
    newList();
  }
};
function showNewList(){
  let list = 'Expecting' + ' : \n';
  for(let item of newShoppingList){
     if(item.state == 'not purchased'){
      list += item.name + '\n';
     };
  };
  list += 'Done'  + ' : \n';
  for(let item of newShoppingList){
    if(item.state == 'purchased'){
     list += item.name  + '\n';
    };
 };
  alert(list);
};

function createNewProduct(){
  let name = prompt('Enter the name of the product you want to buy');
  let number = Number(prompt('Enter the number of products'));
  let price = Number(prompt('Enter the price of products'));
  newProduct = {
   name: name,
   number: number,
   price: price,
   state: 'purchased',
   total(){
    return this.number * this.price;
    }
  } 
  for (let i = 0; i < newShoppingList.length; i++){
    if (newShoppingList[i].name !== newProduct.name){
      newShoppingList.push(newProduct);
      break
    }
    if (newShoppingList[i].name == newProduct.name)
       newShoppingList[i].number += number;
      break
 }
}

showProducts();
buyProduct ();
showProducts();
console.log(shoppingList)
newList();
showNewList();
createNewProduct();
showNewList();
console.log(newShoppingList);

8.


let head = document.querySelector('header');
let header = {
  logo: {
    url: '/home',
    text: 'logo',
  },
  nav: {
    1: {
      url: '/home',
      text: 'Home',
    },
    2: {
      url: '/about',
      text: 'About',
    },
    3: {
      url: '/portfolio',
      text: 'Portfolio',
    },
    4: {
      url: '/contacts',
      text: 'Contacts',
    }
  },
  btn: ['LogIn', 'LogOut'],
};
head.insertAdjacentHTML('afterbegin','<a>');
head.insertAdjacentHTML('beforeend','<nav><ul></ul></nav>');
head.insertAdjacentHTML('beforeend','<btn></btn>');
let link = document.querySelector('a');
link.classList.add('logo');
link.innerHTML = header.logo.text;
link.setAttribute('href',header.logo.url);
let ul = document.querySelector('ul');
for (let e in header.nav){
  ul.insertAdjacentHTML('beforeend','<li><a class="links" href='+ header.nav[e].url+'>'+ header.nav[e].text +'</a></li>');
}
let li = document.querySelectorAll('.links');
let button = document.querySelector('btn');
button.textContent = header.btn[0];
head.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin: auto 20px;';
link.style.cssText = 'color: orange; font-size: 35px; text-decoration: none;font-weight: 700;';
ul.style.cssText = 'display: flex; justify-content: space-between; gap: 20px;';
for(let i = 0; i < li.length; i++){
  li[i].style.cssText = 'text-decoration: none; font-size: 15px; color: black;';
}
button.style.cssText = 'background-color: orange; padding: 10px 20px;font-size: 30px;border-color: black;border: 1px solid;border-radius: 4px;';*/


