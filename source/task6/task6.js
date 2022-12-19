/* Output a comma-separated series of length n consisting of natural numbers whose square is not less than the given m.
Input parameters: length and value of the minimum square
Output: a string with a series of numbers */

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


const seriesOfSquaredNumbers = (e) => {
    e.preventDefault()

    let n = parseInt(document.querySelector("#min").value)
    let m = parseInt(document.querySelector("#max").value)
    
    const resultDiv = document.querySelector(".task-result")
    const result = document.querySelector(".result")
    let form = document.querySelector('#forms'); 
    
    //Error handling
     if (Number.isNaN(n) == true || n <= 0 || Number.isNaN(m) == true || m <= 0 ) {
       drawError("Please insert positive numbers")
       form.reset()
       return
    } 
    //
  
  let arr = []
      for (i = 0; i <= 1000000; i+=1){
      number = Math.pow(i,2)
          if (number > m && arr.length < n){
              arr.push(i) 
          }  
      }
       
    /* return result  */

    result.innerText = arr 
    resultDiv.classList.remove("invisible")
    resultDiv.classList.add("visible")

    form.reset()
}


button.addEventListener("click", seriesOfSquaredNumbers)

