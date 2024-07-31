declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Layout
      ['mjml']: MjmlTag
      ['mj-head']: MjmlTag
      ['mj-style']: MjmlStyleTag
      ['mj-breakpoint']: MjmlBreakpointTag
      ['mj-body']: MjmlBodyTag
      // Elements
      ['mj-section']: MjmlSectionTag
      ['mj-column']: MjmlColumnTag
      ['mj-spacer']: MjmlSpacerTag
      ['mj-text']: MjmlTextTag
      ['mj-raw']: MjmlWChildrenTag
      ['mj-image']: MjmlImageTag
      ['mj-button']: MjmlButtonTag

      ['custom-alert']: CustomElement
      ['custom-table']: CustomElement
    }
    // -- specification of custom components
    interface CustomElement {
      ['children']?: JSX.Element
    }
    // -- specification to mjml --
    // - MJML Layout -
    interface MjmlTag {}
    interface MjmlWChildrenTag {
      ['children']?: Element | JSX.Element | string
    }
    interface MjmlStyleTag {
      ['inline']?: string
      ['children']?: string
    }
    interface MjmlBreakpointTag {
      ['width']?: string
    }
    interface MjmlBodyTag {
      ['width']?: string
      ['background-color']?: string
      ['css-class']?: string
      ['children']?: Element | JSX.Element
    }
    // - MJML Body Elements -
    interface MjmlSectionTag {
      ['padding']?: string
      ['children']?: JSX.Element
    }
    interface MjmlColumnTag {
      ['width']?: string
      ['children']?: JSX.Element
    }
    interface MjmlSpacerTag {
      ['height']?: string
    }
    interface MjmlTextTag {
      ['align']?: string
      ['color']?: string
      ['font-family']?: string
      ['font-size']?: string
      ['line-height']?: string
      ['font-weight']?: string
      ['padding-top']?: string
      ['padding-bottom']?: string
      ['css-class']?: string
      ['children']?: string | Element | JSX.Element
    }
    interface MjmlImageTag {
      ['padding']?: string
      ['src']?: string
      ['padding-top']?: string
      ['padding-bottom']?: string
      ['padding-left']?: string
      ['padding-right']?: string
      ['css-class']?: string
      ['children']?: string | Element | JSX.Element
    }
    interface MjmlButtonTag {
      ['href']?: string
      ['background-color']?: string
      ['font-family']?: string
      ['font-size']?: string
      ['inner-padding']?: string
      ['width']?: string
      ['css-class']?: string
      ['children']?: string | Element | JSX.Element
    }
    // -- specification to unpoly --
    interface HtmlTag {
      ['up-main']?: boolean
      ['up-hungry']?: boolean
      ['up-source']?: string
      ['load-fragment']?: boolean
    }

    interface HtmlAnchorTag {
      ['up-follow']?: boolean
      ['up-target']?: string
      ['up-layer']?: 'new' | 'swap' | 'shatter'
      ['up-accept-location']?: string
      ['up-mode']?: 'root' | 'modal' | 'drawer' | 'popup' | 'cover'
      ['up-on-accepted']?: string
    }

    interface HtmlFormTag {
      ['up-submit']?: boolean
      ['up-target']?: string
    }
  }
}
