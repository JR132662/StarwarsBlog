import React from "react";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { PropTypes } from "prop-types";



export default function CardCharacter (props) {
    console.log(props, 'Cprops')
    return (
        <div className="col-3 card cntainer">
            <div className="CardCharacter">
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
CardCharacter.propTypes = {
    data : PropTypes.object,
    id : PropTypes.integer
}
