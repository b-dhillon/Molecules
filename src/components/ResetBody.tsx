function ResetBody( domNodes: any, ) {

    // STRUCTURES:
    // clearing titles
    domNodes.structure2dTitle.current.textContent = "", domNodes.structure3dTitle.current.textContent = "";
    // hiding containers
    domNodes.display2d.current.classList.add( "hidden" ), domNodes.display3d.current.classList.add( "hidden" );

    // DESCRIPTION: 
    // clearing title
    domNodes.descriptionTitle.current.textContent = ""
    // clearing text
    domNodes.descriptionText.current.textContent = "";
    // hiding container
    domNodes.descriptionWrapper.current.classList.add( "hidden" );


    // PROPERTIES:
    // clearing title
    domNodes.propertiesTitle.current.textContent = "";
    // clearing text -- both names and values of the table
    domNodes.properties.names.forEach( (propertyName: any) => propertyName.current.textContent = "" ), domNodes.properties.values.forEach( (propertyValue: any) => propertyValue.current.textContent = "" );
    // hiding wrapper
    domNodes.propertiesWrapper.current.classList.add( "hidden" );

}; 

export default ResetBody;

// domNodes.descriptionContainer.current.style.display = "none";
