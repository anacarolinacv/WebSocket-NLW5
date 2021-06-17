import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToMany, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity("connection")
class Connection {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;
    
    @Column()
    socket_id: string;
    
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User
    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Connection }