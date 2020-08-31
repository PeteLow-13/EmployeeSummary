const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");


// Write code to use inquirer to gather information about the development team members,

//questions which will be used for employee info across all roles
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
  //this question determines role which generates correct prompt for role specific question
  {
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices:['Manager', 'Engineer', 'Intern'],
    default: 'Employee',
  },
];
//asks all questions with the llast being chosen by role
var team = [];

var addEmployee = function(){


    inquirer.prompt(questions).then((answer) => {
        const{name,id,email} = answer;

       
        if(answer.role === 'Engineer'){
            inquirer.prompt ([ 
                { 
                    type: 'input',
                    name: 'github',
                    message: 'What is your Github user name?',
                },
                {
                    type: 'confrim',
                    name: 'addEmployees',
                    message: 'do you want to add another employee?(y/N)'
                  }
                ]).then((answer) => {
                    const{github} = answer;
                    let engineer = new Engineer (name,id,email,github);
                    team.push(engineer);
                    addAnotherEmployee(answer);
                })
        }
        if (answer.role === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your school?',
                },
                {
                    type: 'confrim',
                    name: 'addEmployees',
                    message: 'do you want to add another employee?(y/N)'
                  }
                ]).then((answer) => {
                    const{school} = answer;
                    let intern = new Intern (name,id,email,school);
                    team.push(intern);
                    addAnotherEmployee(answer);
                })
        }
        if (answer.role === 'Manager'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officenumber',
                    message: 'What is your office number?',
                },
                {
                    type: 'confrim',
                    name: 'addEmployees',
                    message: 'do you want to add another employee?(y/N)'
                  }
                ]).then((answer) => {
                    const{officenumber} = answer;
                    let manager = new Manager (name,id,email,officenumber);
                    team.push(manager);
                    addAnotherEmployee(answer);
                })
        }
        
    });
}

var addAnotherEmployee = function(answer){

    if( answer.addEmployees == 'y'){
        addEmployee();
    } else {
        var renderedTeam = render(team);
        console.log(renderedTeam)
    }
}
addEmployee();


// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
