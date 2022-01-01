import { IsAlpha, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CurrencyDTO {

    @IsNumber()
    @IsNotEmpty()
    currency: number

    @IsString()
    @IsAlpha()
    @MinLength(1)
    locale: string

};