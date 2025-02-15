import app from '@adonisjs/core/services/app'
import i18nManager from '@adonisjs/i18n/services/main'

export function convertPrice(price: number): string {
  return i18nManager.locale('fr').formatCurrency(price, {
    currency: 'EUR',
  })
}

function isValidUrl(string: string): boolean {
  // Vérifier si l'URL commence par http:// ou https://
  const regex = /^(https?:\/\/)/
  if (!regex.test(string)) {
    return false
  }

  // Ensuite, on peut utiliser le constructeur URL pour vérifier la validité globale
  try {
    new URL(string)
    return true
  } catch (e) {
    return false
  }
}

export function productImagesPath(): string {
  return app.makePath(`/images/products`)
}
export function productImagesMinPath(): string {
  return app.makePath(`/images/products`)
}
export function productImagesSrc(image: string): string | undefined {
  if (image) {
    return isValidUrl(image) ? image : `${productImagesPath()}/${image}`
  }
}
export function productImagesMinSrc(image: string): string | undefined {
  if (image) {
    return isValidUrl(image) ? image : `${productImagesMinPath()}/${image}`
  }
}

export function categoryImagesPath(): string {
  return app.makePath(`/images/categories`)
}
export function categoryImagesMinPath(): string {
  return app.makePath(`/images/categories`)
}
export function categoryImagesSrc(image: string): string | undefined {
  if (image) {
    return `${categoryImagesPath()}/${image}`
  }
}
export function categoryImagesMinSrc(image: string): string | undefined {
  if (image) {
    return `${categoryImagesMinPath()}/${image}`
  }
}
