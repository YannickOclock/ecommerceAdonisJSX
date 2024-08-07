interface SuccessMessageProps {
  message: string
}

export function SuccessMessage(props: SuccessMessageProps) {
  const { message } = props
  return (
    <custom-alert>
      <div role="alert" class="alert alert-success mb-4 flex justify-between">
        <div class="inline-flex gap-4">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
        <button class="btn btn-sm btn-square close">
          <i class="material-icons">close</i>
        </button>
      </div>
    </custom-alert>
  )
}
