import React from "react";
import Button from "elements/Button";

export default function Category({ data }) {
  return data.map((category, index) => {
    return (
      <section className="container" key={index}>
        <h1 className="font-weight-bold text-secondary">{category.name}</h1>
        <div className="container-grid" style={{ marginTop: 50 }}>
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index) => {
              return (
                <div className="item column-3 row-1" key={index}>
                  <div className="card">
                    {item.isPopular ? (
                      <div className="tag font-weight-bold">
                        Popular
                        <span className="font-weight-light"> Choice</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <figur className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figur>
                    <div className="detail-product" style={{ paddingTop: 25 }}>
                      <Button
                        type="link"
                        className="streched-link d-block text-decoration-none"
                        href={`/properties/${item._id}`}
                      >
                        <h2 className="product-name text-secondary font-weight-bold">
                          {item.name}
                        </h2>
                      </Button>
                      <span className="product-location">
                        {`${item.city}, ${item.country}`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
