import { useState, useEffect } from "react";

function Stream( props: any ) {

  const { streaming, setStreaming, passedStyles, caller, passedText } = props;
  const [ text, _ ] = useState<string>( passedText ); 
  const [ displayText, setDisplayText ] = useState("");
  const textStyle = {
    color: "white",
    fontFamily: "Poppins-Regular",
    padding: "0px",
    margin: "0px",
    fontSize: "1.2rem",
    ...passedStyles,
  };



  useEffect(() => {
    console.log('streamed called with', text );

    let i = 0;

    const interval = setInterval( () => {

      setDisplayText( (prevText: any ) => {
        const newText = prevText + text[i];
        i++;
        return newText;
      });

      if ( i === text.length - 1 ) {

        clearInterval( interval );

        console.log(`streamed finished for ${caller}`);

        if( caller === "AIDescription" ) {
          setStreaming( [ 0, 1, 0 ] )
          props.setDescriptionStreamed( true )
        };

        if( caller === "ChemicalProperties" ) {
          setStreaming( [ 0, 0, 1 ] )
          props.setPropertiesStreamed( true )
        };

        if( caller === "Structures" ) {
          setStreaming( [ 0, 0, 0 ] )
          props.setStructuresStreamed( true )
        } ;


        // return new Promise ( (resolve, reject) => {
        //   setTimeout( () => {
        //     setDisplayText( "" );
        //     resolve("done");
        //   }, 2000 );
        // });
      
      };

    }, 20);
  

    return () => clearInterval( interval );

  }, [text] );


  return < p style={ textStyle } >{ displayText }</p>;
}

export default Stream;


// Old implementation with useRef()
/*
function TypeWriter( props: any ) {
  console.log('TypeWriter Called');

  const [ description, setDescription ] = useState( props.d ); 
  // const [ once, setOnce ] = useState( true );
  let once = true;
  const ref: any = useRef();


  
  let i = 0;

  const speed = 2000; // The speed/duration of the effect in milliseconds
  
  // @ts-ignore
  const element = document.getElementById("descriptionParagraph")

  console.log('description in call: ', description);

  useEffect( () => {
    if( description && i < description.length && once ) {
      console.log('description in useEffect: ', description);

      for ( let i = 0; i < description.length; i++ ) {
        setTimeout( () => ref.current.innerHTML += description.charAt(i), speed )
        // ref.current.innerHTML += description[i];
      };
      once = false; 
      // setTimeout( TypeWriter, speed );
    }
  }, [] )

  // if( i < description.length && element ) {
  //   console.log('description inside if block of call: ', description);

  //   // @ts-ignore
  //   // document.getElementById("descriptionParagraph").innerHTML += text.charAt(i);
  //   // HTMLElement.innerHTML += text.charAt(i);
  //   // element.innerHTML += description.charAt(i);



  //   ref.current.innerHTML += description.charAt(i);
  //   // ref.current.value += description.charAt(i);
  //   i++;
  //   setTimeout( TypeWriter, speed );
  // }

  return (
    <p id="descriptionParagraph" ref={ ref }></p>
  )
};
*/