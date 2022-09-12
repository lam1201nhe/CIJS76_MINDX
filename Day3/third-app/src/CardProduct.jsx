import React from "react";

const CardProduct = (props) => {
  // cách làm nhanh hơn với props
  const { name, star, priceOff, price1, price2 } = props;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Product image*/}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* Product details*/}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name*/}
            <h5 className="fw-bolder">{name}</h5>

            {/* product review */}
            {star ? (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
            ) : (
              ""
            )}
            {/* Product price*/}
            {priceOff ? (
              <span>
                <span className="text-muted text-decoration-line-through">
                  {price1}
                </span>
                {price2}
              </span>
            ) : price1 && !price2 ? (
              `$${price1}`
            ) : (
              `$${price1} - $${price2} `
            )}
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              View options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
