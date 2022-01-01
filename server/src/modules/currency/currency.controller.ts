import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('currency')
export class CurrencyController {

    @Get('get')
    async getCurrentCurrency() {

    };

    @Post('set')
    async serCurrency(@Body() )

};