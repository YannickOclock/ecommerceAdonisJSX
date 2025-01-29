import { CategoryFactory } from '#database/factories/category_factory'
import { ProductFactory } from '#database/factories/product_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const categories = await CategoryFactory.createMany(3)
    for (const category of categories) {
      await ProductFactory.merge({
        categoryId: category.id,
      })
        .with('productImages', 3) // Chaque produit aura 3 images
        .createMany(3) // Créer 3 produits pour chaque catégorie
    }
  }
}
