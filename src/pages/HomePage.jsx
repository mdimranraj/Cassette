import React, { useState, useEffect } from 'react';
import Bucket from '../components/bucket';
import "../styles/homePage.css";
import CreateBucket from '../components/createBucket';

const HomePage = () => {

  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const storedBuckets = JSON.parse(localStorage.getItem('buckets'));
    if (storedBuckets) {
      setBuckets(storedBuckets);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('buckets', JSON.stringify(buckets));
  }, [buckets]);


  function addBucket(newBucket){
    setBuckets(prevBuckets => {
      return [...prevBuckets, newBucket];
    })
  }
  function deleteBucket(id){
    setBuckets(prevBuckets => {
      return  prevBuckets.filter((bucketItem, index)=>{
        return index !== id;
      })
    })
  }
  // function deleteBucket(id) {
  //   setBuckets(prevBuckets => {
  //     const updatedBuckets = prevBuckets.filter((bucketItem, index) => index !== id);
  //     localStorage.setItem('buckets', JSON.stringify(updatedBuckets)); // clear the bucket from localStorage
  //     return updatedBuckets;
  //   });
  //   const storedCards = JSON.parse(localStorage.getItem(`cards_${id}`));
  //   if (storedCards) {
  //     localStorage.removeItem(`cards_${id}`); // clear the cards from localStorage
  //   }
  // }

  function deleteAllBuckets(){
    setBuckets([]);
  }
  function editBucketName(newName){
    
  }


  return (
    <div className='home-page'>
    <h2>Keep your Video Records safe</h2>
    <div className='top-buttons'>
    <CreateBucket onAdd = {addBucket}/>
    <button onClick={deleteAllBuckets} type="button" class="btn btn-danger">Delete All Buckets</button>
    </div>
    

    {buckets.map((bucketItem, index) => {
        return <Bucket key={index} id={index} title={bucketItem.title} onDelete={deleteBucket} editName={editBucketName}/>
    })}
    </div>
    
  )
}

export default HomePage