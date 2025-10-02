
const formNewBookTemplate = document.getElementById('form-new-book');
const buttonShowFormNewBook = document.getElementById('addBook');

    const main = document.querySelector('main');
    
        const formnew = formNewBookTemplate.content.cloneNode(true);
        main.appendChild(formnew);


buttonShowFormNewBook.addEventListener('click', openFormNewBook);

const cardBookTemplate = document.getElementById('cardBook-template');



for (let index = 0; index < 3; index++) {
    var cardnew = cardBookTemplate.content.cloneNode(true);
    document.getElementById('container-cards').appendChild(cardnew);
    
}



function openFormNewBook() {
    const main = document.querySelector('main');
    
        const formnew = formNewBookTemplate.content.cloneNode(true);
        main.appendChild(formnew);
}




