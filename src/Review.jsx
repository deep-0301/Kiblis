import React from "react";

function Review() {
  return (
    <>
      <div className="container my-5 py-5">
        <div class="row text-center">
          <div className="col-xs-6 col-md-6">
            <p className="text-para para-review">
              <p className="title-review">Customer Review</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse viverra risus tempus lacus, curabitur. Et faucibus
              dictum adipiscing venenatis, viverra quis neque velit massa.
              Blandit pulvinar urna, neque tortor sapien consectetur
            </p>
          </div>
          <div className="col-xs-6 col-md-6 card-color">
            <div className="ellipse-3" />
            <p className="card-1 mt-0 para-card12">Kelvin V.</p>
            <p className="text-para para-card12 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra aliquam porttitor lacus. Suspendisse.Ut pharetra aliquam
              porttitor lacus. Suspendisse.
            </p>
          </div>
          <div className="col-xs-6 col-md-6 card-color mt-5">
            <div className="ellipse-3" />
            <p className="card-2 para-card12">Matt O.</p>
            <p className="text-para para-card12 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra aliquam porttitor lacus. Suspendisse.Ut pharetra aliquam
              porttitor lacus. Suspendisse.
            </p>
          </div>

          <div className="col-xs-6 col-md-6 mt-5">
            <div className="ellipse-3" />
            <p className="para-card3">Lorita S.</p>
            <p className="text-para para-card3 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pharetra aliquam porttitor lacus. Suspendisse.Ut pharetra aliquam
              porttitor lacus. Suspendisse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
