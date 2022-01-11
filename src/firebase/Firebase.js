import { db } from './firebase.config';
import { sortedTasks } from '../contexts/TaskContext';
import firebase from "./firebase.config"






const collection = "tasks"

export const getTasksRequest = async () => {
    return  db.collection(collection).get().then(res => {
        let tasks = [];
           
            tasks.forEach(task => {
            let data = task.data();

            tasks.push({
                id: data.id,
                isChecked: data.isChecked,
                description: data.description,
                created: data.created
            })
        })
        return  tasks;
    })
}

//export const addTaskRequest = async (task) => {
  //  return  db.collection(collection)
    //    .add(task)
         
    //}



    export default addTaskRequest = async (task) => {
        firebase
        .firestore()
        .collection("tasks")
        .add({
          title: "Working",
          body: "This is to check the Integration is working",
            
        })



export const checkTaskRequest = (id, isChecked) => {
    return db.collection(collection)
        .doc(id)
        .set({
            isChecked: isChecked
        })
}

export const removeTaskRequest = (id) => {
    return  db.collection(collection)
            .db.collection(collection)
            .doc(id)
            .delete()
}