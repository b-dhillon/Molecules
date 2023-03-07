// @ts-ignore
import Render from './render.js';


function Structure3D( mol3d: any, size3d: any ) {

  // const { mol3d, size3d } = props

  let display3D = new Render.TransformCanvas( 'display3d', size3d, size3d, true );

  display3D.styles.compass_display = true;
  display3D.styles.atoms_circles_2D = true;
  display3D.styles.atoms_useJMOLColors = true;
  display3D.styles.bonds_color = 'white';
  display3D.styles.atoms_HBlack_2D = false;
  display3D.styles.bonds_symmetrical_2D = true;
  display3D.styles.backgroundColor = '#141414';
  display3D.styles.atoms_display = true;
  display3D.styles.bonds_splitColor = true;

  // display3D.styles.atoms_usePYMOLColors = true;
  // display3D.styles.atoms_displayLabels_3D = true;
  // display3D.styles.bonds_Diameter_3D = 0.8;
  // display3D.styles.atoms_sphereDiameter_3D = 0.2;


  display3D.dragPath = [];
  display3D.oldDrag = display3D.drag;

  display3D.drag = function ( e: any ) {
    this.dragPath[display3D.dragPath.length] = e.p;
    this.oldDrag(e);
  };

  let molecule = Render.readMOL( mol3d );
  display3D.loadMolecule( molecule );

}

export default Structure3D;