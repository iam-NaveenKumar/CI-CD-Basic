import express from 'express';

const app = express();

const port = 1234;

app.get('/', (req, res) => {
  res.send('<h1>Hello! This is home page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Hello! This is about page</h1>');
});


export default app;