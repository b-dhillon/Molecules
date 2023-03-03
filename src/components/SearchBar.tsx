import Search from "./Search";
import Describe from "./DescriptionFetcher";
import Styles from '../styles/SearchBar.module.css';

export default function SearchBar( props: any ) {

  const { __DATA__, SEARCH_INPUT, setSEARCH_INPUT, PAGE, setPAGE, setSearchResults } = props;

  const inlineStyles = {
    homePageSearchBarWrapper: {
      width: '100%',
    },
    searchPageSearchBarWrapper: {
      width: '600px',
      marginLeft: '50px',
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

  async function onSubmit(e: Event | any) {
    e.preventDefault();
    console.log( "Searching: ", SEARCH_INPUT.trim() );
    setSEARCH_INPUT( SEARCH_INPUT.trim() ); // is this needed?
    setPAGE("SearchPage");

    const SearchResults = await Search( SEARCH_INPUT );
    props.setSearchResults( SearchResults );
    console.log( "Search() finished" );
    console.log( "Search Results:", ...SearchResults );
  };
  
  return (
    <div className={ Styles.searchBarWrapper } style={ PAGE === "HomePage" ? inlineStyles.homePageSearchBarWrapper : inlineStyles.searchPageSearchBarWrapper }>

      <div className={ Styles.searchBarContainer } style={ PAGE === "HomePage" ? inlineStyles.homePageSearchBarContainer : inlineStyles.searchPageSearchBarContainer  }>

        <i className="fa fa-search searchIcon" style={{ margin: '25px' }}></i>

        <form className="search-form" onSubmit={ (e) => onSubmit(e) } >
          <input 
          id={ Styles.SearchBar }
          className={ Styles.searchBarInput }
          type="text" 
          placeholder={ PAGE === "HomePage" ? "Try Dopamine, Adrenaline, Vitamin C, Fat, Crystal Meth etc..." : "My Molecules" } 
          onChange={ (e) => {
            setSEARCH_INPUT( e.target.value )
          }}
          autoComplete="off" 
          value={ SEARCH_INPUT }
          // placeholder="What molecule would you like to learn about?" 
          // onFocus={ handleSearchFocus } 
          // onBlur={ handleSearchBlur } 
          />
        </form>

        <i className="fa fa-arrow-right goIcon" style={{ margin: '25px' }}></i>

      </div>

      { PAGE === "HomePage" ? <button className={ Styles.button1 } onClick={ (e) => onSubmit(e) }>Search</button> : null }

    </div>
  )
}

// <div className={ `${tagline ?  Styles.searchWrapper : Styles.searchWrapperNoTagline}` } >
  
/* 
<svg className="search-border" enableBackground="new 0 0 671 111" version="1.1" viewBox="0 0 671 111" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <path className="border" d="m335.5 108.5h-280c-29.3 0-53-23.7-53-53s23.7-53 53-53h280"/>
    <path className="border" d="m335.5 108.5h280c29.3 0 53-23.7 53-53s-23.7-53-53-53h-280"/>
</svg> 
*/