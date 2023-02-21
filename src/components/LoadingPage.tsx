import Styles from '../styles/LoadingPage.module.css'

function LoadingPage(): JSX.Element {
    return (
        <div className={ Styles.wrapper } >
            <div className={ Styles.spinner }>
                <div className={ Styles.spinner1 }></div>
            </div>   
        </div>
    );
};

export default LoadingPage