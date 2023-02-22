import logo from '../img/logo.png';

function Logo( props: any ) {

    const { page } = props;


    const homeStyles = {
        logoWrapper: {
            display: 'flex',
            // flexDirection: 'column', 
            justifyContent: 'center', 
            flexGrow: '1', 
            width: '100% !important',
            border: '1px sold red',
        },

        logo: {
            maxWidth: '100px',
            height: 'auto',
            willChange: 'transform',
            transition: 'transform 275ms 220ms ease-out',
            WebkitTransition: 'transform 275ms 220ms ease-out',
            MozTransition: 'transform 275ms 220ms ease-out',
            OTransition: 'transform 275ms 220ms ease-out',
            transform: 'rotate(0deg)',
            WebkitTransform: 'rotate(0deg)',
            MozTransform: 'rotate(0deg)',
            OTransform: 'rotate(0deg)',
        }
    }

    const searchStyles = {
        logoWrapper: {
            // border: '1px solid red',
            display: 'flex',
            alignItems: 'center'
            // justifyContent: 'center', 
            // flexDirection: 'column', 
            // flexGrow: '1', 
        },
        logo: {
            maxWidth: '45px',
            height: 'auto',
            // willChange: 'transform',
            // transition: 'transform 275ms 220ms ease-out',
            // WebkitTransition: 'transform 275ms 220ms ease-out',
            // MozTransition: 'transform 275ms 220ms ease-out',
            // OTransition: 'transform 275ms 220ms ease-out',
            // transform: 'rotate(0deg)',
            // WebkitTransform: 'rotate(0deg)',
            // MozTransform: 'rotate(0deg)',
            // OTransform: 'rotate(0deg)',
        }
    }



    return (
        <div style={ page === "HomePage" ? homeStyles.logoWrapper : searchStyles.logoWrapper }>
            <img style={ page === "HomePage" ? homeStyles.logo : searchStyles.logo } src={logo}/>
        </div>
    )

}

export default Logo;