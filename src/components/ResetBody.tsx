export default function ResetBody( domNodes: any, ) {

    console.log( "RESET BODY called" );
    console.log( "domNodes: ", domNodes );

    // STRUCTURES:
    // clearing structure titles
    domNodes.structure2dTitle.current.textContent = "";
    domNodes.structure3dTitle.current.textContent = "";
    // hiding structure containers
    domNodes.display2d.current.classList.add( "hidden" );
    domNodes.display3d.current.classList.add( "hidden" );
        // domNodes.display2d.current.style.display = "none";
        // domNodes.display3d.current.style.display = "none";



    // DESCRIPTION: 
    // clearing description title
    domNodes.descriptionTitle.current.textContent = "";
    // clearing description text
    domNodes.descriptionText.current.textContent = "";
    // hiding description container
    domNodes.descriptionWrapper.current.classList.add( "hidden" );

    // domNodes.descriptionContainer.current.style.display = "none";



    // PROPERTIES:
    // clearing property title
    domNodes.propertiesTitle.current.textContent = "";
    // clearing property names and values
    domNodes.properties.names.forEach( (propertyName: any) => {
        propertyName.current.textContent = "";
    });
    domNodes.properties.values.forEach( (propertyValue: any) => {
        propertyValue.current.textContent = "";
    });
    // hiding property wrapper
    domNodes.propertiesWrapper.current.classList.add( "hidden" );
}