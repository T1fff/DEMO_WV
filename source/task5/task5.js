/* There are 2 ways to count lucky tickets:
1. Simple - if a six-digit number is printed on the ticket, and the sum of the first three digits is equal to the sum of the last three, then this ticket is considered lucky.

2. Complicated - if the sum of the even digits of the ticket is equal to the sum of the odd digits of the ticket, then the ticket is considered lucky.

Determine programmatically which variant of counting lucky tickets will give them more in a given interval.
    Input parameters: Context object with min and max fields (strings)
    Output: an object with information about the winning method and the number of lucky tickets for each calculation method. */


class Context {
    min
    max

    constructor(min, max){
        this.min = min
        this.max = max
    }
}

class Result {
    winningMethod
    totalSimple
    totalComplicated

    constructor(winningMethod, totalSimple, totalComplicated){
        this.winningMethod = winningMethod
        this.totalSimple = totalSimple
        this.totalComplicated = totalComplicated
    }
}

const context1 = new Context(100000, 1010000)
const context2 = new Context(0 , 999999)


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


const findLuckyTickets = (e) => {
    e.preventDefault()

    let min = parseInt(document.querySelector("#min").value)
    let max = parseInt(document.querySelector("#max").value)
    
    const resultDiv = document.querySelector(".task-result")
    const result = document.querySelector(".result")
    let form = document.querySelector('#forms'); 
    
    //Error handling
     if (Number.isNaN(min) == true || min <= 0 || Number.isNaN(max) == true || max <= 0 ) {
       drawError("Please insert a positive number")
       form.reset()
       return
    } 
    //

let totalSimple = 0, totalComplicated = 0, winningMethod = ""
  for (i = min; i <= max; i+=1) {
    let sumSimple1 = 0, sumSimple2 = 0, sumComplicated1 = 0, sumComplicated2 = 0
      if (i > 0) {
        j = i.toString()
            /* Finding simple lucky tickets */
      for (let k = 0; k < 3; k++) {
        sumSimple1 += parseInt(j.charAt(k))        
      }

      for (let k = 3; k < 6; k++) {
        sumSimple2 += parseInt(j.charAt(k)) 
      } 

      simple = j.length == 6 && sumSimple1 == sumSimple2
        if (simple == true) {
          totalSimple += 1
        }

       /* Finding complicated lucky tickets */
        for (let k = 0; k < j.length; k+=1) {
          numEven = parseInt(j.charAt(k))% 2 == 0
        if(numEven == true){
          sumComplicated1 += parseInt(j.charAt(k))
        } else {
          sumComplicated2 += parseInt(j.charAt(k))
          } 
        }
        complicated = sumComplicated1 == sumComplicated2

        if (complicated == true) {
                totalComplicated += 1
        }
      }
  }
    
        if (totalSimple == totalComplicated) {
            winningMethod = "there are the same number of simple tickets as complicated tickets"
        } else {
            winningMethod = (totalSimple < totalComplicated) ? winningMethod = "Winning Method: Complicated,": winningMethod = "Winning Method: Simple,"
        }
    
    let finalResult = winningMethod + " Total Simple: " +totalSimple+ ", Total Complicated: " + totalComplicated
       
    /* return result  */

    result.innerText = finalResult 
    resultDiv.classList.remove("invisible")
    resultDiv.classList.add("visible")

        form.reset()
}


button.addEventListener("click", findLuckyTickets)




   
