import { useState, useEffect } from "react";

function Stream( props: any ) {

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

      if( i === 1 ) console.log( "I EQUALS 1 OUTSIDE SETTER");

      setDisplayText( (prevText: any ) => {
        console.log('prevText: ', prevText, "i", i, 'text[i]: ', text[i]);
        if( i === 1 ) console.log( "I EQUALS 1 INSIDE SETTER ");
        console.log(text[i]);
        const newText = prevText + text[i];
        i++;
        return newText;
      });

      if ( i === text.length - 1 ) {
        clearInterval( interval );
      }
    }, 15);
  
    return () => clearInterval( interval );

  }, [text] );

  return < p style={ textStyle } > { displayText } </p>;
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