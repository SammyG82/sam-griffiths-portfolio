interface SectionHeaderProps {
  num: string
  title: string
  jpSubtitle: string
  minimal?: boolean
  headingLevel?: 1 | 2
}

export default function SectionHeader({ num, title, jpSubtitle, minimal = false, headingLevel = 2 }: SectionHeaderProps) {
  const Tag: 'h1' | 'h2' = headingLevel === 1 ? 'h1' : 'h2'
  return (
    <div className="section-header reveal">
      {!minimal && <span className="section-num">{num}</span>}
      {!minimal && <div className="section-rule"></div>}
      <div>
        <Tag className="section-title">{title}</Tag>
        <div className="section-jp">{jpSubtitle}</div>
      </div>
    </div>
  )
}
