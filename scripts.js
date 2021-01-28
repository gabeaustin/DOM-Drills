// Number 3
let div = document.createElement("div");
let headerContainer = div.className = "header-container";

// Number 4
// Create a h1 element
let h1 = document.createElement("h1");
// Create a text node with the text "This is an h1"
let h1Text = document.createTextNode("This is an h1.");
// Append the text to the h1 
h1.appendChild(h1Text);
// append the h1 to the div
div.appendChild(h1);
// append the div to the body
document.body.appendChild(div);




