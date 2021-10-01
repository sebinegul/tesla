import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model S"
        description="Order Online Foe Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online Foe Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnTxt="Customize Now"
        rightBtnTxt="Existing Inventory"
      />

      <Section
        title="Solar For New Car Roofs"
        description="Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />
       <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt=""
      />
    </div>
  );
}

export default Home;
