type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, subtitle, id }: Props) {
  return (
    <div id={id} className="scroll-mt-24">
      {eyebrow ? <p className="text-sm font-semibold text-[#1E40AF]">{eyebrow}</p> : null}
      <h2 id={id ? `${id}-heading` : undefined} className="text-pretty text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-pretty text-gray-600">{subtitle}</p> : null}
    </div>
  )
}
