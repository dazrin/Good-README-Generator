const fs = require ('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title', //data.title 
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description', //data.description
            message: 'Please provide a description for your project',
        },
        {
            type: 'input',
            name: 'url', //data.url
            message: "Please enter your project's deployed URL",
        },
        {
            type: 'input',
            name: 'installationProcess', //data.installationProcess
            message: 'Please provide the steps required to install your project',
        },
        {
            type: 'input',
            name: 'instructions', //data.instructions
            message: 'Please provide instructions to use your project',
        },
        {
            type: 'input',
            name: 'imageName', //data.imageName
            message: "Please provide a name for the screenshot that will be added to your README",
        },
        {
            type: 'input',
            name: 'imageURL', //data.imageURL
            message: 'Please provide a URL for your screenshot',
        },
        {
            type: 'input',
            name: 'imageDescription', //data.imageDescription
            message: 'Please provide a description for your screenshot',
        },
        {
            type: 'input',
            name: 'gitProfileImage', //data.gitProfileImage
            message: 'Please provide a url for your github profile image',
        },
        {
            type: 'input',
            name: 'gitUser', //data.gitUser
            message: 'Please enter your github username',
        },
        {
            type: 'input',
            name: 'gitEmail', //data.gitEmail
            message: 'Please enter the email address associated with your github account',
        },
        {
            type: 'input',
            name: 'gitLocation', //data.gitlocation
            message: 'Please enter your location',
        },
        {
            type: 'input',
            name: 'gitURL', //data.gitUrl
            message: 'Please enter your github URL',
        },
        {
            type: 'input',
            name: 'credits', //data.credits
            message: 'Please enter a short message giving credit to those who have helped you on this project',
        },
        {
            type: 'input',
            name: 'liscenseName', //data.licenseName
            message: 'Please provide the name of your liscense',
        },
        {
            type: 'input',
            name: 'liscenseURL', //data.licenseUrl
            message: 'Please provide the URL of your liscense',
        }
    ])
    .then((data) => {
        const markdown =
`# ${data.title}
      
# Table of Contents
* [About](#about)
* [Installation](#installation)
* [Instructions](#instructions)
* [Screenshot](#screenshot)
* [Author](#author)
* [Credits](#credits)
* [License](#license)
* [Badges](#Badges)
* [Contributing](#Contributing)
        
## About
${data.description}
You can launch the application by clicking [here.](${data.url}) 
> Website URL: ${data.url}
        
## Installation
${data.installationProcess}
        
## Instructions
${data.instructions}
        
## Screenshot
![${data.imageName}](${data.imageURL} "${data.imageDescription}")
        
## Author 
\n![ProfileImage](${data.gitProfileImage})
\n**${data.gitName}**
\nEmail: ${data.gitEmail}
\nLocation:${data.gitlocation}
\nGitHub: ${data.gitUrl}
        
## Credits
${data.credits}
        
## License
This project is licensed under the ${data.licenseName} - see the ${data.licenseUrl} file for details
Please credit me if you use or change my code! Thank you :)
        
## Badges
![shield](https://img.shields.io/github/followers/${data.gitUser}?label=Follow&style=social)
        
## Contributing
        
# Contributor Covenant Code of Conduct
        
## Our Pledge
        
We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.
        
We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.
        
## Our Standards
        
Examples of behavior that contributes to a positive environment for our
community include:
        
* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community
        
Examples of unacceptable behavior include:
        
* The use of sexualized language or imagery, and sexual attention or
          advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting
        
## Enforcement Responsibilities
        
Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.
        
Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.
        
## Scope
        
This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.
        
## Enforcement
        
Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.
        
All community leaders are obligated to respect the privacy and security of the
reporter of any incident.
        
## Enforcement Guidelines
        
Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:
        
### 1. Correction
        
**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.
        
**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.
        
### 2. Warning
        
**Community Impact**: A violation through a single incident or series
of actions.
        
**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.
        
### 3. Temporary Ban
        
**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.
        
**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.
        
### 4. Permanent Ban
        
**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.
        
**Consequence**: A permanent ban from any sort of public interaction within
the community.
        
## Attribution
        
This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.
        
Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).
        
[homepage]: https://www.contributor-covenant.org
        
For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.
      
`;
    fs.writeFile('generated-README.md', markdown, (err) =>
    err ? console.log(err) : console.log('Successfully created file: generated-README.md'))
});
    