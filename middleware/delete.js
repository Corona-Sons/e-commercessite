const { Product } = require('../models/Products');
const { User } = require('../models/Users');


// CRUD delete functionality
function delete_operation(model_id) { 
    Product.deleteOne({_id: 4}, function(err) {
        if (err) return handleError(err);
        console.log("Test Product deleted");
    });
}

module.exports = delete_operation;