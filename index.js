function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      const bookList = document.getElementById('book-list');

      books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book.name;
        bookList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Erreur lors du fetch des livres:', error);
    });
}

// Appel de la fonction pour lancer le fetch
fetchBooks();