import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <Footer />
    </main>
  )
}
