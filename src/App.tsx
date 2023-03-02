import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';

// TODO:
/*
- Get structures piped and rendering.
- Style table
- Fix setSearchedString bug where if you delete a letter from search the app crashes.
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