const express = require('express');
const app = express();
const Message = require('./db/Message');
const bodyParser = require('body-parser');
const port = 3000;

 // MIDDLEWARE
app.use(bodyParser.json());

// app.use((req,res,next) => {
//   res.status(404).send('That route does not exist');
// });

// CREATE
// app.post()


// RETRIEVE
app.get('/api/messages/', (req, res) => {
  res.send(200);
})

// UPDATE
// app.put()

// DELETE
// app.delete()




// SERVER LISTEN
app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
