export function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="__blank"
      class="text-muted border-border hover:text-accent inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md border transition-colors focus-visible:outline-none"
    >
      {children}
    </a>
  )
}
