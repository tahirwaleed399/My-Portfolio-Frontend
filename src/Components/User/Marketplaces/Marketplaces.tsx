import Heading from '../../Shared/Heading/Heading'

const Marketplaces = () => {
  return (
    <section id="market-places">

<Heading heading='Me on MarketPlaces' sectionNo={5} id='marketPlaces'></Heading>
<main className='flex w-screen flex-col mt-10 justify-center items-center gap-16 md:flex-row'>
    <div className="marketplace hover:scale-125 transition-all ">
<a target='_blank' href="https://fiverr.com/tahirwaleed399"><img  className='h-48'  src="/Images/fiverr.webp" alt="fiverr" /></a>
    </div> 
    <div className="marketplace hover:scale-125 transition-all ">
        <a href="https://www.upwork.com/freelancers/~015a888ce10d4e2d95" target="_blank" rel="noopener noreferrer">
        <img   className='h-48' src="/Images/upwork.webp" alt="upwork" />
        </a>

    </div>
</main>
    </section>
  )
}

export default Marketplaces