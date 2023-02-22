import SearchBar from './SearchBar';
import Logo from './Logo';
import Title from './Title';

export default function Home(props: any ){

  // destructuring props
  const { data, searchedString, setSearchedString, setDescription, setPage, page } = props;

  const tagline = true;

  return (
    <div className="home-wrapper" >
      < Logo page={ page } />
      { tagline ?  < Title /> : null}
      < SearchBar 
        data={ data } 
        page={ page }  
        setPage={ setPage } 
        searchedString={ searchedString } 
        setSearchedString={ setSearchedString } 
        tagline={ tagline } 
      />
    </div>
  );
};




