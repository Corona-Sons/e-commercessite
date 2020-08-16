// CRUD create functionality
module.exports = {
    create_operation (default_create) {
        console.log('Create');
        console.log(default_create);
        //console.log(default_create);
        //promises the executing function returns a special object to you (the promise) and then you tell the promise what to do
        let save_promise = default_create.save();
        // True or False if we are getting a promise back
        save_promise.then ((save_create) => {
            console.log('ID: ' + save_create._id);
            console.log(save_create);
        }).catch((err) => {
            console.log('Error: ', err);
        });

        return save_promise;
    }
}
