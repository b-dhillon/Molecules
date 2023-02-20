import { Suspense, useState } from 'react';
import Structure2D from './components/Structure2D';
import Structure3D from './components/Structure3D';
import DisplayTable from './components/Table';
//@ts-ignore
import Describe from './components/Describe';
import Home from './components/Home';

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
    // < div id="root" >
      < Home setSearchedString={ setSearchedString } searchedString={ searchedString } setDescription={ setDescription } />
    // </ div >
  )
}


export default App



  {/* < Logo /> */}
  {/* < SearchField setSearchedString={ setSearchedString } searchedString={ searchedString } setDescription={ setDescription }/> */}




  {/* < StructureFields /> */}
  {/* < DescriptionField /> */}
  {/* <Suspense>
    < Description description={ description }/>
  </Suspense> */}





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
