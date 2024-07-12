


const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


const axios = require('axios');

async function postData() {
    try {
        const response = await axios.post('https://api.example.com/post', {
            name: 'John Doe',
            email: 'john.doe@example.com'
        });
        console.log('Post successful:', response.data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

postData();


Additional Configuration
Axios allows additional configuration options such as headers, timeouts, interceptors, etc. Here’s a simple example of setting headers:

javascript
Copy code
const axios = require('axios');

async function fetchDataWithHeaders() {
    try {
        const response = await axios.get('https://api.example.com/data', {
            headers: {
                'Authorization': 'Bearer token123',
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data with headers:', error);
    }
}

fetchDataWithHeaders();
Summary
Axios is a powerful library for making HTTP requests in JavaScript.
Use axios.get() for GET requests and axios.post() for POST requests.
Handle errors using try/catch blocks around await axios calls.
Configure additional options like headers, timeouts, etc., as needed for your API requests.




