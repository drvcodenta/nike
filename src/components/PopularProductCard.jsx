import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
    <div className="mt-8 justify-start flex gap-2.5">
    <img src={star} height={24} width={24} alt="Score" />
    <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.4)</p>
    </div>
    <div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
    <p className="mt-2 font-montserrat font-semibold text-coral-red leading-normal qtext-2xl">{price}</p>
    </div>
    </div>
  )
}

export default PopularProductCard