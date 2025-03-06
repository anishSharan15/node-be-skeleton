import logger from 'pino';
import env from '../config/environment.config';
import { AppEnvEnum } from '../types/enums';

const log = logger({
	base: { pid: false },
	transport: {
		target: 'pino-pretty',
		options: {
			colorized: true
		}
	},
	timestamp: () => `,"time": "${new Date().toLocaleString()}"`,
	level: env.app.environment === AppEnvEnum.prod ? 'silent' : 'info'
});

export default log;
