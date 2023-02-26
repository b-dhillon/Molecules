async function DescriptionFetcher( searchedString: string ) {
  
  const prompt = `Give a long organic chemistry description of the chemical compound ${searchedString}`;
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'prompt': prompt,
      'max_tokens': 2000,
      'temperature': 0.2,
    })
  }

  const response = await fetch( apiUrl, apiConfig );
  const data = await response.json();

  return data;
}

export default DescriptionFetcher;


















// Commented out code:
/*
// const apiKey = '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';
// const apiKey = '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';
// const apiKey = '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'


// const prompt = `Explain ${searchedString} in your own words`;
// const prompt = `Give a Wikipedia description of the chemical compound ${searchedString}`;


// const prompt = `Give a long medical description of the chemical compound ${searchedString}`;
// const apiUrl = 'https://api.openai.com/v1/engines/text-curie-001/completions';
// const description = data.choices[0].text.trim();



// .then(response => response.json())
// .then(data =>
// {
//   console.log(data);
//   console.log(data.choices[0].text.trim());
//   return data.choices[0].text.trim();
// })
// .catch(error => console.error(error));

// return response

// async function useData( searchedString: string ) {
//   const data = await Describe( searchedString );
//   const description: string = data.choices[0].text.trim();


//   return (
//     <Suspense>
//       <div className='table--wrapper'>
//         <div className='table--background'>
//             <p>{description}</p>
//           </div>
//       </div>
//     </Suspense>
//   );

// }
*/