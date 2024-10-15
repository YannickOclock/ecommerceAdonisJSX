import factory from '@adonisjs/lucid/factories'
import Category from '#core/models/category'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    return {
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      published: true,
      order: 0,
      imagePath: '/images/fake.png',
    }
  })
  .build()
