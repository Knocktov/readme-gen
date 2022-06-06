
function generateMarkdown(data) {

	let licenseBadge = "";

	if (data.license === "MIT") {
		licenseBadge =
			"MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	} else if (data.license === "IPL 1.0") {
		licenseBadge =
			"IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
	} else if (data.license === "MPL 2.0") {
		licenseBadge =
			"MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
	} else if (data.license === "ODbL") {
		licenseBadge =
			"ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
	} else if (data.license === "PDDL") {
		licenseBadge =
			"ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
	} else if (data.license === "Perl") {
		licenseBadge =
			"Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
	}

	return (
		`
  # **${data.title}**

  ---
  
  ## **Description**
  
  ${data.description}
  
  ---
  
  ## **Table of Contents**
  
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributions](#Contributions)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  7. [Author](#Author)
  
  ---
  
  ## **Installation**
  
  1. Clone the repo: ` +
		"```git clone " +
		data.repository +
		".git```" +
		`\n` +
		`2. Install NPM packages: ` +
		"```" +
		data.installation +
		"```" +
		`
  
  ---
  
  ## **Usage**
  
  ${data.usage}
  
  ---
  
  ## **License**
  
  Distributed under the ${data.license} License.

  [![License: ${licenseBadge}

  ---
  
  ## **Contributions**
  
  **Current Contributors:**
  
  _${data.contributors}_
  
  Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
  
  ${data.contributions}
  
  ---
  
  ## **Tests**

  This application has been tested in a countless number of different environments to ensure peak performance. However, bugs may exist, especially when used in combination with additional packages. Please be sure to test the application after an initial download. 
  
  To test run the code after installing on your local device, use the following code:` +
		`\n` +
		"```" +
		data.tests +
		"```" +
		`
  
  ---
  
  ## **Questions**

  The following questions exist on our end, and are currently trying to be solved:

  ${data.questions}
  
  ---
  
  ## **Author**

  Below is contact information for the author of this application. Please feel free to reach out directly if additional questions exist.
  
  - Name: ${data.author}
  - Email: ${data.email}
  - LinkedIn: ${data.linkedin}

  ---
  
  ### Thank you for using ${data.title}!

  `
	);
}

module.exports = generateMarkdown;
