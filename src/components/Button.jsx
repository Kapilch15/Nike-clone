const Button = ({label, iconURL}) => {
  return (
    <div>
      <button className='flex justify-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
        {label}
        {iconURL && ( <img src={iconURL} alt="arrow icon" 
         className='ml-2 rounded-full w-5 h-5'
        />)}
       
      </button>
    </div>
  )
}

export default Button;  
