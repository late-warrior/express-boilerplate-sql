/**
 * Module to help connect to kafka - this should contain all Kafka related
 * configuration and also expose useful utilities for writing and reading to Kafka
 */
import { Kafka } from 'kafkajs';
import { CONFIG } from './config/vars';

export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: CONFIG.kafkaBrokers,
});
