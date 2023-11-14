import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section
    id = 'contact-us'
    className="max-container flex justify-between items-center gap-10 max-lg:flex-col"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red"> Updates </span>and Newletter
      </h3>
      <div className='lg:max-w-[40%] w-full items-center flex max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray rounded-full'>
        <input 
          type='text'
          placeholder="subscription@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label='Sign-Up' fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe