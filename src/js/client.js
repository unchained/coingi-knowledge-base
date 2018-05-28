require('bootstrap/dist/js/bootstrap.bundle');

class Client {
// eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.init();
  }

  init() {
    this.initBackButton();
    this.initSearchbar();
  }

  initBackButton() {
    for (const element of document.querySelectorAll('.goBack')) {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
      });
    }
  }

  initSearchbar() {
    const searchInput = document.querySelector('.search__input');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const input = e.srcElement.value;

        fetch(`/search?input=${input}`)
          .then(response => response.json())
          .then((articles) => {
            let html = '';
            if (articles.length) {
              for (const [articleId, article] of articles) {
                html += `<li class="nav-item">
                         <a class="nav-link" href="article/${articleId}">${article.title}</a>
                     </li>`;
              }
            } else {
              html += `<li class="nav-item">
                         <span class="nav-link">No search results found.</span>
                     </li>`;
            }
            const resultsElement = document.querySelector('.search__results');
            resultsElement.querySelector('.nav').innerHTML = html;
            resultsElement.classList.add('visible');
          });
      });

      // hide results on defocus (blur) and prevent blur hiding the results before click event -_-
      let clickInResults = false;
      document.querySelector('.search__results').addEventListener('mousedown', (e) => {
        clickInResults = true;
      });
      document.querySelector('.search__results').addEventListener('mouseup', (e) => {
        clickInResults = false;
      });
      document.querySelector('.search__input').addEventListener('blur', (e) => {
        if (!clickInResults) {
          const resultsElement = document.querySelector('.search__results');
          resultsElement.classList.remove('visible');
        }
      });

      for (const element of document.querySelectorAll('.search__popular>a')) {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const text = e.srcElement.innerText;
          const searchInput = document.querySelector('.search__input');
          searchInput.value = text;
          searchInput.dispatchEvent(new Event('input'));
          searchInput.focus();
        });
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
const instance = new Client();
