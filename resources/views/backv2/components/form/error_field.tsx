import { getFlashMessages } from '#resources/helpers/flash_messages'

interface ErrorFieldProps {
  name: string
}

export function ErrorField(props: ErrorFieldProps) {
  const { name, children } = props
  return (
    <>
      <div class={'w-1/6'}>{''}</div>
      <div class={'w-4/6'}>
        {getFlashMessages().has(`inputErrorsBag.${name}`) &&
          getFlashMessages()
            .get(`inputErrorsBag.${name}`)
            .map((message: string) => {
              return (
                <div class={'alert alert-error mt-4 text-sm p-2'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )
            })}
      </div>
    </>
  )
}
