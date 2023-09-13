
# Balance and Transactions API

This project is designed to implement a RESTful API endpoint that allows users to fetch historical daily balances within a specific date range. Users can make a GET request to the endpoint, specifying the date range using the "from" and "to" parameters, and also choose the sorting order using the "sort" parameter. The response from the endpoint provides a list of daily balances, each represented in the following format:

Date: The date for which the balance is provided, formatted as "DD/MM/YYYY".
Amount: The balance amount for that specific date.
Currency: The currency in which the balance is expressed (e.g., EUR).
For example, a request to /historical-balances?from=2022-01-03&to=2022-01-05&sort=desc would return a list of daily balances for the specified date range, sorted in descending order by date.

This project is useful for financial applications and reporting systems that require access to historical daily balances for analytical purposes or to provide users with insights into their financial transactions.

## Prerequisites

- Node.js: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to run the project on your local machine:

- clone the project 
 Install Dependencies
- run npm install 

MongoDB Configuration
For testing purposes, a MongoDB URI is included in the project. If you prefer to use your own MongoDB database, make sure to install and configure MongoDB locally or provide your own URI.

To start the project
- npm start

To run the test 
- npm run test

Endpoints
- There are 4 endpoints 

1. Historical Balances: This is the main endpoint for the main task.
- Endpoint: http://localhost:3000/api/historical-balances?from=2022-01-03&to=2022-01-05&sort=desc

2.Add Transaction: Add a transaction.
- Endpoint: http://localhost:3000/api/add-transaction

3.Statement: Get all transactions.
- Endpoint: http://localhost:3000/api/statement

4.Latest Transaction: Get the latest transaction.
- Endpoint: http://localhost:3000/api/lastest


Data Seeding
- A helper function has been provided to load the database with data fetched from an external endpoint. To use this helper function:

1.Navigate to the utils folder directory:
- cd src/utils
2.Run the following command:
- ts-node seedDB.ts

This will load the database with sample data, making it easier to test the endpoints.

Feel free to reach out if you have any questions or encounter issues.

