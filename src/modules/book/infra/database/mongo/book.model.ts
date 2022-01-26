import { BookSchema } from './book.schema';
import Mongoose from "mongoose";

export const BookModel = Mongoose.model("Book", BookSchema);