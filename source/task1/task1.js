/* Draw a chessboard with the given dimensions of height and width, according to the principle:
* * * * * *
   * * * * * *
* * * * * *
   * * * * * *
 Input parameters: length, width, character to display.
 Output: line with checkerboard representation */


 let button = document.querySelector("#button")
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
 
 function clearField(field){
     field.value = ""

 }
 
 const drawChessBoard = (e) => {
     e.preventDefault()
 
     let length = parseInt(document.querySelector("#length").value)
     let width = parseInt(document.querySelector("#width").value)
     let char = document.querySelector("#character").value   
     const resultDiv = document.querySelector(".task-result")
     const result = document.querySelector(".result") 
     console.log(char);
     let form = document.querySelector('#forms');
     
     //Error handling
     if (Number.isNaN(length) == true || Number.isNaN(width) == true || length <= 0 || width <= 0) {
        drawError("Please insert a height and a width. Remember these should be positive numbers.")
        form.reset()
        return
     } 
 
     if (char == "") {
         char = "⬛"
     } 
         
     //
         let arr = new Array(length)
         let string = ""
     
         for(i = 0; i < length; i+=1) {
             arr[i] = new Array(width)    
         }
     
         for(i = 0; i < length; i+=1) {
             for(j = 0; j < width; j+=1) {
                 if (i % 2 == 0){
                     if (j % 2 == 0) {
                         arr[i][j] = char; 
                     } else {
                         arr[i][j] = '⬜'
                     }
                 } else {
                     if (j % 2 == 0) {
                         arr[i][j] = '⬜'; 
                     } else {
                         arr[i][j] = char
                     }
                 }    
             }  
             string += arr[i].toString().replace(/,/g,"") + "\n" 
         }
            /* return string;  */
 
         result.innerText = string
         resultDiv.classList.remove("invisible")
         resultDiv.classList.add("visible")
         
         form.reset()
 }

 
 
 button.addEventListener("click", drawChessBoard)





