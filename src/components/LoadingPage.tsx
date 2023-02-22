import Styles from '../styles/LoadingPage.module.css'

function LoadingPage(): JSX.Element {
    return (
        <div className={ Styles.wrapper } >
            {/* <div className={ Styles.spinner }>
                <div className={ Styles.spinner1 }></div>
            </div>    */}

            <div className={ Styles.scannerWrapper }>
                <div className={ Styles.scanner }>
                    <span>Thinking...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage