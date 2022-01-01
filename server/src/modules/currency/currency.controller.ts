import { Body, Controller, Get, Post, SetMetadata, UseGuards } from "@nestjs/common";
import { CurrencyDTO } from "./dto/currency.dto";
import { CurrencyGuard } from "./guard/currency.guard";

@Controller('currency')
export class CurrencyController {

    @Get('get')
    async getCurrentCurrency() {

    };

    @Post('set')
    @UseGuards(CurrencyGuard)
    async setCurrency(@Body() request: CurrencyDTO ) {
        
    }

};