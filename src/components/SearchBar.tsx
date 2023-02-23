import Search from "./Search";
import Describe from "./Describe";
import Styles from '../styles/SearchBar.module.css';

export default function SearchBar( props: any ) {

  // destructuring props
  const { data, searchedString, setSearchedString, setDescription, setPage, page } = props;


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
    console.log('SUBMIT');
    e.preventDefault();
    props.setPage("SearchPage");



    // Turning search off momentarily
    /*
    Search( props.searchedString );
    const data = await Describe( props.searchedString );
    console.log(data);
    const description: string = data.choices[0].text.trim();
    console.log('SEARCHED STRING: ', props.searchedString);
    props.setDescription( () => description );
    */

    // useData( props.searchedString )
  }

  const homePageSearchWrapper = {
    width: '100%',
  }

  const searchPageSearchWrapper = {
    width: '600px',
    marginLeft: '50px',
  }

  const homePageSearchBarContainer = {
    height: '50px',
    width: '100%',
    maxWidth: '800px'
  }
  
  const searchPageSearchBarContainer = {
    height: '45px',
    width: '100%',
    maxWidth: '600px'
  }
  
  return (
    // <div className={ `${tagline ?  Styles.searchWrapper : Styles.searchWrapperNoTagline}` } >
    <div className={ Styles.searchWrapper } style={ page === "HomePage" ? homePageSearchWrapper : searchPageSearchWrapper }>

      <div className={ Styles.searchContainer } style={ page === "HomePage" ? homePageSearchBarContainer : searchPageSearchBarContainer  }>

        <i className="fa fa-search searchIcon" style={{ margin: '25px' }}></i>

        <form className="search-form" onSubmit={ (e) => onSubmit(e) } >
          <input 
            className={ Styles.searchInput }
            id={ Styles.search }
            type="text" 
            // placeholder="What molecule would you like to learn about?" 
            placeholder={ props.page === "HomePage" ? "Try Dopamine, Adrenaline, Vitamin C, ATP, Crystal Meth etc..." : `${searchedString}` } 
            onChange={ (e) => {
              props.setSearchedString(e.target.value)
              console.log(props.searchedString);
              } }
            // onFocus={ handleSearchFocus } 
            // onBlur={ handleSearchBlur } 
            autoComplete="off" 
            value={ props.page === "HomePage" ? null : props.searchedString }
            />
        </form>

        <i className="fa fa-arrow-right goIcon" style={{ margin: '25px' }}></i>

      </div>

      { page === "HomePage" ? <button className={ Styles.button1 } onClick={ (e) => onSubmit(e) }>Search</button> : null }

    </div>
  )
}


  
/* 
<svg className="search-border" enableBackground="new 0 0 671 111" version="1.1" viewBox="0 0 671 111" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
    <path className="border" d="m335.5 108.5h-280c-29.3 0-53-23.7-53-53s23.7-53 53-53h280"/>
    <path className="border" d="m335.5 108.5h280c29.3 0 53-23.7 53-53s-23.7-53-53-53h-280"/>
</svg> 
*/