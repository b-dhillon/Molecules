// @ts-ignore
import Render from './render.js';


function Structure3D( _3Dmolecule: any, size3d: number ) {

  let molecule = Render.readMOL( _3Dmolecule );
  let display3D = new Render.TransformCanvas('display3D', size3d, size3d, true);

  display3D.styles.compass_display = true;
  display3D.styles.atoms_circles_2D = true;
  display3D.styles.atoms_useJMOLColors = true;
  display3D.styles.bonds_color = 'white';
  display3D.styles.atoms_HBlack_2D = false;
  display3D.styles.bonds_symmetrical_2D = true;
  display3D.styles.backgroundColor = '#141414';
  display3D.dragPath = [];
  display3D.oldDrag = display3D.drag;

  display3D.drag = function ( e: any ) {
    this.dragPath[display3D.dragPath.length] = e.p;
    this.oldDrag(e);
  };

  display3D.loadMolecule(molecule);
}

export default Structure3D;