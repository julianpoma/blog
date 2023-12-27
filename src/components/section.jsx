export function Section({ children, title }) {
  return (
    <section class="flex flex-col gap-y-3">
      <h2 class="font-bold text-xl">{title}</h2>
      {children}
    </section>
  )
}
