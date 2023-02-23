import { lazy, Suspense, useEffect, useState } from 'react';
import LoadingElement from './LoadingElement';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Styles from '../styles/SearchPage.module.css';




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
            
	        < Body wrapperBorders={ wrapperBorders } />
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

    const { wrapperBorders } = props;

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
        height: "500px",
        borderLeft: '2px solid gray',
    };

    return (
        <div id="search-body" style={ bodyWrapper } >

            < div id="left-side" style={ leftSideWrapper as React.CSSProperties } >
                < AI_Description wrapperBorders={ wrapperBorders } />
                < Chemical_Properties  wrapperBorders={ wrapperBorders } />
            </ div >

            < div id="right-side" style={ rightSideWrapper as React.CSSProperties } >
                < Molecular_Structures wrapperBorders={ wrapperBorders } />
            </ div >
        	
        </div>
    )
}

function AI_Description( props: any ): JSX.Element {

    const [ API_DATA, setAPI_DATA ] = useState<any>( null );

    /*
    if ( API_DATA === null ) {
        return < LoadingElement />
    };
    */

    const { wrapperBorders } = props;


    const descriptionWrapper = {
        height: "50%",
        margin: "0 auto",
        border: `${ wrapperBorders ? "2px solid white" : "none" }`,
        // border: "2px solid white",
        display: "flex",
    };

    return (
        <div id="description" style={ descriptionWrapper } >
            < LoadingElement />
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
