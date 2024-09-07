let nama = "raimul";
const product ={
    productName: "Ball Pen",
    price: 20,
    rating: 4,
    fun :function tuntuni(){
        console.log ("rahman")
    } 
    
}
product.productName= "hasan"; // value change
console.log(product);

sum=0
for(let i = 1; i <= 10; i++){
    sum=sum+i;
}
console.log(sum) 

// let fullName= prompt('enter your full name');
// let username= "@"+ fullName + fullName.length
// console.log(username)


let list= ["raimul", "hasan", "Shaon", "tanjila", "Akter", "keya"] //Array list
console.log(list)

// FOR loops
for (let inx=0; inx<list.length; inx++){
    console.log(list[inx])
}

// Offer: total er 10% off.
let item = [200, 300, 400, 550];

 let i = 0;
for(let val of item){
    console.log(val);
    let offer = val/10;
    item[i]-=offer;
    console.log(item[i]);
    i++
}

function keya(x, y){
    sum= x+y
    sum= x*y
    console.log(sum)
}

keya(2,4);

// arrow function & forEach loops arry
key= [1,2,3,4,5,6];

key.forEach(element => {
    console.log(element**2)
});


// dom

let newEle = document.createElement("h1");
newEle.innerHTML= "hi i am Raimul";

document.querySelector("body").prepend(newEle);

// event handling

// let btn = document.querySelector(".btn");

 // Assign the function reference, not the result of calling it

let onclick=function nam() {
    document.querySelector(".demo").innerHTML = "Raimul Hasan Shaon";
}
console.log(onclick);


const dm = document.querySelector(".dm");
let curMood = "dark";



dm.addEventListener("click", ()=>{
        if (curMood === "dark"){
            curMood= "light";
            body.style.backgroundcolor ="white";
            body.classlist.add("dark")
            body.classlist.remove("white")
        
             }
            else{
            curMood = "dark";
            document.querySelector("body").style.backgroundcolor ="black";
            body.classlist.add("dark")
            body.classlist.remove("white")

                }
                console.log (curMood)
        } )

// class toyota{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("Stop");
//     }
// }
// let TaTa = new.toyota();

    //this keyword .call() .apply() .bind()
let thisCall ={
    productName: "Ball Pen",
    price: 20,
    rating: 4,
    fun :function tuntuni(){
        console.log (`this is rating ${this.rating}`)
        console.log (this.productName, this.price) //double o nite pari caile
    } 
    
}
      thisCall.fun(); //this key

 //one more this
 let printplayer =function(obj){
    obj.printplayer= function(){
        console.log(this.myname);
    }
 };
 
 let raimul = {
    myname : 'shaon',
    age: 33
 };
 let tanjila = {
    myname : 'keya',
    age: 28
 };

printplayer(raimul);
printplayer(tanjila);

raimul.printplayer();
tanjila.printplayer();

//call() 
let house =function(razon, mobassara){
        console.log(this.myname);
 };
 
 let razon = {
    myname : 'nazmul',
    age: 33
 };
 let mobassara = {
    myname : 'pitu',
    age: 28
 };

house.apply(razon, mobassara); //2ta likhte hoile apply() use krte hobe
house.call(mobassara, razon);

