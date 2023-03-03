import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';
import WikipediaScrape from './components/WikipediaScrape';

// TODO:
/*
- Style table / fiddle with UI
  - Restyle Properties table 
  - Add more properties for the properties table and create a scrollable table
  - Place all titles inside of their box-shadow containers? or just the title?


- Make Description and Properties scrollable

- Add cached data for cached descriptions. 


// Low Priority: 
- Set up data passing and finish writing data structure, at least a first draft, 
- Refactor global CSS styles.
*/

function App(): JSX.Element {

  const [ PAGE, setPAGE ] = useState( "HomePage" );  
  const [ SEARCH_INPUT, setSEARCH_INPUT ] = useState("");
  const [ __DATA__ ] = useState< Data >( DATA );
  const [ SearchResults, setSearchResults ] = useState( [] );

  const [ SubmitCount, setSubmitCount ] = useState( 0 );


  // WikipediaScrape("morphine");
  // WikipediaScrape("Crystal Meth");
  // WikipediaScrape("THC");
  // WikipediaScrape("MDMA");
  // WikipediaScrape("LSD");
  // WikipediaScrape("psilocybin");
  // WikipediaScrape("Narcan");
  // WikipediaScrape("Viagra");






  // WikipediaScrape('Water').then((summary) => {
  //   console.log(summary);
  // });

  return (
    PAGE === "HomePage" 
    ? 
    < HomePage 
      __DATA__={ __DATA__ }
      PAGE={ PAGE }
      SEARCH_INPUT={ SEARCH_INPUT }
      SearchResults={ SearchResults }
      SubmitCount={ SubmitCount }



      setSubmitCount={ setSubmitCount }
      setSEARCH_INPUT={ setSEARCH_INPUT }
      setPAGE={ setPAGE }
      setSearchResults={ setSearchResults }
    />
    :
    < SearchPage 
      __DATA__={ __DATA__ }
      PAGE={ PAGE }
      SEARCH_INPUT={ SEARCH_INPUT }
      SearchResults={ SearchResults }
      SubmitCount={ SubmitCount }

      setSubmitCount={ setSubmitCount }
      setSEARCH_INPUT={ setSEARCH_INPUT }
      setPAGE={ setPAGE }
      setSearchResults={ setSearchResults }
    />
  );
};

interface Data {
  // compounds: Compound[]
};


export default App