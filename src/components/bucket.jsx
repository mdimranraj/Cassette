import React, {useState} from 'react';
import CreateArea from './createArea';
import "../styles/bucket.css";
import Card from "../components/card";


const Bucket = (props) => {

    //   for deleting the bucket

    function handleDelClick(event){
        props.onDelete(props.id);
    }

    // for deleting the card
    const [cards, setCards] = useState([]);

    function addCard(newCard){
      setCards(prevCards => {
        return [...prevCards, newCard];
      })
    }
    function deleteCard(id){
      setCards(prevCards => {
        return  prevCards.filter((cardItem, index)=>{
          return index !== id;
        })
      })
    }

    function editBucketName(event){
      // props.editName(document.getElementById("bucket-name-edit").val);
      event.preventDefault();
    }

  return (
    <>
    <div className='bucket-container'>
          <img
          class="demo-bg"
          src="bucket_back.png"
          alt=""
          />
        <div className='bucket-container-head-del'>
          <h3>{props.title || "Custom Bucket " + props.id}</h3>
          <div className='btn-group-img'> 
            <img src="pencil.png" className="pencil" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <img onClick={handleDelClick} src="delete.png" className="delete" alt="..." />
          </div>  
        </div>
        
        <div className='bucket-container-flex'>
            <div className='left-side'>
                    {cards.map((cardItem, index) => {
                        return <Card key={index} id={index} title={cardItem.title} link={cardItem.link} onDelete={deleteCard} modalId={"exampleModal" + props.id + index}/>
                    })}
            
            </div>
            <div className='right-side'>
                <CreateArea onAdd = {addCard}/>
            </div>
        </div>       
       

       {/* ======Modal for edit form ========== */}

          <div>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Bucket Name</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>

                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      
                      <input type="text" className="form-control" id="bucket-name-edit" name='newBucketName' placeholder='Enter new name'/>
                    </div>
                    
                    <button onClick={editBucketName} data-bs-dismiss="modal" className="btn btn-primary">Edit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* ======================= */}
        
    </div>
    </>
  )
}

export default Bucket