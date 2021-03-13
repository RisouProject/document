module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'welcome-to-risou'
    },
    {
      type: 'category',
      label: 'ドキュメントの使い方',
      items: [
        'how-to-document/syntax',
        'how-to-document/how-to-write-plugin',
        'how-to-document/link-another-document',
        'how-to-document/how-to-mdx',
      ],
    },
    {
      type: 'category',
      label: '⛏️ Minecraft部門',
      items: [
        {
          type: 'category',
          label: 'プラグイン構想',
          items: [
            'plugin-features/review-player',
            'plugin-features/custom-advancement-badge',
            'plugin-features/player-profile',
            'plugin-features/adjust-drop-items',
            'plugin-features/tax',
            'plugin-features/bank',
            'plugin-features/shop',
            'plugin-features/fishing',
            'plugin-features/gamble',
            'plugin-features/fly',
          ],
        },
        {
          type: 'category',
          label: '理想サーバー特有の要素',
          items: [
          ],
        },
      ],
    },
  ],
};
