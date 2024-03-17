import express from 'express';
import mydb from './config/connect';
const app = express();
const port = 3001;
import rout from './routes/router';


app.use(rout)

app.listen(port, () => {
    console.log('Server is running', port);
});