import Describe from './describe';
import logo from '../img/logo.png';

// These shouldnt be needed here??
import Structure2D from './Structure2D';
import Structure3D from './Structure3D';


export default function Home(props: any ){

    // destructuring props
    const { searchedString, setSearchedString, setDescription } = props;

    return (
        <>
            < Logo />
            < SearchField searchedString={ searchedString } setSearchedString={ setSearchedString } />
        </>
    )
        
}

function Logo() {
    return (
      // <header className='header-wrapper'>
        <div className='logo-wrapper'>
            <img className='logo' src={logo}/>
            {/* <h1>MOLECULE</h1> */}
            <h2 className='logo-subtitle' >Quickly find information on any chemical.</h2>
            {/* <h2 className='logo-subtitle' ></h2> */}
        </div>
      // </header>
    )
}



function Search( searchedString: string ) {

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
  
  
    // if (firstLoad) 
    // {
    //   firstLoad = false;
    //   fetch(
    //     `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=3d`
    //   )
    //     .then((res) =>
    //     {
    //       return res.blob();
    //     })
    //     .then((data) =>
    //     {
    //       reader3d.readAsText(data);
    //       reader3d.onload = function ()
    //       {
    //         molecule3d = reader3d.result;
    //         Structure3D( molecule3d, size3d );
    //       };
    //     });
  
    //   fetch(
    //     `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`
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
    //         Structure2D( molecule2d, size2d );
    //       };
    //     });
  
    //   fetch(
    //     `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/property/Title,IUPACName,MolecularFormula,MolecularWeight/JSON`
    //   )
    //     .then((res) => res.json())
    //     .then((data) =>
    //     {
    //       chemical_property_data = Object.values(data.PropertyTable.Properties[0]);
    //       DisplayTable(chemical_property_data);
    //     });
    // } else
    // {
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
    // }
  }