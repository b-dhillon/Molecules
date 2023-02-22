import { lazy, Suspense, useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';
import Logo from './Logo';
import SearchBar from './SearchBar';




export default function SearchPage( props: any ): JSX.Element {

    const { page } = props;

    const [ API_DATA, setAPI_DATA ] = useState<any>( null );

    // if ( API_DATA === null ) {
    //     return < LoadingPage />
    // };

    return (
        <>
            < Header page={ page } />
	        < Body />
        </>
    );

};

function Header( props: any ): JSX.Element {

    const headerWrapper = {
        width: '100%',
        display: "flex",
        borderBottom: '2px solid gray',
        padding: '30px 70px 20px 70px',
    };

    return (
        < div style={ headerWrapper } >
            < Logo page={ props.page } />
            < SearchBar page={ props.page } /> 
        </ div >
    );
};

function Body(): JSX.Element {

    return (
        <>
        	< AI_Description />   
            < Chemical_Properties  />
            < Molecular_Structures />
        </>
    )
}

function AI_Description(): JSX.Element {

    return (
        <>
        </>
    );
};

function Chemical_Properties(): JSX.Element {

    return (
        <>
        </>
    );
};

function Molecular_Structures(): JSX.Element {

    return (
        <>
        </>
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
