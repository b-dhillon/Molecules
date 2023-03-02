export default function MolecularFormulaFormatter( formula: string, cssClass: any ): string {


    const subscripts = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

    let formattedFormula = "";
    let currentElement = "";
    let currentCount = "";
    
    // iterating over the entire formula string
    for (let i = 0; i < formula.length; i++) {
      const char = formula.charAt(i);
      
      if (/[A-Z]/.test(char)) { // uppercase letter represents a new element
        if ( currentElement !== "" ) {
          formattedFormula += currentElement;
          if ( currentCount !== "" ) {
            for ( let j = 0; j < currentCount.length; j++ ) {
              formattedFormula += subscripts[ parseInt( currentCount.charAt( j ) ) ];
            }
          }
        }
        currentElement = char;
        currentCount = "";
      } 

      else if (/[a-z]/.test(char)) { // lowercase letter is part of current element
        currentElement += char;
      }

      else if (/\d/.test(char)) { // digit represents a count
        currentCount += char;
      }
    };

    // handle last element
    formattedFormula += currentElement;
    if (currentCount !== "") {
      for (let j = 0; j < currentCount.length; j++) {
        formattedFormula += subscripts[parseInt(currentCount.charAt(j))];
      }
    }
    
    return formattedFormula;
  // return `<span class="${cssClass}">${formattedFormula}</span>`;  
};
  









// const formula = "C6H12O6";
// const formattedFormula = MolecularFormulaFormatter(formula);
// console.log(formattedFormula); // "C₆H₁₂O₆"
// This function works by iterating through the characters of the input string and building up the formatted formula string. It uses regular expressions to determine whether each character represents an element symbol, a digit, or a lowercase letter that is part of the current element symbol. As it encounters each element symbol, it adds the previous element and its count (if any) to the formatted formula string and begins building up the next element. Finally, it adds the last element and count to the formatted formula string before returning it.
  
  
  
  
// Another version without regular expressions:
// Define a function that takes a molecular formula string as input
function formatFormula( formula: string  ) {
    // Define an object that maps digits to their subscript versions
    const subscripts: any = {
      "0": "₀",
      "1": "₁",
      "2": "₂",
      "3": "₃",
      "4": "₄",
      "5": "₅",
      "6": "₆",
      "7": "₇",
      "8": "₈",
      "9": "₉"
    };
    // Initialize an empty string to store the output
    let output = "";
    // Loop through each character in the input formula
    for (let char of formula) {
      // If the character is a digit, append its subscript version to the output
      if (char >= '0' && char <= '9') {
        output += subscripts[char];
      }
      // Otherwise, append the character itself to the output
      else {
        output += char;
      }
    }
    // Return the output string
    return output;
}
  
// Test the function with some examples
//   console.log(formatFormula("C6H12O6")); // C₆H₁₂O₆
//   console.log(formatFormula("H2O")); // H₂O
//   console.log(formatFormula("CH4")); // CH₄
  