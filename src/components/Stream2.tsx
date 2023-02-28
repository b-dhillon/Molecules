
import React, { useEffect } from 'react';
import { useRef } from 'react';




export default function Stream2() {

    const ref: any = useRef();


    function testStreamer() {
        console.log('testStreamer() called');
        console.log('ref: ', ref);

        const text = "Hello, your results are ready."
        let i = 0;
        const interval = setInterval( () => {
            
            ref.current.textContent += text[i];
            i++;

            if( i === text.length ) {
                clearInterval( interval );
            };
        }, 100 );

        return () => clearInterval( interval );
    }; 

    useEffect( () => testStreamer(), [] );
    


    return ( 
        <div id="TEST" ref={ref} style={ { color: "white !important" } }>

        </div>
    )
};