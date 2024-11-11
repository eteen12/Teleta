import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'

import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'

import { SectionIntro } from '@/components/SectionIntro'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My Values"
        title="Core Principles That Guide My Work"
        invert
      >
        <p>
          In my journey as a web developer, I&apos;ve cultivated a set of core values
          that guide my interactions with clients and my approach to projects.
          These principles ensure that I deliver high-quality work while
          maintaining strong relationships with those I collaborate with.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Honesty" invert>
            <p>
              I believe in transparent communication and delivering on promises.
              My clients can trust that I will provide accurate timelines,
              realistic expectations, and genuine feedback throughout the
              development process.
            </p>
          </GridListItem>
          <GridListItem title="Respect" invert>
            <p>
              Every client and their vision deserve respect. I actively listen
              to my clients ideas and feedback, valuing their input and
              collaborating closely to create the best possible outcome.
            </p>
          </GridListItem>
          <GridListItem title="Integrity" invert>
            <p>
              Upholding integrity means doing the right thing, even when no one
              is watching. I strive to maintain ethical practices in all my
              work, ensuring that I act in the best interest of my clients and
              the community.
            </p>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Teleta Development | About Me',
  description:
    'Meet Ethan Breitkreutz, Canadian Business owner and CEO of Teleta Development',
  keywords: 'canadian, kelowna, teleta development, ethan breitkreutz, ',
  author: 'Teleta Development',
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About Me" title="Meet Ethan Breitkreutz">
        <p>
          I&apos;m a passionate web developer based in Kelowna, dedicated to creating
          high-quality websites that not only look great but also perform
          exceptionally well. With a strong foundation in coding, I strive to
          deliver solutions that meet my clients needs.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            When I&apos;m not coding, you can find me dirt biking, studying, reading,
            and enjoying music, etc. I find that these hobbies make my life
            balanced. My goal is to help local businesses in Kelowna achieve an
            online presence. My number one value is honesty, and I strive to
            provide the best service you can find in Kelowna at good prices.
          </p>
        </div>
      </PageIntro>
      <Culture />

      <ContactSection />
    </>
  )
}
