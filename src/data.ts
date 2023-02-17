const data: Data = {
    compounds: [
        {
            title: 'Fructose',
            iupac_name: {},
            cid: {},
            molecular_formula: {},
            molecular_weight: {},
            molecular_complexity: {},
            covalent_bonds: {},
            rotatable_bonds: {},
            geometric_centers: {},
            chirality_centers: {},
            stereo_centers: {},
            chiral_isomers: {},
            conformers: {},
            charge: {},
            hydrogen_bond_acceptors: {},
            hydrogen_bond_donors: {},
            hardcoded_description: 'Fructose is a monosaccharide sugar found naturally in fruits, honey, and some vegetables. It is the sweetest of all naturally occurring sugars and is about 1.5 times sweeter than sucrose (table sugar). Fructose is a reducing sugar, meaning it can act as a reducing agent in certain chemical reactions. It is also a key component of the disaccharide sucrose, which is composed of one fructose molecule and one glucose molecule. Fructose is metabolized differently than other sugars, and is primarily used by the body for energy production.',
        },
    ]
}

export default data

interface Data {
    compounds: Compound[]
}

interface Compound {
    title: string
    iupac_name: {}
    cid: {}
    molecular_formula: {}
    molecular_weight: {}
    molecular_complexity: {}
    covalent_bonds: {}
    rotatable_bonds: {}
    geometric_centers: {}
    chirality_centers: {}
    stereo_centers: {}
    chiral_isomers: {}
    conformers: {}
    charge: {}
    hydrogen_bond_acceptors: {}
    hydrogen_bond_donors: {}
    hardcoded_description: string
}