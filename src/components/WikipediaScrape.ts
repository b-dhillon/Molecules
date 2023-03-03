async function WikipediaScrape( moleculeName: string ) {

    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(moleculeName)}`;
    const response = await fetch (apiUrl);
    const data = await response.json();
    const firstParagraph = data.extract;
    console.log(firstParagraph);
    return firstParagraph;
    
};

export default WikipediaScrape;