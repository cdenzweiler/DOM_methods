let body = document.querySelector("body")
let button = document.createElement("button");
let image = document.createElement("image");
let main = document.createElement("main");
let script = document.createElement("script");
let tButton = document.createElement("button")
let textInput = document.createElement("input")

var placeholder1 = document.createTextNode("Remove main element")
var placeholder2 = document.createTextNode("Double Click to put it back")

document.body.appendChild(button);

document.body.appendChild(main);
document.body.appendChild(script);

button.appendChild(placeholder1)
main.appendChild(image);

body.insertBefore(textInput, script)





textInput.insertAdjacentElement("afterend", tButton)



// image.setAttribute("https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png")


    // Add a click event listener to the new button element
    //      and have it remove the <main> element from the page.
button.addEventListener("click", function () {
    body.removeChild(main)
    
    
    button.replaceChild(placeholder2, placeholder1)

})
button.addEventListener("dblclick", function () {
    textInput.insertAdjacentElement("beforebegin", main)
})

// Stretch Goal: Add a text input and a button which,
//      on click, can REMOVE an element based on a CSS selector
//       provided by the user in the textbox.


// textInput.createTextNode("CSS Selector")




// Stretch Goal: Add a text input and a button which,
// on click, can CREATE an element and
//   append it to the page. 
//   This element should contain text content provided
//    by the user in the textbox.