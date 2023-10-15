import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryColumn()
    uid: string;
    @Column()
    CardID: number;
    @Column()
    Birth_date: Date;
    @Column()
    Death_date: Date;
    @Column()
    Name: string;
    @Column()
    Address:  string;
    @Column()
    email: string;
    @Column()
    password: string; 
    @Column()
    salt: string;
    @Column()
    Role: String;
}






