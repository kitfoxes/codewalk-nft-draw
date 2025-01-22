import react from "react"
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";

function Home() {
    return (
        <>
            <div style={{ height: "44rem"}}>
                <Excalidraw >
                    <WelcomeScreen>
                        <WelcomeScreen.Center>
                            <WelcomeScreen.Center.Logo children="CodeWalk">
                            </WelcomeScreen.Center.Logo>
                            <WelcomeScreen.Center.Heading>
                                Create your Designs
                            </WelcomeScreen.Center.Heading>
                            <WelcomeScreen.Center.Menu>
                                <WelcomeScreen.Center.MenuItemLink href="./whiteboard" >
                                    Draw
                                </WelcomeScreen.Center.MenuItemLink>
                                <WelcomeScreen.Center.MenuItemHelp />
                            </WelcomeScreen.Center.Menu>
                        </WelcomeScreen.Center>
                    </WelcomeScreen>
                </Excalidraw>
            </div>
        </>
    );
}

export default Home;