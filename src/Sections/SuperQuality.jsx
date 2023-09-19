import Button from "../components/Button"
import { shoe8 } from "../assets/images/index"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col max-container w-full gap-10">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <br/>
          <span className="text-coral-red pr-3">Super</span>
          <span className="text-coral-red pr-3">Quality</span>Shoes
        </h2>
       <p className="info-text lg:max-w-lg mt-4">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
       <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
       <div className="mt-11">
       <Button label="View Details"/>
       </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality