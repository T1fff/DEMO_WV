/* Check if a number or part of it is a palindrome. For example, the number 1234437 is not a palindrome, but its part 3443 is a palindrome. Numbers less than 10 are not considered a palindrome.
 Input parameters: number
 Output: the palindrome extracted from the number, or 0 if the extraction failed.  */

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
 
 const findPalindrome = (e) => {
     e.preventDefault()
 
     let number = parseInt(document.querySelector("#number").value)
     
     const resultDiv = document.querySelector(".task-result")
     const result = document.querySelector(".result")
     let form = document.querySelector('#forms'); 
     
     //Error handling
      if (Number.isNaN(number) == true || number <= 0) {
        drawError("Please insert a positive number")
        form.reset()
        return
     } 
         
     //
     let str = number.toString().split('');
     let largestPalindrome = 0;
 
   function isPalindrome(number) {
     
       let str2 = number.toString().split('');
       // Iterate over the array of characters, starting from the first and last element
       for (var i = 0, j = str2.length - 1; i < j; i++, j--) {
         // If the current character is not equal to its corresponding character at the opposite end of the array, return false
         if (str2[i] !== str2[j]) {
           return false;
         }
       }
       return true;
     }
 
   for (let i = 0; i < str.length; i++) {
     // Iterate over the sub-arrays of characters starting from the current character
     for (let j = i + 1; j <= str.length; j++) {
       // Check if the current sub-array of characters is a palindrome
       if (isPalindrome(Number(str.slice(i, j).join(''))) == true) {
         // If the current sub-array is a palindrome, update the largest palindrome variable if the number is larger than the current largest palindrome
         largestPalindrome = Math.max(largestPalindrome, Number(str.slice(i, j).join('')));
       }
     }
   }
 
   let resultFunction = undefined
 
     if (largestPalindrome < 10){
         resultFunction = "0: No palindrome in this number "
     } else {
         resultFunction = largestPalindrome
     }    
            /* return result  */
 
         result.innerText = resultFunction 
         resultDiv.classList.remove("invisible")
         resultDiv.classList.add("visible")

         form.reset()
 }
 
 
 button.addEventListener("click", findPalindrome)