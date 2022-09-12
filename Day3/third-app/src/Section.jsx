import React from "react";
import CardProduct from "./CardProduct";

const Section = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <CardProduct name="Fancy Product" price1="40" price2="80"/>
          <CardProduct name="Special Item" star={true} priceOff={true} price1="$20" price2=" $18"/>
          <CardProduct name="Sale Item" priceOff={true} price1="$50.00" price2=" $25.00" />
          <CardProduct name="Popular Item" star={true} priceOff={false} price1="40.00"/>
          <CardProduct name="Sale Item" priceOff={true} price1="$50.00" price2=" $25.00"/>
          <CardProduct name="Fancy Product" priceOff={false} price1="120.00" price2="280.00"/>
          <CardProduct name="Special Item" star={true} priceOff={true} price1="$20.00" price2=" $18.00"/>
          <CardProduct name="Popular Item" star={true} priceOff={false} price1="40.00"/>
        </div>
      </div>
    </section>
  );
};

export default Section;
