let express = require('express');
let app = express();

require('dotenv').config()
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
const routes = require('./routes/serviceRoutes');
app.use('/',routes);

const port = process.env.PORT || 80;
app.listen(port,()=>console.log(`The Server is Running in PORT ${port}`));


