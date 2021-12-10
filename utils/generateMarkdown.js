function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MITbadge](https://img.shields.io/badge/license-MIT-brightgreen)";
  }
  if (license === "Apache License 2.0") {
    return "![ApacheBadge](https://img.shields.io/badge/license-Apache--2.0-yellow)";
  }
  if (license === "GNU GPLv3") {
    return "![GNUGPLv3Badge](https://img.shields.io/badge/license-GNU%20GPLv3-blue)";
  }

  return "";
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](./src/licenseMIT.txt)";
  }
  if (license === "Apache License 2.0") {
    return "[Apache 2.0](./src/licenseApache2.txt)";
  }
  if (license === "GNU GPLv3") {
    return "[GNU GPLv3](./src/copying_GPL.txt)";
  }

  return "";
}

function renderLicenseSection(license) {
  if (license === "*None*") {
    return "";
  }
  return `Licensed under the ${renderLicenseLink(license)} license.`;
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  Have any additional questions? You can contact me here:
  GitHub: https://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
