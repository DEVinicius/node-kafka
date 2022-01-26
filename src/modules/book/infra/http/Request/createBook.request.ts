import { ICreateBookDTO } from './../../database/dto/createBook.dto';
import { Request } from "express";

export interface ICreateBookRequest extends Request {
    body: ICreateBookDTO;
}