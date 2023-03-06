import SearchPageHead from './SearchPageHead';
import SearchPageBody from './SearchPageBody';


export default function SearchPage( props: any ): JSX.Element {

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
                PAGE={ props.PAGE }  
                __DATA__={props.__DATA__ } 
                SEARCH_INPUT={ props.SEARCH_INPUT }
                SearchResults={ props.SearchResults }
                SubmitCount={ props.SubmitCount }

                setLoading={ props.setLoading }


                
                setSubmitCount={ props.setSubmitCount }
                setPAGE={ props.setPAGE } 
                setSEARCH_INPUT={ props.setSEARCH_INPUT }
                setSearchResults={ props.setSearchResults }
            />
            
	        < SearchPageBody 
                __DATA__={ props.__DATA__ }
                SEARCH_INPUT={ props.SEARCH_INPUT }
                SearchResults={ props.SearchResults }
                Loading={ props.Loading }
                SubmitCount={ props.SubmitCount }

                setLoading={ props.setLoading }
                // setSubmitCount={ props.setSubmitCount }
            />

        </div>
    );

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

