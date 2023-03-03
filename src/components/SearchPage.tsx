import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LoadingElement from './LoadingElement';

import Structure2D from './Structure2D';
import Structure3D from './Structure3D';
// import Molecular_Structures from './Molecular_Structures';
// import ChemicalProperties from './ChemicalProperties';
// import AIDescription from './AIDescription';



import MolecularFormulaFormatter from './MolecularFormulaFormatter';

import Stream from './Stream';
import PropertyTables from './PropertyTable';


export default function SearchPage( props: any ): JSX.Element {

    const { 
        __DATA__, 
        SEARCH_INPUT, 
        PAGE,
        setSEARCH_INPUT, 
        setPAGE, 
    } = props;


    const wrapperBorders = false;
    const searchPageWrapper = {
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `${ wrapperBorders ? "2px solid green" : "none" } `,
    }
    
    return (
        <div id="SearchPage" style={ searchPageWrapper as React.CSSProperties }>

            < SearchPageHead
                PAGE={ PAGE }  
                data={ __DATA__ } 
                setPAGE={ setPAGE } 
                SEARCH_INPUT={ SEARCH_INPUT }
                setSEARCH_INPUT={ setSEARCH_INPUT }
                setSearchResults={ props.setSearchResults }
            />
            
	        < SearchPageBody 
                __DATA__={ __DATA__ }
                SEARCH_INPUT={ SEARCH_INPUT }
                SearchResults={ props.SearchResults }
            />

        </div>
    );

};


function SearchPageHead( props: any ): JSX.Element {

    const { 
        __DATA__, 
        SEARCH_INPUT, 
        PAGE, 
        setSEARCH_INPUT, 
        setPAGE, 
        setSearchResults 
    } = props;

    const headerWrapper = {
        width: '100%',
        display: "flex",
        padding: '30px 70px 20px 70px',
    };

    const divider = {
        borderBottom: '2px solid gray',
        display: "flex",
        width: "100%",
        padding: "0px 0px 28px 0px",
    }

    return (
        < div style={ headerWrapper } id="header" >
            <div style={ divider } >
                < Logo PAGE={ PAGE } />
                < SearchBar 
                    __DATA__={ __DATA__ }
                    SEARCH_INPUT={ SEARCH_INPUT }
                    PAGE={ PAGE }  
                    setPAGE={ setPAGE } 
                    setSEARCH_INPUT={ setSEARCH_INPUT }
                    setSearchResults={ props.setSearchResults }
                /> 
            </div>
        </ div >
    );
};


