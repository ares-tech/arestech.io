import React from 'react'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Main from '../components/Main'
import config from '../../data/SiteConfig'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import GalleryTeaser from '../components/GalleryTeaser'
import IntroSection from '../components/IntroSection'
import Media from '../components/Media'
import Partners from '../components/Partners'
import Ecosystem from '../components/Ecosystem'
import Roadmap from '../components/Roadmap'
import TokenDetail from '../components/TokenDetail'
import TokenSale from '../components/TokenSale'
import TokenUsage from '../components/TokenUsage'
import Team from '../components/Team'
import MainLayout from '../util/mainLayout'
import '../style/custom.css'

const Section = ({ children, className }) => <div className={className}>{children}</div>

class Index extends React.PureComponent {
  render() {
    return (
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
    )
  }
}

export default Index
