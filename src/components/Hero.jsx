export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <divc className='flex flex-col gap-4' >
        <p>IT`S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole<span className="text-blue-400">normous</span></h1>
      </divc>
      <p className="text-sm md:text-base font-light">I hereby acknowledge that I may become <span className="text-blue-400 font-medium">unbelievable swolenormous</span> and accept all risks of becoming the local <span className="text-blue-400 font-medium">mass monstrosity</span>, afflicted with sever body dismorphia, unable to fit through doors.</p>
      <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
        <p>ACCEPT & BEGIN</p>
      </button>
    </div>
  )
}
