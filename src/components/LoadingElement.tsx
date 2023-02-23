import Styles from '../styles/LoadingElement.module.css'
import data from '../data';

function LoadingElement(): JSX.Element {

    const loadingPageWrapper = {
        width: '100%',
        height: '100%',
        display: 'flex',
    };


    // @ts-ignore
    // const description = data.compounds.find( (compound: any) => compound.title === "ATP" ).description;
    // console.log('DESCRIPTION: ', description);

    return (
        <div id="loading-wrapper" style={ loadingPageWrapper as React.CSSProperties } >
            <div className={ Styles.loading }>
                <span>Thinking...</span>
            </div>
        </div>
    );
};

export default LoadingElement