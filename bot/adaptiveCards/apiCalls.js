const cats = require('./cats.json');
const fs = require('fs');
const response = await axios.get('https://catfact.ninja/fact'); // replace with your API endpoint
const responseData = response.data

cats.body.text = responseData.fact

fs.writeFileSync('./cats.json', JSON.stringify(data, null, 2));