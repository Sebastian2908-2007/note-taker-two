const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('assets'));
//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`The server is runing on port ${PORT}`);
});