import React from 'react';


function Card(props) {
  return (
    <>

      <div className='cards'>
        <div className="card">
          <img src={props.imgsrc} alt="my pic" className="cardimg" />
          <div className="cardname">
            <span className="card_category"><span className="card_category">
              {props.title}
            </span></span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} >
              <button>Watch Now 💁‍♂️</button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
export default Card;