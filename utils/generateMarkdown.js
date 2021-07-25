// This is a good READ ME template
function generateMarkdown(data){
  return`
  # ${data.Title}
  [![Github license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})

  # Descrption
  ${data.Description}

  # Table of Contents

  * [Installation] (#installation)

  * [Usage](#usage)

  * [Contributing] (#contributing)

  * [Tests] (#tests)

  * [Questions] (#questions)

  #Installation

  The following necessary dependencies must be installed to run the application properly: ${data.Installation}

  # Usage

  This application is used for ${data.Usage}

  # License
  
  This project is license under the ${data.License} license.

  # Contributing 
  
  Contributors: ${data.Contributor}

  # Tests 

  to run test, you need to run the following command: ${data.Test}

  # Questions 

  If you have any questions about the repo, opem an issue or contact ${data.UserName} directly ${data.Email}.

  `
}

module.exports = generateMarkdown;
