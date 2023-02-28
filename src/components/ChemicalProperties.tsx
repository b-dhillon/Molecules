import { useEffect, useState } from "react";
import Stream from "./Stream";

export default function Chemical_Properties( props: any): JSX.Element {

    const { __DATA__, streaming, setStreaming, SearchResults } = props;

    const [ loadedDescription, _ ] = useState<any>( SearchResults.description ); 


    const start = 2000;

    const wrapperBorders = true;
    const [ showColumnA, setShowColumnA ] = useState(false);
    const [ showColumnB, setShowColumnB ] = useState(false);

    // const [ showColumnA, setShowColumnA ] = useState([0, 0, 0]);
    // const [ showColumnB, setShowColumnB ] = useState([0, 0, 0]);

    const [ propertiesStreamed, setPropertiesStreamed ] = useState( false );


    /*
    const [ showColumn1_2, setShowColumn1_2 ] = useState(false);
    const [ showColumn1_2_3, setShowColumn1_2_3 ] = useState(false);

    const [ showColumn2, setShowColumn2 ] = useState(false);
    const [ showColumn2_2, setShowColumn2_2 ] = useState(false);
    const [ showColumn2_2_3, setShowColumn2_2_3 ] = useState(false);

    const [ showColumn3, setShowColumn3 ] = useState(false);
    const [ showColumn3_2, setShowColumn3_2 ] = useState(false);
    const [ showColumn3_2_3, setShowColumn3_2_3 ] = useState(false);
    */



    useEffect(() => {

        const timeoutA = setTimeout(() => {
          setShowColumnA(true);
        }, start);

        const timeoutB = setTimeout(() => {
            setShowColumnB(true);
          }, start + 1000 );

        /*
        const timeout1_2 = setTimeout(() => {
          setShowColumn1_2(true);
        }, start + 200 );
        const timeout1_2_3 = setTimeout(() => {
          setShowColumn1_2_3(true);
        }, start + 200 );

        const timeout2 = setTimeout(() => {
            setShowColumn2(true);
        }, start + 700 );

        const timeout2_2 = setTimeout(() => {
            setShowColumn2_2(true);
        }, start + 800 );

        const timeout2_2_3 = setTimeout(() => {
            setShowColumn2_2_3(true);
        }, start + 900 );

        const timeout3 = setTimeout(() => {
            setShowColumn3(true);
        }, start + 900 );

        const timeout3_2 = setTimeout(() => {
            setShowColumn3_2(true);
        }, start + 1000 );

        const timeout3_2_3 = setTimeout(() => {
            setShowColumn3_2_3(true);
        }, start + 1100 );
        */

        return () => {
          clearTimeout(timeoutA);
          clearTimeout(timeoutB);
          /*
              clearTimeout(timeout1_2);
              clearTimeout(timeout1_2_3);

              clearTimeout(timeout2);
              clearTimeout(timeout2_2);
              clearTimeout(timeout2_2_3);

              clearTimeout(timeout3);
              clearTimeout(timeout3_2);
              clearTimeout(timeout3_2_3);
            */
        };

    }, []);

    const inlineStyles = {
        propertiesWrapper: {
            height: "50%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            padding: "80px 0px",
        },
        propertyColumnA: {
            width: "16.67%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            border: `${ wrapperBorders ? "1px solid white" : "none" }`,
            // alignItems: "center",
        },
        propertyColumnB: {
            width: "16.67%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            border: `${ wrapperBorders ? "1px solid green" : "none" }`,
            // alignItems: "center",
        },
    };



    const textStyle = {
        margin: "10px 0px",
        fontSize: "1rem"
    }

    const propertiesA = `Molecular Formula:\nMolecular Weight:\nMolecular Complexity:`;
    const propertiesB = `C6H12O6\n234 g/mol\n42`;

    const caller = "ChemicalProperties"

    if( streaming[1] ) {
        console.log("CHEMICAL PROPERTIES STREAMING");
        return (

            < div id="properties" style={ inlineStyles.propertiesWrapper } >
    
                {/* below should be re-factored, can be done in two lines, columnA and columnB repeat */}
                < div id="property-column1a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
    
                    { 
                        showColumnA
                        && 
                        <pre>
                            < Stream 
                                caller={ caller }
                                passedText={ propertiesA }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                            />
                        </pre>  
                    }
    
                </ div >
    
                < div id="property-column1b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
    
                    {
                        showColumnB
                        &&
                        <pre>
                            < Stream
                                passedText={ propertiesB }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                            />
                        </pre>
                    }
    
    
                </ div >
    
                < div id="property-column2a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
    
                    {
                        showColumnA
                        &&
                        <pre>
                            < Stream
                                passedText={ propertiesA }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                            />
                        </pre>
    
                    }
    
    
                </ div >
                
                < div id="property-column2b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
    
                    {
                        showColumnB
                        &&
                        <pre>
                            < Stream
                                passedText={ propertiesB }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                            />
                        </pre>
                    }
    
                </ div >
    
                < div id="property-column3a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
    
                    {
                        showColumnA
                        &&
                        <pre>
                            < Stream
                                passedText={ propertiesA }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                            />
                        </pre>
    
                    }
    
                </ div >
    
                < div id="property-column3b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
    
                    {
                        showColumnB
                        &&
                        <pre>
                            < Stream
                                passedText={ propertiesB }
                                style={ textStyle }
                                streaming = { streaming }
                                setStreaming = { setStreaming }
                                setPropertiesStreamed = { setPropertiesStreamed }
                            />
                        </pre>
                    }
    
                </ div >
    
            </ div >
        );
    };

    if( !streaming && propertiesStreamed ) {
        return (

            < div id="properties" style={ inlineStyles.propertiesWrapper } >
    
                {/* below should be re-factored, can be done in two lines, columnA and columnB repeat */}
                < div id="property-column1a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesA }</p>
                    </pre>  
                </ div >
    
                < div id="property-column1b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesB }</p>
                    </pre>
                </ div >
    
                < div id="property-column2a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesA }</p>
                    </pre>    
                </ div >
                
                < div id="property-column2b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesB }</p>
                    </pre>
                </ div >
    
                < div id="property-column3a" style={ inlineStyles.propertyColumnA as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesA }</p>
                    </pre>
                </ div >
    
                < div id="property-column3b" style={ inlineStyles.propertyColumnB as React.CSSProperties } >
                    <pre>
                        <p style={ textStyle }>{ propertiesB }</p>
                    </pre>
                </ div >
    
            </ div >
        );
    }

    else return <></>
};