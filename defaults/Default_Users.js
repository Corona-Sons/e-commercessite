const user = require('../models/Users');

default_admin = new user({
    _id: user._id,
    first_name: user.first_name,
    middle_name: user.middle_name,
    last_name: user.last_name,
    email: user.email,
    admin: user.admin,
    member: user.member,
    password: user.password
}); 

default_admin02 = new user({
    _id: user._id,
    first_name: 'Kat',
    middle_name: 'Ninja',
    last_name: 'Lee',
    email: 'katlee@student.neumont.edu',
    admin: true,
    member: true,
    password: 'flowergirl'
});

default_admin03 = new user({
    _id: user._id,
    email: 'vweston@student.neumont.edu',
    first_name: 'Vance',
    middle_name: 'Superman',
    last_name: 'Weston',
    member: true,
    password: 'CoolMan',
    admin: true
});

default_admin04 = new user({
    _id: user._id,
    email: 'ctayor@student.neumont.edu',
    first_name: 'Coy',
    middle_name: 'Sr.',
    last_name: 'James',
    member: true,
    password: 'CoolSuperHero',
    admin: true
});

module.exports = {
    default_admin,
    default_admin02
}




