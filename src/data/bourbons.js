export default {
  familyName: 'Bourbons',
  centuries: ['XVI', 'XIX'],
  children: [{
    id: 'Henri_IV',
    value: 'Henri IV',
    date: [1553, 1589],
    reign: 1589,
    hasReigned: true,
    children: [{
      id: 'Louis_XIII',
      value: 'Louis XIII',
      date: [1601, 1643],
      reign: 1610,
      hasReigned: true,
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
                  reign: 1774,
                  hasReigned: true
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
      }, {
        id: 'Philippe_duc_d_Orleans',
        value: 'Philippe duc d\'Orleans',
        date: [1640, 1701],
        children: [{
          id: 'Philippe_duc_d_Orleans_2',
          value: 'Philippe duc d\'Orleans',
          date: [1674, 1723],
          children: [{
            id: 'Louis_duc_d_Orleans',
            value: 'Louis duc d\'Orleans',
            date: [1703, 1752],
            children: [{
              id: 'Louis_Philippe_Duc_d_Orleans',
              value: 'Louis Philippe Duc d\'Orléans',
              date: [1725, 1781],
              children: [{
                id: 'Louis_Philippe_Duc_d_Orleans_2',
                value: 'Louis Philippe Duc d\'Orléans',
                date: [1747, 1793],
                children: [{
                  id: 'Louis_Philippe',
                  value: 'Louis Philippe',
                  date: [1773, 1850],
                  reign: 1830,
                  hasReigned: true
                }]
              }]
            }]
          }]
        }]
      }]
      
    }]
  }]
}