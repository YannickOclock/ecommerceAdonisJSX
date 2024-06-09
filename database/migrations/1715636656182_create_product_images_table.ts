import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_images'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable()

      table.string('path').notNullable()
      table.uuid('product_id').notNullable()

      table.foreign('product_id').references('products.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
//192c66bf-603e-4161-b66b-f03ed08e7e4f	affiche-adventure-medium.jpg	cf6fe9aa-1ce3-489f-82f0-cdad03ebf5c8
