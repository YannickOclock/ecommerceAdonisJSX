import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import Product from '#core/models/product'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProductImage extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare path: string

  @column()
  declare order: number

  @column()
  declare productId: string

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static async createUUID(model: ProductImage) {
    model.id = uuid()
  }
}
