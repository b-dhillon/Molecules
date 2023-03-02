//@ts-nocheck

import axios from 'axios';

import request from 'request';
import cheerio from 'cheerio';

// export default async function getMoleculeSummary( moleculeName: string ) {
//     try {
//         console.log('trying: ', moleculeName);
//         // const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${moleculeName}`);
//         const response = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ATP/SDF?record_type=2d`);

//         console.log('trying response ', response);




//         // const pageId = Object.keys(response.data.query.pages)[0];
//         // const summary = response.data.query.pages[pageId].extract;
//         // return summary;
//     } 
//     catch (error) {
//         console.error(error);
//         console.log('Error in getMoleculeSummary');
//     }
// };


export default async function getMoleculeSummary( moleculeName: string ) {

    // const articleTitle = "morphine"; // Replace with the title of the article you want to retrieve
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(moleculeName)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const introduction = data.extract;
            console.log(introduction);
        })
        .catch(error => {
            console.error(error);
        }
    );
};

// Example usage
// getMoleculeSummary('Water').then((summary) => {
//     console.log(summary);
// });