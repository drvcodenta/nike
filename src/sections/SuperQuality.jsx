import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section 
    id="super-quality"
    className="w-full flex xl:flex-row flex-col justify-between gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold capitalize text-4xl lg:max-w-lg">
        we provide you
        <span className="text-coral-red"> superior quality </span>
        shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
        <p className="mt-5 lg:max-w-lg info-text">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label='View details' />
        </div>
      </div>

      
      <div className="flex-1 flex justify-center items-center">
      <img 
        src={shoe8}
        alt="Superior_Quality_Image"
        width={570}
        height={522}
        className="object-contain"
      />
      </div>
    </section>
  )
}

export default SuperQuality