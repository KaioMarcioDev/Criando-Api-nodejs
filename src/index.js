const express =  require('express');
const app = express();

app.get('/view',(request,response)=>{

    return response.json({message: "Hello Kaio"})
});

app.listen(3333);
