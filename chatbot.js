// chatbot.js

// chatbot.js
// Improved SafeBot: keyword-aware FAQ replies for adulteration & food-safety questions.

document.addEventListener("DOMContentLoaded", () => {
  const chatHTML = `
    <button id="chatbot-button" aria-label="Open chat">💬</button>
    <div id="chat-window" role="dialog" aria-label="SafePlate chat window">
      <div id="chat-header">
        SafeBot — Food Safety Assistant
        <button id="close-chat" aria-label="Close chat">&times;</button>
      </div>
      <div id="chat-body" aria-live="polite">
        <div class="message bot">👋 Hi! I’m SafeBot — your food safety assistant. Ask me about adulteration, precautions, or common contaminated foods. Try: "How to avoid adulteration?"</div>
      </div>
      <div id="chat-input-area">
        <input type="text" id="chat-input" placeholder="Type your question..." aria-label="Chat input" />
        <button id="send-button" aria-label="Send message">Send</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", chatHTML);

  const style = document.createElement("style");
  style.innerHTML = `
    /* Scoped styles for chatbot */
    #chatbot-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #2c7a7b;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 30px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      z-index: 9999;
    }
    #chat-window {
      display: none;
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 360px;
      max-width: calc(100% - 40px);
      height: 480px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      overflow: hidden;
      flex-direction: column;
      justify-content: space-between;
      z-index: 9999;
      font-family: "Poppins", sans-serif;
      display: flex;
    }
    #chat-header {
      background-color: #2c7a7b;
      color: white;
      padding: 10px;
      text-align: center;
      font-weight: 600;
      position: relative;
    }
    #close-chat {
      position: absolute;
      top: 6px;
      right: 10px;
      background: transparent;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
    #chat-body {
      padding: 12px;
      flex-grow: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #fcfdfd;
    }
    .message {
      margin: 0;
      padding: 10px 12px;
      border-radius: 12px;
      max-width: 85%;
      line-height: 1.3;
      box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
      word-wrap: break-word;
    }
    .bot { background: #e6fffa; align-self: flex-start; color: #0a3b3b; }
    .user { background: #2c7a7b; color: white; align-self: flex-end; }
    #chat-input-area {
      display: flex;
      gap: 6px;
      padding: 10px;
      border-top: 1px solid #eee;
    }
    #chat-input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      outline: none;
    }
    #send-button {
      background-color: #2c7a7b;
      color: white;
      border: none;
      padding: 10px 14px;
      border-radius: 8px;
      cursor: pointer;
    }
    /* small screens */
    @media (max-width:420px) {
      #chat-window { right: 10px; left: 10px; width: auto; height: 60vh; bottom: 80px; }
    }
  `;
  document.head.appendChild(style);

  const chatButton = document.getElementById("chatbot-button");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");

  // Save session messages locally (keeps conversation visible while page open)
  const sessionMessages = [
    { from: "bot", text: "👋 Hi! I’m SafeBot — your food safety assistant. Ask me about adulteration, precautions, or common contaminated foods. Try: \"How to avoid adulteration?\"" }
  ];

  function renderMessage(from, text) {
    const msg = document.createElement("div");
    msg.classList.add("message", from === "bot" ? "bot" : "user");
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Patterns and helpful answers covering adulteration & common food-safety Qs
  const faqs = [
    {
      keywords: ["adulteration", "adulterated", "adulterant"],
      answer: "Adulteration is mixing harmful or cheaper substances into food. Precautions: buy from trusted vendors, check labels, prefer sealed/packaged items, do small home tests (like turmeric water test) and report suspicious sellers to local food safety authorities."
    },
    {
      keywords: ["precaution", "precautions", "avoid adulteration", "how to avoid adulteration"],
      answer: "To avoid adulteration: (1) buy branded/packaged products, (2) inspect texture & smell, (3) prefer locally-regulated stores, (4) store food properly, (5) test suspicious items (see 'home tests'), (6) keep receipts and report if needed."
    },
    {
      keywords: ["common adulterated", "common adulterated items", "which items are adulterated", "common items"],
      answer: "Commonly adulterated items: milk (water/preservatives), ghee and oils (mixing cheaper oils), turmeric (coloring agents), spices (powdered spices diluted), sugar (chalk/powder), honey (syrup), and pulses (stones/impurities)."
    },
    {
      keywords: ["milk test", "how to test milk", "is milk adulterated"],
      answer: "Quick milk checks: (1) Boil a small amount — froth & color changes can hint at adulteration. (2) Add a drop of iodine — if it turns blue, starch might be present. (3) Mix milk with water — excess dilution is visible by thinner texture. For certainty, get lab testing."
    },
    {
      keywords: ["turmeric test", "turmeric adulteration", "test turmeric"],
      answer: "Turmeric home test: mix a pinch with water — if it leaves colored residue that doesn't wash away, it may have added dyes. Another trick: mix with diluted hydrogen peroxide — some artificial pigments react. Lab tests are best for confirmation."
    },
    {
      keywords: ["spices test", "spice adulteration", "how to check spices"],
      answer: "Spice checks: whole spices (like pepper, cumin) should smell strong; powdered spices that clump or have strange colors could be adulterated. Float test: some adulterants change buoyancy — but it's not always reliable. Buy branded/packaged spices if unsure."
    },
    {
      keywords: ["oil test", "ghee test", "is oil adulterated"],
      answer: "Edible oil/ghee checks: pure ghee smells like butter and solidifies at cool temps. Oils that feel sticky or smell off may be mixed. For oils, lab tests detect mixing; prefer reputed brands with batch info."
    },
    {
      keywords: ["contamination", "cross-contamination", "contaminate"],
      answer: "Avoid cross-contamination: keep raw & cooked foods separate, use different cutting boards or wash boards/knives between uses, store raw items below cooked items in the fridge, and wash hands frequently."
    },
    {
      keywords: ["storage", "storage tips", "how to store"],
      answer: "Storage tips: keep perishable foods refrigerated (<5°C), store dry goods in airtight containers away from sunlight and moisture, use FIFO (first in, first out) for pantry items, and don't keep cooked food at room temp for long."
    },
    {
      keywords: ["how to test", "home test", "tests"],
      answer: "Home tests can hint at problems (iodine for starch, water-dilution checks, sensory checks), but they aren't definitive. For legal action or confirmation, use authorized labs or local food inspector services."
    },
    {
      keywords: ["hello", "hi", "hey"],
      answer: "Hey! 👋 Ask me things like 'Which items are commonly adulterated?' or 'How to test turmeric at home?'."
    },
    {
      keywords: ["thanks", "thank you", "thank"],
      answer: "You’re welcome! If you have another question, ask away 🙂"
    }
  ];

  // find best FAQ match: check if any keyword appears in user input
  function findFaqMatch(text) {
    const t = text.toLowerCase();
    // score matches to pick best: count matched keywords
    let best = null;
    let bestScore = 0;
    faqs.forEach(faq => {
      let score = 0;
      faq.keywords.forEach(kw => {
        if (t.includes(kw)) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        best = faq;
      }
    });
    // require at least 1 keyword match
    return bestScore > 0 ? best : null;
  }

  // fallback helper: show suggested questions
  function fallbackSuggestions() {
    return "I didn't quite get that — try one of these:\n• What precautions to take to avoid adulteration?\n• Which items are commonly adulterated?\n• How to test milk/turmeric at home?\n• How to store food safely?";
  }

  function getBotResponse(userText) {
    if (!userText) return "Please type a question.";
    const cleaned = userText.trim();
    const faq = findFaqMatch(cleaned);
    if (faq) return faq.answer;
    // short heuristics for multi-part questions
    if (cleaned.toLowerCase().includes("how") && cleaned.toLowerCase().includes("avoid")) {
      return "To avoid adulteration: prefer branded items, inspect visually & by smell, store properly, do simple home tests when suspicious, and report sellers to authorities.";
    }
    // fallback
    return fallbackSuggestions();
  }

  function sendMessage() {
    const userText = chatInput.value.trim();
    if (userText === "") return;

    // render user message
    renderMessage("user", userText);
    sessionMessages.push({ from: "user", text: userText });

    chatInput.value = "";
    // small delay to simulate thinking
    setTimeout(() => {
      const answer = getBotResponse(userText);
      renderMessage("bot", answer);
      sessionMessages.push({ from: "bot", text: answer });
    }, 500);
  }

  // events
  chatButton.addEventListener("click", () => {
    chatWindow.style.display = "flex";
    chatButton.style.display = "none";
    chatInput.focus();
  });

  closeChat.addEventListener("click", () => {
    chatWindow.style.display = "none";
    chatButton.style.display = "block";
  });

  sendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // Expose session messages for debugging in dev console (optional)
  window.SafeBotSession = sessionMessages;
});
