import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';
import WikipediaScrape from './components/WikipediaScraper';

// TODO:
/*
- Style table / fiddle with UI

- Write ClearUI() function to reset the UI if another compound is searched.
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


  WikipediaScrape("morphine");
  WikipediaScrape("Crystal Meth");
  WikipediaScrape("THC");
  WikipediaScrape("MDMA");
  WikipediaScrape("LSD");
  WikipediaScrape("psilocybin");
  WikipediaScrape("Narcan");
  WikipediaScrape("Fentanyl");
  // WikipediaScrape("insulin");






  // WikipediaScrape('Water').then((summary) => {
  //   console.log(summary);
  // });

  return (
    PAGE === "HomePage" 
    ? 
    < HomePage 
      __DATA__={ __DATA__ }
      SEARCH_INPUT={ SEARCH_INPUT }
      setSEARCH_INPUT={ setSEARCH_INPUT }
      PAGE={ PAGE }
      setPAGE={ setPAGE }
      setSearchResults={ setSearchResults }
    />
    :
    < SearchPage 
      __DATA__={ __DATA__ }
      SEARCH_INPUT={ SEARCH_INPUT }
      setSEARCH_INPUT={ setSEARCH_INPUT }
      PAGE={ PAGE }
      setPAGE={ setPAGE }
      SearchResults={ SearchResults }
      setSearchResults={ setSearchResults }
    />
  );
};

interface Data {
  // compounds: Compound[]
};


export default App