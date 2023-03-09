import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';

// TODO:
/*

UI:
  - Make home logo clickable.
  - Add a fixed width to the table so that it only scrolls vertically.
  - Add boiling point, melting point, taste? odor? optical rotation, pKa!!! to table properties
--//--

AutoComplete | AutoSuggest
  - Binary search for list of compound names and their synonyms?
    - React Select library does this for us. 
  - Or should we use Machine Learning reccomendations using an Embeddings API?
--//--


Avogadro
  - Add input field ---> Ask Avagadro ---> switches the description container into a chat interface.

--//--

- Make mobile friendly.
  
// Lower Priority: 
- Set up cached data passing and finish writing data structure, at least a first draft, 
*/

function App(): JSX.Element {

  const [ PAGE, setPAGE ] = useState( "HomePage" );  
  const [ SEARCH_INPUT, setSEARCH_INPUT ] = useState("");
  const [ __DATA__ ] = useState< Data >( DATA );
  const [ SearchResults, setSearchResults ] = useState( [] );
  const [ SubmitCount, setSubmitCount ] = useState( 0 );

  const [ Loading, setLoading ] = useState( false );


  return (
    PAGE === "HomePage" 
    ? 
    < HomePage 
      __DATA__={ __DATA__ }
      PAGE={ PAGE }
      SEARCH_INPUT={ SEARCH_INPUT }
      SearchResults={ SearchResults }
      SubmitCount={ SubmitCount }
      Loading={ Loading }

      setLoading={ setLoading }
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
      Loading={ Loading }

      setLoading={ setLoading }
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