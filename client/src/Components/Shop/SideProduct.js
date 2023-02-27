import React from "react";
import { Card } from "antd";
import panadol from "../../Assets/panadol.png";
import "./style.css";

const SideProduct = () => {


  return (
    <>
      <Card
        className="med_card"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={panadol} />}
      >
        <h4 className="sidebar_heading">Panadol</h4>
        <p className="sidebar_subheading">(Paracetamol 500mg)</p>
        <h6 className="med_desc">Description:</h6>
        <p>
          Panadol Original Tablets is a mild analgesic and antipyretic, and is
          recommended for the treatment of most painful and febrile conditions,
          for example, headache including migraine and tension headaches,
          toothache, backache, rheumatic and muscle pains, dysmenorrhoea, sore
          throat, and for relieving the fever, aches and pains of colds and flu.
          Also recommended for the symptomatic relief of pain due to non-serious
          arthritis
        </p>
      </Card>
      ,
    </>
  );
};

export default SideProduct;
