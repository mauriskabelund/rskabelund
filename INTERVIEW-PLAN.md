# Rachel's BYU Interview — 15-Minute Teaching Demo

**Interview Date:** [TBD]  
**Topic:** Biochemical Mechanisms of Nutrient Digestion, Absorption, and Malabsorption  
**Format:** 15-minute interactive TBL mini-lesson  
**Source Material:** Janet Lindsley's celiac malabsorption TBL case  

---

## The Decision: Patient Avatar (Biochem-Focused)

### Why Patient, Not Tutor

We considered three options:

| Option | Pros | Cons |
|--------|------|------|
| **Patient (clinical)** | Engaging, memorable | "Stay in lane" concerns — looks like medical simulation |
| **Patient (biochem-focused)** ✅ | Active learning, matches NDFS pedagogy, memorable | Requires clear framing to avoid clinical perception |
| **Tutor** | Zero lane risk, aligns with BYU GenAI messaging | Passive Q&A, less pedagogically interesting, generic |

**We chose: Patient with explicit biochemistry framing.**

### Reasoning

1. **Pedagogically superior:** Students *investigate* rather than passively receive answers. Asking "why does this patient have steatorrhea?" and tracing it to fat malabsorption mechanisms is discovery-based learning. A tutor is just a fancy FAQ.

2. **Matches NDFS practice:** Janet Lindsley uses case patients. NDFS 466, 300, and 621 all use case patients for clinical worksheets and the Nutrition Care Process. This is *how they already teach*. Rachel isn't crossing into medicine — she's doing exactly what the department does.

3. **More memorable:** "She built an AI patient that teaches biochemistry" sticks in the committee's mind. "She built a chatbot" doesn't.

4. **The lane concern is addressable:** We added explicit framing:
   - Banner: "AI Case Patient – Biochemistry Application"
   - Badge: "Mechanisms Only"
   - Intro script that explicitly says "we're not practicing diagnosis or bedside manner"
   - Credits Janet Lindsley (credibility with anyone who knows her)

5. **Janet's structure protects us:** Following her exact TBL format means we're doing what a respected biochem educator designed. If it's good enough for Janet, it's good enough for NDFS.

### The Risk We're Accepting

Some committee members unfamiliar with NDFS pedagogy might see "patient" and briefly wonder if it's clinical. The framing and Rachel's intro script address this within the first 60 seconds. If someone still objects, that's a mismatch in expectations that probably indicates this isn't the right fit anyway.

---

## The Website

**Live URL:** https://rachelskabelund.vercel.app

### Pages Rachel Will Use

| Page | Purpose in Demo |
|------|-----------------|
| **tutor.html** (rename to patient framing) | Main AI case patient interaction (5 min) |
| **syllabus.html** | "Ask AI" button for evidence step (3 min) |
| **ai-guide.html** | Reference if committee asks about AI literacy (not in demo) |
| **chat.html** | Backup if avatar fails |

### Current State

The site is currently set up as "AI Nutrient Metabolism Tutor" from the last pivot. **We need to revert to patient framing** or decide to keep tutor.

**Action needed:** Decide final framing and update site copy accordingly.

---

## The 15-Minute Timed Plan

Based on Janet Lindsley's TBL structure.

### 0:00 – 1:00 | Introduction & Learning Objectives (1 min)

**Say this (verbatim):**

> "Hi everyone. Professor Janet Lindsley from the University of Utah generously shared her celiac teaching case and TBL structure with me — I'm grateful for her mentorship.
>
> Today we're focusing on the *biochemistry* of nutrient digestion and absorption. We're not practicing diagnosis or bedside manner — we're using an AI case patient to explore exactly how villous atrophy impairs specific enzymes, transporters, and surface area at the cellular level.
>
> By the end, you'll be able to:
> 1. Explain the enzymatic and transport mechanisms for carbohydrate, protein, and fat absorption in the small intestine.
> 2. Describe how villous atrophy in celiac disease disrupts these specific mechanisms."

