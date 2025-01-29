// database/factories/ProductFactory.ts
import factory from '@adonisjs/lucid/factories'
import Product from '#core/models/product'
import { ProductImageFactory } from './product_image_factory.ts'
import { v4 as uuid } from 'uuid'

export const ProductFactory = factory
  .define(Product, ({ faker }) => {
    const name = faker.commerce.productName()

    return {
      name,
      description: faker.commerce.productDescription(),
      price: faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
      stock: faker.number.int({ min: 0, max: 100 }),
      published: true,
      categoryId: uuid(),
    }
  })
  .relation('productImages', () => ProductImageFactory)
  .build()
