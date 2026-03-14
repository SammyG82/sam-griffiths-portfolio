import { useScrollReveal } from '../hooks/useScrollReveal'
import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  useScrollReveal()

  return (
    <div style={{ paddingTop: '60px', position: 'relative', zIndex: 10, minHeight: '100vh' }}>
      <ContactSection sectionNum="01" minimal />
    </div>
  )
}
