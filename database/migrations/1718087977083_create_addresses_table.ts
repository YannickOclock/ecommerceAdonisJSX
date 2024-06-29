import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected countriesTableName = 'countries'
  protected addressesTableName = 'addresses'

  async up() {
    this.schema.createTable(this.addressesTableName, (table) => {
      table.uuid('id').notNullable()
      table.string('lastname')
      table.string('firstname')
      table.string('phone_number').nullable()
      table.string('address_line1')
      table.string('address_line2').nullable()
      table.string('post_code')
      table.string('city')
      table.string('country')
      table.boolean('default').defaultTo(0)
      table.uuid('user_id')
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.addressesTableName)
    this.schema.dropTable(this.countriesTableName)
  }
}
