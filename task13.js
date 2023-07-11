function storeUserDetails(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Retrieve the existing user details array from local storage
    var userDetailsArray = JSON.parse(localStorage.getItem('userDetailsArray')) || [];

    // Create a new user object
    var user = {
        name: name,
        email: email
    };

    // Add the new user to the array
    userDetailsArray.push(user);

    // Store the updated array in local storage
    localStorage.setItem('userDetailsArray', JSON.stringify(userDetailsArray));

    displayUserDetails(user);

    alert('User details stored successfully!');
}

function displayUserDetails(user) {
    var userDetailsDiv = document.getElementById('userDetails');


    var userDetailsString = '<p>Name: ' + user.name + '</p>';
    userDetailsString += '<p>Email: ' + user.email + '</p>';
    userDetailsString += '<button onclick="deleteUser(\'' + user.email + '\')">Delete</button>';


    userDetailsDiv.innerHTML += userDetailsString;
}

function deleteUser(email) {
    var userDetailsArray = JSON.parse(localStorage.getItem('userDetailsArray'));

    // Find the index of the user with the specified email
    var index = -1;
    for (var i = 0; i < userDetailsArray.length; i++) {
        if (userDetailsArray[i].email === email) {
            index = i;
            break;
        }
    }

    // Remove the user from the array
    if (index !== -1) {
        userDetailsArray.splice(index, 1);

        // Update the array in local storage
        localStorage.setItem('userDetailsArray', JSON.stringify(userDetailsArray));

        // Clear the userDetailsDiv
        var userDetailsDiv = document.getElementById('userDetails');
        userDetailsDiv.innerHTML = '';

        // Re-display all user details
        userDetailsArray.forEach(function (user) {
            displayUserDetails(user);
        });
    }
}