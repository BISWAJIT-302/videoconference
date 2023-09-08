import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Room = () => {
    const { roomID } = useParams();
    const meeting =async(element) => {
        const appID = 347755971;
        const serverSecret= "0e4628c9766a54f4e2a1909c9e70b6b8";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret,
            roomID,
            Date.now().toString(),
            "biswajit"
          );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        zp.joinRoom({
            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });

    };


    return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>
};

export default Room;