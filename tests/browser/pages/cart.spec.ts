import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import { ProductFactory } from '#database/factories/product_factory'

test.group('Page accueil - test sur le panier', (group) => {
  group.each.setup(() => {
    //TODO: il faut créer la commande db:seed dans Adonis
    //testUtils.db().withGlobalTransaction()
    //CategoryFactory.createMany(2)
    ProductFactory.with('category', 1).createMany(2)
  })
  group.each.teardown(async () => {
    await testUtils.db().truncate()
  })
  test('Il doit y avoir un panier vide en session', async ({ visit }) => {
    const page = await visit('/')
    await page.pause()
    await page.assertExists(
      page.locator('a.btn-cart > span.quantity > span', {
        hasText: '0',
      })
    )
  })
  test('Il doit y avoir un panier en session avec un produit', async ({
    browserContext,
    visit,
  }) => {
    await browserContext.setSession({
      cart: {
        products: [
          {
            id: '123',
            name: 'Mon produit',
            price: 199,
            quantity: 1,
          },
        ],
      },
    })
    const page = await visit('/')
    await page.assertExists(
      page.locator('a.btn-cart > span.quantity > span', {
        hasText: '1',
      })
    )
  })
  test('On doit pouvoir ajouter un produit au panier', async ({ visit }) => {
    const page = await visit('/')
    await page.waitForLoadState('domcontentloaded')

    // Etape 1 du panier
    const product = page.locator('div.product').first()
    const button = product.getByRole('link', { name: 'Aperçu rapide', exact: false }).first()
    const buttonHref = await button.getAttribute('href')
    if (buttonHref) {
      await product.hover()
      const navPromise = page.waitForURL(buttonHref)
      await button.click()
      await navPromise

      // Etape 2 du panier
      const submitBtn = page
        .getByRole('button', { name: 'Ajouter au panier', exact: false })
        .first()
      await submitBtn.click()

      // Etape 3 du panier
      const cancelBtn = page.getByRole('link', { name: 'Continuer mes achats' }).first()
      await cancelBtn.click()

      await page.assertExists(
        page.locator('a.btn-cart > span.quantity > span', {
          hasText: '1',
        })
      )
    } else {
      throw new Error("Le lien du produit n'a pas été trouvé !")
    }
  })
})
