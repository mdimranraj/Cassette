import React, { useState } from 'react'
import records from "./records";
import '../styles/card.css';
import '../styles/video.css';

const Card = (props) => {

    function handleClick(event){
        props.onDelete(props.id);
    }

    const [playedAt, setPlayedAt] = useState("");

    function handlePlay(event) {
        // Get the current date and time
        const now = new Date();
        const playedAt = now.toLocaleString();
    
        // Update the state with the playedAt time
        setPlayedAt(playedAt);

        records.push({t:props.title,l:props.link,time:playedAt});
        console.log(records);
    }
   

    const modalId = "exampleModal" + props.id;

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="video.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="card-title-group">
                        <h5 className="card-title" >{props.title || "Video" + props.id }</h5>
                        <div className='btn-group-img'>      
                            <img src="pencil.png" className="pencil" alt="..." />
                            <img onClick={handleClick} src="delete.png" className="delete" alt="..." />
                        </div>
                        
                    </div>
                    
                    <div className='btn-group'>
                        <button type='button' className="play"   data-bs-toggle="modal" data-bs-target={`#${modalId}`} onClick={handlePlay}>Play</button>
                    </div>

                    {playedAt && (
                    <div className="played-at">
                        Played at: {playedAt}
                    </div>
                )}

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