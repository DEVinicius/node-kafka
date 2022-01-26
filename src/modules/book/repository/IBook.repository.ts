import { BookModel } from './../infra/database/mongo/book.model';
import { ICreateBookDTO } from "../infra/database/dto/createBook.dto";

export interface IBookRepository {
    create(book: ICreateBookDTO):Promise<typeof BookModel>;
}