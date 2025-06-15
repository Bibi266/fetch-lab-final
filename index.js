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
document.addEventListener("DOMContentLoaded", fetchBooks);

function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => displayBooks(books))
    .catch(error => console.error("Erreur lè w ap chaje liv yo:", error));
}

function displayBooks(books) {
  const main = document.querySelector("main");
  const ul = document.createElement("ul");
  ul.id = "book-list";

  books.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${book.name}</h2>
      <p><strong>Otè:</strong> ${book.authors.join(", ")}</p>
      <p><strong>Deskripsyon:</strong> Premye chapit pibliye an ${book.released.slice(0, 10)}</p>
      <p><strong>Kantite paj:</strong> ${book.numberOfPages}</p>
    `;
    ul.appendChild(li);
  });

  main.appendChild(ul);
}