**Why this works:** Credits Janet (credibility), explicitly states what this is NOT (defuses lane concern), frames everything as mechanism-focused.

---

### 1:00 – 3:00 | Clinical Vignette + MCQ (2 min)

- Show Janet's celiac case slide (child with fatigue, short stature, iron/folate deficiency, minimal GI symptoms)
- Display the multiple-choice question: "Which biochemical process/mechanism is most impaired?"
- Keep slide visible for reference throughout

**Materials needed:** Janet's slides (PDF or PowerPoint)

---

### 3:00 – 6:00 | Identify Knowledge Gaps (3 min)

**Ask the group:**

> "What specific concepts about digestion and absorption do you need to recall or learn to answer this question well?"

**Facilitate brainstorm, list on board/slide:**
- Brush-border enzymes (lactase, sucrase, maltase)
- Na⁺-glucose cotransporter (SGLT1)
- Peptide transporter (PEPT1)
- Surface area / microvilli structure
- Micelle formation for fat absorption
- Disaccharidase activity

**Why this step matters:** Shows Rachel can facilitate discussion, not just lecture. Committee sees her draw out student thinking.

---

### 6:00 – 11:00 | AI Case Patient Interaction ⭐ (5 min)

**THE WOW MOMENT**

**Transition (say this):**

> "To explore these mechanisms in context, I built an AI case patient. Think of it as a biochemistry learning partner — every question drives us back to the cellular and molecular 'why' behind the symptoms. Let's try it."

**Have committee members type 1–2 questions into the live chat.**

#### Pre-loaded Safe Questions (have these printed as backup)

1. "At the molecular and cellular level, how does flattening of the villi reduce peptide absorption?"
2. "What biochemical events cause osmotic diarrhea when lactase is deficient?"
3. "Explain how celiac disease affects the sodium-glucose cotransporter (SGLT1) and why that leads to specific nutrient deficiencies."
4. "Compare the absorption mechanisms for glucose/galactose versus fructose — what's different at the transporter level?"
5. "How does villous atrophy lead to steatorrhea? Walk me through the fat absorption pathway."

**After each AI response, pause and ask:**

> "Which mechanism does this highlight? How does it connect back to our case and MCQ options?"

**Facilitation tips:**
- Don't let the AI dominate — pause frequently
- Use responses as springboards for class discussion
- If AI gives a weak answer, pivot: "Interesting — what would you add to that?"

---

### 11:00 – 14:00 | AI Evidence / Research Step (3 min)

**Switch to the syllabus page "Ask AI" button.**

**Example query for the group:**

> "Compare the absorption mechanisms of glucose, galactose, and fructose — include the specific enzymes and transporters involved."

- Have 1–2 people share one key takeaway
- Connect back to the MCQ

**Why two AI tools:** Shows the website isn't a one-trick pony. The syllabus integration demonstrates how AI can be embedded in course materials, not just a standalone gimmick.

---

### 14:00 – 15:00 | Re-vote, Reasoning, and Close (1 min)

- Quick show of hands: "Based on what we explored, which MCQ option do you favor now?"
- Ask 1–2 people: "Walk us through your reasoning using the mechanisms we discussed."

**30-second close (say this):**

> "This is one example of how an AI case patient can help students actively apply metabolism pathways — it's safe, repeatable, and keeps every second grounded in biochemistry. Thank you for your time."

---

## Preparation Checklist

### Website Updates
- [ ] Decide final framing (patient vs tutor) and update site copy
- [ ] Verify D-ID avatar is working
- [ ] Test on phone hotspot (simulate conference room WiFi)
- [ ] Test "Ask AI" button on syllabus page

### Materials to Prepare
- [ ] Janet's slides (celiac vignette + MCQ) — PDF and PowerPoint
- [ ] Printed backup: screenshots of every screen
- [ ] Printed backup: pre-loaded questions
- [ ] Printed backup: the timed script

