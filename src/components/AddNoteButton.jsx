import { IoAddOutline } from "react-icons/io5";

const AddNoteButton = () => {
  return (
    <button
    className="bg-emerald-500 h-15 w-15 flex justify-center-safe items-center-safe  text-slate-900 text-5xl rounded-md active:bg-green-400 active:text-neutral-50 
    sm:h-20 sm:w-20 sm:text-7xl sm:hover:text-6xl sm:transition-all sm:hover:bg-green-400 sm:hover:text-neutral-50
    "
    >
      <IoAddOutline />
    </button>
  )
}

export default AddNoteButton