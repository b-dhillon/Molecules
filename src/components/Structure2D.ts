// @ts-ignore
import Render from './render.js';

function DisplayLineStructure( mol2d: any, size2d: number ) {

  
  let molecule = Render.readMOL( mol2d );
  
  let display2D = new Render.TransformCanvas(
    'display2d', // name
    size2d, // width
    size2d, // height
    false // is3D
    );
    
  display2D.styles.atoms_HBlack_2D = false;

  display2D.styles.atoms_color = 'white';
  display2D.styles.bonds_color = 'white';
  display2D.styles.atoms_displayTerminalCarbonLabels_2D = true;
  display2D.styles.backgroundColor = '#141414';

  display2D.styles.bonds_colorGradient = true;


  // render sizing of line structure
  display2D.styles.atoms_font_size_2D = 16;
  display2D.styles.bonds_hashWidth_2D = 2;
  display2D.styles.bonds_width_2D = 1.75;



  display2D.styles.atoms_implicitHydrogens_2D = true;
  display2D.styles.atoms_useJMOLColors = true;
  // display2D.styles.angstromsPerBondLength = 5.5;
  // display2D.styles.atoms_displayAllCarbonLabels_2D = true;


  let HydrogenReducer = new Render.informatics.HydrogenDeducer;
  HydrogenReducer.removeHydrogens(molecule, false);
  molecule.scaleToAverageBondLength(40);
  display2D.loadMolecule(molecule);
}

export default DisplayLineStructure;


// let exampleMolFile = 'Molecule Name\n  CHEMDOOD08070920113D 0   0.00000     0.00000     0\n[Insert Comment Here]\n 42 47  0  0  0  0  0  0  0  0  1 V2000\n    2.5688   -1.4702    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.3587    0.4207    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n    7.1400   -0.8173    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -4.3466    0.6451    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -4.5151    1.6308    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.8921   -0.3846    0.0000   N 0  0  0  2  0  0  0  0  0  0  0  0\n   -1.4280   -1.3100    0.0000   N 0  0  0  2  0  0  0  0  0  0  0  0\n    5.6867    0.1250    0.0000   N 0  0  0  2  0  0  0  0  0  0  0  0\n    4.5987   -1.5532    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    4.2288    1.1115    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -3.4856    3.0853    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -3.6298    2.0957    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -3.3412    4.0748    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n   -4.4751    3.2295    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n   -2.4960    2.9409    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n   -2.9141    1.3973    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -3.3571    0.5008    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -5.0449   -0.0706    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -6.0140    0.1763    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -4.7742   -1.0333    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -1.8929   -0.4246    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.4288   -1.3500    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    0.0361   -2.2353    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    1.0353   -2.2754    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -6.7123   -0.5395    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -5.4727   -1.7490    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -6.4416   -1.5021    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    1.5696   -1.4301    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    0.1055   -0.5047    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.1046   -0.5448    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -0.5340   -3.1071    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.5338   -3.1900    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n   -7.1400   -2.2179    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n   -0.0568   -4.0331    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    0.9840   -4.0748    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    3.1030   -0.6249    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    4.1440   -0.6625    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    4.6880    0.1766    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    2.6224    0.2992    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    3.1890    1.1732    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    6.1413   -0.7658    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n    5.5973   -1.6048    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n  1 28  1  0  0  0  0\n  1 36  1  0  0  0  0\n  2 21  2  0  0  0  0\n  3 41  2  0  0  0  0\n  4  5  1  0  0  0  0\n  4 17  1  0  0  0  0\n  4 18  1  0  0  0  0\n  5 12  2  0  0  0  0\n  6 17  1  0  0  0  0\n  6 21  1  0  0  0  0\n  7 21  1  0  0  0  0\n  7 22  1  0  0  0  0\n  8 38  1  0  0  0  0\n  8 41  1  0  0  0  0\n  9 37  1  0  0  0  0\n  9 42  2  0  0  0  0\n 10 38  2  0  0  0  0\n 10 40  1  0  0  0  0\n 11 12  1  0  0  0  0\n 11 13  1  0  0  0  0\n 11 14  1  0  0  0  0\n 11 15  1  0  0  0  0\n 12 16  1  0  0  0  0\n 16 17  2  0  0  0  0\n 18 19  2  0  0  0  0\n 18 20  1  0  0  0  0\n 19 25  1  0  0  0  0\n 20 26  2  0  0  0  0\n 22 23  1  0  0  0  0\n 22 29  2  0  0  0  0\n 23 24  1  0  0  0  0\n 23 31  2  0  0  0  0\n 24 28  1  0  0  0  0\n 24 32  2  0  0  0  0\n 25 27  2  0  0  0  0\n 26 27  1  0  0  0  0\n 27 33  1  0  0  0  0\n 28 30  2  0  0  0  0\n 29 30  1  0  0  0  0\n 31 34  1  0  0  0  0\n 32 35  1  0  0  0  0\n 34 35  2  0  0  0  0\n 36 37  2  0  0  0  0\n 36 39  1  0  0  0  0\n 37 38  1  0  0  0  0\n 39 40  2  0  0  0  0\n 41 42  1  0  0  0  0\nM  END\n';
// let mol = Render.readMOL( exampleMolFile );