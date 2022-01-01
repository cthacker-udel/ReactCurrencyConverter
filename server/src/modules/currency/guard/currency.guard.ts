import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { Request } from "express";
import { Observable } from "rxjs";
import { CurrencyDTO } from "../dto/currency.dto";

@Injectable()
export class CurrencyGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const request: Request = context.switchToHttp().getRequest();
        const convertedDto: CurrencyDTO = plainToClass(CurrencyDTO, request.body);
        try {
            validateOrReject(request);
            return true;
        } catch (error) {
            throw new BadRequestException('Invalid request for currency endpoint, request must be proper json format');
        }

    }


}