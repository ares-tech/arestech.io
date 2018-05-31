import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
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
import MainLayout from '../util/mainLayout'
import NavBar from '../components/Navbar'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>

addLocaleData([...en, ...zh])

const Main = ({ langKey, messages }) => (
  <IntlProvider locale={langKey} messages={messages}>
    <div>
      <NavBar />
      <MainLayout>
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
          <Contact />
        </Section>
      </MainLayout>
    </div>
  </IntlProvider>
)

export default Main
