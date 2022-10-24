import React from "react";

function AddUser() {
  return (
    <div
      className="container"
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      <form
        className="border shadow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
          padding: "50px",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "4px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          Add User
        </h1>
        <div class="form-group my-2">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter user name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter mobile number"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your website"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary "
          style={{
            position: "absolute",
            bottom: "4px",
            left: "50%",
            transform: "translate(-50%)",
            marginTop: "10px",
            width: "200px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
