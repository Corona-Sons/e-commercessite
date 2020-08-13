const { Product, User } = require("../models/index");

// CRUD update functionality
function update_user_info() { 
    User.updateOne({email: 'klee@student.neumont.edu'}, { email: 'kalee@student.neumont.edu'}, function(err, res) {
        if (err) return handleError(err);
        console.log("User email updated");
    });
}

module.exports = update_user_info;