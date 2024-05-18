import { Footer } from '#viewsfront/partials/footer'
import { Vite } from '#resources/helpers/asset'
import { Nav } from '#viewsfront/partials/nav'

interface BaseProps {
  title?: string
  children: JSX.Element
}

export function Base(props: BaseProps) {
  const { title = `Boutique`, children } = props

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
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}
