// feedback-widget.js - On-site member feedback & suggestions
(function() {
  const trigger = document.createElement('button');
  trigger.className = 'feedback-trigger-btn';
  trigger.setAttribute('title', 'Send Feedback & Suggestions');
  trigger.setAttribute('aria-label', 'Send Feedback & Suggestions');
  trigger.innerHTML = '💡';
  document.body.appendChild(trigger);

  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    bottom: 92px;
    right: 90px;
    width: 340px;
    max-width: calc(100vw - 40px);
    background: var(--white);
    border: 1px solid var(--border-medium);
    border-radius: var(--radius-md);
    box-shadow: 0 16px 40px rgba(0,0,0,0.2);
    padding: 24px;
    z-index: 999;
    display: none;
  `;
  modal.id = 'feedbackModal';

  modal.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <strong style="color:var(--ink);font-size:1.05rem">Share Feedback</strong>
      <button id="closeFeedbackBtn" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--muted)">×</button>
    </div>
    <p style="font-size:0.82rem;color:var(--muted);line-height:1.5;margin-bottom:14px">
      Have a suggestion for the Executive Committee or a comment about our digital portal?
    </p>
    <form id="feedbackFormSubmit">
      <div style="margin-bottom:12px">
        <label style="font-size:0.75rem;font-weight:700;color:var(--ink);display:block;margin-bottom:4px">Your Name / Email (Optional)</label>
        <input type="text" class="form-input" style="padding:8px 12px;font-size:0.85rem" placeholder="e.g. Fellow member" />
      </div>
      <div style="margin-bottom:14px">
        <label style="font-size:0.75rem;font-weight:700;color:var(--ink);display:block;margin-bottom:4px">Your Suggestion *</label>
        <textarea rows="3" class="form-textarea" required style="padding:8px 12px;font-size:0.85rem" placeholder="How can the District Society serve you better?"></textarea>
      </div>
      <button type="submit" class="btn btn--brass" style="width:100%;padding:10px;font-size:0.85rem">Submit Feedback →</button>
    </form>
    <div id="feedbackThanks" style="display:none;background:rgba(31,111,68,0.1);padding:12px;border-radius:6px;color:var(--green);font-size:0.85rem;margin-top:10px;text-align:center">
      ✓ Thank you! Your feedback has been sent to the Secretariat.
    </div>
  `;
  document.body.appendChild(modal);

  trigger.addEventListener('click', () => {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  });

  document.getElementById('closeFeedbackBtn').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  document.getElementById('feedbackFormSubmit').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('feedbackThanks').style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'none';
      document.getElementById('feedbackThanks').style.display = 'none';
      e.target.reset();
    }, 2000);
  });
})();
