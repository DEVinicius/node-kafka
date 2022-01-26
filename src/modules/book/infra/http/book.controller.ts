import { CreateBookService } from './../../services/createBook.service';
import { container } from 'tsyringe';
import { Response } from "express";
import { ICreateBookRequest } from "./Request/createBook.request";

export class BookController {
    async create(request: ICreateBookRequest, response: Response){
        try {
            const createBookService = container.resolve(CreateBookService);
            const book = await createBookService.execute(request.body);

            return response.json(book);
        } catch (error: any) {
            return response.status(400).json({
                error: error.message
            })
        }
    }
}