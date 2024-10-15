import factory from '@adonisjs/lucid/factories'
import Product from '#core/models/product'
import { CategoryFactory } from '#database/factories/category_factory'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      price: faker.number.int({ min: 10, max: 1000 }),
      stock: faker.number.int({ min: 1, max: 10 }),
      published: true,
    }
  })
  .relation('category', () => CategoryFactory)
  .build()
