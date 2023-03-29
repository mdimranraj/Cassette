import React from 'react'
import "../styles/developer.css";

const Developer = () => {
  return (
    <div className='green-team-container'>
            <h2>The Green Team</h2>
            <div className='team-container-flex'>
                <div className='team-member'>
                    <div className="team-member-left-flex">
                    <img className="team-member-img" src='https://drive.google.com/uc?export=download&id=1IM0jpjIn2URghvhdoK1kCsuyXvGdChYq' alt='member'></img>
                    <div className='member-details'>
                        <h4>Md Imran Raj</h4>
                        <h6>( Full Stack Web and Android Developer, UI/UX Developer )</h6>
                        <h5>Role in team : <span className='role'>Lead Developer, Frontend and Backend Manager </span></h5>
                    </div>
                    </div>
                    <div className='social-details'>
                        <h5>Follow me on :</h5>
                        <div>
                        <a href="https://www.linkedin.com/in/md-imran-raj-952659201/" target='_blank'><img className='linkedIn-img' src='https://drive.google.com/uc?export=download&id=1fW7AugDk_OyfBbZYpes7wnhbLM-5Xdr5'></img></a>
                        <a href='https://github.com/mdimranraj' target='_blank'><img src='https://drive.google.com/uc?export=download&id=16shR8sum3xnPdJchaag8k5229tvUj5qn' /></a>
                        <a href='mailto:mdimranraj786@gmail.com' target='_blank'><img src='https://drive.google.com/uc?export=download&id=1oiAp5iqS67x17KAnaDO27uy8AINmu0z1' /></a>

                       
                    </div>

                </div>
                
                </div>
            </div>
        </div>
  )
}

export default Developer