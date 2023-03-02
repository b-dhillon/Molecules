async function PropertyFetcher( compound: string ) {
    
  const response = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${ compound }/property/Title,MolecularFormula,MolecularWeight,Complexity,Charge,RotatableBondCount,AtomStereoCount,BondStereoCount,HBondDonorCount,HBondAcceptorCount,ConformerCount3D,IUPACName/JSON`)
  const data = await response.json()
  const properties = data.PropertyTable.Properties[0];

  // This is unneccessary after re-factor. Remove when time. Make sure to carry over the changes to SearchPage propertyValues variable
  const formattedProperties = {
    "Name": properties.Title,
    "Systematic Name": properties.IUPACName,
    "Molecular Formula": properties.MolecularFormula,
    "Molecular Weight": properties.MolecularWeight,
    "Molecular Complexity": properties.Complexity,
    "Charge": properties.Charge,
    "Rotatable Bond Count": properties.RotatableBondCount,
    "Chiral Center Count": properties.AtomStereoCount,
    "Geometric Center Count": properties.BondStereoCount,
    "Stereocenter Count": properties.AtomStereoCount + properties.BondStereoCount,
    "Chiral Isomer Count": 2 ** properties.AtomStereoCount,
    "H-Bond Donor Count": properties.HBondDonorCount,
    "H-Bond Acceptor Count": properties.HBondAcceptorCount,
    "3D Conformer Count": properties.ConformerCount3D,
    // "CID": properties.cid
  }

  return formattedProperties;
};

// Get properties from data --> add a Property Type here. --> This type isnt plugged in 
type Properties = {
  Title: string
  MolecularFormula: string
  MolecularWeight: number
  Complexity: number
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

export default PropertyFetcher


/*
const propertiesFormatted = {
    "Name": properties.Title,
    "SystematicName": properties.IUPACName,
    "Molecular_Formula": properties.MolecularFormula,
    "Molecular_Weight": properties.MolecularWeight,
    "Molecular_Complexity": properties.Complexity,

    "Charge": properties.Charge,
    "Rotatable_Bond_Count": properties.RotatableBondCount,
    "Chiral_Center_Count": properties.AtomStereoCount,
    "Geometric_Center_Count": properties.BondStereoCount,
    "H-Bond_Donor_Count": properties.HBondDonorCount,
    "H-Bond_Acceptor_Count": properties.HBondAcceptorCount,
    "Conformer_Count_3D": properties.ConformerCount3D,
    // "CID": properties.cid
}
*/
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