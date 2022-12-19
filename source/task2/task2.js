/* There are two envelopes with sides (a,b) and (c,d). It is required to determine whether one envelope can be enclosed in another. The program must handle the input of floating point numbers.
 Input parameters: envelope1 and envelope2 objects
 Output: Envelope (bigger one) number if nesting is possible, 0 if nesting is not possible. */

class Envelope {
    name;
    side1;
    side2;

    constructor(name, side1, side2){
        this.name = name;
        this.side1 = side1;
        this.side2 = side2;
    }
}

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

function clearField(){
    length 
}

const drawChessBoard = (e) => {
    e.preventDefault()

    let envelopeASide1 = parseInt(document.querySelector("#EnvASide1").value)
    let envelopeASide2 = parseInt(document.querySelector("#EnvASide2").value)
    let envelopeBSide1 = parseInt(document.querySelector("#EnvBSide1").value)
    let envelopeBSide2 = parseInt(document.querySelector("#EnvBSide2").value)
 
    const resultDiv = document.querySelector(".task-result")
    const result = document.querySelector(".result")
    let form = document.querySelector('#forms'); 
    
    //Error handling
     if (Number.isNaN(envelopeASide1) == true || Number.isNaN(envelopeASide2) == true || Number.isNaN(envelopeBSide1) == true || Number.isNaN(envelopeBSide2) == true || envelopeASide1 <= 0 || envelopeASide2 <= 0|| envelopeBSide1 <= 0|| envelopeBSide2 <= 0) {
       drawError("Please insert a height and a width. Remember these should be positive numbers.")
       form.reset()
       return
    } 
        
    //
    let a = envelopeASide1;
    let b = envelopeASide2;
    let c = envelopeBSide1;
    let d = envelopeBSide2;

    let equal = a == c || b == d || a == d || b == c;
    let biggerAC = a > c;
    let biggerAD = a > d;
    let biggerBC = b > c;
    let biggerBD = b > d;
    let answer = undefined
    
        if (equal == true) {
            answer = "0: You can't nest these envelopes"
        } else if (biggerAC == true && biggerBD == true || biggerAD == true && biggerBC == true ) {
            answer = "1: You can nest these envelopes"
        }  else if (biggerAC == false && biggerBD == false || biggerAD == false && biggerBC == false ) {
            answer = "1: You can nest these envelopes"
        } else {
            answer = "0: You can't nest these envelopes"
        }
           /* return string;  */

        result.innerText = answer 
        resultDiv.classList.remove("invisible")
        resultDiv.classList.add("visible")

        form.reset()
}


button.addEventListener("click", drawChessBoard)

