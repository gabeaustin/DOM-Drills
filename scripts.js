/* Number 4 */
document.addEventListener("DOMContentLoaded", function() {
    /* Number 3 */
    let div = document.createElement("div");
    let headerContainer = div.className = "header-container";

    /* Number 4 */
    // Create a h1 element
    let h1 = document.createElement("h1");
    // Create a text node with the text "This is an h1"
    let h1Text = document.createTextNode("This is an h1.");
    // Append the text to the h1 
    h1.appendChild(h1Text);
    // append the h1 to the div
    div.appendChild(h1);
    // append the div to the body
    document.body.appendChild(div); // it will not show up w/o this line
    let h1ClassName = h1.className = "h1";

    /* Number 5 */
    // create a h2 element
    let h2 = document.createElement("h2");
    // give it the text "This is an h2"
    let h2Text = document.createTextNode("This is an h2.");
    h2.appendChild(h2Text);
    // div.appendChild(h2Text);
    // append it to the same div the h1 one is
    div.appendChild(h2);
    // give a class name
    let h2ClassName = h2.className = "h2";

    /* Numbers 6 & 7 */
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3.");
    h3.appendChild(h3Text);
    div.appendChild(h3);
    let h3ClassName = h3.className = "h3";

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4.");
    h4.appendChild(h4Text);
    div.appendChild(h4);
    let h4ClassName = h4.className = "h4";

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5.");
    h5.appendChild(h5Text);
    div.appendChild(h5);
    let h5ClassName = h5.className = "h5";

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6.");
    h6.appendChild(h6Text);
    div.appendChild(h6);
    let h6ClassName = h6.className = "h6";
    
    

    
})


    

// /* Number 6 */
// let h3 = document.createElement("h3");
// let h3Text = document.createTextNode("This is an h3");
// div.appendChild(h3);
// let h3ClassName = div.className = "h3";

// let h4 = document.createElement("h4");
// let h4Text = document.createTextNode("This is an h4");
// div.appendChild(h4);
// let h4ClassName = div.className = "h4";

// let h5 = document.createElement("h5");
// let h5Text = document.createTextNode("This is an h5");
// div.appendChild(h5);
// let h5ClassName = div.className = "h5";

// let h6 = document.createElement("h6");
// let h6Text = document.createTextNode("This is an h6");
// div.appendChild(h6);
// let h6ClassName = div.className = "h6";

// let eightColorsArray = ["#ff2d7c", "#335cb7", "#8651b0", "#018117", "#a5fcf1", "#2e8145", "#eaf0e2", "#2f5f4e"];

// let button = document.createElement("button");
// let buttonChangeColor = document.createElement("Click to change colors");


// button.addEventListener("dblclick", function() {
//     let createDiv = document.createElement("div");
//     createDiv.style.color = eightColorsArray[2];
//     createDiv.style.backgroundColor = eightColorsArray[0];
// })






