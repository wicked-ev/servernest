import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
@Entity({name: 'Heart_rate_record'})
export class Heart_rate_record{
    @PrimaryColumn()
    heartReate_rid: string;
    @Column()
    PUID: string;
    // what type of values we gonna store
}