import { Footer } from '#viewsfront/partials/footer'
import { Vite } from '#resources/helpers/asset'
import { Nav } from '#viewsfront/partials/nav'
import { HttpContext } from '@adonisjs/core/http'
import { Slider } from '#viewsfront/components/slider'
import { FlashMessages } from '#viewsfront/partials/flash_messages'

interface BaseProps {
  title?: string
  slider?: boolean
  children: JSX.Element
}

export async function Base(props: BaseProps) {
  const { title = `Boutique`, slider = false, children } = props
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
            <FlashMessages />
          </div>
          {/*<Main />*/}
          {slider && (
            <main>
              <Slider />
            </main>
          )}
          <main class={'container'} up-main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  )
}
