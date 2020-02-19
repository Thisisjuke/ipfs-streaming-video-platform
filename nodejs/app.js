const express = require('express');
const app = express();
require('dotenv').config()

import filesRoutes from './router/filesRoutes'

app.use(filesRoutes);

app.listen(process.env.APPLICATION_PORT, () => console.log(`application on port : ${process.env.APPLICATION_PORT}`));
