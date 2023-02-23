import { useState, useRef, useEffect } from "react";

function Stream( props: any ) {

  const [ text, setText ] = useState<string>( props.d ); 
  const [ displayText, setDisplayText ] = useState('');

  const textStyle = {
    color: "white",
    fontFamily: "Poppins-Regular",
  };


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(prevText => prevText + text[ i ]);
      i++;
      if ( i === text.length - 1 ) {
        clearInterval( interval );
      }
    }, 20);
    return () => clearInterval( interval );
  }, [ text ] );

  return < p style={ textStyle } > { displayText } </p>;
}

export default Stream;


// Old implementation
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