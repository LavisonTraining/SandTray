// A simple data structure to map the trainee ID (value) 
// and the expected unique number (key) to the PDF filename.
// The key is the unique ID, and the value is the filename prefix.
// The final PDF file path will be: certificates/john_doe_certificate.pdf
const traineeData = {
    // Trainee Name Value from HTML : Expected ID
    "Amira Soliman": "12345", 
    "yussef Adel": "24680",
    // Add all your trainees here
};

function checkAndDownload() {
    // Get the selected value from the dropdown menu (trainee name key)
    const selectedTrainee = document.getElementById('traineeName').value;
    
    // Get the unique ID entered by the user, trimmed of extra spaces
    // const enteredId = document.getElementById('uniqueId').value.trim();
    
    // Get the message paragraph element for error display
    const messageElement = document.getElementById('message');
    
    // Reset any previous messages
    messageElement.textContent = '';

    // 1. Basic Validation
    if (!selectedTrainee) {
        messageElement.textContent = 'Please select your name.';
        return; // Stop execution
    }

    // if (!enteredId) {
    //     messageElement.textContent = 'Please enter your Unique ID.';
    //     return; // Stop execution
    // }

    // 2. Check the ID against the expected value
    // expectedId is the correct unique number for the selected trainee
    // const expectedId = traineeData[selectedTrainee];

    // if (expectedId === enteredId) {
        // ID is correct! Construct the file path.
        // File path example: certificates/john_doe_certificate.pdf
        const filePath = `certificates/${selectedTrainee}.jpeg`;

        // 3. Redirect the user to download the PDF
        // window.location.href changes the browser's current page to the file path, 
        // which triggers a download or opens the PDF in the browser.
        window.location.href = filePath;
        
        messageElement.textContent = 'Download started. Thank you!';
        messageElement.style.color = 'green';
    // } else {
        // ID is incorrect
    //     messageElement.textContent = 'Error: Invalid Unique ID for the selected trainee.';
    // }
}