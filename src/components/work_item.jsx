export function WorkItem({ children, href, company, role, timeline }) {
  return (
    <div>
      <div class="flex flex-row justify-between">
        <a
          target="_blank"
          href={href}
          class="cursor-pointer text-base font-semibold hover:underline"
        >
          {company}
        </a>
        <span class="text-muted text-sm tabular-nums">{timeline}</span>
      </div>

      <span class="font-mono text-sm leading-none">{role}</span>

      <p class="text-muted mt-1 text-pretty text-sm">{children}</p>
    </div>
  )
}
