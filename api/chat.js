// Rachel's AI Chat - Vercel Serverless Function (OpenAI)
// Edit the SYSTEM_PROMPT below to customize the AI's behavior

const BASE_SYSTEM_PROMPT = `You are a helpful AI tutor for Rachel Skabelund's medical metabolism course (MED 604) at BYU School of Medicine.
Be friendly, professional, and concise in your responses.
Focus on helping students understand biochemistry concepts related to nutrient absorption, metabolism, and clinical cases.
When answering questions, relate concepts back to the learning objectives and clinical relevance.`;

function buildSystemPrompt(slideContext) {
  if (!slideContext) return BASE_SYSTEM_PROMPT;
  
  let prompt = BASE_SYSTEM_PROMPT + '\n\n';
  prompt += `--- CURRENT SLIDE CONTEXT (Slide ${slideContext.slideNumber}) ---\n`;
  prompt += slideContext.text + '\n';
  
  if (slideContext.images && slideContext.images.length > 0) {
    prompt += '\nImages on this slide:\n';
    slideContext.images.forEach(img => {
      prompt += `- ${img.alt || 'Image'}: ${img.url}\n`;
    });
  }
  
  prompt += '\n--- END SLIDE CONTEXT ---\n';
  prompt += '\nThe student is asking about the content shown on this slide. Use the slide context to provide relevant, focused answers.';
  
  return prompt;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPEN_AI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured', hint: 'Set OPEN_AI_API_KEY in Vercel Environment Variables' });
  }

  try {
    const { messages, slideContext } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Build system prompt with optional slide context
    const systemPrompt = buildSystemPrompt(slideContext);

    // Add system message at the start
    const fullMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: fullMessages,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return res.status(response.status).json({ error: 'API request failed', detail: error });
    }

    const data = await response.json();
    
    return res.status(200).json({
      content: data.choices[0].message.content
    });

  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
