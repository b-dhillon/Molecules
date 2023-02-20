import SearchBar from './SearchBar';
import Logo from './Logo';
import Title from './Title'

export default function Home(props: any ){

  // destructuring props
  const { searchedString, setSearchedString, setDescription } = props;

  return (
    <>
      < Logo />
      < Title />
      < SearchBar searchedString={ searchedString } setSearchedString={ setSearchedString } />
    </>
  );
};




