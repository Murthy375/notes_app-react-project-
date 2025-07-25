const NoteCard = ({ note }) => {

  return (
    <div className="flex justify-between py-3 px-2 text-neutral-50 font-serif text-lg bg-blue-950 rounded-md my-1 cursor-pointer 
    active:bg-blue-900/95 active:text-xl transition-all duration-75 
    sm:px-5 sm:text-2xl 
    sm:hover:bg-blue-900/95 sm:hover:text-3xl sm:active:text-2xl sm:duration-100
    
    " 
    >
      <h2>{note.noteTitle}</h2>

      <p className="italic opacity-70 text-sm 
      sm:text-xl
      "
      >{note.noteCreatedDate}</p>

    </div>
  )
}

export default NoteCard