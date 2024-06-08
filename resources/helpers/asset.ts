import vite from '@adonisjs/vite/services/main'

function Image(props: {
  src: string
  alt?: string
  class?: string
  width?: string
  height?: string
}) {
  const url = vite.assetPath(props.src)

  return Html.createElement('img', {
    src: url,
    alt: props.alt,
    class: props.class,
    width: props.width,
    height: props.height,
  })
}

function Script(props: { src: string; type?: string }) {
  const url = vite.assetPath(props.src)

  return Html.createElement('script', { src: url, type: props.type })
}

function Entrypoint(props: { entrypoints: string[] }) {
  const assets = vite.generateEntryPointsTags(props.entrypoints)

  const elements = assets.map((asset) => {
    if (asset.tag === 'script') {
      return Html.createElement('script', {
        ...asset.attributes,
      })
    }

    return Html.createElement('link', {
      ...asset.attributes,
    })
  })

  return Html.createElement(Html.Fragment, {}, elements)
}

export const Vite = {
  Entrypoint,
  Image,
  Script,
}
