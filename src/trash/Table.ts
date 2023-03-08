// @ts-nocheck

function DisplayTable( values: any[] ) {
    const iupacName = document.getElementById('iupac-name');
    const molecularFormula = document.getElementById('molecular-formula');
    const molecularWeight = document.getElementById('molecular-weight');
    const cid = document.getElementById('cid');
    const tableTitle = document.querySelector('.table-title');

    tableTitle.innerHTML = values[4];
    iupacName.innerHTML = values[3];
    molecularFormula.innerHTML = values[1];
    molecularWeight.innerHTML = values[2];
    cid.innerHTML = values[0];

    // Add table title responsiveness:
    //   if (tableTitle.innerHTML.length > 10) {
    //     tableTitle.styles.fontSize = 'smaller';
    //   }
}

export default DisplayTable;