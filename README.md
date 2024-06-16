# Car-Leasing-Calculator

## Project Overview

This project is organized into two main folders: `css` and `js`.

### CSS Folder
- **main.css**: Contains the main styles for the project.
- **reset.css**: Contains styles to reset default browser settings.

### JS Folder
The `js` folder is divided into two subfolders: `setup` and `business`.

#### Setup Folder
The `setup` folder contains five JavaScript files:
1. **carType.js**: Initial input values for car type.
2. **carPrice.js**: Initial input values for car price.
3. **downPayment.js**: Initial input values for down payment.
4. **leasePeriod.js**: Initial input values for lease period.
5. **index.js**: Collects all initial input values into a single object and exports it.

#### Business Folder
The `business` folder contains four JavaScript files that handle the business logic:
1. **downPayment.js**: Handles the down payment logic.
2. **interestedRate.js**: Handles the interested rate logic.
3. **monthlyInstallment.js**: Handles the monthly installment logic.
4. **totalLeasing.js**: Handles the total leasing logic.
5. **businessComponents.js**: Contains common elements extracted for use in the business logic files.

### Main Index File
In the main `index.js` file, the initial logic of the business JavaScript files is set up.
