const allure = require('allure-commandline');
const path = require('path');

// Define paths for Allure results and report output
const allureResultsPath = path.join(__dirname, 'allure-results');
const allureReportPath = path.join(__dirname, 'allure-report');

// Generate Allure report
const generateAllureReport = () => {
  console.log('Generating Allure Report...');

  // Create Allure report from the results folder
  allure(['generate', allureResultsPath, '--clean', '--output', allureReportPath])
    .on('exit', (code) => {
      if (code === 0) {
        console.log('Allure report generated successfully!');
        // Open the Allure report
        allure(['open', allureReportPath]);
      } else {
        console.error('Error generating Allure report.');
      }
    });
};

// Run
generateAllureReport();
