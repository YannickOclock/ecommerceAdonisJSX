import app from '@adonisjs/core/services/app'
import i18nManager from '@adonisjs/i18n/services/main'

export function convertPrice(price: number): string {
  return i18nManager.locale('fr').formatCurrency(price, {
    currency: 'EUR',
  })
}

export function productImagesPath(): string {
  return app.makePath(`/images/products`)
}
export function productImagesMinPath(): string {
  return app.makePath(`/images/products`)
}
export function productImagesSrc(image: string): string {
  return `${productImagesPath()}/${image}`
}
export function productImagesMinSrc(image: string): string {
  return `${productImagesMinPath()}/${image}`
}
