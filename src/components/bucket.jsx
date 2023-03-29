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

  return (
    <>
    <div className='bucket-container'>
        <div className='bucket-container-head-del'>
          <h3>{props.title || "Custom Bucket"}</h3>
          <img onClick={handleDelClick} src="delete.png" className="delete" alt="..." />
        </div>
        
        <div className='bucket-container-flex'>
            <div className='left-side'>
                    {cards.map((cardItem, index) => {
                        return <Card key={index} id={index} title={cardItem.title} link={cardItem.link} onDelete={deleteCard} />
                    })}
            
            </div>
            <div className='right-side'>
                <CreateArea onAdd = {addCard}/>
            </div>
        </div>       
       
        
    </div>
    </>
  )
}

export default Bucket