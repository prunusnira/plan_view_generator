import { Order } from "./typeOrder";

export type User = {
    id: string;
    name: string;
    email: string;
    age: number;
    orderList: Array<Order>;
};
