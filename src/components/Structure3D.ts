// @ts-ignore
import Render from './render.js';

export default function Structure3D( mol3d: any, size3d: any ) {

  // Instantiating a canvas:
  let TC = new Render.TransformCanvas3D( 'display3d', size3d, size3d );

  // Parsing SDF file to Molecule file:
  let molecule = Render.readMOL( mol3d );

  // Setting custom styles: 

  TC.styles.set3DRepresentation('Ball and Stick');
  TC.styles = CustomizeStyles( TC );


  // Adding drag functionality:
  TC.dragPath = [], TC.oldDrag = TC.drag;
  TC.drag = function ( e: any ) {
    this.dragPath[TC.dragPath.length] = e.p;
    this.oldDrag(e);
  };

  // Changing atom colors:
  ChangeAtomColors( molecule, TC );

  // Loading molecule:
  TC.loadMolecule( molecule );
  
  // Scaling model:
  TC.camera.zoomOut();
  TC.setupScene();
  TC.repaint();
}






function CustomizeStyles( TC: any ) {

  // Copying default styles:
  let cs = TC.styles.copy(); 

  // Scaling atoms and bonds
  cs.bonds_cylinderDiameter_3D = 1;
  cs.atoms_useVDWDiameters_3D = true;
  cs.atoms_vdwMultiplier_3D = 2.5;
  cs.bonds_showBondOrders_3D = true;

  // Color
  cs.atoms_useJMOLColors = true;
  cs.bonds_color = 'white';
  cs.backgroundColor = '#141414';
  cs.bonds_splitColor = true;

  // Flat look 
  cs.flat_color_3D = true;
  cs.bonds_materialShininess_3D = 0;
  cs.atoms_materialShininess_3D = 0;
  cs.atoms_materialSpecularColor_3D = '#000000';
  cs.shadow_3D = false;

  // Lighting 
  cs.lightDirection_3D = [0,1,0];

  return cs;

  // Offline styles:
  /*

    // Changing Sphere Diameter
    TC.styles.atoms_sphereDiameter_3D = 8;


    // Setting Ball and Stick Representation

  
    // Outline 
    carbonStyle.outline_3D = true; 

    TC.styles.outline_depth_threshold = .2;
    TC.styles.outline_normal_threshold = .9;

  */
};










function ChangeAtomColors( molecule: any, TC: any ) {

  // Changing Carbon Color
  let carbonStyle = TC.styles.copy();
  carbonStyle.atoms_useJMOLColors = false;
  // carbonStyle.atoms_color = '#363635';
  carbonStyle.atoms_color = '#242423';



  // Changing Nitrogen Color
  let nitrogenStyle = TC.styles.copy();
  nitrogenStyle.atoms_useJMOLColors = false;
  nitrogenStyle.atoms_color = 'blue';

  // Changing Oxygen Color
  let oxygenStyle = TC.styles.copy();
  oxygenStyle.atoms_useJMOLColors = false;
  oxygenStyle.atoms_color = 'red';

  // Changing Phosphorus Color
  let phosphorusStyle = TC.styles.copy();
  phosphorusStyle.atoms_useJMOLColors = false;
  phosphorusStyle.atoms_color = '#944203';

  // Changing Sulfur Color
  let sulfurStyle = TC.styles.copy();
  sulfurStyle.atoms_useJMOLColors = false;
  sulfurStyle.atoms_color = 'yellow';


  for(let i = 0; i < molecule.atoms.length; i++) {
    let a = molecule.atoms[i];
    if( a.label === 'C' ) {
      a.styles = carbonStyle;
    }

    if( a.label === 'N' ) {
      a.styles = nitrogenStyle;
    }
    if( a.label === 'O' ) {
      a.styles = oxygenStyle;
    }

    if( a.label === 'P' ) {
      a.styles = phosphorusStyle;
    }

    if( a.label === 'S' ) {
      a.styles = sulfurStyle;
    }

  };
};






// Old way of setting custom styles:
/*
// Scaling atoms and bonds
TC.styles.bonds_cylinderDiameter_3D = 1;
TC.styles.atoms_useVDWDiameters_3D = true;
TC.styles.atoms_vdwMultiplier_3D = 2;

// Color
TC.styles.atoms_useJMOLColors = true;
TC.styles.backgroundColor = '#141414';
TC.styles.bonds_splitColor = true;
// TC.styles.bonds_color = '#ffffff';
// TC.styles.bonds_colorGradient = true;

// Flat look 
TC.styles.flat_color_3D = true;
TC.styles.bonds_materialShininess_3D = 0;
TC.styles.atoms_materialShininess_3D = 0;
TC.styles.atoms_materialSpecularColor_3D = '#000000';
TC.styles.shadow_3D = false;

// Lighting 
TC.styles.lightDirection_3D = [0,0,0];
*/