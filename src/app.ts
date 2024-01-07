import express from 'express'
import { router } from './routes/users.route';
import { loginRouter } from './routes/login.route';

const app = express();
app.use(express.json())

app.use(router);
app.use(loginRouter)

export {app}