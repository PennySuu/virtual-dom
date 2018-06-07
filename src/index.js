import _ from './util'
import diff from './diff'
import patch from './patch'
import el from './element'

let lid = el('li', { key: 'd', style: 'color: red' }, ['li#d'])
let lie = el('li', { key: 'e', style: 'color:green' }, ['li#e'])
let lia = el('li', { key: 'a', style: 'color: blue' }, ['li#a'])
let lib = el('li', { key: 'b', style: 'color: yellow' }, ['li#b'])
let lic = el('li', { key: 'c', style: 'color: orange' }, ['li#c'])
let lif = el('li', { key: 'f', style: 'color: purple' }, ['li#f'])

let oldTree = el('ul', { key: 'old' }, [lia, lib, lic, lid])
let newTree = el('ul', { key: 'old' }, [lid, lia, lib, lic])

var root = oldTree.render()
document.body.appendChild(root)

//setTimeout(function () {
console.time('start')
var patches = diff(oldTree, newTree)
console.log(patches)
patch(root, patches)
console.timeEnd('start')
//}, 1000)

/* import { listDiff } from './list-diff'

var oldList = [{ id: 'd' }, { id: 'e' }, { id: 'a' }]
var newList = [{ id: 'a' }, { id: 'd' }, { id: 'e' }]

var { moves } = listDiff(oldList, newList, 'id') */
// `moves` is a sequence of actions (remove or insert):
// type 0 is removing, type 1 is inserting
// moves: [
//   {index: 3, type: 0},
//   {index: 0, type: 1, item: {id: "c"}},
//   {index: 3, type: 0},
//   {index: 4, type: 1, item: {id: "f"}}
//  ]

/* moves.forEach(function(move) {
  if (move.type === 0) {
    oldList.splice(move.index, 1) // type 0 is removing
  } else {
    oldList.splice(move.index, 0, move.item) // type 1 is inserting
  }
}) */

// now `oldList` is equal to `newList`
// [{id: "c"}, {id: "a"}, {id: "b"}, {id: "e"}, {id: "f"}]
/* console.log('moves:', moves)
console.log('oldList', oldList) */
