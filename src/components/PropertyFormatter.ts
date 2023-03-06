export default function PropertyFormatter( properties: any ) {

    console.log( "Properties:", properties);

    // const propertyValues = Object.values( properties );
    // const strings = propertyValues.map( ( value: any, index: number ) => value.toString() );
    const propertyValuesAsStrings = Object.values( properties ).map( ( value: any, index: number ) => value.toString() );
    console.log( "Formatted Property Values:", propertyValuesAsStrings );

    let orderedPropertyValues = [];

    return [ propertyValuesAsStrings ];
}