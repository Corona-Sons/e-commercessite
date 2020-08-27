let { Product, User } = require('../models');
const bcrypt = require('bcryptjs');

// mock data/users
function product_data() {
    console.log('<<-- Creating default products -->>');

    const product_one = new Product({
        _id: '1',
        seller_id: '1',
        title: 'Face Mask',
        seller: 'Kat Lee',
        description: 'Cover your face with these wonderful hand made face masks.',
        price: 8,
        rating: 5,
        img: 'https://www.al.com/resizer/wC9swhdipolXrcYluE_O8B212iA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BYMAZ4PXUFGLLAQYXXDKXWLGLY.JPG'
    });
    const product_two = new Product({
        _id: '2',
        seller_id: '2',
        title: 'Latex Gloves',
        seller: 'Vance Weston',
        description: 'Never touch germs again with these great gloves.',
        price: 10,
        rating: 4,
        img: 'https://contestimg.wish.com/api/webimage/5e9532dfab41ab1a64cfd135-large.jpg?cache_buster=8f61be9bcff5bd60714d87fc23b758e7'
    });
    const product_three = new Product({
        _id: '3',
        seller_id: '3',
        title: 'Hand Sanitizer',
        seller: 'James Taylor',
        description: 'Nothing kills germs better than our hand sanitizer.',
        price: 5,
        rating: 5,
        img: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/7518112555423p?$690$&wid=690&hei=690'
    });
    const product_four = new Product({
        _id: '4',
        seller_id: '1',
        title: 'COVID Couple Love Face Masks',
        seller: 'Kat Lee',
        description: 'The couple who quarantines together, breaks up. Our face masks will always be there for you.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/6999701/d/il/c0a182/2498368087/il_340x270.2498368087_kc0b.jpg?version=0'
    });
    const product_five = new Product({
        _id: '5',
        seller_id: '1',
        title: 'Athletic Face Masks',
        seller: 'Kat Lee',
        description: 'Stylish face masks for the athletic mom.',
        price: 20,
        rating: 5,
        img: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/640x480/563917.jpg'
    });

    const save_promise_one = product_one.save();
    const save_promise_two = product_two.save();
    const save_promise_three = product_three.save();
    const save_promise_four = product_four.save();
    const save_promise_five = product_five.save();
    return Promise.all([save_promise_one, save_promise_two, save_promise_three, save_promise_four, save_promise_five])
        .then(() => console.log('Default products added to database'))
        .catch(() => console.log('Default products already exist in your database'));
}

async function user_data() {
    console.log('<<-- Creating Users for database -->>');
    await user_one();
    await user_two();
    await user_three();
}

function user_one() {

    const user_one = new User({
        first_name: 'Vance',
        last_name: 'Weston',
        email: 'vweston@student.neumont.edu',
        admin: true,
        member: true,
        password: 'Henry.2018'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_one.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_one.password = hash;
            // Save User
            user_one.save()
            .then(console.log('User One created'))
            .catch(console.log('User One Already Exists'));
    }))
}

function user_two() {

    const user_two = new User({
        first_name: 'Kat',
        last_name: 'Lee',
        email: 'kalee@student.neumont.edu',
        admin: true,
        member: true,
        password: 'PugMaster.123'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_two.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_two.password = hash;
            // Save User
            user_two.save()
            .then(console.log('User Two created'))
            .catch(console.log('User Two Already Exists'));
    }))
}

function user_three() {

    const user_three = new User({
        first_name: 'James',
        last_name: 'Taylor',
        email: 'jtaylor@student.neumont.edu',
        admin: true,
        member: true,
        password: 'thebe4art'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_three.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_three.password = hash;
            // Save User
            user_three.save()
            .then(console.log('User Three created'))
            .catch(console.log('User Three Already Exists'));
    }))
}

    // const save_promise_one = user_one.save();
    // const save_promise_two = user_two.save();
    // const save_promise_three = user_three.save();
    // return Promise.all([save_promise_one, save_promise_two, save_promise_three])
    //     .then(() => console.log('Default users added to database'))
    //     .catch(() => console.log('Default users already exist in your database'));


const setupDefaultData = async () => {
    await product_data();
    await user_data();
};

module.exports = setupDefaultData;