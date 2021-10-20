import React, { Component } from "react";

export class NewItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80g"
            }
            className="card-img-top"
            alt="newsImage"
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "90%" }}
            >
              {source}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {title}
              &nbsp;<span className="badge rounded-pill bg-success">New</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItems;
