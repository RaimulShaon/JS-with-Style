let dom = document.getElementById("adDom");
 
console.log("this is dom")
function CreatDom (){
    dom.innerText = "New Text"; //  (=) sign diye set korte hoy
}
CreatDom()
console.log(dom)


let creatEl =document.createElement("h1");
creatEl.innerHTML = "This is a lists";
let btn = document.querySelector("p");
creatEl.style.color = "red"
btn.after(creatEl)

//Event In JS.

let btn1 = document.getElementById("AdEvent");

btn1.onclick = ()=>{
    btn.innerText= "Amr Nam Raimu Hasan Shaon";
}

// add eventlistener.. er madhome 1 btn e ekadhik kaj kora jay. 

btn1.addEventListener("dblclick", ()=>{
let creatE2 =document.createElement("h2");
creatE2.innerText = "This is Event Listener";
creatEl.before(creatE2)
})
// event deligation..
let EvtDli = document.querySelector("ul");

EvtDli.addEventListener("click", (ob)=>{
    console.log(ob.target);
    ob.target.style.background= 'yellow'
})