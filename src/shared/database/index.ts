import { DB_CONNECTION } from './../../../env';
import Mongoose from "mongoose";

export async function main() {
    try {
        const mongoConnection = await Mongoose.connect(DB_CONNECTION);
        console.log(mongoConnection.connection.host)
    } catch (error: any) {
        console.error({
            error: error.message
        })
    }
}