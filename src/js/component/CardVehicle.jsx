import React from "react";
import {Link} from "react-router-dom"
import { useEffect } from "react";

const VEHICLEAPI = () =>{
    fetch("https://www.swapi.tech/api/vehicles/")
.then(res => res.json())
.then(data => console.log(data.results[0].name, 'datatest'))
.catch(err => console.error(err))
}

function CardVehicle () {
    useEffect(()=>{
        VEHICLEAPI()
    
    },[])
    return (
        <div className="col-3 card cntainer">
            <div className="CardVehicle">
                <img src="https://theforce.net/swtc/Pix/books/dk/globetatooine.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dummy text</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <div className="card-end">
                        <Link to="/character/:theid">
                            <button className="btn btn-primary">Learn more about!</button>
                        </Link>
                        <a href="#" className="btn icon-btn border border-warning"><i className="bi bi-heart-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVehicle