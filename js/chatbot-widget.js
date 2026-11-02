// chatbot-widget.js - ICAN UK Public AI Assistant (Deliverable #23)
(function() {
  const trigger = document.createElement('button');
  trigger.className = 'widget-trigger-btn';
  trigger.setAttribute('title', 'ICAN UK Virtual Assistant');
  trigger.setAttribute('aria-label', 'Open AI Assistant');
  trigger.innerHTML = '🤖';
  document.body.appendChild(trigger);

  const drawer = document.createElement('div');
  drawer.className = 'chatbot-drawer';
  drawer.id = 'chatbotDrawer';

  drawer.innerHTML = `
    <div class="chatbot-header">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:1.4rem">🏛️</span>
        <div>
          <div style="font-weight:700;font-size:0.95rem">ICAN UK Assistant</div>
          <div style="font-size:0.72rem;color:var(--brass);letter-spacing:0.05em">PUBLIC AI INSTANCE • UNRESTRICTED</div>
        </div>
      </div>
      <button id="closeChatbotBtn" style="background:none;border:none;color:white;font-size:1.4rem;cursor:pointer">×</button>
    </div>

    <div class="chatbot-messages" id="chatbotMessages">
      <div class="chat-bubble bot">
        Welcome! I am the <strong>ICAN UK &amp; District Society Virtual Assistant</strong>. You can ask me about our <strong>Bye-Laws</strong>, <strong>Upcoming Events</strong>, <strong>Membership Categories</strong>, <strong>Benevolent Fund</strong>, or <strong>Portal Access</strong>.
      </div>
    </div>

    <div style="padding:8px 12px;background:var(--paper-warm);border-top:1px solid var(--border-light);display:flex;gap:6px;overflow-x:auto">
      <button class="quick-chip-btn" data-query="How do I recover my password?" style="font-size:0.72rem;padding:4px 8px;border-radius:12px;background:white;border:1px solid var(--border-medium);cursor:pointer;white-space:nowrap">Password Reset</button>
      <button class="quick-chip-btn" data-query="Tell me about the Benevolent Fund" style="font-size:0.72rem;padding:4px 8px;border-radius:12px;background:white;border:1px solid var(--border-medium);cursor:pointer;white-space:nowrap">Benevolent Fund</button>
      <button class="quick-chip-btn" data-query="Where can I find the District Bye-Laws?" style="font-size:0.72rem;padding:4px 8px;border-radius:12px;background:white;border:1px solid var(--border-medium);cursor:pointer;white-space:nowrap">District Bye-Laws</button>
      <button class="quick-chip-btn" data-query="Who is the District Chairman?" style="font-size:0.72rem;padding:4px 8px;border-radius:12px;background:white;border:1px solid var(--border-medium);cursor:pointer;white-space:nowrap">Chairman</button>
    </div>

    <form class="chatbot-input-wrap" id="chatInputForm">
      <input type="text" id="chatInput" placeholder="Ask a question about ICAN UK..." class="form-input" style="padding:10px 12px;font-size:0.85rem;border-radius:20px" required />
      <button type="submit" class="btn btn--brass" style="padding:8px 16px;border-radius:20px;font-size:0.85rem">Send</button>
    </form>
  `;
  document.body.appendChild(drawer);

  const messages = document.getElementById('chatbotMessages');
  const chatForm = document.getElementById('chatInputForm');
  const chatInput = document.getElementById('chatInput');

  trigger.addEventListener('click', () => {
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
  });

  document.getElementById('closeChatbotBtn').addEventListener('click', () => {
    drawer.style.display = 'none';
  });

  function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `chat-bubble ${isUser ? 'user' : 'bot'}`;
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotResponse(q) {
    const lower = q.toLowerCase();

    if (lower.includes('password') || lower.includes('reset') || lower.includes('login')) {
      return `To recover your portal password: Navigate to <strong>LOGIN to My ICAN-UK</strong>, click <strong>Forgot Password</strong>, enter your Year of Induction and answer your security question. The password will be emailed to your registered address. For support, contact <a href="mailto:generalsecretary@ican-uk.org">generalsecretary@ican-uk.org</a>.`;
    }
    if (lower.includes('register') || lower.includes('join') || lower.includes('admission')) {
      return `Registration on the ICAN UK platform is open to ICAN members and students ordinarily resident in the UK. Applications are verified and approved by the District Secretariat. Learn more on our <a href="about.html#who-we-are">Membership Categories page</a>.`;
    }
    if (lower.includes('bye-law') || lower.includes('byelaw') || lower.includes('constitution') || lower.includes('charter')) {
      return `The UK District is governed by the official ICAN Bye-Laws for District Societies. You can view the version history and download the certified PDF directly on our <a href="governance.html#byelaw-repository">Governance &amp; Bye-Laws page</a>.`;
    }
    if (lower.includes('benevolent') || lower.includes('welfare') || lower.includes('hardship') || lower.includes('assistance')) {
      return `The <strong>ICAN UK Benevolent Fund</strong> was founded in 2014 by District pioneers to provide emergency relief, medical grants, and compassionate assistance to members and their families in distress. Complete the confidential request form on the <a href="benevolent-fund.html">Benevolent Fund page</a>.`;
    }
    if (lower.includes('chair') || lower.includes('leader') || lower.includes('president') || lower.includes('exco')) {
      return `The current District Chairman is <strong>Akintayo Ojo, FCA</strong>, leading an executive committee of 13 officers including Vice Chairman Tayo Animashaun, FCA and General Secretary Olajumoke Sangojinmi, FCA. View their profiles on the <a href="executive.html">Executive Team page</a>.`;
    }
    if (lower.includes('conference') || lower.includes('event') || lower.includes('meeting')) {
      return `The flagship <strong>ICAN UK International Conference 2026</strong> will take place in London on 18–19 November 2026, offering 12 CPD hours. Our monthly technical meetings take place every last Friday. View the full calendar on our <a href="events.html">Events page</a>.`;
    }
    if (lower.includes('contact') || lower.includes('address') || lower.includes('phone') || lower.includes('email')) {
      return `Secretariat Address: Coker Isah &amp; Coker, 74 Church Road, Crystal Palace, London, SE19 2EZ.<br>Phone: +44 7535 230 605, +44 7894 069 959.<br>Email: <a href="mailto:generalsecretary@ican-uk.org">generalsecretary@ican-uk.org</a> or visit our <a href="contact.html">Contact Us page</a>.`;
    }

    return `I can help you with questions about ICAN UK &amp; District Society. Feel free to ask about our <a href="governance.html">Bye-Laws</a>, <a href="executive.html">Executive Leadership</a>, <a href="events.html">Events &amp; CPD</a>, <a href="benevolent-fund.html">Benevolent Fund</a>, or <a href="contact.html">Contact Details</a>.`;
  }

  function handleQuery(query) {
    addMessage(query, true);
    setTimeout(() => {
      const resp = getBotResponse(query);
      addMessage(resp, false);
    }, 400);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (!q) return;
    chatInput.value = '';
    handleQuery(q);
  });

  document.querySelectorAll('.quick-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleQuery(btn.dataset.query);
    });
  });
})();
