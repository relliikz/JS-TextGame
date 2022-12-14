// First, create a connection to the database
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

// Then, create a function that will handle the form submission
function handleFormSubmit(event) {
  // Prevent the form from submitting (which would refresh the page)
  event.preventDefault();

  // Get the values of the form fields
  var username = event.target.username.value;
  var password = event.target.password.value;

  // Use the connection to execute an INSERT statement
  connection.query(
    'INSERT INTO USERS (username, password) VALUES (?, ?)',
    [username, password],
    function(error, results, fields) {
      if (error) throw error;
      // If the INSERT was successful, show a success message
      console.log('User added to the database with ID: ' + results.insertId);
    }
  );
}

// Finally, attach the `handleFormSubmit` function to the form's `onsubmit` event
document.getElementById('login-form').addEventListener('submit', handleFormSubmit);
