import $ from 'jquery';
import ClipboardJS from 'clipboard';

require('bootstrap/dist/js/bootstrap.bundle');

class Client {
  constructor() {
    this.init();
  }

  init() {
    this.initBackButton();
    $('[data-toggle="tooltip"]').tooltip();

    const copyButton = document.getElementById('copyLink');

    if (copyButton) {
      copyButton.setAttribute('data-clipboard-text', window.location.href);
      new ClipboardJS(copyButton);
    }
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
