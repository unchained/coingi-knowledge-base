const demoArticlesList = [
  'what-is-money',
  'i-have-bought-sold-a-currency-but-dont-see-the-right-amount-on-my-accounts-balance',
  'why-am-i-not-rich-yet',
  'my-dog-ate-my-hardware-wallet',
  'billion-dollar-pizza',
  'history-of-trading',
  'banking-on-bitcoin',
  'leverage-moving-average',
  'who-is-the-real-satoshi',
];
const demoSectionsList = {
  "Let's talk money": {
    icon: 'fa-money-bill-alt',
    articles: demoArticlesList,
  },
  'Trading strategies': {
    icon: 'fa-chart-line',
    articles: demoArticlesList,
  },
  'Security is key': {
    icon: 'fa-lock-alt',
    articles: demoArticlesList,
  },
};

module.exports = {
  'my-account': {
    name: 'My account',
    description: 'Editing your profile, Two-factor authentication, Verifying your account',
    icon: 'fa-user',
    sections: demoSectionsList,
  },
  'coin-transfer': {
    name: 'Coin transfer',
    description: 'Sending and recieving Bitcoin, Transfer fees',
    icon: 'fa-exchange-alt',
    sections: demoSectionsList,
  },
  'deposits-and-withdrawals': {
    name: 'Deposits and withdrawals',
    description: 'Sending and withdrawing money from/to your Coingi.com account',
    icon: 'fa-money-bill-alt',
    sections: demoSectionsList,
  },
  trading: {
    name: 'Trading',
    description: 'Buying and selling Bitcoin, Market analysis',
    icon: 'fa-chart-area',
    sections: demoSectionsList,
  },
  notifications: {
    name: 'Notifications',
    description: 'Market signals, Managing notifications from Coingi.com',
    icon: 'fa-bell',
    sections: demoSectionsList,
  },
  general: {
    name: 'General',
    description: 'What is Bitcoin?, How does it work?',
    icon: 'fa-question-circle',
    sections: demoSectionsList,
  },
};
