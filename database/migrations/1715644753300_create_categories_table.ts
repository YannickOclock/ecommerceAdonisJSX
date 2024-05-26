import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')

      table.string('name').notNullable()
      table.text('description').nullable()
      table.boolean('published').defaultTo('1')
      table.integer('order').unsigned().defaultTo('0')
      table.string('image_path').nullable()

      table.uuid('parent_id').nullable()
      table.foreign('parent_id').references('categories.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.primary(['id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
