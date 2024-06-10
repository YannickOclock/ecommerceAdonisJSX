import { Layout } from '#viewsfront/emails/layout'

interface RegisterConfirmationProps {
  confirmationLink: string
}

export function RegisterConfirmation(props: RegisterConfirmationProps) {
  const { confirmationLink } = props

  return (
    <Layout>
      <>
        <mj-section padding="0px">
          <mj-column>
            <mj-spacer height="30px"></mj-spacer>
          </mj-column>
        </mj-section>
        <mj-section background-color="#222" padding-bottom="0px">
          <mj-column width="100%">
            <>
              <mj-text
                align="center"
                color="#9b9b9b"
                font-family="Arial, sans-serif"
                font-size="20px"
                line-height="1.3"
                font-weight="normal"
                padding-top="10px"
                padding-bottom="10px"
              >
                Lien de confirmation d'inscription
              </mj-text>
              <mj-raw>{'<!-- htmlmin:ignore --><!--<![endif]--><!-- htmlmin:ignore -->'}</mj-raw>
              <mj-text
                align="center"
                color="#FFFFFF"
                font-family="Arial, sans-serif"
                font-size="36px"
                line-height="1.3"
                font-weight="normal"
                padding-top="10px"
                padding-bottom="10px"
              >
                Bonjour, Yannick KUHN
              </mj-text>
              <mj-raw>{'<!-- htmlmin:ignore --><!--[if !mso]><!--><!-- htmlmin:ignore -->'}</mj-raw>
              <mj-text
                align="center"
                color="#FFFFFF"
                font-family="Arial, sans-serif"
                font-size="16px"
                line-height="1.3"
                font-weight="normal"
                padding-top="10px"
                padding-right="20px"
                padding-bottom="20px"
                padding-left="20px"
              >
                Merci de vous être inscrit à notre site e-commerce. Pour confirmer votre
                inscription, veuillez cliquer sur le lien suivant.
              </mj-text>
              <mj-raw>{'<!-- htmlmin:ignore --><!--[if !mso]><!--><!-- htmlmin:ignore -->'}</mj-raw>
            </>
          </mj-column>
        </mj-section>
        <mj-section background-color="#222" padding-top="0px" padding-bottom="0px">
          <mj-column width="100%">
            <mj-image
              padding="0px 0px 0px 0px"
              src="https://miro.medium.com/v2/resize:fit:1200/1*Je596Sbk21bNFAMG3ROG7w.jpeg"
              padding-top="0px"
              padding-bottom="0px"
              padding-left="0px"
              padding-right="0px"
            ></mj-image>
          </mj-column>
        </mj-section>
        <mj-section background-color="#222">
          <mj-column width="100%">
            <>
              <mj-button
                href={confirmationLink}
                background-color="#C5900C"
                font-family="Arial, sans-serif"
                font-size="16px"
                inner-padding="10px 25px 10px 25px"
                width="100%"
              >
                Confirmer mon inscription
              </mj-button>
              <mj-raw>{'<!-- htmlmin:ignore --><!--[if !mso]><!--><!-- htmlmin:ignore -->'}</mj-raw>
            </>
          </mj-column>
        </mj-section>
        <mj-section background-color="#222">
          <mj-column width="100%">
            <mj-text
              align="center"
              color="#FFFFFF"
              font-family="Arial, sans-serif"
              font-size="16px"
              line-height="1.3"
              font-weight="normal"
              padding-top="3px"
              padding-bottom="3px"
            >
              <div>
                Si vous n'êtes pas à l'origine de cette inscription, veuillez ignorer cet email.
              </div>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="0px">
          <mj-column>
            <mj-spacer height="30px"></mj-spacer>
          </mj-column>
        </mj-section>
      </>
    </Layout>
  )
}
