import React from 'react';
import reactDom from 'react-dom';
import Card from "./Cards";
import "./index.css";
import sdata from "./sdata";



reactDom.render(
  <>

    <h1 className="heading_style">List of top 5 netflix series in 2021</h1>
    { sdata.map((val)  => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
      }
      )
     }
 </>,
  document.getElementById("root")
);


