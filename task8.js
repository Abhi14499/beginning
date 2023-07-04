let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    editBtn.appendChild(document.createTextNode('edit'));
    deleteBtn.appendChild(document.createTextNode('X'));

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