function SearchPageBody( props: any ): JSX.Element {

    const { __DATA__, SEARCH_INPUT, SearchResults } = props;
    const [ streamed, setStreamed ] = useState(false);
    const [ show2dCanvas, setShow2dCanvas ] = useState(false);
    const [ show3dCanvas, setShow3dCanvas ] = useState(false);

    const wrapperBorders = false;

    const domNodes: any = {
        descriptionWrapper: useRef(),
        descriptionTitle: useRef(),
        description: useRef(),

        propertiesWrapper: useRef(),
        properties: {
            names: [
                // useRef(),
                // useRef(),
                // useRef(),
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
                // useRef(),
                // useRef(),
                // useRef(),
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

        structure2d: useRef(),
        structure3d: useRef(),
    };

    const inlineStyles = {

        // Organizational wrappers
        bodyWrapper: {
            width: '100%',
            display: "flex",
            borderBottom: '2px solid black',
            padding: '5px 70px 20px 70px',
            border: `${ wrapperBorders ? "2px solid red" : "none" }`
        },

        leftSideWrapper: {
            width: "72%",
            height: "100%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
            flexDirection: "column-reverse"
        },

        rightSideWrapper: {
            width: "28%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
            height: "800px",
            padding: "0px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderLeft: '2px solid gray',
        },



    
        // Description Section
        descriptionWrapper: {
            height: "auto",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 50px 50px 0px",
        },
        descriptionContainer: {
            borderRadius: "20px",
            padding: "20px 30px 30px 30px",
            // margin: "10px 0px 10px 0px",
            border: "1px solid black",
            background: "#141414 !important",
            boxShadow:  "-9px -9px 9px #080808, 9px 9px 9px #202020",
        },

        desccriptionTitleWrapper: {
            width: "100%",
            padding: "0px 20px 0px 20px",
        },

        descriptionTitle: {
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







        // Structures Section
        structureWrapper: {
            height: "100%",
            padding: "10px 50px 50px 50px",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            // margin: "0 auto",
            // flexDirection: "column",
        },
        structuresText: {
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            margin: "0px",
            padding: "0px",
            fontSize: "1.3rem",
            width: "300px",
        },

        canvasWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "300px"
        },









        // Properties Section:
        propertiesWrapper: {
            // height: "50%",
            margin: "0 auto",
            // border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0px 0px 0px",
        },
        propertiesNamesWrapper: {
            width: "50%",
            height: "100%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid brown" : "none" }`,
            display: "flex",
            flexDirection: "column",
        },
        propertiesValuesWrapper: {
            width: "50%",
            height: "100%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid brown" : "none" }`,
            display: "flex",
            flexDirection: "column",
        },

        propertiesText: {
            fontFamily: "Poppins-Regular",
            border: "1px solid yellow"
        },


        subscriptStyle: {
            fontSize: "0.8em",
            fontFamily: "'Arial', sans-serif",
        },
    };


    // Should be moved to a separate file -- problem is then you'll have to pass the setter to it, which can't be done unless it's jsx returning component:
    async function StreamSearchResults( _SearchResults: any, domNodes: any ) {

        const propertyNames = [ 
            "Name:", 
            // "Systematic Name:", 
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
            // "Net Charge:",
            // "Dummy Property:"
        ];

        // You could write a property formatter here that converts everything to a string, adds the "g/mol" and all the units and formats the molecular formula...or you could leave them here...pros and cons of each?
        const propertyValues = [
            _SearchResults.properties["Name"],
            // _SearchResults.properties["Systematic Name"],
            MolecularFormulaFormatter( _SearchResults.properties["Molecular Formula"], inlineStyles.subscriptStyle ), 
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
            // _SearchResults.properties["Charge"].toString(),
            // "Dummy Value"
        ];

        

        // Streaming Description:
        // @ts-ignore
        domNodes.descriptionWrapper.current.classList.remove( "hidden" );
        await Stream ( "Description:", domNodes.descriptionTitle, 50 );
        await Stream( _SearchResults.description, domNodes.description );     


        // Streaming Structures:
        await Stream( "Chemical Line Structure:",  domNodes.structure2d, 50 ) && setShow2dCanvas(true);
        // @ts-ignore
        show2dCanvas && document.getElementById( "#canvas2d" ).classList.remove( "hidden" );
        Structure2D( _SearchResults.mol2d, 300 );
        await Stream( "3D Molecular Geometry:",  domNodes.structure3d, 50 ) && setShow3dCanvas(true);
        // @ts-ignore
        show2dCanvas && document.getElementById( "#canvas3d" ).classList.remove( "hidden" );
        Structure3D( _SearchResults.mol3d  , 300 );



        // Streaming Properties:
        domNodes.propertiesWrapper.current.classList.remove( "hidden" );
        for(let i = 0; i < domNodes.properties.names.length; i++) {
            await Stream( propertyNames[ i ],  domNodes.properties.names[ i ], 30 );
            await Stream( propertyValues[ i ],  domNodes.properties.values[ i ], 30 );
        };

        console.log( "Finished streaming all search results to page.");
    };


    useEffect( () => {
        if( SearchResults.length && !streamed ) {
            console.log( "Data recieved. Streaming results to page...", SearchResults[0]);
            StreamSearchResults( SearchResults[0], domNodes );
            setStreamed( true );
        };
    }, [ SearchResults ] );


    return (
        < div id="search-body" style={ inlineStyles.bodyWrapper } >

            < div id="left-side" style={ inlineStyles.leftSideWrapper as React.CSSProperties } >

                { SearchResults.length ? null : < LoadingElement /> }


                < div id="description" style={ inlineStyles.descriptionWrapper as React.CSSProperties } className="hidden" ref={ domNodes.descriptionWrapper }>

                    {/* < div id="description-title-wrapper" style={ inlineStyles.desccriptionTitleWrapper } >                    
                    </ div > */}
                    < div id="description-container" style={ inlineStyles.descriptionContainer }>
                        <h4 id="description-title" style={ inlineStyles.descriptionTitle } ref={ domNodes.descriptionTitle }></h4>
                        < p style={ inlineStyles.descriptionText } ref={ domNodes.description } ></ p >
                    </ div >

                </ div >


                < div id="structures"  style={ inlineStyles.structureWrapper as React.CSSProperties }>

                    < div id="display2D-wrapper" style={ inlineStyles.canvasWrapper as React.CSSProperties } >

                        < p ref={ domNodes.structure2d } style={ inlineStyles.structuresText as React.CSSProperties }></ p >
                        <canvas id="display2D" className="hidden"></canvas>

                    </ div >

                    < div id="display3D-wrapper" style={ inlineStyles.canvasWrapper as React.CSSProperties } >

                        < p ref={ domNodes.structure3d } style={ inlineStyles.structuresText as React.CSSProperties }></ p >
                        <canvas id="display3D" className="hidden"></canvas>
                        {/* { show3dCanvas && < Structure3D  mold2d={ SearchResults[0].mol2d } size={300} /> } */}

                    </ div >

                </ div >

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

            </ div >

            < div id="right-side" style={ inlineStyles.rightSideWrapper as React.CSSProperties } >


                < div id="properties" style={ inlineStyles.propertiesWrapper as React.CSSProperties } className="hidden" ref={ domNodes.propertiesWrapper } >
                    < PropertyTables domNodes={ domNodes } />
                </div>


            </ div > 
        	
        </div>
    )
};

























function PropertyFormatter( properties: any ) {

    console.log( "Properties:", properties);

    // const propertyValues = Object.values( properties );
    // const strings = propertyValues.map( ( value: any, index: number ) => value.toString() );
    const propertyValuesAsStrings = Object.values( properties ).map( ( value: any, index: number ) => value.toString() );
    console.log( "Formatted Property Values:", propertyValuesAsStrings );

    let orderedPropertyValues = [];

    return [ propertyValuesAsStrings ];
}





// const propertyNames = Object.keys( properties ).toString().replace( /_/g, " " ); // replace all underscores with spaces


{/* { 
    SearchResults.length
    ?
    <>
        < AIDescription 
            __DATA__ = { __DATA__ } 
            streaming = { streaming }
            setStreaming = { setStreaming }
            SearchResults = { SearchResults }
        />
        < ChemicalProperties 
            __DATA__ = { __DATA__ } 
            streaming = { streaming }
            setStreaming = { setStreaming }
            SearchResults = { SearchResults }
        />
    </>
    :
    < LoadingElement />
} */}




/*
return (
    SearchResults.length 
    ?
    < div id="Stream2-TestBody" style={ SearchPageBodyInlineStyles.bodyWrapper as React.CSSProperties } >

        <div ref={ domNodes.description } >
        </div>

        <div ref={ domNodes.properties } >
        </div>

        <div ref={ domNodes.structures } >
        </div>

    </ div >
    :
    < LoadingElement />
);
*/









//     // const [ streaming, setStreaming ] = useState( { AI_Description: true, Chemical_Properties: false, Molecular_Structures: false } );
//     const [ streaming, setStreaming ] = useState( [ 1, 0, 0 ] );




//     return (
//         <div id="search-body" style={ inlineStyles.bodyWrapper } >

//             < div id="left-side" style={ inlineStyles.leftSideWrapper as React.CSSProperties } >

//                 {/* { 
//                     SearchResults.length
//                     ?
//                     <>
//                         < AIDescription 
//                             __DATA__ = { __DATA__ } 
//                             streaming = { streaming }
//                             setStreaming = { setStreaming }
//                             SearchResults = { SearchResults }
//                         />
//                         < ChemicalProperties 
//                             __DATA__ = { __DATA__ } 
//                             streaming = { streaming }
//                             setStreaming = { setStreaming }
//                             SearchResults = { SearchResults }
//                         />
//                     </>
//                     :
//                     < LoadingElement />
//                 } */}

//             </ div >

//             < div id="right-side" style={ inlineStyles.rightSideWrapper as React.CSSProperties } >
//             {/* 

//                 {
//                     SearchResults.length
//                     ?
//                     <>
//                         < Molecular_Structures 
//                             __DATA__ = { __DATA__ } 
//                             streaming = { streaming }
//                             setStreaming = { setStreaming }
//                             SearchResults = { SearchResults }
//                         />
//                     </>
//                     :
//                     ""
//                 }

//             */}
//             </ div > 
        	
//         </div>
//     )
// };
























// Old way of StreamScheduling...terrible:
/*
const properties1_2 = "Molecular Weight: 180.16 g/mol"
const properties1_2_3 = "Molecular Complexity: 3.0"

const properties2 = "Molecular Formula: C6H12O6"
const properties2_2 = "Molecular Weight: 180.16 g/mol"
const properties2_2_3 = "Molecular Complexity: 3.0"

const properties3 = "Molecular Formula: C6H12O6"
const properties3_2 = "Molecular Weight: 180.16 g/mol"
const properties3_2_3 = "Molecular Complexity: 3.0"
*/
{/*  { showColumn1_2 && < Stream text={ properties1_2 } style={ textStyle } />       */}
{/*  { showColumn1_2_3 && < Stream text={ properties1_2_3 } style={ textStyle } /> } */}

{/*  { showColumn2 && < Stream text={ properties2 } style={ textStyle } /> }         */}
{/*  { showColumn2_2 && < Stream text={ properties2_2 } style={ textStyle } /> }     */}
{/*  { showColumn2_2_3 && < Stream text={ properties2_2_3 } style={ textStyle } /> } */}

{/*  { showColumn3 && < Stream text={ properties3 } style={ textStyle } /> }         */}
{/*  { showColumn3_2 && < Stream text={ properties3_2 } style={ textStyle } />       */}
{/*  { showColumn3_2_3 && < Stream text={ properties3_2_3 }style={ textStyle } /> }  */}


/*
return (
    <div id="description" style={ descriptionWrapper } >
        { DESCRIPTION_DATA ? <p id="descriptionParagraph" ref={ ref }> { DESCRIPTION_DATA } </p> : < LoadingElement /> }
    </div>
);
*./





{/* function TestFetch( props: any ): JSX.Element {

    const [ _data, setData] = useState<any>(null);

    // useEffect(() => {

    //     setTimeout( () => {
    //         fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`)
    //         .then( res => {
    //             console.log(res);
    //             setData( () => res.status );
    //             props.setLoading( false );
    //         });

    //     }, 30000 );

    // }, []);

    // if (_data === null) {
    //     return < LoadingPage />
    // }

    return (
        <>
        </>
    );
}; */




/* 
// lazy() to test suspense
/*
const TestLazy = lazy(() => {

    fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`)
        .then( res => {
            console.log(res);
            return res
            // setData( () => res.status )
        } 
    );
    return new Promise(resolve => setTimeout(resolve, 1000))
});
*/ 

