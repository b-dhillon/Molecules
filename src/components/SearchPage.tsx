import { lazy, Suspense, useEffect, useState } from 'react';
import LoadingPage from './LoadingPage';


export default function SearchPage( props: any ): JSX.Element {

    return (
        < TestFetch props={ props.setLoading } />
    );

};

function TestFetch( props: any ): JSX.Element {
    const [ _data, setData] = useState<any>(null);



    useEffect(() => {

        setTimeout( () => {
            fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`)
            .then( res => {
                console.log(res);
                setData( () => res.status );
                props.setLoading( false );
            });

        }, 4000 );

    }, []);

    if (_data === null) {
        return < LoadingPage />
    }

    return (
        <>
            <div>{_data}</div>
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
