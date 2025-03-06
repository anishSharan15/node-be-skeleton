import express from 'express';
import cors from 'cors';
import log from './utils/logger';
import { IRequest, IResponse } from './types/common';
import env from './config/environment.config';
import { logApi } from './middlewares/logApi';
import { userRouter } from './api';

const app = express();

// Middlewares
app.use(
	cors({
		origin: [env.app.feAppUrl, 'http://localhost:4000']
	})
);
app.use(express.json());

// Routes
app.use('/api/v1/user', logApi(), userRouter);


app.get('/', (_req: IRequest, res: IResponse) => {
	log.info('Welcome Dev');
	res.status(200).send('BE is up!');
});

app.all('*', (_req: IRequest, res: IResponse) => {
	res.status(404).send('Route does not exists');
});

export default app;
