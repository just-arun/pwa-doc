module.exports = {
    title: 'PWA-IDB',
    description: "PWA Reference Guide By WeKanCode",
    head: [
      ['link', { rel: 'icon', href: '/images/wekan-company-logo.svg' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ],
      sidebar: {
          '/guide/':[
              '',
              'precaching',
              'push-notification',
              'indexeddb',
              'chaching-statergy'
          ]
      }
    }
}