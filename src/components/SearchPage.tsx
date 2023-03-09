import SearchPageHead from './SearchPageHead';
import SearchPageBody from './SearchPageBody';


export default function SearchPage( props: any ): JSX.Element {

    const wrapperBorders = false;
    const searchPageWrapper = {
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `${ wrapperBorders ? "2px solid green" : "none" } `,
    }

    console.log( "search page props", props );
    
    return (
        <div id="SearchPage" style={ searchPageWrapper as React.CSSProperties }>

            < SearchPageHead
                PAGE={ props.PAGE }  
                __DATA__={props.__DATA__ } 
                SEARCH_INPUT={ props.SEARCH_INPUT }
                SearchResults={ props.SearchResults }
                SubmitCount={ props.SubmitCount }

                setLoading={ props.setLoading }
                
                setSubmitCount={ props.setSubmitCount }
                setPAGE={ props.setPAGE } 
                setSEARCH_INPUT={ props.setSEARCH_INPUT }
                setSearchResults={ props.setSearchResults }
            />
            
	        < SearchPageBody 
                __DATA__={ props.__DATA__ }
                SEARCH_INPUT={ props.SEARCH_INPUT }
                SearchResults={ props.SearchResults }
                SubmitCount={ props.SubmitCount }
                Loading={ props.Loading }

                setLoading={ props.setLoading }
                // setSubmitCount={ props.setSubmitCount }
            />

        </div>
    );

};


// const propertyNames = Object.keys( properties ).toString().replace( /_/g, " " ); // replace all underscores with spaces
