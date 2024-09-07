//      **Callback**

console.log('ONE')
console.log('two')
setTimeout(() => {
    console.log('Final & FINISH') // async
}, 4000);
console.log('tree')
console.log('four')

// callback hell**
function getdata(dataid, getnextData){
    setTimeout(() => {
        console.log("data", dataid);
        if (getnextData) {
            getnextData();
        }
    }, 2000);
}

getdata(1, ()=>{
    console.log("geting callback hell data 2...")
    getdata(2, ()=>{
        console.log("geting callback hell data 3...")
})
    getdata(3, ()=>{
        console.log("get callback hell data 3...")
})
});

// //promise 
// var getpromise = () =>{
//     return new Promise((resolve, reject) =>{
//         console.log("Promise goes on");
//         resolve('sucsess');
//         // reject('network Error')
//     })
// };
// let Promise= getpromise();
// Promise.then((res)=> {
// console.log("Got result" );
// });


// function prom(){
//     return new promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data");
//            resolve('success')
//         }, 2000);
//     });
//     }

//     console.log("fetching data...");
//     prom().then((res)=>{
//         console.log("data-2 ", res);
//     });



//      **PROMISE Chain CALLBACK HELL**

    function datanum(dataid){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("data", dataid);
             resolve('Promise SUCCESS');
            }, 2000);
        }
        )};


            console.log("geting promise data one..");
            datanum(1)
            .then((res)=>{
                console.log ("get promise data two..");
                return datanum(2);
            })
            .then((res)=>{
                console.log ("get promise data three..");
                return datanum(3);
            })
            .then((res)=>{
                console.log(res);
            })

//      **async-await function**

            async function getalldar() {
            await datanum(1);
            console.log("geting  data one..");
            await datanum(2);
            console.log("geting  data TWO..");
            
        };
        
        //    **IIFE FUNCTION**
            (async function () {
            await datanum(1);
            console.log("geting synconise data one..");
            await datanum(2);
            console.log("geting synconise data TWO..");
            
        })();