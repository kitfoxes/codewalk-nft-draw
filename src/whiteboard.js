import React, { useState } from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";

function WhiteBoard() {
    const done = () => {
        alert('button clicked');
        <div class="form-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Login</h1>

                <label for="text"><b>Description</b></label>
                <input type="text" placeholder="Enter your description" name="Description" required></input>

                <label for="price"><b>Price</b></label>
                <input type="text" placeholder="Enter the Price" name="price" required></input>

                <button type="submit" class="btn">Submit</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>

            </form>
        </div>
    }
    return (
        <>
            <div style={{ height: "100vh", backgroundColor: '' }}>
                <div style={{ margin: "auto", height: "650px", width: "1400px", border: "2px solid #000" }}>
                    <Excalidraw />

                    <button style={{ justifyContent: 'right', alignItems: 'right' }} onClick={() => done()}>Submit</button>

                </div>


            </div>
        </>
    );


}

export default WhiteBoard;