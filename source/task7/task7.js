/* Output all Fibonacci numbers that satisfy the constraint passed to the function: they are in the specified range or have the specified length.
 Input parameters: Context object with min and max fields, or length field
 Output: array of numbers */

 let button = document.getElementById("button")
 const erroDiv = document.querySelector(".task-error")
 const error = document.querySelector(".error") 
 
 function drawError(message){
     const divError = document.createElement("div");
     divError.className = `task-error d-flex flex-column align-items-center`;
     divError.appendChild(document.createTextNode(message));
         const container = document.querySelector(".container");
         const parent = document.querySelector(".parent");
         container.insertBefore(divError, parent);
 
         setTimeout(() =>document.querySelector(".task-error").remove(), 2000 )
}

const fibonacciSeries = (e) => {
    e.preventDefault()

    let min = document.querySelector("#min").value
    let max = parseInt(document.querySelector("#max").value)


    const resultDiv = document.querySelector(".task-result")
    const result = document.querySelector(".result")
    let form = document.querySelector('#forms'); 

    if (Number.isNaN(max) == true || max <= 0 ) {
        drawError("Please insert positive numbers")
        form.reset()
        return
     } 
        
      if (Number.isNaN(parseInt(min)) == true && min == "") {
            min = 0
     } else if (Number.isNaN(parseInt(min)) == true){
        drawError("Please insert positive numbers")
        form.reset()
        return
     }  

    min = parseInt(min)
        let firstN = 0;
        let secondN = 1;
        let nextN = 0;
        let arr = []

        console.log(min);
        console.log(max);
    
        for (let i = 2; i<= 10000; i++) {
            nextN = secondN + firstN;
            firstN = secondN;
            secondN = nextN;
            if (nextN > min && nextN < max) {
                arr.push(nextN)        
            }
        } 
    
        result.innerText = arr 
        resultDiv.classList.remove("invisible")
        resultDiv.classList.add("visible")

        form.reset()

}

button.addEventListener("click", fibonacciSeries)