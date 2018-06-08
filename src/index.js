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

setTimeout(function() {
  console.time('start')
  var patches = diff(oldTree, newTree)
  console.log(patches)
  patch(root, patches)
  console.timeEnd('start')
}, 1000)