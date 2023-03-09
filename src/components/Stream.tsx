// Takes a string and a ref to a DOM element -- iterates over string and appends each character to the DOM element using a recursive interval call.
export default async function Stream( text: string, domNode: any, streamType: string, speed: number = 10 ) {

    return new Promise( (resolve, _) => {

        let i = 0;
        const appendCharacter = setInterval( () => {
            

            if( streamType === "single" ) {
                // Single character:
                
                domNode.current.textContent += text[i]  
                i++;
                
            }

            // Double character:
            /*
            if(i !== text.length - 1 ) {
                domNode.current.textContent += text[i] + text[ i + 1 ];  
            } else {
                domNode.current.textContent += text[i];
            };
            i = i+2;
            */

            // Triple character:

            // if(i < text.length - 2 ) {
            //     domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ];
            // } else if( i < text.length - 1 ) {
            //     domNode.current.textContent += text[i] + text[ i + 1 ];
            // } else {
            //     domNode.current.textContent += text[i];
            // };
            // i = i+3;

            // Quadruple character:
            /*
            if(i < text.length - 3 ) {
                domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ] + text[ i + 3 ];
            } else if( i < text.length - 2 ) {
                domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ];
            } else if( i < text.length - 1 ) {
                domNode.current.textContent += text[i] + text[ i + 1 ];
            } else {
                domNode.current.textContent += text[i];
            };
            i = i+4;
            */


            if ( streamType === "quintuple") {
                // Quintuple character:
                if(i < text.length - 4 ) {
                    domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ] + text[ i + 3 ] + text[ i + 4 ];
                } else if( i < text.length - 3 ) {
                    domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ] + text[ i + 3 ];
                } else if( i < text.length - 2 ) {
                    domNode.current.textContent += text[i] + text[ i + 1 ] + text[ i + 2 ];
                } else if( i < text.length - 1 ) {
                    domNode.current.textContent += text[i] + text[ i + 1 ];
                } else {
                    domNode.current.textContent += text[i];
                };
                i = i+5;
            };
            
            if( i >= text.length ) {
                console.log("Done Streaming Text");
                resolve("done");
                clearInterval( appendCharacter );
            };

        }, speed );

    });

};


/*
    async function addTextToDomNode( domNode: any ) {
        console.log('calling addTextToDomNode on: ', domNode);

        let doneAppending = false;
        let i = 0;
        const appendCharacter = setInterval( async() => {
            
            domNode.current.textContent += text[i];
            i++;

            if( i === text.length ) {

                console.log("DONE APPENDING");

                doneAppending = true;


                return new Promise ( (resolve, _) => {
                    console.log("DONE APPENDING 2");
                    resolve("appendCharacter interval done");
                    // clearInterval( appendCharacter );
                    // return () => clearInterval( appendCharacter )
                });
            };
        }, 15 );

        await appendCharacter;

        if( doneAppending ) {
            // console.log("DONE APPENDING");
            return new Promise ( (resolve, reject) => {
                    
                resolve("done streaming");
                // return () => clearInterval( appendCharacter )
            });
        };
        // return () => clearInterval( appendCharacter );
    }; 
    
    return new Promise( async (resolve, reject) => {
        const a = await addTextToDomNode( domNode );
        console.log("a", a); // a is undefined?
        console.log("DONE ADDING TEXT TO DOM NODE");
        resolve("done");
    });
};

*/

/*
export default async function Stream2( text: string, domNode: any ) {
    console.log('text', text);


    async function addTextToDomNode( domNode: any ) {
        console.log('calling addTextToDomNode on: ', domNode);

        let doneAppending = false;
        let i = 0;
        const appendCharacter = setInterval( async() => {
            
            domNode.current.textContent += text[i];
            i++;

            if( i === text.length ) {

                console.log("DONE APPENDING");

                doneAppending = true;


                return new Promise ( (resolve, _) => {
                    console.log("DONE APPENDING 2");
                    resolve("appendCharacter interval done");
                    // clearInterval( appendCharacter );
                    // return () => clearInterval( appendCharacter )
                });
            };
        }, 15 );

        await appendCharacter;

        if( doneAppending ) {
            // console.log("DONE APPENDING");
            return new Promise ( (resolve, reject) => {
                    
                resolve("done streaming");
                // return () => clearInterval( appendCharacter )
            });
        };
        // return () => clearInterval( appendCharacter );
    }; 
    
    return new Promise( async (resolve, reject) => {
        const a = await addTextToDomNode( domNode );
        console.log("a", a); // a is undefined?
        console.log("DONE ADDING TEXT TO DOM NODE");
        resolve("done");
    });
};
*/