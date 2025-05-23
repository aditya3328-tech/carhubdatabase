# Customer Service App

This is a React web application designed to store customer information, track services, and generate unique IDs. 

## Features

- **Customer Management**: Add, view, and manage customer information.
- **Service Tracking**: Input and track services associated with each customer.
- **Unique ID Generation**: Automatically generates unique identifiers for customers and services.

## Project Structure

```
customer-service-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # Contains all React components
│   │   ├── CustomerForm.jsx
│   │   ├── CustomerList.jsx
│   │   ├── ServiceForm.jsx
│   │   └── ServiceList.jsx
│   ├── utils               # Utility functions
│   │   └── idGenerator.js
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point for the React application
│   └── styles              # CSS styles
│       └── App.css
├── package.json            # NPM configuration file
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd customer-service-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see!