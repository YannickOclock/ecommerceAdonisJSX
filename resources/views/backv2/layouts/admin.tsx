import { Vite } from '#resources/helpers/asset'
import { Drawer } from '#viewsbackv2/components/drawer'
import { Nav } from '#viewsbackv2/partials/nav'
import { Header } from '#viewsbackv2/partials/header'

interface AdminProps {
  children: JSX.Element
}

export function Admin(props: AdminProps) {
  const { children } = props
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang={'fr'}>
        <head>
          <meta charset={'UTF-8'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
          <title>{'Test Backend in DaisyUI'}</title>
          <Vite.Entrypoint
            entrypoints={[
              'resources/assets/backv2/css/app.css',
              'resources/assets/backv2/js/app.js',
            ]}
          />
        </head>
        <body>
          <Header />
          <Drawer nav={<Nav />}>{children}</Drawer>
        </body>
      </html>
    </>
  )
}
