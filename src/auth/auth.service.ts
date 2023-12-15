import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";




@Injectable({})
export class AuthService {
    SignUp(dto:AuthDto) {
        console.log({dto})
        if(dto.password==='111'){
            return {msg: 'password is a number'}
        }

        return {msg:'hello you sign in'};
    }

    SignIn(){
        return {msg:"you sign up"};
    }
}