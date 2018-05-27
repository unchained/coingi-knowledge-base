require('bootstrap/dist/js/bootstrap.bundle');

class Client {
// eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.init();
  }

  init() {
    this.initBackButton();
  }

  initBackButton() {
    for (const element of document.querySelectorAll('.goBack')) {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
      });
    }
  }
}

// eslint-disable-next-line no-unused-vars
const instance = new Client();
