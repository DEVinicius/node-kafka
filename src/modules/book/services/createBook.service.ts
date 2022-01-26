import { IPaymentStream } from './../../payment/stream/IPayment.stream';
import { PAYMENT_STREAM_SYMBOL } from './../../payment/stream/symbol/paymentStream.symbol';
import { BOOK_SYMBOL_REPOSITORY } from './../repository/symbol/book.symbol';
import { IPaymentDTO } from '../../payment/stream/dto/payment.dto';
import { ICreateBookDTO } from './../infra/database/dto/createBook.dto';
import { IBookRepository } from "../repository/IBook.repository";
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateBookService {
    constructor(
        @inject(BOOK_SYMBOL_REPOSITORY)
        private bookRepository: IBookRepository,
        @inject(PAYMENT_STREAM_SYMBOL)
        private paymentStream: IPaymentStream
    ) {}

    async execute(bookDTO: ICreateBookDTO) {
        const book = await this.createBook(bookDTO);
        await this.sendPayment({
            price: bookDTO.price,
            user: bookDTO.user
        })
        return book;
    }

    private async createBook(book: ICreateBookDTO) {
        const bookDocument = await this.bookRepository.create(book);
        return bookDocument;
    }

    private async sendPayment(payment: IPaymentDTO) {
        this.paymentStream.create(payment);
    }
}