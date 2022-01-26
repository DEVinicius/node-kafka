import Mongoose  from "mongoose";

export const BookSchema = new Mongoose.Schema({
    name: String,
    price: String,
    user: {
        name: String,
        email: String,
        document: String
    }
})