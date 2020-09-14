const chalk = require('chalk');
/*
const blogs = [
    {title: 'why mac & cheese and rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
];

console.log(blogs);
*/
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: [
        {title: 'why mac & cheese and rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
        ],
    login(name = 'login'){
        console.log(chalk.black.bgYellowBright(`This is the method called ${name}`));
        },
    logout(name = 'logout'){
        console.log(chalk.black.bgBlue(`You\'ve been logged out, by the function called ${name}`));
        },
    logBlogs(){
        console.log(chalk.black.bgWhiteBright('This has been written by the default user:'));
        this.blogs.forEach(blog => {
            
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
user.login();
user.login('coyote');
user.logout('Tijuana');
/*
console.log(user);
console.log(user.name);

user.age = 35;

console.log(user);
console.log(user['blogs']);

const location = 'location';
user[location] = 'Prague';

console.log(chalk.black.bgGreenBright(typeof user));
*/
