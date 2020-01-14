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

// newMessage, findAllMessages, findMessage, deleteMessage

// CREATE
app.post('/api/messages/', (req, res) => {
  Message.newMessage( {name: req.body.name, message: req.body.message} );
  res.send(200);
})


// RETRIEVE

app.get('/api/messages/', (req, res) => {
  res.send(200);
})

app.get('/api/messages/:id', (req,res) => {
  Message.findMessage(req.params)
  .then (results => res.send(results))
  .catch (err => {throw err})
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
