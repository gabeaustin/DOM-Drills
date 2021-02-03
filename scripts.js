document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    let headerContainer = div.className = "header-container";

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1.");
    h1.appendChild(h1Text);
    div.appendChild(h1);
    // document.body.appendChild(div); // it will not show up w/o this line
    let h1ClassName = h1.className = "h1";

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2.");
    h2.appendChild(h2Text);
    div.appendChild(h2);
    let h2ClassName = h2.className = "h2";

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
    h6.className = "h6";
    let h6ClassName = h6.className = "h6";


    // document.body.appendChild(div); // it will not show up w/o this line

    let headings = [h1, h2, h3, h4, h5, h6];

    headings.forEach(function (headings) {
        headings.addEventListener("dblclick", function () {
        let colorArray = [
            "red", 
            "orange", 
            "yellow", 
            "green", 
            "blue", 
            "indigo", 
            "violet", 
            "purple"
        ];

        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        })
    })


    document.addEventListener("dblclick", function () {
        // let colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple"];
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

        // let h5Heading = document.getElementsByClassName("h5")[0];
        // h5Heading.style.color = randomColor;

        let h6Heading = document.getElementsByClassName("h6")[0];
        // this.h6Heading.style.color = randomColor;

    })


    document.addEventListener("dblclick", function () {
        let colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple"];
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

        let h5Heading = document.getElementsByClassName("h5")[0];
        // this.h5Heading.style.color = randomColor;
        console.log(this);

    })





    // let h2Heading = document.getElementsByClassName("h2")[0];
    // h2Heading.style.color = randomColor;

    // let h3Heading = document.getElementsByClassName("h3")[0];
    // h3Heading.style.color = randomColor;

    // let h4Heading = document.getElementsByClassName("h4")[0];
    // h4Heading.style.color = randomColor;

    // let h5Heading = document.getElementsByClassName("h5")[0];
    // h5Heading.style.color = randomColor;
})
