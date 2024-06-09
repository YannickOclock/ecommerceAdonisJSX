import { Footer } from '#viewsfront/partials/footer'
import { Vite } from '#resources/helpers/asset'
import { Nav } from '#viewsfront/partials/nav'
import { HttpContext } from '@adonisjs/core/http'

interface BaseProps {
  title?: string
  children: JSX.Element
}

export async function Base(props: BaseProps) {
  const { title = `Boutique`, children } = props
  const { auth } = HttpContext.getOrFail()
  await auth.check()

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang={'fr'}>
        <head>
          <meta charset={'UTF-8'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
          <title>{title}</title>
          <Vite.Entrypoint
            entrypoints={[
              'resources/assets/front/css/app.css',
              'resources/assets/front/js/app.tsx',
            ]}
          />
        </head>
        <body>
          {/*<Header />*/}
          <Nav />
          {/*<Flash message />*/}
          <div class="flash_messages">
            {!!auth.user && !auth.user.verified && (
              <div class="alert alert-warning alert-dismissible" role="alert">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
                <div class="alert-message">
                  <strong>Votre compte n'est pas activé</strong>,{' '}
                  <a href="#">renvoyer le lien d'activation</a>
                </div>
              </div>
            )}
          </div>
          {/*<Main />*/}
          <main up-main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}
