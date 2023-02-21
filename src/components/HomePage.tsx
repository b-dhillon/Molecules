import SearchBar from './SearchBar';
import Logo from './Logo';
import Title from './Title';

export default function Home(props: any ){

  // destructuring props
  const { searchedString, setSearchedString, setDescription, setFirstSearch } = props;

  const tagline = false;

  return (
    <div className="home-wrapper" >
      < Logo />
      { tagline ?  < Title /> : null}
      < SearchBar setFirstSearch={ setFirstSearch } tagline={ tagline } searchedString={ searchedString } setSearchedString={ setSearchedString } />
    </div>
  );
};



