import { Column, Entity } from "typeorm";

@Entity()
export class CurrencyEntity {

    @Column({ default: 0, type: "number" })
    currency: number

    @Column({ default: "en-US", type: "string" })
    locale: string

};