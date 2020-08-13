const { user } = require('../models/Users');

export class user_default extends Users {

    default_user = null;

    constructor (user){
        this.default_user = user;
    }

    default_admin = new user({
        email: default_user.email,
        first_name: default_user.first_name,
        middle_name: default_user.middle_name,
        last_name: default_user.last_name,
        member: default_user.member,
        password: default_user.password,
        admin: default_user.admin
    }); 

    default_admin02 = new user({
        email: 'katlee@student.neumont.edu',
        first_name: 'Kat',
        middle_name: 'Ninja',
        last_name: 'Lee',
        member: true,
        password: 'flowergirl',
        admin: true
    });

    default_admin03 = new user({
        email: 'vweston@student.neumont.edu',
        first_name: 'Vance',
        middle_name: 'Superman',
        last_name: 'Weston',
        member: true,
        password: 'CoolMan',
        admin: true
    });

    default_admin04 = new user({
        email: 'ctayor@student.neumont.edu',
        first_name: 'Coy',
        middle_name: 'Sr.',
        last_name: 'James',
        member: true,
        password: 'CoolSuperHero',
        admin: true
    });
}






