/* Print the triangles in descending order of their area.
Input parameters: array of triangle objects
Output: ordered array of triangle names
    • Calculation of the area of a triangle should be made according to Heron's formula.
    • Each triangle is defined by vertex names and the lengths of its sides.
    • The application must handle floating point input:
{ vertices: ‘ABC’,
    a: 10,
    b: 20,
    c: 22.36
    }, 
    */

    let button = document.getElementById("button")
    let deletebutton = document.querySelector(".delete")
    let addbutton = document.getElementById("add")
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
    
    class Triangle {
        vertices;
        a;
        b;
        c;
    
        constructor(vertices, a, b, c){
            this.vertices = vertices;
            this.a = a;
            this.b = b;
            this.c = c;
        }
    
        calculateArea(a,b,c){
            let s = (this.a + this.b + this.c)/2
            let area = Math.sqrt(s*(s - this.a)*(s - this.b)*(s - this.c))
            return area
        }
    }
    
    /* adding more triangles */
    const moreTriangles = (e) => {
        e.preventDefault()
        const newTri = document.createElement("div")
        newTri.className = `envelope d-flex flex-column  align-items-center`
        /* delete */
        button = newTri.appendChild(document.createElement("button"))
        button.className = `delete`
        span = button.appendChild(document.createElement("span"))
        span.innerHTML = "cancel";
        span.className = `material-symbols-rounded`;
        /* title */
        h2 = newTri.appendChild(document.createElement("h2"));
        h2.innerText = "Triangle"
        /* label Name*/
        label = newTri.appendChild(document.createElement("label"));
        label.innerText = "Name"
        
        /* input */
        input = newTri.appendChild(document.createElement("input")).className = `input`
    
        /* label Side 1*/
        label = newTri.appendChild(document.createElement("label"));
        label.innerText = "Side 1"
        
        /* input */
        input = newTri.appendChild(document.createElement("input")).className = `input`
    
        /* label  Side 2*/
        label = newTri.appendChild(document.createElement("label"));
        label.innerText = "Side 2"
        
        /* input */
        input = newTri.appendChild(document.createElement("input")).className = `input`
    
        /* label  Side 3*/
        label = newTri.appendChild(document.createElement("label"));
        label.innerText = "Side 2"
        
        /* input */
        input = newTri.appendChild(document.createElement("input")).className = `input`
        
            const inputs = document.querySelector(".f-input");
            const moreTriangleBtn = document.querySelector(".moreTriangles");
            inputs.insertBefore(newTri, moreTriangleBtn);
    
            
    }
    
    addbutton.addEventListener("click", moreTriangles)
    /*  */
    /* deleting triangles */
    function deletediv(el){
        if(el.classList.contains("material-symbols-rounded")){
            el.parentElement.parentElement.remove()
        }
    }

    document.querySelector(".f-input").addEventListener("click", (e) =>{
        e.preventDefault()
        deletediv(e.target)
    })


    
    const calculateArea = (a,b,c) =>{    
        let s = (a + b + c)/2
        let area = Math.sqrt(s*(s - a)*(s - b)*(s - c))
        return area
    }
    
    const sortingTriangles = (e) => {
        e.preventDefault()
        let arr = []
        let arrTriangles = []
        
        let divs = document.querySelectorAll(".envelope"); 
        var numDivs = divs.length;
        const resultDiv = document.querySelector(".task-result")
        const result = document.querySelector(".result")
        let form = document.querySelector('#forms'); 
    
        for (let i = 0; i < numDivs; i++) {
    
            for (let j = 5; j < 10; j+=2) {
                values = divs[i].children[j].value
                if (Number.isNaN(parseInt(values)) == true){
                  drawError("You should insert the name of your triangle and the size of sides")
                  form.reset()
                  return
                }
              }
    
        }
    
        for (let i = 0; i < numDivs; i++) {
            arr = []

            for (let j = 3; j < 10; j+=2) {
              values = divs[i].children[j].value
              arr.push(values)
              triangle = new Triangle()
              ver = arr[0]
              a = arr[1]
              b = arr[2]
              c = arr[3]
              
              
            }
            triangle = new Triangle(ver, a, b, c)
            
            arrTriangles.push(triangle)
            triangle = undefined
            arr = []
            
        }
        console.log(arrTriangles);
        /* console.log(calculateArea(a,b,c)); */
        
    
        let orderedArray = []
        arrTriangles.sort((x, y) => y.calculateArea() - x.calculateArea());
        
        for (i = 0; i < arrTriangles.length; i+=1){
            orderedArray.push(arrTriangles[i].vertices)
        }
        console.log(orderedArray); 
    
        result.innerText = orderedArray 
        resultDiv.classList.remove("invisible")
        resultDiv.classList.add("visible")
    
        form.reset()
        
        
    }
    
    
    button.addEventListener("click", sortingTriangles)
    
    

