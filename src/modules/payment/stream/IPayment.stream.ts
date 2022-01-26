import { IPaymentDTO } from './dto/payment.dto';
export interface IPaymentStream {
    create(payment: IPaymentDTO):Promise<void>;
}