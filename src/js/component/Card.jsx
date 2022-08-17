import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";
import "../../styles/home.css";




export const Card = (props) =>{
    const {store, actions,} = useContext(Context)
    console.log(store, 'datalist')

    return (
        <div className="row">
                {store.planets &&
            store.planets.map((list, index) => {
            return(
                <div class="card" style={{width: '18rem'}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{list.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            );
            })}
        </div>
    )
}

