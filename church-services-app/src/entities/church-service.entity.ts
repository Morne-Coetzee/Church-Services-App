import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ChurchService {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    date!: Date;

    @Column()
    description!: string;
}