import { useState } from "react";
import LoadingElement from "./LoadingElement";
import Stream from "./Stream";


export default function AI_Description( props: any ): JSX.Element {

    
    const { __DATA__, SEARCH_INPUT, streamState, setStreamState } = props;

    // wtf is this for -- for loading the spinner until OpenAI API returns data
    const [ API_DATA, setAPI_DATA ] = useState<any>( null );

    const wrapperBorders = false;

    const sampleDescription: string = __DATA__.compounds.find( ( compound: any ) => compound.title === SEARCH_INPUT ).description; 
    if (!sampleDescription) throw new Error('Compound not found.');


    setTimeout( () => {
        setAPI_DATA( sampleDescription );
    }, 3000 )

    /*
    if ( DESCRIPTION_DATA === null ) {
        <div id="description" style={ descriptionWrapper } >
            return < LoadingElement />
        </div>
    };
    */
    

    const descriptionWrapper = {
        height: "auto",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        display: "flex",
        padding: "10px 120px 0px 0px",
    };

    return (
        <div id="description" style={ descriptionWrapper } >
            { 
                    API_DATA 
                    ? 
                    < Stream 
                        caller={"AI_Description"}
                        text={ sampleDescription }
                        streamState={ streamState }
                        setStreamState={ setStreamState }
                     /> 
                    : 
                    < LoadingElement /> 
                } 
           
        </div>
    );
};