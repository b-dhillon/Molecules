import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import LoadingElement from './LoadingElement';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Styles from '../styles/SearchPage.module.css';
import Stream from './Stream';




export default function SearchPage( props: any ): JSX.Element {

    const { data, searchedString, setSearchedString, setDescription, setPage, page } = props;



    const wrapperBorders = false;


    const searchPageWrapper = {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        border: `${ wrapperBorders ? "2px solid green" : "none" } `,
    }

    return (
        <div id="SearchPage" style={ searchPageWrapper as React.CSSProperties }>
            < Header 
                page={ page }  
                data={ data } 
                setPage={ setPage } 
                searchedString={ searchedString } 
                setSearchedString={ setSearchedString } 
                wrapperBorders={ wrapperBorders }
            />
            
	        < Body wrapperBorders={ wrapperBorders } data={ data }  />
        </div>
    );

};

function Header( props: any ): JSX.Element {

    // destrucutre all props that will be passed to < SearchBar >
    const { data, searchedString, setSearchedString, setDescription, setPage, page, wrapperBorders } = props;

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
                < Logo page={ props.page } />
                < SearchBar 
                    page={ page }  
                    data={ data } 
                    setPage={ setPage } 
                    searchedString={ searchedString } 
                    setSearchedString={ setSearchedString } 
                /> 
            </div>
        </ div >
    );
};

function Body( props: any ): JSX.Element {

    const { wrapperBorders, data } = props;

    const bodyWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid black',
        padding: '5px 70px 20px 70px',
        border: ` ${ wrapperBorders ? "2px solid red" : "none" } `
    };

    const leftSideWrapper = {
        width: "80%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid blue" : "none" }`,
        height: "500px",
        flexDirection: "column-reverse"
    };

    const rightSideWrapper = {
        width: "50%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid blue" : "none" } `,
        height: "800px",
        borderLeft: '2px solid gray',
    };

    return (
        <div id="search-body" style={ bodyWrapper } >

            < div id="left-side" style={ leftSideWrapper as React.CSSProperties } >
                < AI_Description wrapperBorders={ wrapperBorders } data={ data }/>
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
    
    const { wrapperBorders, data } = props;

    const sampleDescription: string = data.compounds.find( ( compound: any ) => compound.title === "ATP" ).description; 

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

    // useEffect( () => {
    //     console.log('DESCRIPTION_DATA: ', DESCRIPTION_DATA);
    //     if ( DESCRIPTION_DATA ) {
    //         console.log('sample right before call: ',sampleDescription);
    //         TypeWriter( sampleDescription, ref.current )
    //     };
    // }, [ DESCRIPTION_DATA ] );
    



    const descriptionWrapper = {
        height: "50%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        display: "flex",
        padding: "0px 20px ",
    };

    // return (
    //     <div id="description" style={ descriptionWrapper } >
    //         { DESCRIPTION_DATA ? <p id="descriptionParagraph" ref={ ref }> { DESCRIPTION_DATA } </p> : < LoadingElement /> }
    //     </div>
    // );
    return (
        <div id="description" style={ descriptionWrapper } >
            { DESCRIPTION_DATA ? < Stream d={ sampleDescription } /> : < LoadingElement /> }
        </div>
    );
};



















function Chemical_Properties( props: any): JSX.Element {
    const { wrapperBorders } = props;


    const propertiesWrapper = {
        height: "50%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
    };

    return (
        < div id="properties" style={ propertiesWrapper } >
            
        </ div >
    );
};

function Molecular_Structures( props: any ): JSX.Element {
    const { wrapperBorders } = props;


    const structureWrapper = {
        height: "100%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
    };

    return (
        < div id="structure" style={ structureWrapper } >

        </ div >
    );
};









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
}; */}




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
