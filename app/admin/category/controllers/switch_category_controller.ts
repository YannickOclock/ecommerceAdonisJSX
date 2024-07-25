import { HttpContext } from '@adonisjs/core/http'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class SwitchCategoryController {
  constructor(
    private categoryRepository: CategoryRepository,
    private productRepository: ProductRepository
  ) {}

  async switch({ request, response, session }: HttpContext) {
    const categoryId = request.param('id')

    // On récupère la catégorie avec ses sous-catégories
    const category = await this.categoryRepository.findWithSubCategories(categoryId)

    // on détermine la valeur du booléen
    const published = !category.published

    // On désactive cette catégorie (ainsi que ses produits)
    await this.categoryRepository.switch(categoryId, published)
    await this.productRepository.switchFromCategory(categoryId, published)

    // Pour chacune des sous-catégories, on applique la même chose, ainsi que les sous-produits
    // todo voir pour effectuer cette stratégie de façon récursive
    for (const subCategory of category.subCategories) {
      await this.categoryRepository.switch(subCategory.id, published)
      await this.productRepository.switchFromCategory(subCategory.id, published)
    }

    session.flash('notification', {
      type: 'success',
      message: `La catégorie a été ${published ? 'activé' : 'désactivé'} avec succès (ainsi que les produits de celle-ci)`,
    })
    if (category.parent) {
      response.redirect().toRoute('admin.category.list', {
        parentId: category.parent.id,
      })
    } else {
      response.redirect().toRoute('admin.category.list')
    }
  }
}
