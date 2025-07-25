import AddNoteButton from "./AddNoteButton"
import NoteCard from "./NoteCard"


const NoteList = ({ notesList }) => {


  return (
    
    <section className=" bg-neutral-50 h-[85%] rounded-l-xl rounded-t-xl mt-3 overflow-y-hidden relative
    sm:h-[85%] sm:mt-6
    ">
      <div id="rendering-notes-list"
      className="p-2  select-none"
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

      <div className="ring-10 ring-slate-900 w-fit rounded-[] absolute bottom-0 right-0 bg-slate-900 rounded-sm
      sm:ring-10
      "
      >
        <AddNoteButton />
      </div> 
    </section>
  )
}

export default NoteList