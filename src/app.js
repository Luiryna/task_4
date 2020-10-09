const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})