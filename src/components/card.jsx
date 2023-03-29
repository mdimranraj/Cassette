import React, { useState } from 'react'
import '../styles/card.css';
import '../styles/video.css';

const Card = (props) => {

    const [newLink, setNewLink] = useState("");
    function handlePlay(){
        console.log(newLink);
        setNewLink(props.link);
        console.log(newLink);
    }

    function handleClick(event){
        props.onDelete(props.id);
    }

    const modalId = "exampleModal" + props.id;

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="video.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="card-title-group">
                        <h5 className="card-title">{props.title}</h5>
                        <img src="pencil.png" className="pencil" alt="..." />
                    </div>
                    
                    <div className='btn-group'>
                        <button onClick={handlePlay} type='button' className="play btn btn-outline-success "   data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Play</button>
                        <div className='btn-group-img'>      
                            <img onClick={handleClick} src="delete.png" className="delete" alt="..." />
                        </div>
                    </div>

                </div>
            </div>

            <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    
                    <div className="modal-body">
                        <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="autoplay"  allowfullscreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;


// "https://www.w3schools.com/html/mov_bbb.mp4"


// https://www.youtube.com/embed/XesJlsAlGHI   Youtube song 

// https://www.youtube.com/embed/7-sE2-ZIz44   Youtube video