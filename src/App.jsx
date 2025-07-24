import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import NoteList from './components/NoteList'



function App() {

  const date = new Date()
  let formatedDate = date.toLocaleDateString();
  formatedDate = formatedDate.replaceAll("/", "·") 
  console.log(formatedDate) 

  // const [notesList, setNotesList] = useState([])
  const notesList = [
    {noteTitle: "Vital Notes", noteCreatedDate: "02-07-25"},
    {noteTitle: "Spanish class 101", noteCreatedDate: "03-07-25"},
    {noteTitle: "React Class", noteCreatedDate: "04-07-25"},
    {noteTitle: "Some thoughts", noteCreatedDate: "05-07-25"},
  ]


  

  return (
    <>
      <Layout>
        <Header notesList={notesList} />
        <NoteList notesList={notesList} />
      </Layout>
    </>
  )
}

export default App
