import 'dotenv/config';
// dotenv.config();
import http from 'http';
import app from './app.js';


const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${3000}`);
});