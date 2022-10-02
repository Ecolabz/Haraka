import React from "react";

const Hello = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="h2">Hello</div>
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-12 col-sm-4 col-lg-3">
            <div className="card p-3 my-3">
              <div className="card-header text-center h4">React Js</div>
              <p class="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nisi earum minus, labore eligendi?
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-lg-3">
            <div className="card p-3">
              <div className="card-header text-center h4">Vue Js</div>
              <p class="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nisi earum minus, labore eligendi?
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-lg-3">
            <div className="card p-3">
              <div className="card-header text-center h4">Svelte</div>
              <p class="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nisi earum minus, labore eligendi?
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-lg-3">
            <div className="card p-3">
              <div className="card-header text-center h4">Qwik</div>
              <p class="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nisi earum minus, labore eligendi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
