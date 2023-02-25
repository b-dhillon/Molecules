async function PropertyFetcher( compound: string ) {
    
    const response = await fetch(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${ compound }/property/Title,MolecularFormula,MolecularWeight,Complexity,Charge,RotatableBondCount,AtomStereoCount,BondStereoCount,HBondDonorCount,HBondAcceptorCount,ConformerCount3D,IUPACName/JSON`
    )

    // Get the data back from the response
    const data = await response.json()

    // Get the properties from the data --> add a Property Type here. 
    type Properties = {
        Title: string
        MolecularFormula: string
        MolecularWeight: number
        CovalentComplexity: number
        Charge: number
        RotatableBondCount: number
        AtomStereoCount: number
        BondStereoCount: number
        HBondDonorCount: number
        HBondAcceptorCount: number
        ConformerCount3D: number
        IUPACName: string
        cid: number
    };

    console.log( 'data break', data);

    const properties: Properties = data.PropertyTable.Properties[0];
    console.log( 'properties', properties );
    
    // Return the values
    return properties;
};

export default PropertyFetcher


/*
.then((res) => res.json())
.then((data) =>
{
  chemical_property_data = Object.values(data.PropertyTable.Properties[0]);
});   
*/
/*
function FetchProperties() {
    fetch(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchedString}/property/Title,IUPACName,MolecularFormula,MolecularWeight/JSON`
      )
        .then((res) => res.json())
        .then((data) =>
        {
          chemical_property_data = Object.values(data.PropertyTable.Properties[0]);
        });   

    
}
*/