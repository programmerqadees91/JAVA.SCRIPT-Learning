console.log("JAVASCRIPT INITILIZATION")
let boxes = document.querySelector(".container").children

function getrandomcolor(){
   val1 = Math.ceil(0 + Math.random() *255)
   val2 = Math.ceil(0 + Math.random() *255)
   val3 = Math.ceil(0 + Math.random() *255)
   
    return `rgb(${val1} , ${val2} , ${val3})`

}
Array.from(boxes).forEach(e=>{

    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()

})

