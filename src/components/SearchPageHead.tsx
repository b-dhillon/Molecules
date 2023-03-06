import Logo from './Logo';
import SearchBar from './SearchBar';

export default function SearchPageHead( props: any ): JSX.Element {

    const { 
        __DATA__, 
        SEARCH_INPUT, 
        PAGE, 
        setSEARCH_INPUT, 
        setPAGE, 
        setSearchResults 
    } = props;

    const headerWrapper = {
        width: '100%',
        display: "flex",
        padding: '30px 70px 20px 70px',
    };

    const divider = {
        borderBottom: '2px solid gray',
        // borderBottom: '2px solid rgb(61, 106, 255)',
        display: "flex",
        width: "100%",
        padding: "0px 0px 28px 0px",
    }

    return (
        < div style={ headerWrapper } id="header" >
            <div id="header-body-divider" style={ divider } >
                < Logo PAGE={ PAGE } />
                < SearchBar 
                    __DATA__={ __DATA__ }
                    SEARCH_INPUT={ SEARCH_INPUT }
                    PAGE={ PAGE }  
                    SearchResults={ props.SearchResults }
                    SubmitCount={ props.SubmitCount }
                    Loading={ props.Loading }


                    setLoading={ props.setLoading }


                    setSubmitCount={ props.setSubmitCount }
                    setPAGE={ setPAGE } 
                    setSEARCH_INPUT={ setSEARCH_INPUT }
                    setSearchResults={ props.setSearchResults }
                /> 
            </div>
        </ div >
    );
};