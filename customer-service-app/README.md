# Customer Service App

This is a web application designed to manage customer information and service records for a car service center. The application allows for customer registration, service record management, and provides features for displaying customer details, searching for customers, and tracking visit history.

## Features

- **Customer Registration**: Users can register new customers by entering their name, phone number, car model, and car number plate. A unique customer ID is auto-generated upon registration.
  
- **Service Record Management**: Users can add service records for existing customers by searching for them using their ID or phone number. The service record includes fields for service taken, amount paid, date (auto-filled), and notes. Multiple services can be added for each customer.

- **Customer Details Display**: Users can view all details of a customer, including a list of all visits, with options to filter by date or service type.

- **Search Functionality**: A search bar allows users to find customers by name, phone number, or customer ID.

- **Visit History**: Users can view the visit history of all service visits across customers, with options to filter by date, amount, or service type.

- **Service List**: Users can view and manage all services associated with a customer.

## Project Structure

```
customer-service-app
├── src
│   ├── components
│   │   ├── CustomerRegistration.jsx
│   │   ├── ServiceRecordForm.jsx
│   │   ├── CustomerDetails.jsx
│   │   ├── SearchBar.jsx
│   │   ├── VisitHistory.jsx
│   │   └── ServiceList.jsx
│   ├── utils
│   │   ├── idGenerator.js
│   │   └── timestamp.js
│   ├── data
│   │   └── customers.json
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── main.css
├── public
│   └── index.html
├── package.json
└── README.md
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

4. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, you can access it in your web browser at `http://localhost:3000`. From there, you can register customers, manage service records, and view customer details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.