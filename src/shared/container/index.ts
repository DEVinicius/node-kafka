import { container } from "tsyringe";
import { PAYMENT_STREAM_SYMBOL } from './../../modules/payment/stream/symbol/paymentStream.symbol';
import { IPaymentStream } from './../../modules/payment/stream/IPayment.stream';
import { MongoBookRepository } from './../../modules/book/repository/implementation/mongoBook.repository';
import { BOOK_SYMBOL_REPOSITORY } from './../../modules/book/repository/symbol/book.symbol';
import { IBookRepository } from "../../modules/book/repository/IBook.repository";
import { PaymentKafka } from '../../modules/payment/stream/implementation/payment.kafka';

container.registerSingleton<IBookRepository>(BOOK_SYMBOL_REPOSITORY, MongoBookRepository)
container.registerSingleton<IPaymentStream>(PAYMENT_STREAM_SYMBOL, PaymentKafka);