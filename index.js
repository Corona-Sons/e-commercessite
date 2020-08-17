const mongoose = require('mongoose');
const create = require('./middleware/create');
const update = require('./middleware/update');
const default_product = require('./defaults/Default_Products');
const default_user = require('./defaults/Default_Users');

let connection_string = "mongodb+srv://vancerweston:Crance.2017@cluster0.vr4hu.mongodb.net/E-Commerce?retryWrites=true&w=majority";//change connection sstring once vance gives me the password
//Server discovery and monitoring engine deprecated
//set to true, our app will use the latest and greatest
mongoose.set('useUnifiedTopology', true);
// False by default, when set to true, default index creation 
// will use createIndex() instead of ensureIndex()
mongoose.set('useCreateIndex', true);
// True by default, when false, the findOneAndUpdate()
// findOneandRemove(), use native instead of findAndModify()
mongoose.set('useFindAndModify', false);
// The underlying MongoDb driver that has been deprecated,
// the parsing of the URL
mongoose.set('useNewUrlParser', true);

mongoose.connect(connection_string).then(
    () => {
        console.log('Connected to MongoDb');
        //create.create_operation(default_product.default_product_01);
        //create.create_operation(default_user.default_admin04);
        //update.update_operation(default_product.default_product_01);
        update.update_operation(default_user.default_admin04);
        //crud.update_product_operation();
        //crud.updated_user_operation();
        //crud.delete_operation();
        //query.find_operation();
    }
).catch(
    (error) => {
        console.log("Error has occured", error);
    }
);

