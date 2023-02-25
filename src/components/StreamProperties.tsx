import { useState, useEffect } from "react";


// Should be called after StreamDescription ends. 
function StreamProperties( props: any ) {

  // destructure props

  const [ text, setText ] = useState<string>( props.text );

  const [ displayText, setDisplayText ] = useState("");

  const textStyle = {
    color: "white",
    fontFamily: "Poppins-Regular",
    padding: "0px",
    margin: "0px",
    fontSize: "1.2rem",
    ...props.style,
  };

  useEffect(() => {
    console.log('streamed called with', text );

    let i = 0;

    const interval = setInterval(() => {

      setDisplayText( (prevText: any ) => {
        // console.log('prevText: ', prevText, "i", i, 'text[i]: ', text[i]);
        // console.log(text[i]);


        const newText = prevText + text[i];

        if( text[i] + text[ i+ 1 ] === "\n" ) {
          console.log('newline');
          return newText + "\n";
        }






        i++;
        return newText;
      });

      if ( i === text.length - 1 ) {
        clearInterval( interval );
      }
    }, 8);
  
    return () => clearInterval( interval );

  }, [text] );

  return (
    <div>

        < div id="properties-column0" >

            <div id="property-keys"> 

                <div id="property-key0" ></div>
                <div id="property-key1" ></div>
                <div id="property-key2" ></div>
                <div id="property-key3" ></div>
                <div id="property-key4" ></div>
                <div id="property-key5" ></div>
                
            </div>

            <div id="property-values" >

                <div id="property-values0" ></div>
                <div id="property-values1" ></div>
                <div id="property-values2" ></div>
                <div id="property-values3" ></div>
                <div id="property-values4" ></div>
                <div id="property-values5" ></div>

            </div>

        </div>

        < div id="properties-column1" >

            <div id="property-keys"> 

                <div id="property-key0" ></div>
                <div id="property-key1" ></div>
                <div id="property-key2" ></div>
                <div id="property-key3" ></div>
                <div id="property-key4" ></div>
                <div id="property-key5" ></div>

            </div>

            <div id="property-values" >

                <div id="property-values0" ></div>
                <div id="property-values1" ></div>
                <div id="property-values2" ></div>
                <div id="property-values3" ></div>
                <div id="property-values4" ></div>
                <div id="property-values5" ></div>

            </div>

        </div>

        < div id="properties-column2" >
            
            <div id="property-keys"> 

                <div id="property-key0" ></div>
                <div id="property-key1" ></div>
                <div id="property-key2" ></div>
                <div id="property-key3" ></div>
                <div id="property-key4" ></div>
                <div id="property-key5" ></div>

            </div>

            <div id="property-values" >

                <div id="property-values0" ></div>
                <div id="property-values1" ></div>
                <div id="property-values2" ></div>
                <div id="property-values3" ></div>
                <div id="property-values4" ></div>
                <div id="property-values5" ></div>

            </div>

        </div>
        

    </div>
  )

}

export default StreamProperties;