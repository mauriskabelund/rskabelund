// Rachel's AI Chat - Vercel Serverless Function (OpenAI)

const BASE_SYSTEM_PROMPT = `You are a helpful AI tutor for Rachel Skabelund's medical metabolism course at BYU School of Medicine.
Be friendly, professional, and educational in your responses.
Focus on helping students understand biochemistry concepts related to nutrient absorption, metabolism, and clinical cases.
When answering questions, relate concepts back to the learning objectives and clinical relevance.
Be concise but thorough - medical students need accurate, detailed information.`;

// Build prompt for in-slide chat (slideContext from lesson.html)
function buildSlidePrompt(slideContext) {
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
  prompt += '\nThe student is viewing this slide and asking a question. Use ALL the context above to provide a relevant, educational answer.';
  
  return prompt;
}

// Build prompt for standalone chat page (lessonContext from chat.html)
function buildLessonPrompt(lessonContext) {
  let prompt = BASE_SYSTEM_PROMPT + '\n\n';
  
  prompt += `=== FULL LESSON CONTEXT ===\n`;
  prompt += `Course: ${lessonContext.course}\n`;
  prompt += `Week ${lessonContext.week}: ${lessonContext.topic}\n\n`;
  
  prompt += `Learning Objectives:\n`;
  lessonContext.objectives.forEach((obj, i) => {
    prompt += `${i + 1}. ${obj}\n`;
  });
  
  prompt += `\n--- ALL SLIDES ---\n`;
  lessonContext.slides.forEach(slide => {
    prompt += `\nSlide ${slide.number}: ${slide.title}\n`;
    prompt += slide.content + '\n';
    if (slide.image) prompt += `[Image: ${slide.image}]\n`;
  });
  
  prompt += `\n--- KEY TERMS ---\n`;
  lessonContext.keyTerms.forEach(term => {
    prompt += `• ${term}\n`;
  });
  
  prompt += '\n=== END CONTEXT ===\n';
  prompt += '\nYou have access to the entire lesson content. Help the student understand any aspect of nutrient absorption, the clinical case, or related biochemistry concepts.';
  
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
    const { messages, slideContext, lessonContext } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Build system prompt based on context type
    let systemPrompt = BASE_SYSTEM_PROMPT;
    if (slideContext) {
      systemPrompt = buildSlidePrompt(slideContext);
    } else if (lessonContext) {
      systemPrompt = buildLessonPrompt(lessonContext);
    }

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
