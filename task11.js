function storeUserDetails(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Create an object to hold the user details
    var userDetails = {
        name: name,
        email: email
    };

    // Convert the object to a JSON string
    var userDetailsJSON = JSON.stringify(userDetails);

    // Store the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsJSON);

    // Display a success message
    alert('User details stored successfully!');
}