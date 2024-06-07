const express = require('express');
const fs = require('fs');
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    const contactData = 'Name:' + name + '\nEmail:' + email + '\nMessage:' + message +'\n\n';

    fs.appendFile(path.join(__dirname, 'contacts.txt'), contactData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.status(200).send('Contact information saved!')
        }
    });
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}')
});