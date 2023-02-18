export default async function Describe( searchedString: string )
{

  const apiKey = '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';
  // const prompt = `Give a three paragraph organic chemistry description of the chemical compound ${searchedString}`;
  const prompt = `Give a description of the chemical compound ${searchedString}`;
  // const apiUrl = 'https://api.openai.com/v1/engines/text-curie-001/completions';
  // const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'prompt': prompt,
      'max_tokens': 1000,
      'temperature': 0.1,
    })
  })
    .then(response => response.json())
    .then(data =>
    {
      console.log(data);
      console.log(data.choices[0].text.trim());
      return data.choices[0].text.trim();
    })
    .catch(error => console.error(error));

  // return response
}