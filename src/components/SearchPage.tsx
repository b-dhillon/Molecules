import { lazy, Suspense, useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';
import Logo from './Logo';
import SearchBar from './SearchBar';


export default function SearchPage( props: any ): JSX.Element {


    return (
        <>
            < Header page={ props.page } />
        </>
        // < TestFetch props={ props.setLoading } />
    );

};

function Header( props: any ): JSX.Element {

    const headerWrapper = {
        width: '100%',
        display: "flex",
        // justifyContent: "space-around",
        border: '2px solid blue',
        padding: '10px 70px',
    }

    return (
        <div style={ headerWrapper } >
            < Logo page={ props.page } />
            < SearchBar page={ props.page }/> 
        </div>
    )
}

function TestFetch( props: any ): JSX.Element {

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
};





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
