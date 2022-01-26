import { BookModel } from './../../infra/database/mongo/book.model';
import { ICreateBookDTO } from '../../infra/database/dto/createBook.dto';
import { IBookRepository } from './../IBook.repository';
export class MongoBookRepository implements IBookRepository {
    async create(book: ICreateBookDTO): Promise<typeof BookModel> {
        const bookDocument = await BookModel.create(book);

        return bookDocument;
    }

}