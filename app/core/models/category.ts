import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import slugify from 'slugify'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare published: boolean

  @column()
  declare order: number

  @column()
  declare imagePath: string | null

  @column()
  declare parentId: string | null

  @belongsTo(() => Category, {
    foreignKey: 'parentId',
  })
  declare parent: BelongsTo<typeof Category>

  @hasMany(() => Category, {
    foreignKey: 'parentId',
  })
  declare subCategories: HasMany<typeof Category>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static async createUUID(model: Category) {
    model.id = uuid()
  }

  @beforeCreate()
  static async createSlug(model: Category) {
    model.slug = slugify(model.name, { lower: true })
  }
}
