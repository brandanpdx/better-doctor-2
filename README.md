# _Epicodus Independent Project - February 14, 2020_

#### By _**Brandan Sayarath**_

## Description

This is the Epicodus independent end-of-week assignment for Friday, February 14, 2020.  The purpose of this assignment is to create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in their city who can treat their medical issue.

## Behavior Driven Development Specifications

| Specification             | Input 	|     Output      |
|-------------------------	|-------	|----------------	|
| User enters a name to receive a list of doctors in the Portland area that fit the search query | John | List of doctors that names start with John. The following information will also be included: First Name, Last Name, Address, Phone Number, Website, New Patient Status|
| User enters a medical issue to receive a list of doctors in the Portland area that fit the search query | Sore throat  | List of doctors that can cure a sore throat 	|
| API call results in an error (any message that is not 200 OK) | 404 Not Found | Application alerts an error
| If the query response does not include doctors that meet search criteria, a "not found" message will appear | Kanye West    |  "Sorry, there are no doctors matching your search criteria"	|


## Setup/Installation Requirements

### Node install

#### For macOS:
If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:
* ```$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
* ```$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile```

Install Git with the following command:
* ```$ brew install git```

Next, install Node.js by entering the following command in Terminal:
* ```$ brew install node```

#### For Windows:
Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions.


#### Install this application

Clone this repository via Terminal using the following commands:
* ```$ cd desktop```
* ```$ git clone https://github.com/brandanpdx/better-doctor```
* ```$ cd better-doctor```

Visit the BetterDoctor API [website](https://developer.betterdoctor.com/) and click "Get a free API key". Fill out the form, then your own API key (e.g., “a2c356ibgh44…..”) should be listed on the front page or under My Account > Applications.

On the first line of the .env file, add the following:
``API_KEY = {replace this text and curly braces with your own BetterDoctor API key}``

Next, install node package manager (npm) at the project's root directory via the following command:
* ``$ npm install``

Open this application via live server using the following command:
* ``$ npm run start``

_To view/edit the source code of this application, open the contents of the doctor directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._


## Support and Contact

Please email Brandan Sayarath: brandan@brandan.tech for any questions.

## Technologies Used

This program was created with:

* Javascript
* Node Package Manager
* BetterDoctor API
* Webpack

## License

This code is licensed under MIT permissive free software license

Copyright (c) 2020 **_Brandan Sayarath_**

