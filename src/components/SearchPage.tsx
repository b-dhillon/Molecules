import { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Chemical_Properties from './ChemicalProperties';
import AI_Description from './AI_Description';
import Molecular_Structures from './Molecular_Structures';


export default function SearchPage( props: any ): JSX.Element {

    const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, setPAGE, PAGE } = props;
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

            < Header 
                PAGE={ PAGE }  
                data={ __DATA__ } 
                setPAGE={ setPAGE } 
                SEARCH_INPUT={ SEARCH_INPUT }
                setSEARCH_INPUT={ setSEARCH_INPUT }
            />
            
	        < Body 
                __DATA__={ __DATA__ }
                SEARCH_INPUT={ SEARCH_INPUT }
            />

        </div>
    );

};



function Header( props: any ): JSX.Element {

    const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, setPAGE, PAGE, wrapperBorders } = props;

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
                    setSEARCH_INPUT={ setSEARCH_INPUT }
                    PAGE={ PAGE }  
                    setPAGE={ setPAGE } 
                /> 
            </div>
        </ div >
    );
};




function Body( props: any ): JSX.Element {

    const { __DATA__, SEARCH_INPUT } = props;

    const wrapperBorders = false;

    const [ streamState, setStreamState ] = useState( { AI_Description: false, Chemical_Properties: false, Molecular_Structures: false } );

    const bodyWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid black',
        padding: '5px 70px 20px 70px',
        border: `${ wrapperBorders ? "2px solid red" : "none" }`
    };

    const leftSideWrapper = {
        width: "72%",
        height: "100%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
        flexDirection: "column-reverse"
    };

    const rightSideWrapper = {
        width: "28%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
        height: "800px",
        padding: "0px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: '2px solid gray',
    };

    return (
        <div id="search-body" style={ bodyWrapper } >

            < div id="left-side" style={ leftSideWrapper as React.CSSProperties } >

                {
                    
                }
                < AI_Description 
                    __DATA__ = { __DATA__ } 
                    SEARCH_INPUT = { SEARCH_INPUT } 
                    streamState = { streamState }
                    setStreamState = { setStreamState }
                />

                < Chemical_Properties 
                    streamState = { streamState }
                    setStreamState = { setStreamState }
                />
            </ div >

            < div id="right-side" style={ rightSideWrapper as React.CSSProperties } >
                < Molecular_Structures 
                    streamState = { streamState }
                    setStreamState = { setStreamState }
                />
            </ div >
        	
        </div>
    )
};





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

