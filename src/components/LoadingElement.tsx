import Styles from '../styles/LoadingElement.module.css'
import data from '../data';

function LoadingElement(): JSX.Element {

    const loadingPageWrapper = {
        width: '100%',
        height: '100%',
        display: 'flex',
    };

    return (
        <div id="loading-wrapper" style={ loadingPageWrapper as React.CSSProperties } >
            <div className={ Styles.loading }>
                <span>Searching...</span>
            </div>
        </div>
    );
};

export default LoadingElement