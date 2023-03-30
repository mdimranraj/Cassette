import React, { useState} from 'react'
import records from "./records";
import '../styles/card.css';
import '../styles/video.css';

const Card = (props) => {

    const modalId = props.modalId || "exampleModal";

    function handleClick(event){
        props.onDelete(props.id, props.bucket);
    }
 
    function closeVideo(){
        
    }
    function editCardName(event){
        event.preventDefault();
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
   

    

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="video.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="card-title-group">
                        <h5 className="card-title" >{props.title || "Video" + props.id }</h5>
                        <div className='btn-group-img'>      
                            <img src="pencil.png" className="pencil" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                            <img onClick={handleClick} src="delete.png" className="delete" alt="..." />
                        </div>
                        
                    </div>
                    
                    <div className='btn-group'>
                        <button type='button' className="play"   data-bs-toggle="modal" data-bs-target={`#${modalId}`} onClick={handlePlay}>Play</button>
                    </div>

                </div>
            </div>

            {/* modal for iframe video  */}
            <div className="modal fade" id={modalId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    
                    <div className="modal-body">
                        <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="autoplay"  allowfullscreen ></iframe>
                    </div>
                    <div className="modal-footer">
                        <h6>Pause the video before closing, else it will play in background.</h6>
                        <button onClick={closeVideo} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* ======Modal for edit form ========== */}

          <div>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit File Name</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>

                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      
                      <input type="text" className="form-control" id="bucket-name-edit" name='newBucketName' placeholder='Enter new title'/>
                    </div>
                    
                    <button onClick={editCardName} data-bs-dismiss="modal" className="btn btn-primary">Edit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* ======================= */}
        </div>
    )
}

export default Card;


// "https://www.w3schools.com/html/mov_bbb.mp4"


// https://www.youtube.com/embed/XesJlsAlGHI   Youtube song 

// https://www.youtube.com/embed/7-sE2-ZIz44   Youtube video    