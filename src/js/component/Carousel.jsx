import React, { useEffect } from 'react'
import Card from './Card.jsx'
import CardCharacter from './CardCharacter.jsx'
import { useContext } from 'react'
import { Context } from '../store/appContext.js'
import People from '../views/People.jsx'

export const Carousel = (props) => {
    const {store,actions}=useContext(Context)
    return(
        <div className='container carousel'>
            <div className='raw carousel'>
                {store[props.routepath].map((data)=>{
                return <Card routepath = {props.routepath}data = {data}/>
                })}
            </div>
        </div>
    )
}

