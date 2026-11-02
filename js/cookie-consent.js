// cookie-consent.js - ICAN UK District Society GDPR Cookie Consent
(function() {
  const CONSENT_KEY = 'ican_uk_cookie_consent';
  if (localStorage.getItem(CONSENT_KEY)) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookieBanner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie Consent');

  banner.innerHTML = `
    <div>
      <strong style="color:var(--brass);font-size:1.05rem">Cookie &amp; Privacy Notice</strong>
      <p style="font-size:0.85rem;line-height:1.5;margin-top:6px;color:rgba(255,255,255,0.85)">
        ICAN UK &amp; District Society uses essential and analytical cookies to ensure security, improve site performance, and remember your portal preferences in accordance with UK GDPR.
      </p>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button id="btnAcceptAll" class="btn btn--brass" style="padding:8px 16px;font-size:0.82rem">Accept All</button>
      <button id="btnRejectAll" class="btn btn--ghost" style="padding:8px 16px;font-size:0.82rem;color:white;border-color:rgba(255,255,255,0.3)">Essential Only</button>
      <a href="accessibility.html" style="font-size:0.8rem;color:var(--brass);text-decoration:none;align-self:center;margin-left:auto">Privacy Policy →</a>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('btnAcceptAll').addEventListener('click', function() {
    localStorage.setItem(CONSENT_KEY, 'all');
    banner.style.display = 'none';
  });

  document.getElementById('btnRejectAll').addEventListener('click', function() {
    localStorage.setItem(CONSENT_KEY, 'essential');
    banner.style.display = 'none';
  });
})();
