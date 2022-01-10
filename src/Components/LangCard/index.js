import React from 'react'
import './stayle.css'

export default function LangCard(props) {
    return (
        <ul >
            <li><button onClick={()=>props.func(props.l._id)}>{props.l.lang}</button></li>
        </ul>
    )
}
