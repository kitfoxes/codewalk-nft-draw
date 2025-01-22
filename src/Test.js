import { Excalidraw, WelcomeScreen, MainMenu, exportToCanvas } from "@excalidraw/excalidraw";
import React, { useState } from "react";

function Test() {
  const [showMainMenu, setShowMainMenu] = useState(true);
  const handleMainMenuClick = () => {
    setShowMainMenu(false);
  };

  return (
    <div style={{ height: "50rem" }}>
      <Excalidraw>
          
        {showMainMenu ? (
          <WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo children="CodeWalk"></WelcomeScreen.Center.Logo>
              <WelcomeScreen.Center.Heading>
                Create your OWN nft
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
                <WelcomeScreen.Center.MenuItemLink
                  onClick={handleMainMenuClick}
                >
                  Draw
                </WelcomeScreen.Center.MenuItemLink>
              </WelcomeScreen.Center.Menu>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        ) : (
          <></>
        )}
      </Excalidraw>
    </div>
  );
}

export default Test;
