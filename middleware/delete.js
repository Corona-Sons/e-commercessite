const { Product } = require('../models/Products');
const { User } = require('../models/Users');

module.exports = {
    delete_operation(delete_id) {
        console.log("Delete");
        
        user.findOneAndDelete(
        {_id: delete_user},
        (err, deleted_) => {
            if(err){
                return console.log('Error: ', err);
            } else {
                console.log(deleted_);
            }
        });
    }
}

















// CRUD delete functionality
/*function delete_operation(model_id) { 
    Product.deleteOne({_id: 4}, function(err) {
        if (err) return handleError(err);
        console.log("Delete Product: Test Product deleted");
    });
}

module.exports = delete_operation;*/