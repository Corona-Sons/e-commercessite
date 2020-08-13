const { default_product } = require ('../defaults/Default_Products');
const { default_user } = require ('../defaults/Default_Users');

// CRUD create functionality
module.exports = {
    //create_product Property
    create_operation (create_obj) {
        console.log('Create');
        let save_promise = create_obj.save();

        console.log('Is Promise' + (save_promise instanceof Promise));
        save_promise.then ((save_obj) => {
            console.log('ID: ' + save_obj._id);
            console.log(save_obj);
        }).catch((err) => {
            console.log('Error: ', err);
        });

        if (save_promise === 'undefined'){
            console.log("NoObjectException", save_promise);
        } else {
            console.log(save_promise);
        }

        return save_promise;
    }
}