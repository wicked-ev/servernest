import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: "meds"})
export class meds{
    @PrimaryColumn()
    IDMed: string;
    @Column()
    sname: string;
    @Column()
    dname: string;
    @Column()
    dtype: string;
    @Column()
    dcategory:string;
}