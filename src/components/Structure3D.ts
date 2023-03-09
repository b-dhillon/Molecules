// @ts-ignore
import Render from './render.js';


function Structure3D( mol3d: any, size3d: any ) {

  // const { mol3d, size3d } = props

  let display3D = new Render.TransformCanvas3D( 'display3d', size3d, size3d );

  console.log( "Transformer Canvas 3D", display3D );
  

  display3D.styles.set3DRepresentation('Ball and Stick');







  // display3D.styles.atoms_circleDiameter_2D = 9







  // display3D.styles.bonds_renderAsLines_3D = true



  // Working
  display3D.styles.bonds_cylinderDiameter_3D = 2;
  display3D.styles.atoms_sphereDiameter_3D = 7 // doubled default
  display3D.styles.atoms_useVDWDiameters_3D = false;

  display3D.styles.atoms_useJMOLColors = true;
  display3D.styles.bonds_color = '#ffffff';
  display3D.styles.backgroundColor = '#141414';

  display3D.styles.bonds_materialShininess_3D = 0 // halved the default
  display3D.styles.atoms_materialShininess_3D = 0
  display3D.styles.atoms_materialSpecularColor_3D = '#000000'
  display3D.styles.shadow_3D = false;
  // display3D.styles.atoms_resolution_3D = 50
  display3D.styles.flat_color_3D = true;
  // display3D.styles.outline_3D = true; 
  // display3D.styles.outline_depth_threshold = .1;
  // display3D.styles.outline_normal_threshold = .3;

  // display3D.styles.outline_thickness = 4;
  display3D.styles.bonds_splitColor = true;




  // display3D.styles.atoms_display = true;
  // display3D.styles.bonds_splitColor = true;
  // display3D.styles.bonds_pillHeight_3D = 0.1


  // display3D.styles.atoms_HBlack_2D = false;
  // display3D.styles.bonds_symmetrical_2D = true;






  // display3D.styles.atoms_displayLabels_3D = true;
  // display3D.styles.bonds_Diameter_3D = 0.8;



  // display3D.styles.atoms_font_size_3D = 16;
  // display3D.styles.bonds_hashWidth_3D = 2;
  // display3D.styles.bonds_width_3D = 1.75;


  // display3D.styles.
  // display3D.styles.bonds_pillDiameter_3D = 0.6 // doubled default




  display3D.dragPath = [];
  display3D.oldDrag = display3D.drag;

  display3D.drag = function ( e: any ) {
    this.dragPath[display3D.dragPath.length] = e.p;
    this.oldDrag(e);
  };




  // display3D.resize(600, 600)
  let molecule = Render.readMOL( mol3d );

  console.log( "Molecule object", molecule);

  // molecule.scaleToAverageBondLength(20);

  display3D.loadMolecule( molecule );

  // set this after the molecule has been loaded, then repaint the canvas
  // display3D.styles.scale = 0.5;
  // display3D.styles.angstromsPerBondLength = 0.25;



  display3D.styles.atoms_circles_2D = true;


  display3D.repaint();

}

export default Structure3D;