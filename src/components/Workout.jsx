import ExerciseCard from "./ExerciseCard"
import { SectionWrapper } from "./SectionWrapper"

export const Workout = ({ workout }) => {
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={["The", "DANGER", "Zone"]}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard exercise={exercise} idx={i} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
