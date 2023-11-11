import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="text-4xl font-bold">
        <span className="text-coral-red">Special </span>
        Offer
      </h2>
      <p className="mt-4 info-text">
        Immerse yourself in a carefully curated selection of the latest trends and timeless classics. From fashion-forward apparel to cutting-edge gadgets, we've got it all.
      </p>
      <p className="mt-4 info-text">
        We take your security and privacy very seriously. Shop safely using the world’s most popular and trustworthy payment methods!
      </p>
      </div>
    </section>
  )
}

export default SpecialOffer