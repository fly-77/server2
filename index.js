const { response } = require('express');
const express  = require('express');
require('dotenv').config();
console.log(process.env.API_ENDPOINT);

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening at port ' +port );
});
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


app.post('/api',(request, response)=>{
    console.log("I got a request");
    console.log(request.body);
    const data = request.body;
    response.json({
        status: "success", 
        azione:"server sending back for confirmation the recieved lat lon",
        latitude: data.lat, 
        longitude: data.lon});
});
