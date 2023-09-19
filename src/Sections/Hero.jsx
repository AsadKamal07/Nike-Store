import Button from "../components/Button"
import { useState } from "react"
import { arrowRight } from "../assets/icons"
import {shoes, statistics } from "../constaints"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center gap-10 min-h-screen max-container">
      <div className="w-full relative xl:w-2/5 flex flex-col  justify-center items-start max-lg:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10 z-10 relative">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes</h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start
          flex-wrap w-full gap-16 mt-20">
        {statistics.map((stats) => (
           <div key={stats.label}>
            <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
            <p className="font-monserrat text-slate-gray leading-7">{stats.label}</p>
           </div>
        ))}
       </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
        <img src={bigShoeImg} alt="shoe image"
        width={610}
        height={500}
        className="object-contain relative z-10"/>
        <div className="flex gap-4 sm:gap-6 absolute -bottom-[15%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
               <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero