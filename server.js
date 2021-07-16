const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'./acbam-frontend/index.html')));

app.all('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'./acbam-frontend/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});