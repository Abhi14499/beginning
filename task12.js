function storeUserDetails(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var userDetailsArray = JSON.parse(localStorage.getItem('userDetailsArray')) || [];

    // Create an object to hold the user details
    var user = {
        name: name,
        email: email
    };

    userDetailsArray.push(user);


    // Store the JSON string in local storage
    localStorage.setItem('userDetailsArray', JSON.stringify(userDetailsArray));

    displayUserDetails(user);

    // Display a success message
    alert('User details stored successfully!');
}

function displayUserDetails(user) {
    var userDetailsDiv = document.getElementById('userDetails');
    
    var userDetailsString = '<p>Name: ' + user.name + '</p>';
    userDetailsString += '<p>Email: ' + user.email + '</p>';
    
    userDetailsDiv.innerHTML += userDetailsString;
  }