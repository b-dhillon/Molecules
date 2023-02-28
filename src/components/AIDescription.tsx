import { useState } from "react";
import LoadingElement from "./LoadingElement";
import Stream from "./_____Stream";


export default function AIDescription( props: any ): JSX.Element {

    const { __DATA__, streaming, setStreaming, SearchResults } = props;

    // if( !streaming[0] ) setStreaming( true );

    const [ loadedDescription, _ ] = useState<any>( SearchResults[0].description ); // rendering the spinner until OpenAI API returns data
    const [ descriptionStreamed, setDescriptionStreamed ] = useState( false );

    const wrapperBorders = false;

    const descriptionWrapper = {
        height: "auto",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        display: "flex",
        padding: "10px 120px 0px 0px",
    };

    const textStyle = {
        color: "white",
        fontFamily: "Poppins-Regular",
        padding: "0px",
        margin: "0px",
        fontSize: "1.2rem",
    };

    if( streaming[0] ) {
        return (
            <div id="description" style={ descriptionWrapper } >
                < Stream 
                    caller={ "AIDescription" }
                    passedText={ loadedDescription }
                    streaming={ streaming }
                    setStreaming={ setStreaming }
                    setDescriptionStreamed={ setDescriptionStreamed }
                /> 
            </div>
        );
    }

    if( !streaming[0] && descriptionStreamed ) {
        return (
            <div id="description" style={ descriptionWrapper } >
                <p style={ textStyle }>{ loadedDescription }</p>
            </div>
        );
    }

    else {
        return (
            <div id="description" style={ descriptionWrapper } >
                {/* < LoadingElement /> */}
            </div>
        );
    }

    // if( !streaming && !descriptionStreamed ) {
    //     return (
    //         <div id="description" style={ descriptionWrapper } >
    //             < LoadingElement />
    //         </div>
    //     );
    // };
    

    // return (
    //     <div id="description" style={ descriptionWrapper } >

    //         { 
    //             // loadedDescription && 
    //             streaming[ 0 ] // initial call it will be 1, so stream will run. after stream returns it will set streaming[0] to 0 and streaming[1] to 1. 
    //             ? 
    //             < Stream 
    //                 caller={ "AIDescription" }
    //                 text={ loadedDescription }
    //                 streaming={ streaming }
    //                 setStreamState={ setStreaming }
    //                 setDescriptionStreamed={ setDescriptionStreamed }
    //             /> 
    //             : 
    //             < p style={ textStyle } >{ loadedDescription }</p>
    //             // < LoadingElement /> 
    //         } 
           
    //     </div>
    // );
};





















// const cached: string = __DATA__.compounds.find( ( compound: any ) => compound.title === SEARCH_INPUT ); 
// if (!cached) {
//     throw new Error('Compound not cached.');
// };


// setTimeout( () => {
//     setLoadedDescription( SearchResults.description );
//     // setAPI_DATA( sampleDescription );
// }, 3000 )























    /*
    if ( DESCRIPTION_DATA === null ) {
        <div id="description" style={ descriptionWrapper } >
            return < LoadingElement />
        </div>
    };
    */