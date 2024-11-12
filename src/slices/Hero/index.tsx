import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section
        className="relative"
        style={{
          background:
            'linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%)',
        }}
      >
        <section className="relative pt-36 pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
              <div className="lg:col-span-4" data-aos="fade-right">
                <div className="relative 2xl:-ml-64 lg:-ml-28 2xl:min-w-[130%] lg:w-[113%] w-full">
                  ;<PrismicNextImage field={slice.primary.featured_image} />
                </div>
              </div>
              <div className="lg:col-span-3" data-aos="fade-left">
                <div className="text-center sm:text-start">
                  <h1 className="text-3xl/snug sm:text-4xl/snug xl:text-5xl/snug font-semibold mb-7">
                    {slice.primary.title}
                  </h1>
                  <p className="text-base/relaxed text-gray-500">
                    <PrismicRichText field={slice.primary.description} />
                  </p>
                  <div className="flex gap-3 mt-10">{/* <EmailInput /> */}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      )
    </section>
  )
}

export default Hero
