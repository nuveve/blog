import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        web3conomics
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Insights into the economics of the decentralized web.
      </h4>
    </section>
  )
}

export default Intro
