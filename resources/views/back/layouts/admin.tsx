import { Header } from '#viewsback/partials/header'
import { Footer } from '#viewsback/partials/footer'
import { Vite } from '#resources/helpers/asset'
import { Nav } from '#viewsback/partials/nav'

interface AdminProps {
  title?: string
  children: JSX.Element
}

export function Admin(props: AdminProps) {
  const { title = 'Tableau de bord', children } = props

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang={'fr'}>
        <head>
          <meta charset={'UTF-8'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
          <title>{title}</title>
          <Vite.Entrypoint
            entrypoints={['resources/assets/back/css/app.css', 'resources/assets/back/js/app.js']}
          />
        </head>
        <body>
          <Header />
          <Nav />
          <div id="main-container">
            <div id="main-content">
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
