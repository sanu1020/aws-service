import { Optional } from "@nestjs/common";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    public: false | boolean;
}
