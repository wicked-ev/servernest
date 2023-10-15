import { Entity,Column,PrimaryColumn } from "typeorm";

@Entity({name:"meds_record"})
export class meds_record{
    @PrimaryColumn()
    MedRIDRID: string;
    @Column()
    IDMed: string;
    @Column()
    PUID: string;
    @Column()
    DocUID: string;
    @Column()
    DateT: Date;
    @Column()
    DateQ: Date;
}