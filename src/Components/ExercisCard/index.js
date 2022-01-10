import React from 'react'
import { Link } from "react-router-dom";


export default function ExercisCard(props) {
    return <div>
            <Link to={`/exercise/${props.ex._id}`}>{props.ex.title}</Link> 
        </div>
    
}
