// Client helper to call the Netlify serverless function `genai-proxy`

export async function callGenaiProxy(payload: unknown, path = '/.netlify/functions/genai-proxy') {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    return { data: text };
  }
}

export default { callGenaiProxy };
