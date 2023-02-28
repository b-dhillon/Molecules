import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ChemicalProperties from './ChemicalProperties';
import Molecular_Structures from './Molecular_Structures';
import LoadingElement from './LoadingElement';
import AIDescription from './AIDescription';

import Stream from './Stream';


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

    const wrapperBorders = true;

    const domNodes: any = {
        description: useRef(),
        properties: useRef(),
        structure2d: useRef(),
        structure3d: useRef(),
    };

    const inlineStyles = {
        // bodyWrapper: {
        //     width: '100%',
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "space-between",
        //     // padding: '0px 70px 0px 70px',
        // },

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
            padding: "0px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderLeft: '2px solid gray',
        },
        descriptionWrapper: {
            height: "auto",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            padding: "10px 120px 0px 0px",
        },
        descriptionText: {
            color: "white",
            fontFamily: "Poppins-Regular",
            padding: "0px",
            margin: "0px",
            fontSize: "1.2rem",
        },
        propertiesWrapper: {
            height: "50%",
            margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            padding: "80px 0px",
        },
        canvasWrapper: {
            maxWidth: "300px"
        },

        structureWrapper: {
            height: "100%",
            // margin: "0 auto",
            border: `${ wrapperBorders ? "2px solid white" : "none" }`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },

        structuresTitle: {
            textAlign: "center",
            margin: "0px 15px 15px 15px",
            padding: "0px 0px 15px 0px",
            fontSize: "1.3rem",
        },
    };



    useEffect( () => {
        if( SearchResults.length ) {
            StreamResults( SearchResults[0], domNodes );
            console.log( "Streaming results to page...");
        };
    }, [ SearchResults ] );


    return (
        < div id="search-body" style={ inlineStyles.bodyWrapper } >

            < div id="left-side" style={ inlineStyles.leftSideWrapper as React.CSSProperties } >

                < div id="description" style={ inlineStyles.descriptionWrapper } >
                    < p style={ inlineStyles.descriptionText } ref={ domNodes.description } ></ p >
                </ div >

                < div id="properties" style={ inlineStyles.propertiesWrapper } >
                    < p ref={ domNodes.properties } ></ p >
                </ div >

            </ div >

            < div id="right-side" style={ inlineStyles.rightSideWrapper as React.CSSProperties } >

                < div id="structures"  style={ inlineStyles.structureWrapper as React.CSSProperties }>

                    < div id="display2D-wrapper" style={inlineStyles.canvasWrapper} >

                        < p ref={ domNodes.structure2d } style={ inlineStyles.structuresTitle as React.CSSProperties }></ p >
                        < div id="display2D" ></ div >

                    </ div >

                    < div id="display2D-wrapper" style={inlineStyles.canvasWrapper} >

                        < p ref={ domNodes.structure3d } style={ inlineStyles.structuresTitle as React.CSSProperties }></ p >
                        < div id="display3D" ></ div >

                    </ div >

                </ div >

            </ div > 
        	
        </div>
    )



};

async function StreamResults( _SearchResults: any, domNodes: any ) {

    await Stream( _SearchResults.description, domNodes.description ); // Streaming Description

    // Streaming Properties
    const [ propertyNames, propertyValues ] = PropertyFormatter( _SearchResults.properties );
    await Stream( propertyNames,  domNodes.properties );
    await Stream( propertyValues,  domNodes.properties );

    // Streaming Structures
    await Stream( "STRUCTURE 2d",  domNodes.structure2d );
    await Stream( "STRUCTURE 3d",  domNodes.structure3d );
};




function PropertyFormatter( properties: any ) {

    const propertyNames = Object.keys( properties ).toString().replace( /_/g, " " ); // replace all underscores with spaces

    console.log( "Formatted Property Names: ", propertyNames );

    const propertyValues = Object.values( properties ).toString();

    return [ propertyNames, propertyValues ];
}







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

