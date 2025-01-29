import factory from '@adonisjs/lucid/factories'
import Category from '#core/models/category'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    const name = faker.commerce.department()
    return {
      name,
      description: faker.lorem.sentence(),
      published: true,
      order: faker.number.int({ min: 1, max: 100 }),
      imagePath: faker.image.urlLoremFlickr({ category: 'business' }),
      parentId: null, // On assigne des sous-catégories plus tard
    }
  })
  .build()
