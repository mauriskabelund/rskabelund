// Rachel's AI Chat - Vercel Serverless Function (OpenAI)
// Edit the SYSTEM_PROMPT below to customize the AI's behavior

const BASE_SYSTEM_PROMPT = `You are a helpful AI tutor for Rachel Skabelund's medical metabolism course at BYU School of Medicine.
Be friendly, professional, and educational in your responses.
Focus on helping students understand biochemistry concepts related to nutrient absorption, metabolism, and clinical cases.
When answering questions, relate concepts back to the learning objectives and clinical relevance.
Be concise but thorough - medical students need accurate, detailed information.`;

function buildSystemPrompt(slideContext) {
  if (!slideContext) return BASE_SYSTEM_PROMPT;
  
  let prompt = BASE_SYSTEM_PROMPT + '\n\n';
  
  // Add lesson overview
  if (slideContext.lessonOverview) {
    const lesson = slideContext.lessonOverview;
    prompt += `=== LESSON OVERVIEW ===\n`;
    prompt += `Course: ${lesson.course}\n`;
    prompt += `Week ${lesson.week}: ${lesson.topic}\n\n`;
    prompt += `Learning Objectives:\n`;
    lesson.objectives.forEach((obj, i) => {
      prompt += `${i + 1}. ${obj}\n`;
    });
    prompt += '\n';
  }
  
  // Add current slide context
  prompt += `=== CURRENT SLIDE (${slideContext.slideNumber} of ${slideContext.totalSlides}) ===\n`;
  prompt += slideContext.text + '\n';
  
  // Add detailed image descriptions
  if (slideContext.images && slideContext.images.length > 0) {
    prompt += '\n--- IMAGES ON THIS SLIDE ---\n';
    slideContext.images.forEach(img => {
      prompt += `\n[${img.filename}]\n${img.description}\n`;
    });
  }
  
  prompt += '\n=== END CONTEXT ===\n';
  prompt += '\nThe student is viewing this slide and asking a question. Use ALL the context above (lesson objectives, slide content, and image descriptions) to provide a relevant, educational answer. If they ask about an image, describe what it shows and explain its significance.';
  
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
