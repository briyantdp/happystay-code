import Button from "elements/Button";
import React from "react";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refRecommendedList}>
      <h1 className="font-weight-bold mb-3 text-secondary">
        Recommended For You
      </h1>
      <div className="container-grid" style={{ marginTop: 50 }}>
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  <span className="price">
                    {`${item.price} per ${item.unit}`}
                  </span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="detail-product" style={{ padding: 25 }}>
                  <Button
                    type="link"
                    className="streched-link d-block text-white text-decoration-none"
                    href={`/properties/${item.id}`}
                  >
                    <h2 className="product-name">{item.name}</h2>
                  </Button>
                  <span className="product-location">
                    {`${item.city}, ${item.country}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
