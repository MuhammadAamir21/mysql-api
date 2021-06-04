const express = require('express');
const app = express();

const server = require('http').createServer(app);

const employees = require('./Routes/Employees');

//var cors = require('cors')



const port = process.env.PORT || "8000";

app.use(express.json());
//app.use(cors())

app.use("/api/employees", employees)



app.get("/", (req, res) => {
  res.status(200).send("Welcome User <br/>Your Application is up and runnig <br/>Enjoy!");
});

server.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
  console.log("server connected")
});

