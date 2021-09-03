import { Kafka } from 'kafkajs';
import {CONFIG} from './config/vars'

export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: CONFIG.kafkaBrokers,
});
