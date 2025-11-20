// Netlify function: genai-proxy
// Forwards POST requests to an upstream API using GEMINI_API_KEY from environment.

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Allow': 'POST', 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed. Use POST.' })
    };
  }

  try {
    const payload = event.body ? JSON.parse(event.body) : {};

    const upstream = process.env.UPSTREAM_API_URL || process.env.GENAI_UPSTREAM_URL;
    if (!upstream) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'UPSTREAM_API_URL or GENAI_UPSTREAM_URL is not defined in environment' })
      };
    }

    const headers = {
      'Content-Type': 'application/json'
    };

    if (process.env.GEMINI_API_KEY) {
      headers['Authorization'] = `Bearer ${process.env.GEMINI_API_KEY}`;
    }

    // Forward the request to the upstream API
    const res = await fetch(upstream, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    const contentType = res.headers.get('content-type') || '';
    const text = await res.text();

    const responseBody = contentType.includes('application/json') ? text : JSON.stringify({ data: text });

    return {
      statusCode: res.status,
      headers: { 'Content-Type': contentType || 'application/json' },
      body: responseBody
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err?.message || String(err) })
    };
  }
};
