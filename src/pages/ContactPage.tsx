import { useScrollReveal } from '../hooks/useScrollReveal'
import ContactSection from '../components/ui/ContactSection'

export default function ContactPage() {
  useScrollReveal()

  return (
    <div className="page-wrapper">
      <ContactSection sectionNum="01" minimal headingLevel={1} />
    </div>
  )
}
