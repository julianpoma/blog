export function Badge({ children }) {
  return (
    <div class="bg-accent inline-flex items-center text-nowrap rounded-md border border-transparent px-2 py-0.5 font-mono text-xs font-semibold text-slate-100">
      {children}
    </div>
  )
}
