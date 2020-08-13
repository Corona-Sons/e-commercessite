const { Product } = require('../models/Products');
const { User } = require('../models/Users');

// CRUD update functionality
function update_user_info() { 
    User.updateOne({email: 'klee@student.neumont.edu'}, { email: 'kalee@student.neumont.edu'}, function(err, res) {
        if (err) return handleError(err);
        console.log("User email updated");
    });
}

module.exports = update_user_info;