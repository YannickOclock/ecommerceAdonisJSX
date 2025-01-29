import factory from '@adonisjs/lucid/factories'
import ProductImage from '#core/models/product_image'
import { ProductFactory } from './product_factory.ts'

export const ProductImageFactory = factory
  .define(ProductImage, ({ faker }) => {
    return {
      path: faker.image.urlLoremFlickr(),
      order: faker.number.int({ min: 1, max: 5 }),
    }
  })
  .relation('product', () => ProductFactory)
  .build()
