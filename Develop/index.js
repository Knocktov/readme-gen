
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is the name of your project?",
			name: "title",
		},
		{
			type: "input",
			message: "Please write a 2-3 sentence description of the project.",
			name: "description",
		},
		{
			type: "input",
			message: "What is the URL of the project's github repository?",
			name: "repository",
		},
		{
			type: "input",
			message:
				"What installation instructions should be included in the README?",
			default: "npm i",
			name: "installation",
		},
		{
			type: "input",
			message: "What usage information would you like to include?",
			name: "usage",
		},
		{
			type: "list",
			message: "What license does this project have?",
			choices: ["MIT", "IPL 1.0", "MPL 2.0", "ODbL", "PDDL", "Perl"],
			default: 0,
			name: "license",
		},
		{
			type: "input",
			message: "Who should be listed as a contributor on this project?",
			name: "contributors",
		},
		{
			type: "input",
			message:
				"What instructions should be included regarding future contributions to this project?",
			default:
				"\n1. Fork the Project\n2. Create your Feature Branch (git checkout -b feature/AmazingFeature)\n3. Commit your Changes (git commit -m 'Add some AmazingFeature')\n4. Push to the Branch (git push origin feature/AmazingFeature)\n5. Open a Pull Request",
			name: "contributions",
		},
		{
			type: "input",
			message: "Please provide an example of how to test run the code.",
			name: "tests",
		},
		{
			type: "input",
			message:
				"What additional questions still exist that you are trying to solve?",
			name: "questions",
		},
		{
			type: "input",
			message: "What is your first and last name?",
			name: "author",
		},
		{
			type: "input",
			message: "What is your email address?",
			name: "email",
		},
		{
			type: "input",
			message: "What is the URL of your LinkedIn profile?",
			name: "linkedin",
		},
	]);
}

async function init() {
	try {
		
		const data = await promptUser();
		
		const markup = generateMarkdown(data);
		
		await writeFileAsync("README.md", markup);
	} catch (err) {
		
		console.log(err);
	}
}

init();
