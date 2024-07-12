import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import ProductImage from '#core/models/product_image'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import slugify from 'slugify'
import Category from '#core/models/category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare price: number

  @column()
  declare stock: number

  @column()
  declare published: boolean

  @column()
  declare categoryId: string | null

  @belongsTo(() => Category, {
    foreignKey: 'categoryId',
  })
  declare category: BelongsTo<typeof Category>

  @hasMany(() => ProductImage)
  declare productImages: HasMany<typeof ProductImage>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static async createUUID(model: Product) {
    model.id = uuid()
  }

  @beforeCreate()
  static async createSlug(model: Product) {
    model.slug = slugify(model.name, { lower: true })
  }
}
