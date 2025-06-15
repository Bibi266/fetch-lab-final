function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      console.log("Réponse reçue", response);
      return response.json();
    })
    .then(books => {
      console.log("Livres reçus:", books);
      renderBooks(books);
    })
    .catch(error => {
      console.error("Erreur dans fetchBooks:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  if (!books.length) {
    main.textContent = "Aucun livre trouvé.";
    return;
  }
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const title = document.createElement('h2');
    title.textContent = book.name;

    const author = document.createElement('p');
    author.innerHTML = `<strong>Auteur :</strong> ${book.authors.join(", ")}`;

    const release = document.createElement('p');
    release.innerHTML =`<strong>Date de publication :</strong> ${new Date(book.released).toLocaleDateString()}`;

    const pages = document.createElement('p');
    pages.innerHTML = `<strong>Pages :</strong> ${book.numberOfPages}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(release);
    card.appendChild(pages);

    main.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);