import Search from "./Search";
import Describe from "./DescriptionFetcher";
import Styles from '../styles/SearchBar.module.css';
import ResetBody from "./ResetBody";

export default function SearchBar( props: any ) {

  const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, PAGE, setPAGE, setSearchResults } = props;

  const inlineStyles = {
    wrapper: {
      width: '400px',
    },
    homePageSearchBarContainer: {
      height: '50px',
      width: '100%',
      maxWidth: '800px'
    },
    searchPageSearchBarContainer: {
      height: '45px',
      width: '100%',
      maxWidth: '600px'
    },
  }

  function handleSearchFocus() {
    const logoEl = document.querySelector('.logo');
    const searchEl = document.querySelector('.search-container');


    // @ts-ignore
    logoEl.classList.add('logo-rotate');
    // @ts-ignore
    searchEl.classList.add('border-searching');
  }

  function handleSearchBlur() {
    console.log('BLUR');
    const logoEl = document.querySelector('.logo');
    const searchEl = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    // @ts-ignore
    searchInput.blur();
    // @ts-ignore
    logoEl.classList.remove('logo-rotate');
    // @ts-ignore
    searchInput.classList.remove('logo-rotate');
    // @ts-ignore
    searchEl.classList.remove('border-searching');
    // @ts-ignore
    searchInput.classList.remove('border-searching');
  }

  async function onSubmit( e: Event | any ) {
    e.preventDefault();
    props.setLoading( true ) 
    props.setSubmitCount( ( oldCount: number ) => oldCount + 1 );

    console.log( "Searching for: ", SEARCH_INPUT.trim() );
    setSEARCH_INPUT( SEARCH_INPUT.trim() ); // is this needed?
    setPAGE("SearchPage");

    const _SearchResults = await Search( SEARCH_INPUT );
    props.setSearchResults( _SearchResults );

    props.setLoading( false ) 

    console.log( "Search() finished, Search Results:", ..._SearchResults );
  };
  
  return (
    <div className={ Styles.searchBarWrapper } style={ inlineStyles.wrapper }>

      <div className={ Styles.searchBarContainer } style={ PAGE === "HomePage" ? inlineStyles.homePageSearchBarContainer : inlineStyles.searchPageSearchBarContainer  }>

        <i className="fa fa-search searchIcon" style={{ margin: '25px' }}></i>

        <form className="search-form" onSubmit={ (e) => onSubmit(e) } >
          <input 
          id={ Styles.SearchBar }
          className={ Styles.searchBarInput }
          type="text" 
          placeholder={ "Ask Avogadro" } 
          onChange={ (e) => {
            setSEARCH_INPUT( e.target.value )
          }}
          autoComplete="off" 
          value={ SEARCH_INPUT }
          />
        </form>

        <i className="fa fa-arrow-right goIcon" style={{ margin: '25px' }}></i>

      </div>

      {/* { PAGE === "HomePage" ? <button className={ Styles.button1 } onClick={ (e) => onSubmit(e) }>Search</button> : null } */}

    </div>
  )
}
