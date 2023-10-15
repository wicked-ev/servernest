import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
@Entity({name: "Disease"})
export class Disease{
    @PrimaryColumn()
    ID_disease: string;
    @Column()
    sname: string;
    @Column()
    dname: string;
    @Column()
    dtype: string;
    @Column()
    dcategory:string;
    @Column()
    CureID: string;
}