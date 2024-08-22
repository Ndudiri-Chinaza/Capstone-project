import { aspect } from "../Data";

const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] bg">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Features</span>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {
          aspect.map((aspect, index) => {
            return( <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex">
                <div>
                  <h5 className="mt-1 mb-6 text-xl text-orange-700" > {aspect.no}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500"> {aspect.desc}</p>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Features;
