import React from 'react'
import Card from './Card.jsx'

export const Carousel = (props) => {
    return(
        <div className='container carousel'>
            <div className='raw carousel'>
                <Card routepath={Card}/>
                <Card routepath={Card}/>
                <Card routepath={Card}/>
                <Card routepath={Card}/>
                <Card routepath={Card}/>
            </div>
        </div>
    )
}

