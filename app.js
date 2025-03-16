const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Again, Jenkins was triggered after the git push command!');
});

app.listen(3000, '0.0.0.0', () => console.log('App running on port 3000'));
