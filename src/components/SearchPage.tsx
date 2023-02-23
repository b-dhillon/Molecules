import { lazy, Suspense, useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Styles from '../styles/SearchPage.module.css';




export default function SearchPage( props: any ): JSX.Element {

    const { data, searchedString, setSearchedString, setDescription, setPage, page } = props;

    const [ API_DATA, setAPI_DATA ] = useState<any>( null );

    // if ( API_DATA === null ) {
    //     return < LoadingPage />
    // };

    const searchPageWrapper = {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        border: "2px solid green"
    }

    return (
        <div id="SearchPage" style={ searchPageWrapper as React.CSSProperties }>
            < Header 
                page={ page }  
                data={ data } 
                setPage={ setPage } 
                searchedString={ searchedString } 
                setSearchedString={ setSearchedString } 
            />
            
	        < Body />
        </div>
    );

};

function Header( props: any ): JSX.Element {

    // destrucutre all props that will be passed to < SearchBar >
    const { data, searchedString, setSearchedString, setDescription, setPage, page } = props;

    const headerWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid gray',
        padding: '30px 70px 20px 70px',
    };

    return (
        < div style={ headerWrapper } id="header" >
            < Logo page={ props.page } />
            < SearchBar 
                page={ page }  
                data={ data } 
                setPage={ setPage } 
                searchedString={ searchedString } 
                setSearchedString={ setSearchedString } 
            /> 
        </ div >
    );
};

function Body(): JSX.Element {

    const bodyWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid black',
        padding: '30px 70px 20px 70px',
        border: "2px solid red"
    };

    const leftSideWrapper = {
        width: "50%",
        margin: "0 auto",
        border: "3px solid blue",
        height: "500px",
        flexDirection: "column-reverse"
    };

    const rightSideWrapper = {
        width: "50%",
        margin: "0 auto",
        border: "3px solid blue",
        height: "500px"
    };

    return (
        <div id="body" style={ bodyWrapper } >

            < div id="left-side" style={ leftSideWrapper as React.CSSProperties } >
                < AI_Description />   
                < Chemical_Properties  />
            </ div >

            < div id="right-side" style={ rightSideWrapper as React.CSSProperties } >
                < Molecular_Structures />
            </ div >
        	
        </div>
    )
}

function AI_Description(): JSX.Element {

    const descriptionWrapper = {
        height: "50%",
        margin: "0 auto",
        border: "2px solid white"
    };

    return (
        <div id="description" style={ descriptionWrapper } >
            < LoadingPage />
        </div>
    );
};

function Chemical_Properties(): JSX.Element {

    const propertiesWrapper = {
        height: "50%",
        margin: "0 auto",
        border: "2px solid white"
    };

    return (
        < div id="properties" style={ propertiesWrapper } >
            
        </ div >
    );
};

function Molecular_Structures(): JSX.Element {

    const structureWrapper = {
        height: "100%",
        margin: "0 auto",
        border: "2px solid white"
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
