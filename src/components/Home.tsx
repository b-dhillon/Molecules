import SearchField from './SearchField';
import Logo from './Logo';
import Tagline from './Tagline'




// These shouldnt be needed here??
import Describe from './Describe';
import Structure2D from './Structure2D';
import Structure3D from './Structure3D';


export default function Home(props: any ){

    // destructuring props
    const { searchedString, setSearchedString, setDescription } = props;

    return (
      <>
        < Logo />
        < Tagline />
        < SearchField searchedString={ searchedString } setSearchedString={ setSearchedString } />
      </>
    )
        
}




