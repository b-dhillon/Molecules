import { useEffect, useRef, useState } from 'react';
import LoadingElement from './LoadingElement';
import RenderStructure2D from './Structure2D';
import RenderStructure3D from './Structure3D';
import MolecularFormulaFormatter from './MolecularFormulaFormatter';
import Stream from './Stream';
import PropertyTables from './PropertyTable';
import ResetBody from './ResetBody';

export default function SearchPageBody( props: any ): JSX.Element {

    const [ streamed, setStreamed ] = useState(false);

    const wrapperBorders = false;

    const domNodes: any = {
        descriptionWrapper: useRef(),
        descriptionTitle: useRef(),
        descriptionText: useRef(),
        display2d: useRef(),
        display3d: useRef(),

        propertiesWrapper: useRef(),
        propertiesTitle: useRef(),
        properties: {
            names: [
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
            ],
            values: [
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
                useRef(),
            ]

        },

        structure2dTitle: useRef(),
        structure3dTitle: useRef(),
    };

    const inlineStyles = {

        // Organizational wrappers
        bodyWrapper: {
            width: '100%',
            display: "flex",
            borderBottom: '2px solid black',
            padding: '5px 70px 20px 70px',
        },

        leftSideWrapper: {
            width: "65%",
            height: "100%",
            margin: "0",
            border: "3px solid blue",
            flexDirection: "column-reverse"
        },

        rightSideWrapper: {
            width: "35%",
            height: "100%",
            margin: "0",
            border: "3px solid blue",

            padding: "0px 0px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
        },





        // Structures Section
        structureWrapper: {
            height: "100%",
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            // padding: "10px 50px 0px 0px",
            // justifyContent: "center",
            // margin: "0 auto",
            // flexDirection: "column",
        },
        structuresText: {
            fontFamily: "Poppins-Regular",
            textAlign: "Left",
            margin: "0px",
            padding: "0px 0px 0px 11px",
            fontSize: "1.3rem",
            width: "300px",
            border: "2px solid white",
        },

        canvasWrapper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "400px",
            border: "2px solid white",
            // alignItems: "center",
            // margin: "0px 75px 0px 0px",
        },
        



    
        // Description Section
        descriptionWrapper: {
            // height: "auto",
            margin: "0",
            border: "4px solid yellow",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#141414 !important",
            // padding: "15px 120px 50px 0px",
        },
        descriptionBox: {
            borderRadius: "20px",
            padding: "20px",
            border: "4px solid green",
            background: "#141414",
            boxShadow:  "-9px -9px 9px #080808, 9px 9px 9px #202020",
            maxHeight: "300px",
            overflow: "auto",
            textOverflow: "ellipsis",
            margin: "10px 0px 10px 0px",
        },

        descriptionTitleWrapper: {
            width: "100%",
            padding: "0px 20px 0px 20px",
            border: "1px solid white",
        },

        descriptionTitleText: {
            color: "white",
            fontFamily: "Poppins-Regular",
            fontSize: "1.3rem",
            padding: "0px",
            margin: "0px 0px 10px 0px",
        },
        descriptionText: {
            color: "white",
            fontFamily: "Poppins-Regular",
            padding: "0px",
            margin: "0px",
            fontSize: "1.1rem",
            
        },










        // Properties Section:
        propertiesWrapper: {
            // width: "inherit",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 0px 0px",
            fontFamily: "Poppins-Regular",
            border: "3px solid white",
        },

        propertiesBox: {
            borderRadius: "20px",
            padding: "20px 0px",
            border: "1px solid black",
            background: "#141414",
            boxShadow:  "-9px -9px 9px #080808, 9px 9px 9px #202020",
            maxHeight: "500px",
            overflow: "auto",
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            // padding: "0px",
            // margin: "10px 0px 10px 0px",
        },

        propertiesTitleWrapper: {
            border: "1px solid white"
            // width: "100%",
            // padding: "0px 20px 0px 20px",
        },
        propertiesTitleText: {
            color: "white",
            fontFamily: "Poppins-Regular",
            fontSize: "1.3rem",
            padding: "0px",
            margin: "0px 0px 0px 0px",
        },
        propertiesNamesWrapper: {
            // width: "50%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid brown" : "none" }`,
            display: "flex",
            flexDirection: "column",
            // height: "100%",
        },
        propertiesValuesWrapper: {
            // width: "50%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid brown" : "none" }`,
            display: "flex",
            flexDirection: "column",
            // height: "100%",
        },

        subscriptStyle: {
            fontSize: "0.8em",
            fontFamily: "Poppins-Regular",
        },
    };



    useEffect( () => {

        if( props.SearchResults.length && props.SubmitCount === 1 && !streamed ) {
            console.log( "First search. Streaming these results to page:", props.SearchResults[0]);
            console.log( "Submit Count:", props.SubmitCount);
            RenderSearchResults( props.SearchResults[0], domNodes );
            setStreamed( true );
        };
        
        if( props.SubmitCount > 1 && streamed) {
            console.log( "2nd+ submit...clearing UI before streaming again", props.SubmitCount );
            ResetBody( domNodes );
            setStreamed( false );
        };

        if( props.SubmitCount > 1 && props.SearchResults.length && !streamed ) {
            console.log( "Rendering these results to page:", props.SearchResults[0]);
            RenderSearchResults( props.SearchResults[0], domNodes );
            setStreamed( true );
        };

    }, [ props.SearchResults, props.SubmitCount ] );


    return (
        < div id="search-page-body" style={ inlineStyles.bodyWrapper } >

            < div id="left-side-wrapper" style={ inlineStyles.leftSideWrapper as React.CSSProperties } >

                { props.Loading ? < LoadingElement /> : null }

                < div id="structures-wrapper"  style={ inlineStyles.structureWrapper as React.CSSProperties }>

                    < div id="display2D-wrapper" style={ inlineStyles.canvasWrapper as React.CSSProperties } >

                        < p ref={ domNodes.structure2dTitle } style={ inlineStyles.structuresText as React.CSSProperties }></ p >
                        <canvas ref={ domNodes.display2d }id="display2D" className="hidden"></canvas>

                    </ div >

                    < div id="display3D-wrapper" style={ inlineStyles.canvasWrapper as React.CSSProperties } >

                        < p ref={ domNodes.structure3dTitle } style={ inlineStyles.structuresText as React.CSSProperties }></ p >
                        <canvas ref={ domNodes.display3d } id="display3D" className="hidden"></canvas>

                    </ div >

                </ div >


                < div id="description-wrapper" style={ inlineStyles.descriptionWrapper as React.CSSProperties } className="hidden" ref={ domNodes.descriptionWrapper }>

                    < div id="description-title-wrapper" style={ inlineStyles.descriptionTitleWrapper } >                
                        <h4 id="description-title" style={ inlineStyles.descriptionTitleText } ref={ domNodes.descriptionTitle }></h4>
                    </ div >

                    < div id="description-box" style={ inlineStyles.descriptionBox as React.CSSProperties }>
                        < p style={ inlineStyles.descriptionText } ref={ domNodes.descriptionText } ></ p >
                    </ div >

                </ div >

            </ div >

            < div id="right-side-wrapper" style={ inlineStyles.rightSideWrapper as React.CSSProperties } >


                < div id="properties-wrapper" style={ inlineStyles.propertiesWrapper as React.CSSProperties } className="hidden" ref={ domNodes.propertiesWrapper } >

                    < div id="properties-title-wrapper" style={ inlineStyles.propertiesTitleWrapper } >                
                        <h4 id="properties-title" style={ inlineStyles.propertiesTitleText } ref={ domNodes.propertiesTitle }></h4>
                    </ div >

                    <div id="properties-box" style={ inlineStyles.propertiesBox } >

                        < PropertyTables domNodes={ domNodes } />

                    </div>

                </div>


            </ div > 
        	
        </div>
    )
};





