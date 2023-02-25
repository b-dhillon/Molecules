import { Suspense, useState } from 'react';
import HomePage from './components/HomePage';
import PropertyFetcher from './components/PropertyFetcher';
import SearchPage from './components/SearchPage';
import DATA from './data';
// To-do:
/*
  - 1st : Make API call to NCBI and get all the chemical property data you need. Turn it into JSON? 
  - Get Chemical Properties laid out properly and find better way to call sequentially




  - Fix setSearchedString bug where if you delete a letter from search the app crashes
  - Hook up the NCBI API

  - Set up data passing and finish writing data structure, at least a first draft, 
  - Refactor global CSS styles.
*/

interface Data {
  // compounds: Compound[]
};
function App(): JSX.Element {

  PropertyFetcher("ATP");

  const [ SEARCH_INPUT, setSEARCH_INPUT ] = useState("");
  const [ __DATA__, set__DATA__ ] = useState< Data >( DATA );


  const [ searchedString, setSearchedString ] = useState("");
  const [ data, setData ] = useState<any>( DATA );


  const [ description, setDescription ] = useState("");
  const [ loading, setLoading ] = useState(false);






  const [ page, setPage ] = useState( "HomePage" );
  // const [ firstSearch, setFirstSearch ] = useState(true);
  

  return (
    page === "HomePage" 
    ? 
    < HomePage 
      data={ data }
      page={ page }
      searchedString={ searchedString }
      setPage={ setPage }
      setSearchedString={ setSearchedString }
      setDescription={ setDescription }
    />
    :
    < SearchPage 
      data={ data } 
      page={ page }
      searchedString={ searchedString }
      setPage={ setPage }
      setSearchedString={ setSearchedString }
      setDescription={ setDescription }
      setLoading={ setLoading }
    />
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
