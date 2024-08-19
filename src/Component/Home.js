import React from "react";
import img from "./image-1.jpg";
import "./bootstrap.min.css";
// import link from 'https://www.google.com/';
function Home() {
  let title = "first";
  if (title === "first") {
    const Link = "https://www.google.com/";
    return (
      <div className="container">
        <div className="row">
          <div
            class="col-md-6 offset-md-3 col-sm-12 mb-4"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Project 1"
          >
            <div class="card">
              <img src={img} class="card-img-top" alt="Project 1"></img>
              <div class="card-body">
                <h5 class="card-title">{title.toUpperCase()}</h5>
                <a href={Link} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (title === "second") {
    return (
      <div className="container">
        <div className="row">
          <div
            class="col-md-6 offset-md-3 col-sm-12 mb-4"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Project 1"
          >
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{title.toUpperCase()}</h5>
                <p className="text-center text-dark text-muted">
                  Amidst the rolling hills of a forgotten town, where whispers
                  of the past intertwine with the breeze, a curious sense of
                  serenity envelops the soul. The ancient trees stand as silent
                  witnesses to the passage of time, their gnarled branches
                  reaching out like wise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
