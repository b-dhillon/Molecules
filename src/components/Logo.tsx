import logo from '../img/logo.png';

function Logo( props: any ) {

    const { PAGE } = props;

    console.log( props.setPAGE );


    const homePage = {
        logoWrapper: {
            display: 'flex',
            justifyContent: 'center', 
            flexGrow: '1', 
            width: '100% !important',
            // border: '1px solid red',
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

    const searchPage = {
        logoWrapper: {
            display: 'flex',
            alignItems: 'center',
        },

        logo: {
            maxWidth: '50px',
            height: 'auto',
            cursor: 'pointer',
        }
    }



    return (
        <div style={ PAGE === "HomePage" ? homePage.logoWrapper : searchPage.logoWrapper } >
            <img style={ PAGE === "HomePage" ? homePage.logo : searchPage.logo } src={logo} onClick={ PAGE === "HomePage" ? ()=>null : () => props.setPAGE("HomePage") } />
        </div>
    )

}

export default Logo;