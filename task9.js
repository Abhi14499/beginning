let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let description = document.getElementById('item2').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem + ' '+ description));
    

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    itemList.appendChild(li);

}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');

    
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;

        console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}