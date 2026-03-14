interface SectionHeaderProps {
  num: string
  title: string
  jpSubtitle: string
  minimal?: boolean
}

export default function SectionHeader({ num, title, jpSubtitle, minimal = false }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      {!minimal && <span className="section-num">{num}</span>}
      {!minimal && <div className="section-rule"></div>}
      <div>
        <div className="section-title">{title}</div>
        <div className="section-jp">{jpSubtitle}</div>
      </div>
    </div>
  )
}
