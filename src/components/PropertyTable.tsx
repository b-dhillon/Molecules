
export default function PropertyTables( props: any ) {

    const { domNodes } = props;


    // const propertyNames = [ 
    //     "Name:", 
    //     "Systematic Name:", 
    //     "Molecular Formula:",
    //     "Molecular Weight:", 
    //     "Molecular Complexity:", 
    //     "Rotatable Bond Count:", 
    //     "Number of Chiral Centers:", 
    //     "Number of Geometric Centers:",
    //     "Number of Stereo Centers:", 
    //     "Number of Chiral Isomers:", 
    //     "Number of Conformeres:", 
    //     "Hydrogen Bond Acceptors:", 
    //     "Hygdrogen Bond Donors:", 
    //     "Net Charge",
    //     "Dummy Property:"
    // ];


    // const propertyValues = [
    //     _SearchResults.properties["Name"],
    //     _SearchResults.properties["Systematic Name"],
    //     _SearchResults.properties["Molecular Formula"],
    //     _SearchResults.properties["Molecular Weight"],
    //     _SearchResults.properties["Molecular Complexity"].toString(),
    //     _SearchResults.properties["Rotatable Bond Count"].toString(),
    //     _SearchResults.properties["Chiral Center Count"].toString(),
    //     _SearchResults.properties["Geometric Center Count"].toString(),
    //     _SearchResults.properties["Stereocenter Count"].toString(),
    //     _SearchResults.properties["Chiral Isomer Count"].toString(),
    //     _SearchResults.properties["3D Conformer Count"].toString(),
    //     _SearchResults.properties["H-Bond Acceptor Count"].toString(),
    //     _SearchResults.properties["H-Bond Donor Count"].toString(),
    //     _SearchResults.properties["Charge"].toString(),
    //     "Dummy Value"
    // ];



    // // Will likely need to be lifted because of the async nature of the function
    // for(let i = 0; i < domNodes.properties.names.length; i++) {
    //     await Stream( propertyNames[ i ],  domNodes.properties.names[ i ], 50 );
    // };

    // for(let i = 0; i < domNodes.properties.values.length; i++) {
    //     await Stream( propertyValues[ i ],  domNodes.properties.values[ i ], 50 );
    // };





    return (
        <>

            < table id="table-1" >
            
                < tbody >

                    <tr>
                        <td ref={ domNodes.properties.names[0] } ></td>
                        <td ref={ domNodes.properties.values[0] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[1] }></td>
                        <td ref={ domNodes.properties.values[1] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[2] }></td>
                        <td ref={ domNodes.properties.values[2] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[3] }></td>
                        <td ref={ domNodes.properties.values[3] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[4] }></td>
                        <td ref={ domNodes.properties.values[4] } ></td>
                    </tr>

                </ tbody >

            </ table >

            < table id="table-2" >
                
                < tbody >

                    <tr>
                        <td ref={ domNodes.properties.names[5] } ></td>
                        <td ref={ domNodes.properties.values[5] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[6] }></td>
                        <td ref={ domNodes.properties.values[6] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[7] }></td>
                        <td ref={ domNodes.properties.values[7] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[8] }></td>
                        <td ref={ domNodes.properties.values[8] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[9] }></td>
                        <td ref={ domNodes.properties.values[9] } ></td>
                    </tr>

                </ tbody >

            </ table >

            < table id="table-3" >
            
                < tbody >

                    <tr>
                        <td ref={ domNodes.properties.names[10] } ></td>
                        <td ref={ domNodes.properties.values[10] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[11] }></td>
                        <td ref={ domNodes.properties.values[11] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[12] }></td>
                        <td ref={ domNodes.properties.values[12] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[13] }></td>
                        <td ref={ domNodes.properties.values[13] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[14] }></td>
                        <td ref={ domNodes.properties.values[14] } ></td>
                    </tr>

                </ tbody >

            </ table >


        </>
    )
}