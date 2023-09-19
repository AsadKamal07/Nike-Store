import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="flex gap-2.5 sm:mt-8 justify-start">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-slate-gray leading-normal text-xl">(4.8)</p>
        </div>
        <h3 className="font-palanquin sm:text-2xl text-xl mt-2 font-semibold leading-normal">{name}</h3>
        <p className="font-montserrat text-2lx font-semibold text-coral-red leading-normal mt-2">{price}</p>
    </div>
  )
}

export default PopularProductCard