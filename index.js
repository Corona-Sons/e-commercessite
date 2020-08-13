const mongoose = require('mongoose');
const { Create } = require('./middleware/Create');
const { Delete } = require('./middleware/Delete');
const { Update } = require('./middleware/Update');

const { default_product } = require('./defaults/Default_Products')
 
let connection_string = "mongodb://127.0.0.1:27017/Coronavirus?retryWrites=true&w=majority";//change connection sstring once vance gives me the password
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

        Create.create_operation(default_product.default_product_01);
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