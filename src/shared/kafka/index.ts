import { KAFKA_BROKER_1, KAFKA_BROKER_2, KAFKA_CLIENT_ID } from './../../../env';
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId:KAFKA_CLIENT_ID,
    ssl: true,
    brokers: [
        KAFKA_BROKER_1,
        KAFKA_BROKER_2
    ]
});

export { kafka }