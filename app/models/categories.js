const demoArticlesList = [
  'where-is-my-bitcoin'
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

const sections = {
  'my-account': {
    'Edit your profile': {
      icon: 'fa-user',
      articles: [
        'changing-your-email-address',
        'changing-your-password',
        'forgotten-password',
        'switch-language-and-region'
      ],
    },
    'Verify your account': {
      icon: 'fa-lock',
      articles: [
        'verify-identity',
        'failed-identity-verification',
        'add-bank-account',
        'what-is-two-fator-authentication',
        'setting-up-two-fator-authentication',
        'reset-access-token'
      ]
    }
  },
  'coin-transfer': {
    'Sending and receiving Bitcoin': {
      icon: 'fab fa-bitcoin',
      articles: [
        'how-to-buy-sell-bitcoin',
        'cancelling-purchase',
        'where-is-my-bitcoin',
        'trading-other-currencies'
      ]
    },
    'Transfer fees': {
      icon: 'fa-dollar-sign',
      articles: [
        'what-are-transfer-fees',
        'why-transfer-fees',
        'overview-of-all-fees'
      ]
    }
  }
};

module.exports = {
  'my-account': {
    name: 'My account',
    description: 'Editing your profile, Two-factor authentication, Verifying your account',
    icon: 'fa-user',
    sections: sections['my-account'],
  },
  'coin-transfer': {
    name: 'Coin transfer',
    description: 'Sending and recieving Bitcoin, Transfer fees',
    icon: 'fa-exchange-alt',
    sections: sections['coin-transfer'],
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
