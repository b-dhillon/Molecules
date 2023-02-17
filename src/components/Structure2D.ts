// @ts-ignore
import Render from './render.js';

function Structure2D( _2Dmolecule: any, size2d: number ) {

  let molecule = Render.readMOL( _2Dmolecule );

  // .TransformCanvas( name: string, width: number, height: number, is3D: boolean )
  let display2D = new Render.TransformCanvas(
    'display2D', // name
    size2d, // width
    size2d, // height
    false // is3D
  );


  display2D.styles.atoms_HBlack_2D = false;
  display2D.styles.atoms_color = 'white';
  display2D.styles.bonds_color = 'white';
  display2D.styles.atoms_font_size_2D = 8;
  display2D.styles.atoms_displayTerminalCarbonLabels_2D = true;
  display2D.styles.backgroundColor = '#141414';
  display2D.loadMolecule(molecule);
  // display2D.styles.atoms_implicitHydrogens_2D = false;
  // let HydrogenReducer = new Render.informatics.HydrogenDeducer;
  // HydrogenReducer.removeHydrogens(molecule, false);

}

export default Structure2D;