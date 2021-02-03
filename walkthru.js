
document.addEventListener("DOMContentLoaded", function() {
    let container = document.createElement("div");

    container.className = "header-container";

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");

    let h1Text = document.createTextNode("This is an h1");
    let h2Text = document.createTextNode("This is an h2");
    let h3Text = document.createTextNode("This is an h3");
    let h4Text = document.createTextNode("This is an h4");
    let h5Text = document.createTextNode("This is an h5");
    let h6Text = document.createTextNode("This is an h6");

    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);

    h1.className = "h1";
    h2.className = "h2";
    h3.className = "h3";
    h4.className = "h4";
    h5.className = "h5";
    h6.className = "h6";

    container.appendChild(h1);
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(h4);
    container.appendChild(h5);
    container.appendChild(h6);

    h1.addEventListener("dblclick", function() {
        let colorsArray = ["#ff0018", "#ffa52c", "#ffff41", "#008018", "#0000f9", "#86007d", "#3c280d", "#cfb53b"];

        let randomNum = Math.floor(Math.random() * colorsArray.length);
        h1.style.color = colorsArray[randomNum];
        h2.style.color = colorsArray[randomNum];
        h3.style.color = colorsArray[randomNum];
        h4.style.color = colorsArray[randomNum];
        h5.style.color = colorsArray[randomNum];
        h6.style.color = colorsArray[randomNum];
    })

    document.body.appendChild(container);
})