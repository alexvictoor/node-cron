import { DateTime } from 'luxon';
import { CronTime } from './time';
import { CronTimeType } from './types/cron.types';

export { CronJob } from './job';
export { CronTime } from './time';

export {
	CronCallback,
	CronCommand,
	CronContext,
	CronJobParams,
	CronOnCompleteCallback,
	CronOnCompleteCommand,
	Ranges,
	TimeUnit
} from './types/cron.types';

export const sendAt = <CT>(cronTime: CronTimeType<CT>): DateTime =>
	new CronTime<CT>(cronTime).sendAt();

export const timeout = <CT>(cronTime: CronTimeType<CT>): number =>
	new CronTime<CT>(cronTime).getTimeout();
