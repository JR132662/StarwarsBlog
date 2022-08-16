import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";




function Card (props) {
    const {store, actions,} = useContext(Context)
    console.log(store, 'datalist')

    return (
        <div className="col-3 card cntainer">
                {store.planets &&
            store.planets.map((list, index) => {
            return(
            <div className="Card">
                <img src="https://theforce.net/swtc/Pix/books/dk/globetatooine.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{list.name}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div className="card-end">
                        <Link to={`${props.routepath}${props.data.uid}`}>
                            <button className="btn btn-primary">Learn more about!</button>
                        </Link>
                        <a href="#" className="btn icon-btn border border-warning"><i className="bi bi-heart-fill"></i></a>
                    </div>
                </div>
            </div>
            );
            })}
        </div>
    )
}

export default Card