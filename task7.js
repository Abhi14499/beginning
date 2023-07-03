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
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSiblings
// console.log(itemList.nextSibling);

// nextElementSiblings
// console.log(itemList.nextElementSibling);

// previoussibling
// console.log(itemList.previousSibling);

// previouselementsibling
// console.log(itemList.previousElementSibling);

// Create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attributes
// newDiv.setAttribute('title', 'Hello Div');

// // Create Text Node
// var newDivText = document.createTextNode('HEllo');

// // Add Text Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';


    // Create a new list item element
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = 'HEllo';
  
    // Find the items list element using querySelector
    var itemsList = document.querySelector('#items');
  
    // Find the first list item element within the items list
    var firstItem = itemsList.querySelector('li');
  
    // Insert the new list item element before the first item
    itemsList.insertBefore(listItem, firstItem);
  
  



