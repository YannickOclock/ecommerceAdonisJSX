import Category from '#core/models/category'
import { ResultOf } from '#types/common'

export interface StoreCategoryDTO {
  name: string
  description: string | null | undefined
  published: boolean | null | undefined
  order: number | null | undefined
  imagePath: string | undefined
  parent: string | null | undefined
}

interface UpdateCategoryDTO {
  id: string
  name: string
  description: string | null | undefined
  published: boolean | null | undefined
  order: number | null | undefined
  imagePath: string | undefined
  parent: string | null | undefined
}

export type AdminCategoryListQueryResult = ResultOf<CategoryRepository, 'all'>
export type AdminCategoryEditQueryResult = ResultOf<CategoryRepository, 'find'>

export class CategoryRepository {
  async all() {
    return await Category.query().orderBy('name', 'asc').limit(10)
  }

  async find(id: string): Promise<Category> {
    return await Category.query().where('id', '=', id).firstOrFail()
  }

  async wideCategoryFromPayload(payload: StoreCategoryDTO, category: Category) {
    category.name = payload.name
    if (payload.description) category.description = payload.description
    category.published = false
    if (payload.published) category.published = true
    if (payload.order && payload.order > 0) category.order = payload.order
    if (payload.imagePath) category.imagePath = payload.imagePath
    if (payload.parent) {
      //category.parent = await this.find(payload.parent)
    }
  }

  async create(payload: StoreCategoryDTO): Promise<string> {
    const category = new Category()
    this.wideCategoryFromPayload(payload, category)
    await category.save()
    return category.id
  }

  async update(payload: UpdateCategoryDTO): Promise<void> {
    const category = await this.find(payload.id)
    this.wideCategoryFromPayload(payload, category)
    await category.save()
  }

  async deleteImage(categoryId: string): Promise<void> {
    const category = await this.find(categoryId)
    category.imagePath = null
    await category.save()
  }

  async switch(categoryId: string): Promise<boolean> {
    const category = await this.find(categoryId)
    category.published = !category.published
    await category.save()
    return category.published
  }
}
