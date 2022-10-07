// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    default: 
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {
switch(license) {
  case 'MIT':
    return `(https://opensource.org/licenses/MIT)`;
  case 'Eclipse':
    return `(https://opensource.org/licenses/EPL-1.0)`;
  case 'Apache':
    return `(https://opensource.org/licenses/Apache-2.0)`;
  case 'Mozilla':
    return `(https://opensource.org/licenses/MPL-2.0)`;
  default: 
    return ``;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
  switch(license){
    case 'No License':
      return '';
    default: 
      return '## License'
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}
    ##Description

    ${data.description}

    ##Table of Contents

      [Installation](#installInfo)
      [Usage](#usageInfo)
      [License](#license)
      [Contribution](#credits)
      [Test Instructions](#testInfo)
      [Questions](#questions)

    ##Installation

    ${data.installInfo}

    ##Usage

    ${data.usageInfo}


    ${renderLicenseSection(data)}
    
    ${renderLicenseBadge(data)}

    ${renderLicenseLink(data)}

    ##Credits

    ${data.credits}

    ##Test Instructions

    ${data.testInfo}

    ##Questions

    Find me on Github: https:/github.com/${data.github}

    For any questions about this project, please email me at ${data.email}.



`;
}

