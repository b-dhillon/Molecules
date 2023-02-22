import { Suspense, useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import Data from './data';

// To-do:
/*
  - Set up SearchPage UI
  - Get TypeWriteer working
  - Set up data passing and finish writing data structure, at least a first draft, 
*/


function App(): JSX.Element {

  const [ searchedString, setSearchedString ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState<any>( Data );
  const [ page, setPage ] = useState( "HomePage" );
  // const [ firstSearch, setFirstSearch ] = useState(true);
  
  return (
    page === "HomePage" 
    ? 
    < HomePage page={ page } setPage={ setPage } data={ data } setSearchedString={ setSearchedString } searchedString={ searchedString } setDescription={ setDescription } />
    :
    < SearchPage page={ page } data={ data } setLoading={ setLoading } />
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
