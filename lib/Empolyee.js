const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer')

var questions =  [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: '',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your id?',
    default: '',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    default: '',
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices:['Manager', 'Engineer', 'Intern'],
    default: 'Employee',
  },
];

function getName(text){
    return text 
};

function getEmail(text){
    return text
}

function getId(text){
    return text
};

function getRole(text){
    return text
}

console.log(questions)