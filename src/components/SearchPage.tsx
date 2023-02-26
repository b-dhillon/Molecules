import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import LoadingElement from './LoadingElement';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Styles from '../styles/SearchPage.module.css';
import Stream from './Stream';
import PropertyFetcher from './PropertyFetcher';
import Structure2DFetcher from './StructureFetcherLoader';
import Search from './Search';


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

                wrapperBorders={ wrapperBorders }
                // searchedString={ searchedString } 
                // setSearchedString={ setSearchedString } 
            />
            
	        < Body 
                __DATA__={ __DATA__ }
                SEARCH_INPUT={ SEARCH_INPUT }
                wrapperBorders={ wrapperBorders } 
            />
        </div>
    );

};



function Body( props: any ): JSX.Element {

    const { __DATA__, wrapperBorders, SEARCH_INPUT } = props;

    const bodyWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid black',
        padding: '5px 70px 20px 70px',
        border: ` ${ wrapperBorders ? "2px solid red" : "none" } `
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
        border: `${ wrapperBorders ? "2px solid blue" : "none" } `,
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
                < AI_Description wrapperBorders={ wrapperBorders } __DATA__={ __DATA__ } SEARCH_INPUT={ SEARCH_INPUT } />
                < Chemical_Properties  wrapperBorders={ wrapperBorders } />
            </ div >

            < div id="right-side" style={ rightSideWrapper as React.CSSProperties } >
                < Molecular_Structures wrapperBorders={ wrapperBorders } />
            </ div >
        	
        </div>
    )
}

function AI_Description( props: any ): JSX.Element {

    const ref: any = useRef();
    
    const { wrapperBorders, __DATA__, SEARCH_INPUT } = props;

    const sampleDescription: string = __DATA__.compounds.find( ( compound: any ) => compound.title === SEARCH_INPUT ).description; 



    if (!sampleDescription) throw new Error('Compound not found.');

    const [ DESCRIPTION_DATA, setDESCRIPTION_DATA ] = useState<any>( null );

    setTimeout( () => {
        setDESCRIPTION_DATA( sampleDescription );
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
            {/* { DESCRIPTION_DATA ? < Stream text={ sampleDescription } /> : < LoadingElement /> } */}
        </div>
    );
};


function Chemical_Properties( props: any): JSX.Element {


    // const { wrapperBorders } = props;
    const wrapperBorders = false;
    const [ showColumnA, setShowColumnA ] = useState(false);
    const [ showColumnB, setShowColumnB ] = useState(false);
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


    const start = 2000;

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
    



    const propertiesWrapper = {
        height: "50%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        display: "flex",
        padding: "80px 0px",
    };

    const propertyColumnA = {
        border: "1px solid white",
        width: "16.67%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "right",

        // border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
        // alignItems: "center",
    };

    const propertyColumnB = {
        border: "1px solid green",
        width: "16.67%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",

        // border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
        // alignItems: "center",
    };

    

    const textStyle = {
        margin: "10px 0px",
        fontSize: "1rem"

    }

    // const properties1 = "Molecular Formula: C6H12O6 \n Molecular Weight: 180.16 g/mol \n Molecular Complexity: 3.0";
    const propertiesA = `Molecular Formula:\nMolecular Weight:\nMolecular Complexity:`;
    const propertiesB = `C6H12O6\n234 g/mol\n42`;

    
    const properties1_2 = "Molecular Weight: 180.16 g/mol"
    const properties1_2_3 = "Molecular Complexity: 3.0"

    const properties2 = "Molecular Formula: C6H12O6"
    const properties2_2 = "Molecular Weight: 180.16 g/mol"
    const properties2_2_3 = "Molecular Complexity: 3.0"

    const properties3 = "Molecular Formula: C6H12O6"
    const properties3_2 = "Molecular Weight: 180.16 g/mol"
    const properties3_2_3 = "Molecular Complexity: 3.0"


    return (
        < div id="properties" style={ propertiesWrapper } >

            < div id="property-column1a" style={ propertyColumnA as React.CSSProperties } >
                { showColumnA && <pre>< Stream text={ propertiesA } style={ textStyle } /></pre>  }
                {/* { showColumn1_2 && < Stream text={ properties1_2 } style={ textStyle } /> */}
                {/* { showColumn1_2_3 && < Stream text={ properties1_2_3 } style={ textStyle } /> } */}
            </ div >

            < div id="property-column1b" style={ propertyColumnB as React.CSSProperties } >
                { showColumnB && <pre>< Stream text={ propertiesB } style={ textStyle } /></pre> }

                {/* { showColumn2 && < Stream text={ properties2 } style={ textStyle } /> }         */}
                {/* { showColumn2_2 && < Stream text={ properties2_2 } style={ textStyle } /> }     */}
                {/* { showColumn2_2_3 && < Stream text={ properties2_2_3 } style={ textStyle } /> } */}
            </ div >

            < div id="property-column2a" style={ propertyColumnA as React.CSSProperties } >
                { showColumnA && < Stream text={ propertiesA } style={ textStyle } /> }

            </ div >
            
            < div id="property-column2b" style={ propertyColumnB as React.CSSProperties } >
                { showColumnB && < Stream text={ propertiesB } style={ textStyle } /> }
            </ div >

            < div id="property-column3a" style={ propertyColumnA as React.CSSProperties } >
                { showColumnA && < Stream text={ propertiesA } style={ textStyle } /> }

            </ div >

            < div id="property-column3b" style={ propertyColumnB as React.CSSProperties } >
                { showColumnB && < Stream text={ propertiesB } style={ textStyle } /> }

                {/* { showColumn3 && < Stream text={ properties3 } style={ textStyle } /> } */}
                {/* { showColumn3_2 && < Stream text={ properties3_2 } style={ textStyle } /> }
                { showColumn3_2_3 && < Stream text={ properties3_2_3 }style={ textStyle } /> }             */}
            </ div >

        </ div >
    );
};

function Molecular_Structures( props: any ): JSX.Element {

    const { wrapperBorders } = props;

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
                    
                    // searchedString={ searchedString } 
                    // setSearchedString={ setSearchedString } 
                /> 
            </div>
        </ div >
    );
};






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

