
function Tagline() {

    const inlineStyles = {
        taglineWrapper: {
            width: '100%',
            // height: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tagline: {
            letterSpacing: '2px',
            // margin: '0px 0px 0px 10px',
            fontFamily: 'Poppins-Regular',
            fontWeight: 400,
            fontSize: '45px',
            margin: '80px 0px 50px 0px'
        },
    };


    return (
        <div style={ inlineStyles.taglineWrapper as React.CSSProperties }>
            {/* <h1>My Molecules</h1> */}
            < h3 style={ inlineStyles.tagline } >What molecule would you like to learn about?</h3>
        </div>
    )
};

export default Tagline;