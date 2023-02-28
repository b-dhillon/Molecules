// Takes a string and a ref to a DOM element -- iterates over string and appends each character to the DOM element using a recursive interval call.
export default async function Stream2( text: string, domNode: any ) {

    return new Promise( (resolve, _) => {

        let i = 0;
        const appendCharacter = setInterval( () => {
            
            domNode.current.textContent += text[i];
            i++;

            if( i === text.length ) {

                console.log("DONE APPENDING");
                resolve("done");
                clearInterval( appendCharacter );

            };

        }, 15 );

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