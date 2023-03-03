import SearchBar from './SearchBar';
import Logo from './Logo';
import Title from './Title';

export default function Home(props: any ){

  const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, PAGE, setPAGE } = props;

  const tagline = true;

  return (
    <div className="home-wrapper" >

      < Logo PAGE={ PAGE } />

      { tagline ?  < Title /> : null}

      < SearchBar 
        __DATA__={ __DATA__ } 
        SEARCH_INPUT={ SEARCH_INPUT } 
        PAGE={ PAGE }  
        SearchResults={ props.SearchResults }

        setSubmitCount={ props.setSubmitCount }
        setPAGE={ setPAGE } 
        setSEARCH_INPUT={ setSEARCH_INPUT }  
        setSearchResults={ props.setSearchResults }
      />

    </div>
  );
};




