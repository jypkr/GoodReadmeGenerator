const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Title?'
	},
	{
		type: 'input',
		name: 'description',
		message: 'description?'
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Installation process?'
	},
	{
		type: 'input',
		name: 'usage',
		message: 'usage?'
	},
	{
		type: 'input',
		name: 'licenses',
		message: 'licenses?'
	},
	{
		type: 'input',
		name: 'contribute',
		message: 'contribute?'
	},
	{
		type: 'input',
		name: 'tests',
		message: 'tests?'
	}
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, err => {
		if (err) {
			throw err;
		}
		console.log('Created!')
	})
}

// function to initialize program
async function init() {
	const answers = await inquirer.prompt(questions)
	writeToFile('./output/README.md', generateMarkdown(answers))
}

// function call to initialize program
init();
