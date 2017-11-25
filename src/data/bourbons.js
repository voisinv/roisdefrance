export default {
  familyName: 'Bourbons',
  children: [{
    id: 'louis_XIV',
    value: 'Louis XIV',
    date: [1638, 1715],
    reign: 1643,
    hasReigned: true,
    children: [
      {
        id: 'Louis_dit_le_Grand_Dauphin',
        value: 'Louis dit le Grand Dauphin',
        date: [1661, 1711],
        reign: null
      },
      {
        id: 'Charles_duc_de_Berry',
        value: 'Charles duc de Berry',
        date: [1686, 1714],
        reign: null
      },
      {
        id: 'Louis_duc_de_Bourgogne',
        value: 'Louis duc de Bourgogne',
        date: [1682, 1712],
        reign: null,
        children: [{
          id: 'Louis_XV',
          value: 'Louis XV',
          date: [1710, 1774],
          reign: 1715,
          hasReigned: true,
          children: [{
            id: 'Louis_dauphin',
            value: 'Louis dauphin',
            date: [1729, 1765],
            children: [{
              id: 'Louis_XVI',
              value: 'Louis XVI',
              date: [1754, 1793],
              reign: 1774
            }, {
              id: 'Louis_XVIII',
              value: 'Louis XVIII',
              date: [1755, 1824],
              reign: 1814
            }, {
              id: 'Charles_X',
              value: 'Charles X',
              date: [1757, 1836],
              reign: 1824,
              children: [{
                id: 'Louis_duc_d_Angouleme',
                value: 'Louis duc d\'Angoulême',
                date: [1774, 1844]
              }, {
                id: 'Charles_Ferdinand_duc_de_Berry',
                value: 'Charles-Ferdinand duc de Berry',
                date: [1778, 1820]
              }]
            }
            ]
          }]
        }]
      }]
  }]
}