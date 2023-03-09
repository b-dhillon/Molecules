
export default function PropertyTables( props: any ) {

    const { domNodes } = props;


    const tableBodyStyle = {
        overflowX: "hidden",
    };


    return (
        < table id="properties-table" >
            
            < tbody >
 
                <tr>
                    <td ref={ domNodes.properties.names[0] } ></td>
                    <td ref={ domNodes.properties.values[0] } className="scrollable-cell" ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[1] }></td>
                    <td ref={ domNodes.properties.values[1] } className="scrollable-cell"></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[2] }></td>
                    <td ref={ domNodes.properties.values[2] }></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[3] } ></td>
                    <td ref={ domNodes.properties.values[3] }></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[4]  }></td>
                    <td ref={ domNodes.properties.values[4] }></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[5]  }></td>
                    <td ref={ domNodes.properties.values[5] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[6]  }></td>
                    <td ref={ domNodes.properties.values[6] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[7] } ></td>
                    <td ref={ domNodes.properties.values[7] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[8] }></td>

                    <td ref={ domNodes.properties.values[8] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[9] }></td>

                    <td ref={ domNodes.properties.values[9] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[10] }></td>

                    <td ref={ domNodes.properties.values[10] } ></td>
                </tr>

                <tr>
                    <td ref={ domNodes.properties.names[11] }></td>

                    <td ref={ domNodes.properties.values[11] } ></td>
                </tr>

            </ tbody >

        </ table >
    )
}