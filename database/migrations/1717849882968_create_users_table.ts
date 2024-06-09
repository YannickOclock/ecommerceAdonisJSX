import { BaseSchema } from '@adonisjs/lucid/schema'
import { UserRole } from '#admin/user/enums/user_role'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable()
      table.string('lastname').nullable()
      table.string('firstname').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.integer('role').unsigned().defaultTo(UserRole.User)
      table.integer('verified').unsigned().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.primary(['id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
