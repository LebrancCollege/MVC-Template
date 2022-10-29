import express from 'express';
import Controller from './controller';

const routes = express();

routes.get('/', (_req: express.Request, res: express.Response) => {
	res.render('./index.ejs');
})

routes.get('/data', (_req: express.Request, res: express.Response) => {
	const logic = new Controller();
	// const data = logic.arrayManagement();
	// res.status(200).json(data);
})

export {routes};