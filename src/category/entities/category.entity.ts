import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { products } from '../../product/entities/product.entity';
@Entity()
export class categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;

  @OneToMany((type) => products, (product) => product.cats)
  public products: products[];
}
