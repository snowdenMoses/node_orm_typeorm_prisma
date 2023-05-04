/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';


@Entity({ name: "posts" })
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    Id: number;

    @Column()
    post_details: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, user => user.post, { cascade: true})
    user: User;
}
