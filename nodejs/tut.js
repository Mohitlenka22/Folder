const fs = require('fs');

let text = fs.readFileSync('data.txt', 'utf-8');

console.log(text);

text = text.replace('jkfqncnefmnrfmero', 'mohit');

fs.writeFileSync('write.txt', text);