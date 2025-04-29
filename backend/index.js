const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());            // allow frontend to connect
app.use(express.json());    // read JSON body from requests

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
