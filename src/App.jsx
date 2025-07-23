import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'


function App() {

  const date = new Date()
  let formatedDate = date.toLocaleDateString();
  formatedDate = formatedDate.replaceAll("/", "·") 
  console.log(formatedDate) 

  // const [notesList, setNotesList] = useState([])
  const notesList = [
    {noteTitle: "Vital Notes", noteCreatedDate: formatedDate},
    {noteTitle: "Spanish class 101", noteCreatedDate: formatedDate},
    {noteTitle: "Spanish class 101", noteCreatedDate: formatedDate},
    {noteTitle: "Spanish class 101", noteCreatedDate: formatedDate},
  ]


  

  return (
    <>
      <Layout>
        <Header notesList={notesList} />
      </Layout>
    </>
  )
}

export default App
