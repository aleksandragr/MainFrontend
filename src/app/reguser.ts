import { Role } from "./role";

export class Reguser{

    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    address: string;
    active: boolean;
    blocked: boolean;
    confirmationtoken: string;
    role: Role;
    password1: string;
    password2: string;

}