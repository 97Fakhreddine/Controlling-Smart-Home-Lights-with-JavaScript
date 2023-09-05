# Controlling Smart Home Lights with JavaScript
![GitHub](https://img.shields.io/github/license/97Fakhreddine/Controlling-Smart-Home-Lights-with-JavaScript)
![GitHub last commit](https://img.shields.io/github/last-commit/97Fakhreddine/Controlling-Smart-Home-Lights-with-JavaScript)
![GitHub repo size](https://img.shields.io/github/repo-size/97Fakhreddine/Controlling-Smart-Home-Lights-with-JavaScript)

Control your smart home lights with JavaScript and Philips Hue.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## About

This project allows you to control your smart home lights using JavaScript and the Philips Hue API. You can toggle lights on and off, get a list of available lights, and more.

## Features

- Toggle smart home lights on and off.
- Get a list of available lights.
- Control lights with a simple JavaScript API.
- Organized using the Model-View-Controller (MVC) pattern.

## Getting Started

Follow these instructions to get your project up and running.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- Philips Hue Bridge and lights set up in your smart home.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/97Fakhreddine/Controlling-Smart-Home-Lights-with-JavaScript.git

### Install the dependencies

Before running the application, make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Navigate to the project folder:

   ```bash
 git clone https://github.com/97Fakhreddine/Controlling-Smart-Home-Lights-with-JavaScript.git
```
### Usage
1. Make sure your Philips Hue Bridge is connected and configured.
2. Start the Express.js server:
```bash 
    npm start
```
3. You can now use the provided API to control your smart home lights.

### API

* `GET /api/lights:` Get a list of available lights.
* `POST /api/lights/toggle:` Toggle a specific light on or off. Send a JSON object with lightId and on (true/false) in the request body.

### Contributing
Contributions are welcome! Please read the Contributing [Guidelines](https://github.com/jessesquires/.github/blob/main/CONTRIBUTING.md) for more information.

### License
This project is licensed under the MIT [License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) - see the LICENSE file for details.