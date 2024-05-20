import Product from '#app/core/models/product'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'
import { DateTime } from 'luxon'

test.group('Product Model', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('it should create a product with a UUID', async ({ assert }) => {
    const product = new Product()
    product.name = 'Product 1'
    product.description = 'Description'
    product.price = 10
    product.stock = 10
    product.published = true

    await product.save()

    assert.isString(product.id)
  })
  test('it should add a created_at timestamp', async ({ assert }) => {
    const product = new Product()
    product.name = 'Product 1'
    product.description = 'Description'
    product.price = 10
    product.stock = 10
    product.published = true

    await product.save()

    assert.isObject(product.createdAt)
    // compare date
    assert.isTrue(DateTime.fromJSDate(product.createdAt.toJSDate()).diffNow().milliseconds < 1000)
  })
})
