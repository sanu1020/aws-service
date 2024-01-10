import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { UserDto } from "./dto/user.dto";
import { error } from "console";

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService) {}

    @Post('signup')
    SignUp(@Body() dto: AuthDto) {
        return this.authservice.SignUp(dto)
    }

    @Post('signin')
    SignIn() {
        return this.authservice.SignIn()
    }

    @Get('')
    GetUser(){
        return this.authservice.GetUsers()
    }

    @Post('')
    @UsePipes(ValidationPipe)
    CreateUser(@Body() user: UserDto){
        return this.authservice.CreateUser(user)
    }

    @Get(':id')
    GetUserById(@Param('id', ParseIntPipe) id: number){
        const user = this.authservice.GetUserById(id)
        if(user) return user
        else throw new HttpException(`user with ${id} not found`, HttpStatus.NOT_FOUND)
    }
}