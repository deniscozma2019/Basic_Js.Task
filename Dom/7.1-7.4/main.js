//7.1

document.body.style.backgroundColor = "red";

//7.2

setTimeout(() => document.body.style.backgroundColor = "green", 3000);

//7.3
document.addEventListener("DOMContentLoaded", () => { 
    console.log("DOM loaded"); 
    const buttonElement = document.getElementById("btn"); 
    buttonElement.addEventListener("click", () => { 
    document.body.style.backgroundColor = "Orange"; 
    }); 
});

//7.4

const listItems = document.getElementsByTagName("li"); 

let i = 1;
setInterval (() => {
    if (i <= 20){
        const node = document.createElement("LI");
        const textNode = document.createTextNode(`Element ${i}`);
        node.appendChild(textNode);
        document.getElementById("listID").appendChild(node);
        if (i % 2 === 0) {
            node.style.backgroundColor = "#0DE61A"; // green
        } else {
            node.style.backgroundColor = "purple";
        }
        i++;
    }
}, 2000);


