import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const services = [
  ['Website Design'],
  ['Website Development'],
  ['E-Commerce Solutions'],
  ['Blog Pages'],
  ['Search Engine Optimization (SEO)'],
  ['Website Maintenance and Support'],
  ['Responsive Web Design'],
  ['Website Redesign'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-base font-semibold tracking-wider text-white sm:text-left">
            Teleta Development will be offering
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {services.map(([service]) => (
              <li key={service}>
                <FadeIn>
                  <p className="text-white">{service}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Take a look at some of my projects"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          More will be coming soon, but here&apos;s what I&apos;ve made so far: &nbsp;
          <a
            href="https://stoicquotes.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Stoic Quotes
          </a>
          &nbsp; and&nbsp;
          <a
            href="https://literallyonecharger.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            &nbsp; Literally One Charger
          </a>
          .
        </p>
      </SectionIntro>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="What I Offer"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Teleta Development, I specialize in delivering top-notch website
          solutions tailored to your business needs. My services are designed to
          give you an online presence and help your business.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website Development">
              I create responsive, high-performance websites that meet your
              business objectives and enhance user engagement. My development
              process is tailored to ensure your site functions seamlessly
              across all devices.
            </ListItem>
            <ListItem title="Website Design">
              I craft visually stunning websites that resonate with your brand
              identity. I prioritize user experience to make navigation
              intuitive and enjoyable.
            </ListItem>
            <ListItem title="Performance Optimization">
              I focus on making your website faster and more efficient. With my
              performance optimization techniques, I ensure your site loads
              quickly, providing an excellent experience for your visitors.
            </ListItem>
            <ListItem title="Search Engine Optimization (SEO)">
              My expertise in SEO helps your website rank higher on search
              engines, increasing visibility and attracting more organic
              traffic. I implement best practices to enhance your online
              presence and drive sustainable growth.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Professional Website Development in Kelowna
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Teleta Development, I specialize in creating websites for
            business owners in Kelowna, the Okanagan Valley, and Canada. Whether
            you need a new website, a redesign, ongoing maintenance, or some
            light graphic design, feel free to reach out to me, and let&apos;s make
            something happen!
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <ContactSection />
    </>
  )
}
