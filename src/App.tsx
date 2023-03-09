import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';

// TODO:
/*

- Tune UI:
  - Make home logo clickable.
  - Add boiling point, melting point, taste? odor? optical rotation, pKa!!! to table properties


--//--

- Add AutoComplete to SearchBar.
  - Binary search for list of compound names and their synonyms?
    - React Select library does this for us. 
  - Or should we use Machine Learning reccomendations using an Embeddings API?

- Train AI Model. Avogadro. 
  - Add input field ---> Ask Avagadro ---> switches the description container into a chat interface.

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

  // WikipediaScrape("morphine");
  // WikipediaScrape("Crystal Meth");
  // WikipediaScrape("THC");
  // WikipediaScrape("MDMA");
  // WikipediaScrape("LSD");
  // WikipediaScrape("psilocybin");
  // WikipediaScrape("Narcan");
  // WikipediaScrape("Viagra");


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