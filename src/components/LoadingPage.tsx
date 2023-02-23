import Styles from '../styles/LoadingPage.module.css'

function LoadingPage(): JSX.Element {

    const loadingPageWrapper = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };


    return (
        <div id="loading-wrapper" style={ loadingPageWrapper as React.CSSProperties } >
            <div className={ Styles.loading }>
                <span>Thinking...</span>
            </div>
        </div>
    );
};

export default LoadingPage