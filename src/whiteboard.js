import React, { useState } from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { Flex, Button } from "@radix-ui/themes";
import Submit from "./Submit";


function WhiteBoard() {
  const done = () => {
    alert("button clicked");
    <div class="form-popup" id="myForm">
      <form action="/action_page.php" class="form-container">
        <h1>Login</h1>

        <label for="text">
          <b>Description</b>
        </label>
        <input
          type="text"
          placeholder="Enter your description"
          name="Description"
          required
        ></input>

        <label for="price">
          <b>Price</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Price"
          name="price"
          required
        ></input>

        <button type="submit" class="btn">
          Submit
        </button>
        <button type="button" class="btn cancel" onclick="closeForm()">
          Close
        </button>
      </form>
    </div>;
  };
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "" }}>
        <Flex
          direction={"column"}
          style={{
            margin: "auto",
            height: "100vh",
            width: "1400px",
            border: "2px solid #000",
          }}
        >
          <Excalidraw />

          <Flex justify={"center"} >
            <Submit />
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default WhiteBoard;
