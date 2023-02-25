import { Suspense, useState } from 'react';
import HomePage from './components/HomePage';
import PropertyFetcher from './components/PropertyFetcher';
import SearchPage from './components/SearchPage';
import Structure2DFetcher from './components/Structure2DFetcherLoader';
import Structure3DFetcher from './components/Structure3DFetcher';
import DATA from './data';
// To-do:
/*

- Get all Search Results working - structure, properties, and description:



- Get Chemical Properties laid out properly and find better way to call sequentially

- Fix setSearchedString bug where if you delete a letter from search the app crashes


- Set up data passing and finish writing data structure, at least a first draft, 
- Refactor global CSS styles.
*/

interface Data {
  // compounds: Compound[]
};


function App(): JSX.Element {

  const [ SEARCH_INPUT, setSEARCH_INPUT ] = useState("");
  const [ __DATA__ ] = useState< Data >( DATA );
  const [ PAGE, setPAGE ] = useState( "HomePage" );  



  // const [ searchedString, setSearchedString ] = useState("");
  const [ data, setData ] = useState<any>( DATA );


  const [ description, setDescription ] = useState("");
  const [ loading, setLoading ] = useState(false);


  return (
    PAGE === "HomePage" 
    ? 
    < HomePage 
    __DATA__={ __DATA__ }
    SEARCH_INPUT={ SEARCH_INPUT }
    setSEARCH_INPUT={ setSEARCH_INPUT }
    PAGE={ PAGE }
    setPAGE={ setPAGE }
    />
    // searchedString={ searchedString }
    // setSearchedString={ setSearchedString }
    // setDescription={ setDescription }
    :
    < SearchPage 
    __DATA__={ __DATA__ }
    SEARCH_INPUT={ SEARCH_INPUT }
    setSEARCH_INPUT={ setSEARCH_INPUT }
    PAGE={ PAGE }
    setPAGE={ setPAGE }
    />
    // searchedString={ searchedString }
    // setSearchedString={ setSearchedString }
    // setDescription={ setDescription }
    // setLoading={ setLoading }
  );
};


export default App


// Old component setup before refactor
/*
return (
  <div className="root" >
  
    < Logo /> 
    < SearchField setSearchedString={ setSearchedString } searchedString={ searchedString } setDescription={ setDescription }/>
    < StructureFields />
    < DescriptionField />
    < Suspense >
      < Description description={ description }/>
    </ Suspense >
  
  </div>
)
*/




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
