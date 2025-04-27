const body =document.getElementsByTagName("body")[0];
body.style.backgroundColor= "pink";

const paragraph = document.getElementsByTagName("p")[0];
paragraph.textContent = "prettiest girl ever";

function createElemen() {
    const paragraph_1 = document.createElement("p");
    paragraph_1.textContent = "this is what appears when you click button" ;
    console.log(paragraph_1);
    body.appendChild(paragraph_1);
}
