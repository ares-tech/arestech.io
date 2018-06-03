import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from '../components/Contact'
import GalleryTeaser from '../components/GalleryTeaser'
import IntroSection from '../components/IntroSection'
import Media from '../components/Media'
import Partners from '../components/Partners'
import Ecosystem from '../components/Ecosystem'
import Roadmap from '../components/Roadmap'
import TokenDetail from '../components/TokenDetail'
import Team from '../components/Team'
import TokenSale from '../components/TokenSale'
import TokenUsage from '../components/TokenUsage'
import MainLayout from '../util/mainLayout'
import IntlProvider from '../util/intlProvider'
import NavBar from '../components/Navbar'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>

const Main = ({ langKey, messages }) => (
  <IntlProvider langKey={langKey} messages={messages}>
    <div>
      <NavBar langKey={langKey} />
      <MainLayout langKey={langKey}>
        <Section>
          <GalleryTeaser />
        </Section>
        <Section>
          <IntroSection />
        </Section>
        <Section>
          <Ecosystem />
        </Section>
        <Section>
          <Team />
        </Section>
        <Section>
          <Roadmap />
        </Section>
        <Section>
          <Media />
        </Section>
        <Section>
          <Partners />
        </Section>
        <Section>
          <TokenDetail />
        </Section>
        <Section>
          <TokenSale />
        </Section>
        <Section>
          <TokenUsage />
        </Section>
        <Section>
          <Contact />
        </Section>
      </MainLayout>
    </div>
  </IntlProvider>
)

export default Main
