import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name:'Visit_record'})
export class Visits_record{
    @PrimaryColumn()
    VisitRID: string;
    @Column()
    PUID: string;
    @Column()
    docUID: string;
    @Column()
    Content: string;
    @Column()
    media: string;
}