async function RenderSearchResults( _SearchResults: any, domNodes: any ) {

    const propertyNames = [ 
        "Name:", 
        "Molecular Formula:",
        "Molecular Weight:", 
        "Molecular Complexity:", 
        "Number of Rotatable Bonds:", 
        "Number of Chiral Centers:", 
        "Number of Geometric Centers:",
        "Number of Stereocenters:", 
        "Max Number of Chiral Isomers:", 
        "Max Number of 3D Conformers:", 
        "Hydrogen Bond Acceptors:", 
        "Hygdrogen Bond Donors:", 
        // "Systematic Name:", 
        // "Net Charge:",
        // "Dummy Property:"
    ];

    // You could write a property formatter here that converts everything to a string, adds the "g/mol" and all the units and formats the molecular formula...or you could leave them here...pros and cons of each?
    const propertyValues = [
        _SearchResults.properties["Name"],
        MolecularFormulaFormatter( _SearchResults.properties["Molecular Formula"] ), 
        _SearchResults.properties["Molecular Weight"] + " g/mol",
        _SearchResults.properties["Molecular Complexity"].toString(),
        _SearchResults.properties["Rotatable Bond Count"].toString(),
        _SearchResults.properties["Chiral Center Count"].toString(),
        _SearchResults.properties["Geometric Center Count"].toString(),
        _SearchResults.properties["Stereocenter Count"].toString(),
        _SearchResults.properties["Chiral Isomer Count"].toString(),
        _SearchResults.properties["3D Conformer Count"].toString(),
        _SearchResults.properties["H-Bond Acceptor Count"].toString(),
        _SearchResults.properties["H-Bond Donor Count"].toString(),
        // _SearchResults.properties["Systematic Name"],
        // _SearchResults.properties["Charge"].toString(),
        // "Dummy Value"
    ];

    async function RenderStructures() {
        await Stream( "Line Structure:", domNodes.structure2dTitle, 1 ) 
        RemoveHidden(domNodes.display2d.current);
        RenderStructure2D( _SearchResults.mol2d, 375 );
        await Stream( "Molecular Geometry:", domNodes.structure3dTitle, 1 ) 
        RemoveHidden(domNodes.display3d.current);
        RenderStructure3D( _SearchResults.mol3d, 375 );
    }
    
    async function RenderDescription() {
        RemoveHidden(domNodes.descriptionWrapper.current);
        // await Stream ( _SearchResults.properties["Name"] + ":", domNodes.descriptionTitle, 1 );
        await Stream ( "Description:", domNodes.descriptionTitle, 1 );
        await Stream( _SearchResults.description, domNodes.descriptionText );  
    }
    
    async function RenderProperties() {
        RemoveHidden(domNodes.propertiesWrapper.current);
        await Stream ( "Chemical Properties:", domNodes.propertiesTitle, 1 );
        for(let i = 0; i < domNodes.properties.names.length; i++) {
            await Stream( propertyNames[ i ],  domNodes.properties.names[ i ], 1 );
            await Stream( propertyValues[ i ],  domNodes.properties.values[ i ], 1 );
        };
    }

    await RenderStructures();
    await RenderDescription();
    await RenderProperties();

    console.log( "Finished streaming all search results to page.");
};



function RemoveHidden( domNode: any ) {
    // domNode.style.display = "none";

    domNode.classList.remove( "hidden" );
}












{/* < div id="properties" style={ inlineStyles.propertiesWrapper as React.CSSProperties } >


    < div id="names" style={ inlineStyles.propertiesNamesWrapper as React.CSSProperties } >

        < p ref={ domNodes.properties.names[0] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[1] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[2] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[3] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[4] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[5] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[6] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[7] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[8] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[9] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[10] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[11] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[12] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.names[13] } style={ inlineStyles.propertiesText } ></ p >

    </ div >

    < div id="values" style={ inlineStyles.propertiesValuesWrapper as React.CSSProperties } >

        < p ref={ domNodes.properties.values[0] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[1] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[2] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[3] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[4] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[5] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[6] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[7] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[8] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[9] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[10] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[11] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[12] } style={ inlineStyles.propertiesText } ></ p >
        < p ref={ domNodes.properties.values[13] } style={ inlineStyles.propertiesText } ></ p >

    </ div >

</ div > */}