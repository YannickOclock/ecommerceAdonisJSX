import { Header } from '#viewsback/partials/header'
import { Footer } from '#viewsback/partials/footer'
import { Vite } from '#resources/helpers/asset'
import { Nav } from '#viewsback/partials/nav'
import { FlashMessages } from '#viewsback/partials/flash_messages'

interface AdminProps {
  title?: string
  breadcrumb?: JSX.Element | string
  header?: string
  bodyTitle?: string
  children: JSX.Element
}

export function Admin(props: AdminProps) {
  const {
    title = 'Tableau de bord',
    breadcrumb = '',
    header = '',
    bodyTitle = '',
    children,
  } = props

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
            <header id="header-toolbar">
              {/* block breadcrumb */}
              <span class="breadcrumb">{breadcrumb}</span>
              {/* block header ici */}
              <h1>{header}</h1>
            </header>
            <div id="main-content">
              <FlashMessages />
              <div id="main">
                <div class="card-header">
                  {/* block body_title ici */}
                  <h3 class="card-header-title">{bodyTitle}</h3>
                  <i class="material-icons">settings</i>
                </div>
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  )
}
