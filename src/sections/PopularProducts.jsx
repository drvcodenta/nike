import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
    <h2 className="text-4xl font-palanquin">Our 
    <span className="text-coral-red"> Popular</span> Products</h2>
    <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray info-text">Popular shoe among both men and women, and it is often seen on celebrities and athletes. Believe Us when we say "Just Do It."</p>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
    {products.map((product) => (
      <PopularProductCard key={product.name} {...product}/>
    ))}
    </div>
    </div>
    </section>
  )
}

export default PopularProducts