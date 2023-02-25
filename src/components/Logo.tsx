import logo from '../img/logo.png';

function Logo( props: any ) {

    const { PAGE } = props;


    const homeStyles = {
        logoWrapper: {
            display: 'flex',
            justifyContent: 'center', 
            flexGrow: '1', 
            width: '100% !important',
            border: '1px sold red',
            // flexDirection: 'column', 
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
            maxWidth: '50px',
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
        <div style={ PAGE === "HomePage" ? homeStyles.logoWrapper : searchStyles.logoWrapper }>
            <img style={ PAGE === "HomePage" ? homeStyles.logo : searchStyles.logo } src={logo}/>
        </div>
    )

}

export default Logo;