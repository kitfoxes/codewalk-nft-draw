import { Excalidraw, WelcomeScreen, MainMenu, exportToCanvas } from "@excalidraw/excalidraw";
import React, { useState, useRef } from "react";
import axios from "axios";
import { Flex } from "@radix-ui/themes";
function Test() {
  const [showMainMenu, setShowMainMenu] = useState(true);
  const handleMainMenuClick = () => {
    setShowMainMenu(false);
  };
  const excalidrawRef = useRef(null);

  const handleExport = async () => {
    if (!excalidrawRef.current) return;

    // Export the drawing to a Blob (image format)
    const blob = await excalidrawRef.current.getSceneElementsBlob({
      mimeType: "image/png",
      quality: 1,
    });

    // Create a FormData object
    const formData = new FormData();
    formData.append("drawing", blob, "drawing.png");

    try {
      // Send the FormData to the server
      const response = await axios.post("https://your-api-endpoint.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };


  return (

    <div style={{ height: "" }}>
      <Flex
        direction={"column"}
        style={{
          margin: "auto",
          height: "97vh",
          width: "",
        }}
      >
        <Excalidraw ref={excalidrawRef} />
        <Flex justify={"center"} >
          <button onClick={handleExport}>Export & Upload</button></Flex>
      </Flex>
    </div>
  );
}

export default Test;
