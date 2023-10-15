import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: "account"})
export class Accounts{
    @PrimaryColumn()
    AccID: string;
    @Column()
    UID: string;
    @Column()
    DiseaseRID: string;
    @Column()
    heartReate_RID: string;
    @Column()
    MedRID: string;
    @Column()
    VisitRID: string;
    @Column()
    Acc_Create_date: Date;
}