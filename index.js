const axios = require("axios");
//POST Request

const data = JSON.stringify({
    name: "Dunsin",
    job: "Programmer"
});



axios.post('https://reqres.in/api/users?page=2', data).then(res => {
    console.log(`Status Code: ${res.status}`);
    console.log(`Body: ${JSON.stringify(res.data)} `);
}).catch(err => {
    console.log(err);
});