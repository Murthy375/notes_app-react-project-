import NoteCard from "./NoteCard"

const NoteList = ({ notesList }) => {


  return (
    
    <section className=" bg-neutral-50 w-full h-140 rounded-xl mt-3 
    sm:h-200 
    ">
      <div id="rendering-notes-list"
      className="p-2"
      >
      {notesList.map((note, noteIndex) => {
          return (
            <NoteCard
            key={noteIndex}
            note={note}
            />
          )
      })}  
      </div>

      <div>
        
      </div> 
    </section>
  )
}

export default NoteList