import { useState } from 'react';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DATA from './data';
import WikipediaScrape from './components/WikipediaScrape';

// TODO:
/*

- Tune Up UI:

  - Position the 3 sections properly. 
  - Restyle Properties table?

--//--

- Add AutoComplete to SearchBar.
- Train AI Model. Avagadro. 
  - Add input field --- Ask Avagadro to switch the description container into a chat interface.
- Make mobile version.
  

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