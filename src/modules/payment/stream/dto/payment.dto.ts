import { IUser } from "../../../../shared/dto/user/User.dto";

export interface IPaymentDTO {
    price: number;
    user: IUser
}