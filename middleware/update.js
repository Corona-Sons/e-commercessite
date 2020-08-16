<<<<<<< HEAD
const product = require('../models/Products');
const user = require('../models/Users');

module.exports = {
    update_operation(default_update){
        console.log('Update');
        
        //Callback function
        product.findOneAndUpdate(

            {_id: default_update._id},
            {title: default_update.title},
            {seller_id: default_update.seller_id},
            {seller: default_update.seller},
            {description: default_update.description},
            {rating: default_update.rating},
            {img: default_update.img},
            {new: true},

            (err, default_updates) => {
                if(err){
                    return console.log('Error: ', err);
                } else {
                    console.log(default_updates);
                }
            }
        )
        return default_update;
    }
}
























=======
const { Product, User } = require("../models/index");
>>>>>>> 039c0b9d936ae9ce5d50a84a565a091e39e7a46c

// CRUD update functionality
function update_user_info() { 
    let falseEmail = User.find({email: 'klee@student.neumont.edu'});

    if (falseEmail.value) {
        User.updateOne({email: 'klee@student.neumont.edu'}, { email: 'kalee@student.neumont.edu'}, function(err, res) {
            if (err) return handleError(err);
            console.log("Update User: User email updated");
        });
    } else {
        console.log('Update User: This User does not exist in the database');
    }
}

module.exports = update_user_info;