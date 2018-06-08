import { listDiff } from '../../src/list-diff.js'

describe('list diff test:', () => {
  it('ABC --> CBA', () => {
    let oldList = [{ key: 'A' }, { key: 'B' }, { key: 'C' }]
    let newList = [{ key: 'C' }, { key: 'B' }, { key: 'A' }]

    expect('CBA').to.equal(patchOldList(oldList, newList))
  })
  it('ABCDE --> DBEAF', () => {
    let oldList = [
      { key: 'A' },
      { key: 'B' },
      { key: 'C' },
      { key: 'D' },
      { key: 'E' }
    ]
    let newList = [
      { key: 'D' },
      { key: 'B' },
      { key: 'E' },
      { key: 'A' },
      { key: 'F' }
    ]

    expect('DBEAF').to.equal(patchOldList(oldList, newList))
  })
})

function patchOldList(oldList, newList) {
  let { moves } = listDiff(oldList, newList, 'key')
  let simulateList = oldList.slice()
  moves.forEach(function(move) {
    if (move.type === 0) {
      simulateList.splice(move.index, 1) // type 0 is removing
    } else {
      simulateList.splice(move.index, 0, move.item) // type 1 is inserting
    }
  })
  return simulateList.map(item => item.key).join('')
}
