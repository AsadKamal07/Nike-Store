import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
        <div className="flex gap-2.5 mt-2 justify-center items-center">
            <img src={star} alt="rating" width={24} height={24} className="object-contain m-0"/>
            <p className="font-montserrat text-slate-gray leading-normal text-xl">({rating})</p>
        </div>
        <h3 className="mt-2 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard