import { useState } from "react"

import { SectionWrapper } from "./SectionWrapper"
import { WORKOUTS, SCHEMES } from "../utils/swoldier"
import { Button } from "./Button"

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

export const Generator = ({ 
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout
}) => {

  const [showModal, setShowModal] = useState(false)
  

  function handleToggleModal() {
     setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])

      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])

    if (muscles.length === 2) {
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper header={"generate your workout"} title={["It's", "Huge", "o'clock"]}>
      <Header index={'01'} title={'Pick your poison'} desc={'Select the workout you wish to endure.'}/>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIdx) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPoison(type)
              }} key={typeIdx} className={'px-4 bg-slate-950 border-solid duration-200 py-3 rounded-lg hover:border-blue-600 ' + (type === poison ? 'border-blue-600' : 'border-blue-400')}>
              <p className="capitalize">{type.replaceAll("_"," ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} desc={'Select the muscles to be annihilated.'}/>
      
      <div className="bg-slate-950 border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={handleToggleModal} className="relative flex items-center justify-center p-3">
          <p className="capitalize">{muscles.length == 0 ? 'Select Muscle Groups' : muscles.join(' ')}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>

        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIdx) => {
              return (
                <button onClick={() => {updateMuscles(muscleGroup)}} key={muscleGroupIdx} className={"px-4 hover:text-blue-400 duration-200 " + (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}>
                  <p className="uppercase">{muscleGroup.replaceAll("_"," ")}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Become a Juggernaut'} desc={'Select your ultimate objective.'}/>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIdx) => {
          return (
            <button onClick={() => {setGoal(scheme)}} key={schemeIdx} className={'bg-slate-950 border-solid duration-200 py-3 rounded-lg hover:border-blue-600 ' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')}>
              <p className="capitalize">{scheme.replaceAll("_"," ")}</p>
            </button>
          )
        })}
      </div>
      
      <Button func={updateWorkout} text={'Formulate'}/>
    </SectionWrapper>
  )
}
