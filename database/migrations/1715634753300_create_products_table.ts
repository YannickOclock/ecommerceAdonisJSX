import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')

      table.string('name').notNullable()
      table.text('description').nullable()
      table.integer('price').unsigned().defaultTo('0')
      table.integer('stock').defaultTo('0')
      table.boolean('published').defaultTo('1')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
