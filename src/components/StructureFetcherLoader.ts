async function StructureFetcherLoader( compound: string, type: string ) {

    const response = await fetch(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${ compound }/SDF?record_type=${type}`
    );
    console.log(`SDF${type}`, response);
    const data = await response.blob();
    const molecule = await StructureLoader( data )

    return molecule;
}; 

export default StructureFetcherLoader

async function StructureLoader( blob: Blob ): Promise<any> {
    return new Promise( (resolve, reject) => {

        let fileReader = new FileReader();
        fileReader.readAsText( blob );
        fileReader.onload = LoadMolecule;

        function LoadMolecule() {
            const molecule = fileReader.result;
            // console.log('MOLECULE FILE:', molecule);
            resolve( molecule );
        }
    });
}



// fileReader.onload = async function ()
// {
//     molecule = fileReader.result;
//     console.log('molecule', molecule);
//     return molecule;
//     // Display2D(molecule2d);
// }

// if (molecule === undefined) {
//     console.log('molecule is undefined');
// } else {
//     console.log('molecule is defined');
// } 
// return molecule;
// Display2D(molecule2d);
    






// fetch(
//     `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchedString}/SDF?record_type=2d`
//   )
//     .then((res) =>
//     {
//       return res.blob();
//     })
//     .then((data) =>
//     {
//       reader2d.readAsText(data);
//       reader2d.onload = function ()
//       {
//         molecule2d = reader2d.result;
//         Display2D(molecule2d);
//       };
//     });



//     // ...
//     const fetchStructure = (id: string) => {



//         // ...
//         const structure = await fetchStructure(id);
//         // ...
//     };
//     // ...
// }
