<<<<<<< HEAD
export const Button = ({ text, func }) => {
  return (
    <button onClick={func} className="mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
=======
export const Button = ({ text }) => {
  return (
    <button className="mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
>>>>>>> 2629aebe741348e1fc867eac17f2653ff01e1160
        <p>{text}</p>
    </button>
  )
}
