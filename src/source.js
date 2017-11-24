export default [
  {
    familyName: 'Bourbons',
    children: [{
      value: 'Louis XIV',
      date: [1638, 1715],
      reign: 1643,
      hasReigned: true,
      children: [
        {
          value: 'Louis dit le Grand Dauphin',
          date: [1661, 1711],
          reign: null
        },
        {
          value: 'Charles duc de Berry',
          date: [1686, 1714],
          reign: null
        },
        {
          value: 'Louis duc de Bourgogne',
          date: [1682, 1712],
          reign: null,
          children: [{
            value: 'Louis XV',
            date: [1710, 1774],
            reign: 1715,
            hasReigned: true,
            children: [{
              value: 'Louis dauphin',
              date: [1729, 1765],
              children: [{
                value: 'Louis XVI',
                date: [1754, 1793],
                reign: 1774
              }, {
                value: 'Louis XVIII',
                date: [1755, 1824],
                reign: 1814
              }, {
                value: 'Charles X',
                date: [1757, 1836],
                reign: 1824,
                children: [{
                  value: 'Louis duc d\'Angoulême',
                  date: [1774, 1844]
                }, {
                  value: 'Charles-Ferdinand duc de Berry',
                  date: [1778, 1820]
                }]
              }
              ]
            }]
          }]
        }]
    }]
  }]