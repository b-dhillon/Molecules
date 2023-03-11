// @ts-ignore
import Render from './render.js';


function Structure3D( mol3d: any, size3d: any ) {

  let TC = new Render.TransformCanvas3D( 'display3d', size3d, size3d );
  let molecule = Render.readMOL( mol3d );

  // console.log( "Molecule object", molecule);
  console.log( "Transformer Canvas 3D", TC );




  // Working
  /* TC.styles.set3DRepresentation('Ball and Stick'); */
  // TC.styles.lightDiffuseColor_3D = '#EBE8E2';

  // Scaling atoms and bonds
  TC.styles.bonds_cylinderDiameter_3D = 1;
  // TC.styles.atoms_sphereDiameter_3D = 8;
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





  /*
    TC.styles.outline_3D = true; 
    TC.styles.outline_thickness = 1;
    TC.styles.outline_depth_threshold = .2;
    TC.styles.outline_normal_threshold = .9;
  */


  // Drag Functionality:
  TC.dragPath = [];
  TC.oldDrag = TC.drag;
  TC.drag = function ( e: any ) {
    this.dragPath[TC.dragPath.length] = e.p;
    this.oldDrag(e);
  };

  
  ChangeAtomColors( molecule, TC );
  TC.loadMolecule( molecule );
  
  // TC.styles.scale = 1;
  TC.camera.zoomOut();
  TC.setupScene();
  TC.repaint();
}

function ChangeAtomColors( molecule: any, TC: any ) {

  // Changing Nitrogen Color
  let nitrogenStyle = TC.styles.copy();
  nitrogenStyle.atoms_useJMOLColors = false;
  nitrogenStyle.atoms_color = 'blue';

  // Changing Oxygen Color
  let oxygenStyle = TC.styles.copy();
  oxygenStyle.atoms_useJMOLColors = false;
  oxygenStyle.atoms_color = 'red';


  for(let i = 0; i < molecule.atoms.length; i++) {

    let a = molecule.atoms[i];

    if( a.label === 'N' ) {
      a.styles = nitrogenStyle;
    }

    if( a.label === 'O' ) {
      a.styles = oxygenStyle;
    }

  }

}

export default Structure3D;