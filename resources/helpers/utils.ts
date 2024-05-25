import i18nManager from '@adonisjs/i18n/services/main'

export function convertPrice(price: number) {
  return i18nManager.locale('fr').formatCurrency(price, {
    currency: 'EUR',
  })
}
