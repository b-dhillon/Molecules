import { useEffect, useState } from "react";
import Stream from "./Stream";

export default function Molecular_Structures( props: any ): JSX.Element {

    const { streamState, setStreamState } = props;

    const wrapperBorders = false;

    const [ show2DTitle, setShow2DTitle ] = useState(false);
    const [ show3DTitle, setShow3DTitle ] = useState(false);
    const [ show2DCanvas, setShow2DCanvas ] = useState(false);
    const [ show3DCanvas, setShow3DCanvas ] = useState(false);

    const start = 13000;

    useEffect(() => {

        const timeout1 = setTimeout(() => {
          setShow2DTitle(true);
        }, start);

        const timeout1_5 = setTimeout(() => {
            setShow2DCanvas(true);
        }, start + 500);

        const timeout2 = setTimeout(() => {
            setShow3DTitle(true);
        }, start + 1000);

        
        const timeout2_5 = setTimeout(() => {
            setShow3DCanvas(true);
        }, start + 1500 );


        return () => {
          clearTimeout( timeout1  );
          clearTimeout( timeout1_5);
          clearTimeout( timeout2  );
          clearTimeout( timeout2_5);
        };

    }, []);
    
    const canvasWrapper = {
        maxWidth: "300px"
    }

    const structureWrapper = {
        height: "100%",
        // margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const titleStyle = {
        textAlign: "center",
        margin: "0px 15px 15px 15px",
        padding: "0px 0px 15px 0px",
        fontSize: "1.3rem",
    };



    return (
        < div id="structure" style={ structureWrapper as React.CSSProperties } >

            < div id="display2D-wrapper" style={canvasWrapper} >
                { show2DTitle && < Stream text={ "Chemical Line Structure: " } style={ titleStyle } /> }
                { show2DCanvas && <div id="display2D" ></div> }
            </ div >

            < div id="display3D-wrapper" style={canvasWrapper} >
                { show3DTitle && < Stream text={ "Computed Molecular Geometry:" } style={ titleStyle } /> }
                { show3DCanvas && <div id="display3D" ></div> }
            </ div >

        </ div >
    );
};