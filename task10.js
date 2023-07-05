function storeUserDetails(event) {

    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;


    // Store the user details in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Display a success message
    alert('User details stored successfully!');
}