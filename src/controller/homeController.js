// Get the client
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

const handleHelloWorld = (req, res) => {

    return res.render("home.ejs")
}
const handleUserPage = (req, res) => {
    return res.render("user.ejs")
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
        [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error creating user");
            }
            console.log("User created successfully");
            return res.send("User created successfully");
        }
    );

    return res.send("create ser")
}
module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser
}