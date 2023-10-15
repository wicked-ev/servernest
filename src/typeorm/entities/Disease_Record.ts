import {Column, Entity, OneToOne, PrimaryColumn} from 'typeorm'

@Entity({name: 'Disease_record'})
export class Disease_record{
    @PrimaryColumn()
    DRID: string;
    @Column()
    PUID:string;
    @Column()
    DUID:string;
    @Column()
    ID_disease:string;
    @Column()
    date_of_infe:Date;
    @Column()
    date_of_cure:Date;
}