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
        'how-to-document/link-another-document',
        'how-to-document/how-to-mdx'
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
            'plugin-features/review-player'
          ],
        },
      ],
    },
  ],
};
