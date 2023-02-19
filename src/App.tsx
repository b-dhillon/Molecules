import { Suspense, useState } from 'react';
import logo from './img/logo.png';
import Structure2D from './components/Structure2D';
import Structure3D from './components/Structure3D';
import DisplayTable from './components/Table';
//@ts-ignore
import Describe from './components/describe';

// To-do:
/*
Saturday: 
  Re-do UI layout
    - Two pages like google. 
      - One page for search
        - Select and install font. 


      - One page for description

  Get stream working
*/

function App(): JSX.Element {

  const [ searchedString, setSearchedString ] = useState("");
  const [ description, setDescription ] = useState("");
  
  return (
    < div id="root" >
      < Logo />
      < SearchField setSearchedString={ setSearchedString } searchedString={ searchedString } setDescription={ setDescription }/>
      {/* < StructureFields /> */}
      {/* < DescriptionField /> */}
      <Suspense>
        < Description description={ description }/>
      </Suspense>
    </ div >
  )
}

export default App

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


function Logo() {
  return (
    // <header className='header-wrapper'>
      <div className='logo-wrapper'>
          <img className='logo' src={logo}/>
          {/* <h1>MOLECULE</h1> */}
          <h2 className='logo-subtitle' >Quickly find information on any chemical.</h2>
      </div>
    // </header>
  )
}

/*
function Main() {

  return(
    <div className='main--wrapper'>
      < SearchField />
      < StructureFields />
      < DescriptionField />
    </div>
  )
}
*/

function SearchField( props: any ) {

  function handleSearchFocus() {
    const logoEl = document.querySelector('.logo');
    const searchEl = document.querySelector('.search-container');


    // @ts-ignore
    logoEl.classList.add('logo-rotate');
    // @ts-ignore
    searchEl.classList.add('border-searching');
  }

  function handleSearchBlur() {
    const logoEl = document.querySelector('.logo');
    const searchEl = document.querySelector('.search-container');
    const searchField = document.querySelector('.search-input');

    // @ts-ignore
    searchInput.blur();
    // @ts-ignore
    logoEl.classList.remove('logo-rotate');
    // @ts-ignore
    searchEl.classList.remove('border-searching');
  }

  async function onSubmit(e: Event | any) {
    console.log('SUBMIT');
    e.preventDefault();
    Search( props.searchedString );
    const data = await Describe( props.searchedString );
    console.log(data);
    const description: string = data.choices[0].text.trim();
    console.log('SEARCHED STRING: ', props.searchedString);

    props.setDescription( () => description )
    // useData( props.searchedString )
  }

  return (
    <div className="search-wrapper">

      <div className="search-container">

        <div className="search-icon"><i className="fa fa-search search-icon"></i></div>

        <form className="search-form" onSubmit={ (e) => onSubmit(e) } >
            <input 
              className="search-input" 
              type="text" 
              id="search" 
              // placeholder="What molecule would you like to learn about?" 
              placeholder="Sugar" 
              onChange={ (e) => {
                props.setSearchedString(e.target.value)
                console.log(props.searchedString);
                } }
              onFocus={ handleSearchFocus } 
              onBlur={ handleSearchBlur } 
              autoComplete="off" 
            />
        </form>

        {/* <svg className="search-border" enableBackground="new 0 0 671 111" version="1.1" viewBox="0 0 671 111" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path className="border" d="m335.5 108.5h-280c-29.3 0-53-23.7-53-53s23.7-53 53-53h280"/>
            <path className="border" d="m335.5 108.5h280c29.3 0 53-23.7 53-53s-23.7-53-53-53h-280"/>
        </svg> */}

        <div className="go-icon"><i className="fa fa-arrow-right" ></i></div>

      </div>
      {/* <button>Chemical Search</button> */}

    </div>
  )
}

function StructureFields() {
  return (
    <div className='canvas--wrapper'>
      <canvas id='display2D'></canvas>

      <canvas id='display3D'></canvas>      
    </div>
  )
}

function DescriptionField() {
  return (
    <div className='table--wrapper'>

      <div className='table--background'>

        {/* <p>{describeText}</p> */}

        {/* <h1 className="table-title">---</h1>

        <table>
            <tbody>
                <tr>
                    <td>IUPAC Name</td>
                    <td id='iupac-name'>--</td>
                </tr>
                <tr>
                    <td>Molecular Formula</td>
                    <td id="molecular-formula">---</td>
                </tr>
                <tr>
                    <td>Molecular Weight</td>
                    <td id="molecular-weight">----</td>
                </tr>
                <tr>
                    <td>Chemical ID</td>
                    <td id="cid">------</td>
                </tr>
            </tbody>
        </table> */}

      </div>

    </div>
  )

}

function Description( props: any ) {
  // const data = await Describe( searchedString );
  console.log( props.description );
  // const description: string = data.choices[0].text.trim();


  return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center' }} >
          <p style={ { width: '60%' } }>{props.description}</p>
      </div>
  );

}

// <div className='table--wrapper'>
// <div className='table--background'>
