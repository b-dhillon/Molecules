
export default function PropertyTables( props: any ) {

    const { domNodes } = props;

    const inlineStyles = {
        table: {
            // fontFamily: "Poppins-Thin !important",
            // fontWeight: "300 !important",
            // padding: "0px 10px",
            // border: "2px solid gray",

        },
        tableWrapper: {
            // width: "96%",
            justifyContent: "center",
            display: "flex",
            margin: "0",
        },
        tableBackground: {
            width: "100%",
            borderRadius: "50px",
            margin: "35px 0px 60px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 10px 20px 10px",
            background: "#141414",
            boxShadow: "-9px -9px 9px #080808, 9px 9px 9px #080808",
        },
        tableHeader: {
            fontWeight: "300",
            fontSize: "2rem",
            padding: "10px",
        },
        tableData: {
            padding: "10px 12px",
            border: "1px solid gray",
            borderRadius: "2px",
        },
        tableRow: {
            padding: "10px 12px",
            border: "3px solid yellow",
            // borderRadius: "2px",
        },
        tableRowOdd: {
            background: "#DB5461",
            textAlign: "left",
        },
        tableRowEven: {
            // background: "white",
            textAlign: "left",
            // background: "#DB5461",
            // background: "rgb(61, 106, 255)",
        },
    };


    return (
        <>

            < table id="table-1" style={ inlineStyles.table } >
            
                < tbody >

                    <tr style={ inlineStyles.tableRow as React.CSSProperties } >
                        <td ref={ domNodes.properties.names[0] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>
                        <td ref={ domNodes.properties.values[0] } style={ inlineStyles.tableRowEven as React.CSSProperties }></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[1] } style={ inlineStyles.tableRowOdd as React.CSSProperties }></td>
                        <td ref={ domNodes.properties.values[1] } style={ inlineStyles.tableRowEven as React.CSSProperties } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[2] } style={ inlineStyles.tableRowOdd as React.CSSProperties }></td>
                        <td ref={ domNodes.properties.values[2] } style={ inlineStyles.tableRowEven as React.CSSProperties } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[3] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>
                        <td ref={ domNodes.properties.values[3] } style={ inlineStyles.tableRowEven as React.CSSProperties } ></td>
                    </tr>

                    {/* <tr>
                        <td ref={ domNodes.properties.names[4] }></td>
                        <td ref={ domNodes.properties.values[4] } ></td>
                    </tr> */}

                </ tbody >

            </ table >

            < table id="table-2" style={ inlineStyles.table } >
                
                < tbody >

                    <tr>
                        <td ref={ domNodes.properties.names[4]  }style={ inlineStyles.tableRowOdd as React.CSSProperties }  ></td>

                        <td ref={ domNodes.properties.values[4] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[5]  }style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[5] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[6]  }style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[6] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[7] } style={ inlineStyles.tableRowOdd as React.CSSProperties }></td>

                        <td ref={ domNodes.properties.values[7] } ></td>
                    </tr>

                    {/* <tr>
                        <td ref={ domNodes.properties.names[9] }></td>
                        <td ref={ domNodes.properties.values[9] } ></td>
                    </tr> */}

                </ tbody >

            </ table >

            < table id="table-3" style={ inlineStyles.table } >
            
                < tbody >

                    <tr>
                        <td ref={ domNodes.properties.names[8] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[8] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[9] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[9] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[10] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[10] } ></td>
                    </tr>

                    <tr>
                        <td ref={ domNodes.properties.names[11] } style={ inlineStyles.tableRowOdd as React.CSSProperties } ></td>

                        <td ref={ domNodes.properties.values[11] } ></td>
                    </tr>

                    {/* <tr>
                        <td ref={ domNodes.properties.names[14] }></td>
                        <td ref={ domNodes.properties.values[14] } ></td>
                    </tr> */}

                </ tbody >

            </ table >


        </>
    )
}