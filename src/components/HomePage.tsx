import SearchBar from './SearchBar';
import Logo from './Logo';
import Tagline from './Tagline';

export default function Home(props: any ){

  const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, PAGE, setPAGE } = props;

  const tagline = true;

  return (
    <div className="home-wrapper" >

      < Logo PAGE={ PAGE } />

      { tagline ?  < Tagline /> : null}

      < SearchBar 
        __DATA__={ __DATA__ } 
        SEARCH_INPUT={ SEARCH_INPUT } 
        PAGE={ PAGE }  
        SearchResults={ props.SearchResults }

        Loading={ props.Loading }

        setLoading={ props.setLoading }

        setSubmitCount={ props.setSubmitCount }
        setPAGE={ setPAGE } 
        setSEARCH_INPUT={ setSEARCH_INPUT }  
        setSearchResults={ props.setSearchResults }
      />

    </div>
  );
};




