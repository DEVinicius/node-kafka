import { IUser } from "../../../../../shared/dto/user/User.dto";

export interface ICreateBookDTO {
    name: string;
    price: number;
    user: IUser;
}