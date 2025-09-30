console.log("Hola mundo");
document.createElement("cardBook-template");

const cardBookTemplate = document.getElementById('cardBook-template');



for (let index = 0; index < 3; index++) {
    var cardnew = cardBookTemplate.content.cloneNode(true);
    document.getElementById('container-cards').appendChild(cardnew);
    
}




