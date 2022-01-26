import { kafka } from '../../../../shared/kafka';
import { IPaymentDTO } from '../dto/payment.dto';
import { IPaymentStream } from './../IPayment.stream';
export class PaymentKafka implements IPaymentStream {
    async create(payment: IPaymentDTO): Promise<void> {
        const producer = kafka.producer();

        await producer.connect();

        const paymentSend = await producer.send({
            topic: 'payment',
            messages: [
                { key: 'key1', value: JSON.stringify(payment), partition: 0 },
            ],
        })

        console.log(paymentSend)

        await producer.disconnect();
    }
}