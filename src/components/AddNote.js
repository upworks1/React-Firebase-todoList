import React, { useState } from "react"
import styled from "styled-components"
import firebase from "../firebase/firebase.config"


const AddNoteDiv = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin: 30px auto;
  padding: 5px;
  border-radius: 20px;
`
const InputTitle = styled.input`
  padding: 0.5em;
  border: none;
  background-color #20bf55;
background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);
 

  margin-bottom: 10px;
  border-radius: 9px;
`
const BodyTextArea = styled.textarea`
  padding: 0.5em;
  border: none;
  height: 80px;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`
const Button = styled.div`
background-color: #36096d;
background-image: linear-gradient(315deg, #36096d 0%, #37d5d6 74%);
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border-radius: 13px;
  
`
const AddNote = () => {
  const [title, setTitle] = useState("")
  
  const addNote = () => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        title,
        
      })
    setTitle("")
    
  }
  return (
    <AddNoteDiv>
      <InputTitle value={title} onChange={e => setTitle(e.target.value)} placeholder={'Write your task here'} />
      
      <Button onClick={addNote}>Add </Button>
    </AddNoteDiv>
    );
}

export default AddNote;