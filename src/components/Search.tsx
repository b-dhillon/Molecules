import DescriptionFetcher from "./DescriptionFetcher";
import PropertyFetcher from "./PropertyFetcher";
import StructureFetcherLoader from "./StructureFetcherLoader";

export default async function Search( SEARCH_INPUT: string ) {
  
  const _properties = await PropertyFetcher( SEARCH_INPUT );
  const moleculeFile2D = await StructureFetcherLoader( SEARCH_INPUT, "2d" );
  const moleculeFile3D = await StructureFetcherLoader( SEARCH_INPUT, "3d" );

  const hardCodedDescription = await DescriptionFetcher( SEARCH_INPUT );
  const descriptionResponse = await DescriptionFetcher( SEARCH_INPUT );
  const _description: string = descriptionResponse.choices[0].text.trim();

  return Promise.all( [{ properties: _properties, mol2d: moleculeFile2D, mol3d: moleculeFile3D, description: _description }] );
  // setDescription( () => description );
};

/*
  // useData( props.searchedString )
*/




// Old search function
/*
import Structure2D from "./Structure2D";
import Structure3D from "./Structure3D";
let reader3d = new FileReader();
let reader2d = new FileReader();
let molecule3d: any;
let molecule2d: any;
let chemical_property_data: string[];
let firstLoad = true;
const mediaQuery = window.matchMedia('(min-width: 680px)');
let size3d: number;
let size2d: number;

if (mediaQuery.matches) {
  size2d = 300;
  size3d = 300;
}
else {
  size2d = 250;
  size3d = 266;
}

const cachedCompound = data.find( (compound: any) => compound.id === searchedString );
if( cachedCompound ) {

  I think we'll only need to pull the description, the 2D and 3D SDF are too quick to return to be worth caching at first. 
  You chould however cache the data after the user searches for it. I think it'll be too much to hard-code everything from the first.

  
  // const blob2D = cachedCompound.SDF2D.blob(); 
  // reader3d.readAsText(blob2D);
  // reader3d.onload = function () {
  //   molecule3d = reader3d.result;
  //   Structure3D( molecule3d, size3d );
  // };

  // const blob3D = cachedCompound.SDF3D.blob(); 
  // reader3d.readAsText( blob3D );
  // reader3d.onload = function () {
  //   molecule3d = reader3d.result;
  //   Structure3D( molecule3d, size3d );
  // };
  

  const description = cachedCompound.description;
  do something with description.

  return;
  DisplayTable( cachedCompound.chemical_property_data );





  if (firstLoad) 
  {
    firstLoad = false;
    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=3d`
    )
      .then((res) =>
      {
        return res.blob();
      })
      .then((data) =>
      {
        reader3d.readAsText(data);
        reader3d.onload = function ()
        {
          molecule3d = reader3d.result;
          Structure3D( molecule3d, size3d );
        };
      });

    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`
    )
      .then((res) =>
      {
        return res.blob();
      })
      .then((data) =>
      {
        reader2d.readAsText(data);
        reader2d.onload = function ()
        {
          molecule2d = reader2d.result;
          Structure2D( molecule2d, size2d );
        };
      });

    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/property/Title,IUPACName,MolecularFormula,MolecularWeight/JSON`
    )
      .then((res) => res.json())
      .then((data) =>
      {
        chemical_property_data = Object.values(data.PropertyTable.Properties[0]);
        DisplayTable(chemical_property_data);
      });
  } else
  {
    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchedString}/SDF?record_type=3d`
    )
      .then((res) =>
      {
        return res.blob();
      })
      .then((data) =>
      {
        reader3d.readAsText(data);
        reader3d.onload = function ()
        {
          molecule3d = reader3d.result;
          Structure3D( molecule3d, size3d );
        };
      });

    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchedString}/SDF?record_type=2d`
    )
      .then((res) =>
      {
        return res.blob();
      })
      .then((data) =>
      {
        reader2d.readAsText(data);
        reader2d.onload = function ()
        {
          molecule2d = reader2d.result;
          Structure2D( molecule2d, size2d );
        };
      });

    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchedString}/property/Title,IUPACName,MolecularFormula,MolecularWeight/JSON`
    )
      .then((res) => res.json())
      .then((data) =>
      {
        chemical_property_data = Object.values(data.PropertyTable.Properties[0]);
        // DisplayTable(chemical_property_data);
      });
  }
*/