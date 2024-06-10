import Element = JSX.Element

export function Layout(props: { children: Element }) {
  const { children } = props

  return (
    <mjml>
      <mj-head>
        <mj-style inline="inline">
          {
            '.hide-desktop-block,.hide-desktop-inline-block,.hide-block{display:none!important;mso-hide:all!important}'
          }
        </mj-style>
        <mj-style>
          {
            '.mjbody a{color:inherit}@media (max-width: 480px){.hide-mobile-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-block{display:block!important}.hide-mobile-inline-block{max-height:0px;overflow:hidden;display:none!important}.hide-desktop-inline-block{display:inline-block!important}}'
          }
        </mj-style>
        <mj-style>
          {
            '.mjbody a, .mjbody a:hover, .mjbody a:active, .mjbody a[href], .mjbody a[href]:hover, .mjbody a[href]:active {color: inherit;text-decoration: underline}'
          }
        </mj-style>
        <mj-breakpoint width="480px" />
      </mj-head>
      <mj-body width="600px" background-color="#333" css-class="mjbody">
        {children}
      </mj-body>
    </mjml>
  )
}
