function TypeWriter( text: string, HTMLElement: any ) {
    let i = 0;

    const speed = 50; /* The speed/duration of the effect in milliseconds */

  if( i < text.length ) {
    // document.getElementById("demo").innerHTML += text.charAt(i);
    HTMLElement.innerHTML += text.charAt(i);
    i++;
    setTimeout( TypeWriter, speed );
  }

}

export default TypeWriter;