import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { categories } from '../../category/entities/category.entity';
@Entity()
export class products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne((type) => categories, (categories) => categories.id, {
    cascade: true,
  })
  cats: categories;
}
