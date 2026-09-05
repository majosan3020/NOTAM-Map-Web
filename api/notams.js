export default async function handler(req, res) {
  const { location } = req.query;
  try {
    const targetUrl = `http://128.22.140.172/notams?location=${location}`;
    const response = await fetch(targetUrl);
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from VPS' });
  }
}