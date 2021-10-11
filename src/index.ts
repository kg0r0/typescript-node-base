import express from 'express';
const app: express.Express = express()

/**
 * routes
 */
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('OK')
});

app.listen(3000, () => {
  console.log('listen port: 3000');
});