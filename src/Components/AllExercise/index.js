import axios from "axios";
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import LangCard from "../LangCard"
import ExercisCard from "../ExercisCard"


export default function AllExercise() {

  const [list, setlist] = useState([]);
  const [listExerciseByLang,setlistExerciseByLang]=useState([]);

  useEffect(getAllExercise, []);

  function getAllExercise() {
    axios.get(`http://localhost:3333/lang`)
      .then((res) => {
          console.log(res.data);
        setlist(res.data);
      });
  }


  function getAllExerciseByLang(id){
    axios.get(`http://localhost:3333/exerciseByLang/${id}`)
    .then((res) => {
        console.log(res.data);
        setlistExerciseByLang(res.data);
        return;
    });
  }

  
    if(list.length > 0 ){
       return <div >
                {listExerciseByLang.map(ex=><ExercisCard ex={ex} key={ex._id}/>)}
                {list.map(l => <LangCard l={l} func={getAllExerciseByLang} key={l._id}/>)}
        </div>;}
    else
       return <div>loading....</div>
}
