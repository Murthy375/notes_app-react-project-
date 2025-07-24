const Header = ({ notesList }) => {

  console.log(notesList.length) 

  return (
    <div 
    className="bg-neutral-50 w-full h-20 flex justify-between items-center-safe rounded-b-2xl p-2 
    sm:px-3 sm:pt-2" 
    >
      <h1 className="text-sm font-['Press_Start_2P'] text-neutral-50 bg-purple-500 rounded-lg p-1 h-full flex justify-center-safe items-center-safe
      sm:text-2xl sm:p-2 sm:rounded-xl"
      >
        Jottr
      </h1>
      <h1 className="text-blue-900 text-2xl font-serif italic sm:text-4xl ">
      {
        notesList.length === 0 ? "No notes yet..." : notesList.length === 1 
        ? 
          <span>You only have one note</span> 
          : 
          <span>You have <span>{notesList.length}</span> notes</span>
      }
      </h1>
    </div>
  )
}

export default Header