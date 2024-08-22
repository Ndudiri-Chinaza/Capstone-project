const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Shorten links.Great connections.
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Make connections easy for you by using our URL shortener and QR codes to shorten, share and manage your links.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md mx-3">Get started</a>
      </div>
    </div>
  )
}

export default HeroSection;
