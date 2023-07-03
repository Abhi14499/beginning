// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild

var itemList = document.querySelector('#items');

// parentElement
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// firstchild
// console.log(itemList.firstChild);

// firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastchild
// console.log(itemList.lastChild);

// lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';



