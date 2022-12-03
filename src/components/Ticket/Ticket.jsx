import React from "react";

const Ticket = () => {
  return (
    <div>
      <h1 className="titulo-ticket">Submit a Request</h1>
      <div5>
        <h2 className="subtitulo-ticket">Email</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h2 className="subtitulo-ticket">Name</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h2 className="subtitulo-ticket">Phone</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h2 className="subtitulo-ticket">Subject</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <h2 className="subtitulo-ticket">Description</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </div5>
    </div>
  );
};

export default Ticket;
