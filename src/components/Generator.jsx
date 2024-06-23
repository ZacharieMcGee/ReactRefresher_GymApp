import { SectionWrapper } from "./SectionWrapper"
import { WORKOUTS } from "../utils/swoldier"

function Header({index, title, desc}) {
  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-center justify-center gap-2'>
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{desc}</p>
    </div>
  )
}

export const Generator = () => {
  return (
    <SectionWrapper header={"generate your workout"} title={["It's", "Huge", "o'clock"]}>
      <Header index={'01'} title={'Pick your poison'} desc={'Select the workout you wish to endure.'}/>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIdx) => {
          return (
            <button key={typeIdx} className='bg-slate-950 border-solid border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg'>
              <p className="capitalize">{type.replaceAll("_"," ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} desc={'Select the muscles to be annihilated.'}/>
      
      <div className="">
        <div>
          <p>Select Muscle Groups</p>
        </div>
      </div>

    </SectionWrapper>
  )
}
