import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'



function ContactDetails() {
  return (
    <FadeIn>
      
      <p className="mt-6 text-base">
        <strong>Email me at:</strong> {''}{' '}
        <a
          href="mailto:ethan@TeletaDevelopment.com"
          className="text-neutral-950 hover:underline"
        >
          ethan@TeletaDevelopment.com
        </a>
      </p>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Teleta Development | Contact',
  description:
    'Contact Teleta Development, a website development company in Kelowna Canada',
  keywords: 'canadian, kelowna, teleta development, ethan breitkreutz, small business, web development',
  author: 'Teleta Development',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <ContactDetails />
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
       
        <Border className="mt-16 pt-16">
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Follow me
          </h2>
          <SocialMedia className="mt-6" />
        </Border>
      </Container>
    </>
  )
}