### Practice
- [ ] Run full 15 minutes at least twice
- [ ] Time each section — adjust if running long
- [ ] Practice transitions between sections
- [ ] Practice recovering from AI failure (pivot to backup)

### Day-Of Setup
- [ ] Arrive early, test WiFi
- [ ] Have phone hotspot ready as backup
- [ ] Load all pages in browser tabs before starting
- [ ] Have printed materials on podium

---

## Failure Modes & Recovery

| Failure | Recovery |
|---------|----------|
| Avatar won't load | Use chat.html instead — "Let me show you the text-based version" |
| WiFi dies | Switch to phone hotspot |
| Hotspot dies too | Use printed screenshots — "Here's what students would see" |
| AI gives bad answer | "Interesting — what would you add?" (make it a teaching moment) |
| Running over time | Cut the evidence step (11:00-14:00), go straight to close |
| Running under time | Extend knowledge gaps discussion or add another AI question |

---

## Why This Demo Wins

1. **Shows content mastery:** Rachel clearly understands nutrient metabolism at the biochemical level
2. **Shows pedagogical skill:** She facilitates discussion, doesn't just lecture
3. **Shows AI innovation:** She built a real tool, not a slide deck about AI
4. **Shows alignment with BYU:** Follows TBL best practices, matches GenAI initiatives, uses NDFS case-patient pedagogy
5. **Shows preparation:** Clear structure, smooth transitions, backup plans

The committee will walk away thinking: *"She didn't just talk about AI in education — she built it, and she knows how to use it to teach our content better."*

---

## Key Pedagogical Insight: Differentiated Learning with AI

*From brainstorm with Maddie & Greg (Feb 20, 2026)*

### The Core Idea

**Different people learn differently — AI can meet each student where they are.**

Traditional teaching gives everyone the same lecture, same textbook, same format. AI enables true differentiation: students can use AI to generate learning materials in whatever format clicks for them.

### Example: Pancreatic Enzyme Digestion

One concept, many formats:

| Learning Style | AI-Generated Format |
|----------------|---------------------|
| Visual/spatial | Diagram or map showing enzymes released from pancreas → where they go → what they break down |
| Video learner | AI-generated video walking through the enzyme release process |
| Auditory | Podcast-style explanation or even a *country song about metabolism* |
| Verbal/memorization | Mnemonic or acronym for remembering the enzymes |
| Humor/engagement | Meme that captures the key concept |
| Reading/writing | Article or written summary |

### Assignment Idea

> "Use AI to create a learning resource about [cellular process] in whatever format helps YOU learn best. Come back and share with the group."

**Why this works:**
1. Students engage with the content actively (creating, not just consuming)
2. They reflect on their own learning style
3. Class sees multiple representations of the same concept
4. Demonstrates AI as a *creation tool*, not just an answer machine

### How Rachel Could Work This In

If committee asks "how would you use AI beyond this demo?" or "what's your vision for AI in courses?":

> "One thing I'm excited about is differentiated learning. Not everyone learns the same way. Some students need to see a diagram, some need to hear it explained, some remember better with a mnemonic. AI lets students generate the format that works for *them*. Imagine an assignment where students use AI to create their own learning resource about a cellular process — one might make a flowchart, another might generate a song, another might create a meme. Then they share with the class. Everyone sees multiple representations, and students are actively creating, not passively receiving."

This positions Rachel as thinking beyond "AI answers questions" to "AI enables personalized, active learning."

---

## Post-Interview

- [ ] Send thank-you email to committee
- [ ] Send thank-you to Janet Lindsley
- [ ] Note any feedback for future iterations

---

## Contact

**Site issues:** Mauri (via this chat)  
**Content questions:** Rachel  
**Janet's materials:** [link to slides if available]

---

*Last updated: Feb 20, 2026*
