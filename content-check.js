const suspiciousPatterns = [
  // --- Malware & Exploits ---
  { keyword: "malware", type: "Malware" },
  { keyword: "virus", type: "Malware" },
  { keyword: "worm", type: "Malware" },
  { keyword: "trojan", type: "Malware" },
  { keyword: "spyware", type: "Malware" },
  { keyword: "adware", type: "Malware" },
  { keyword: "ransomware", type: "Malware" },
  { keyword: "keylogger", type: "Malware" },
  { keyword: "rootkit", type: "Malware" },
  { keyword: "backdoor", type: "Malware" },
  { keyword: "fileless", type: "Malware" },
  { keyword: "exploit", type: "Malware" },
  { keyword: "loader", type: "Malware" },
  { keyword: "dropper", type: "Malware" },
  { keyword: "infostealer", type: "Malware" },
  { keyword: "stealer", type: "Malware" },
  { keyword: "inject", type: "Malware" },
  { keyword: "banker", type: "Malware" },

  // --- Phishing & Social Engineering ---
  { keyword: "phish", type: "Phishing" },
  { keyword: "spoof", type: "Phishing" },
  { keyword: "impersonate", type: "Phishing" },

  // --- Command & Control, Botnets, DDoS ---
  { keyword: "c2", type: "Command and Control" },
  { keyword: "commandandcontrol", type: "Command and Control" },
  { keyword: "botnet", type: "Botnet" },
  { keyword: "ddos", type: "DDoS" },
  { keyword: "stress", type: "DDoS" },
  { keyword: "booter", type: "DDoS" },
  { keyword: "flood", type: "DDoS" },

  // --- Cryptomining, Cryptojacking ---
  { keyword: "cryptominer", type: "Cryptomining" },
  { keyword: "webminer", type: "Cryptomining" },
  { keyword: "cryptojack", type: "Cryptomining" },
  { keyword: "mining", type: "Cryptomining" },

  // --- Hacking, Reconnaissance, Exploits ---
  { keyword: "hack", type: "Recon" },
  { keyword: "hacker", type: "Recon" },
  { keyword: "hacktool", type: "Recon" },
  { keyword: "crack", type: "Recon" },
  { keyword: "keygen", type: "Recon" },
  { keyword: "shell", type: "Recon" },
  { keyword: "sqlinject", type: "Recon" },
  { keyword: "xss", type: "Recon" },
  { keyword: "bruteforce", type: "Recon" },
  { keyword: "carding", type: "Recon" },
  { keyword: "exploit", type: "Recon" },
  { keyword: "pentest", type: "Recon" },

  // --- Remote Access & RATs ---
  { keyword: "rat", type: "Remote Access" },
  { keyword: "remoteshell", type: "Remote Access" },
  { keyword: "teamviewer", type: "Remote Access" },
  { keyword: "anydesk", type: "Remote Access" },
  { keyword: "vnc", type: "Remote Access" },
  { keyword: "rdp", type: "Remote Access" },
  { keyword: "remotedesktop", type: "Remote Access" },
  { keyword: "logmein", type: "Remote Access" },
  { keyword: "gotomypc", type: "Remote Access" },
  { keyword: "ultraviewer", type: "Remote Access" },

  // --- File Sharing, Piracy, Warez ---
  { keyword: "torrent", type: "File Sharing" },
  { keyword: "pirate", type: "File Sharing" },
  { keyword: "warez", type: "File Sharing" },
  { keyword: "megaupload", type: "File Sharing" },
  { keyword: "rapidshare", type: "File Sharing" },
  { keyword: "4shared", type: "File Sharing" },
  { keyword: "zippyshare", type: "File Sharing" },
  { keyword: "kickass", type: "File Sharing" },
  { keyword: "thepiratebay", type: "File Sharing" },
  { keyword: "1337x", type: "File Sharing" },
  { keyword: "limetorrents", type: "File Sharing" },

  // --- Social Media, Entertainment, Distractions ---
  { keyword: "youtube", type: "Entertainment" },
  { keyword: "facebook", type: "Entertainment" },
  { keyword: "instagram", type: "Entertainment" },
  { keyword: "tiktok", type: "Entertainment" },
  { keyword: "twitter", type: "Entertainment" },
  { keyword: "snapchat", type: "Entertainment" },
  { keyword: "netflix", type: "Entertainment" },
  { keyword: "reddit", type: "Entertainment" },
  { keyword: "discord", type: "Entertainment" },
  { keyword: "pinterest", type: "Entertainment" },
  { keyword: "twitch", type: "Entertainment" },
  { keyword: "primevideo", type: "Entertainment" },
  { keyword: "hotstar", type: "Entertainment" },
  { keyword: "dailymotion", type: "Entertainment" },

  // --- Gambling ---
  { keyword: "casino", type: "Gambling" },
  { keyword: "bet", type: "Gambling" },
  { keyword: "poker", type: "Gambling" },
  { keyword: "lotto", type: "Gambling" },
  { keyword: "bingo", type: "Gambling" },
  { keyword: "jackpot", type: "Gambling" },
  { keyword: "gamble", type: "Gambling" },
  { keyword: "bookie", type: "Gambling" },
  { keyword: "sportsbook", type: "Gambling" },

  // --- Drugs, Illegal Substances ---
  { keyword: "drug", type: "Illegal" },
  { keyword: "weed", type: "Illegal" },
  { keyword: "cocaine", type: "Illegal" },
  { keyword: "heroin", type: "Illegal" },
  { keyword: "meth", type: "Illegal" },
  { keyword: "lsd", type: "Illegal" },
  { keyword: "ecstasy", type: "Illegal" },
  { keyword: "marijuana", type: "Illegal" },
  { keyword: "mdma", type: "Illegal" },
  { keyword: "shrooms", type: "Illegal" },

  // --- NSFW, Adult Content, Pornography ---
  { keyword: "porn", type: "NSFW" },
  { keyword: "xxx", type: "NSFW" },
  { keyword: "sex", type: "NSFW" },
  { keyword: "nude", type: "NSFW" },
  { keyword: "pornhub", type: "NSFW" },
  { keyword: "xvideos", type: "NSFW" },
  { keyword: "xhamster", type: "NSFW" },
  { keyword: "redtube", type: "NSFW" },
  { keyword: "brazzers", type: "NSFW" },
  { keyword: "xnxx", type: "NSFW" },
  { keyword: "spankbang", type: "NSFW" },
  { keyword: "youjizz", type: "NSFW" },
  { keyword: "youporn", type: "NSFW" },
  { keyword: "pornsite", type: "NSFW" },
  { keyword: "sexsite", type: "NSFW" },
  { keyword: "amateurporn", type: "NSFW" },

  // --- Scam, Fraud, Impersonation ---
  { keyword: "scam", type: "Fraud" },
  { keyword: "fraud", type: "Fraud" },
  { keyword: "fake", type: "Fraud" },
  { keyword: "counterfeit", type: "Fraud" },
  { keyword: "giveaway", type: "Fraud" },
  { keyword: "lottery", type: "Fraud" },
  { keyword: "sweepstake", type: "Fraud" },
  { keyword: "loan", type: "Fraud" },
  { keyword: "investment", type: "Fraud" },

  // --- Cryptocurrency, Trading, Investment ---
  { keyword: "crypto", type: "Crypto" },
  { keyword: "bitcoin", type: "Crypto" },
  { keyword: "ethereum", type: "Crypto" },
  { keyword: "binance", type: "Crypto" },
  { keyword: "dogecoin", type: "Crypto" },
  { keyword: "coinbase", type: "Crypto" },
  { keyword: "blockchain", type: "Crypto" },
  { keyword: "forex", type: "Crypto" },
  { keyword: "trading", type: "Crypto" },
  { keyword: "binaryoption", type: "Crypto" },

  // --- IoT, Supply Chain, Cloud Threats ---
  { keyword: "iot", type: "IoT" },
  { keyword: "firmware", type: "IoT" },
  { keyword: "supplychain", type: "Supply Chain" },
  { keyword: "cloud", type: "Cloud" },
  { keyword: "s3bucket", type: "Cloud" },
  { keyword: "misconfig", type: "Cloud" },

  // --- Spam, Unsolicited, Social Engineering ---
  { keyword: "spam", type: "Spam" },
  { keyword: "unsolicited", type: "Spam" },
  { keyword: "socialengineer", type: "Social Engineering" },

  // --- Insider, State, Advanced Threats ---
  { keyword: "insider", type: "Insider Threat" },
  { keyword: "apt", type: "Advanced Threat" },
  { keyword: "statesponsored", type: "Advanced Threat" },

  // --- Newly Seen/Unknown Domains ---
  { keyword: "newdomain", type: "Unknown" },
  { keyword: "unknown", type: "Unknown" }
];

let blacklistedUrls = [];
let customKeywords = [];

function waitForBody(cb) {
  if (document.body) {
    cb();
  } else {
    new MutationObserver((_, obs) => {
      if (document.body) {
        obs.disconnect();
        cb();
      }
    }).observe(document.documentElement, { childList: true });
  }
}

function getBlacklistedMatch(currentUrl) {
  for (const url of blacklistedUrls) {
    if (currentUrl === url.trim().toLowerCase()) {
      return url;
    }
  }
  return null;
}

function getKeywordMatch(url) {
  for (const pattern of suspiciousPatterns) {
    if (url.includes(pattern.keyword)) {
      return pattern.type + " keyword detected";
    }
  }
  return null;
}

function getCustomKeywordMatch(url) {
  for (const kw of customKeywords) {
    if (kw && url.includes(kw)) {
      // Mark as "Nonadmissible" for special alert
      return `Nonadmissible: Custom keyword detected: ${kw}`;
    }
  }
  return null;
}

function showWarning(reason) {
  document.getElementById("ids-warning-blur-overlay")?.remove();
  document.getElementById("ids-warning-popup")?.remove();

  const blurOverlay = document.createElement("div");
  blurOverlay.id = "ids-warning-blur-overlay";
  document.body.appendChild(blurOverlay);

  const popup = document.createElement("div");
  popup.id = "ids-warning-popup";
  popup.innerHTML = `
    <div class="ids-warning-content warning-style">
      <div class="ids-warning-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="#1a3a4a" stroke-width="2" fill="#f7fafd"/>
          <path d="M18 8L27 28H9L18 8Z" fill="#f1c40f"/>
          <rect x="16.25" y="15" width="3.5" height="7.5" rx="1.75" fill="#fff"/>
          <rect x="16.25" y="24" width="3.5" height="3" rx="1.5" fill="#fff"/>
        </svg>
      </div>
      <div class="ids-warning-title">Security Warning</div>
      <div class="ids-warning-msg">
        <b>This website has been flagged as risky.</b>
        <br>
        <span style="font-size:0.98em; color:#444;">Reason: <span style="color:#e67e22;">${reason}</span></span>
      </div>
      <button class="ids-warning-close" tabindex="0">Dismiss</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.querySelector(".ids-warning-close").onclick = () => {
    popup.remove();
    blurOverlay.remove();
  };

  const style = document.createElement("style");
  style.textContent = `
    #ids-warning-blur-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100vw; height: 100vh;
      background: rgba(255, 211, 0, 0.10);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      z-index: 999998;
      transition: opacity 0.22s;
    }
    #ids-warning-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
      background: #fffbe6;
      border: 2px solid #f1c40f;
      border-radius: 14px;
      box-shadow: 0 6px 32px 0 #f1c40f22, 0 1px 8px 0 #2222;
      min-width: 340px;
      max-width: 96vw;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      animation: ids-fade-in 0.3s;
    }
    .warning-style .ids-warning-title {
      color: #8a6d00;
      font-size: 1.18em;
      font-weight: 700;
      margin-bottom: 7px;
      letter-spacing: 0.3px;
    }
    .warning-style .ids-warning-icon svg circle {
      stroke: #f1c40f;
      fill: #fffbe6;
    }
    .warning-style .ids-warning-icon svg path {
      fill: #f1c40f;
    }
    .ids-warning-content {
      padding: 24px 28px 16px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .ids-warning-icon {
      margin-bottom: 12px;
      line-height: 0;
    }
    .ids-warning-msg {
      color: #222;
      margin-bottom: 16px;
      font-size: 1.06em;
      line-height: 1.45;
    }
    .ids-warning-close {
      padding: 8px 30px;
      background: #f1c40f;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1em;
      cursor: pointer;
      transition: background 0.16s, color 0.16s, box-shadow 0.16s;
      box-shadow: 0 1px 6px 0 #f1c40f22;
      outline: none;
    }
    .ids-warning-close:hover, .ids-warning-close:focus {
      background: #b7950b;
      color: #fff;
      box-shadow: 0 2px 10px 0 #f1c40f33;
    }
    @keyframes ids-fade-in {
      from { opacity: 0; transform: translateY(-24px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @media (max-width: 500px) {
      #ids-warning-popup { min-width: 0; width: 92vw; }
      .ids-warning-content { padding: 16px 6px 10px 6px; }
    }
  `;
  document.head.appendChild(style);
}

function showUndismissableAlert(reason) {
  document.getElementById("ids-warning-blur-overlay")?.remove();
  document.getElementById("ids-warning-popup")?.remove();

  const blurOverlay = document.createElement("div");
  blurOverlay.id = "ids-warning-blur-overlay";
  document.body.appendChild(blurOverlay);

  const popup = document.createElement("div");
  popup.id = "ids-warning-popup";
  popup.innerHTML = `
    <div class="ids-warning-content nondismissable-style">
      <div class="ids-warning-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="#a80000" stroke-width="2" fill="#fff"/>
          <path d="M18 8L27 28H9L18 8Z" fill="#e74c3c"/>
          <rect x="16.25" y="15" width="3.5" height="7.5" rx="1.75" fill="#fff"/>
          <rect x="16.25" y="24" width="3.5" height="3" rx="1.5" fill="#fff"/>
        </svg>
      </div>
      <div class="ids-warning-title">Non-Admissible Alert</div>
      <div class="ids-warning-msg">
        <b>This website has been flagged as <span style="color:#e74c3c;">critically risky</span>.</b>
        <br>
        <span style="font-size:0.98em; color:#444;">Reason: <span style="color:#e74c3c;">${reason}</span></span>
      </div>
      <div style="margin-top:18px;color:#a80000;font-size:0.98em;font-weight:600;">
        This alert cannot be dismissed.<br>Please close this tab or navigate away.
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  const style = document.createElement("style");
  style.textContent = `
    #ids-warning-blur-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100vw; height: 100vh;
      background: rgba(231, 76, 60, 0.18);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      z-index: 999998;
      transition: opacity 0.22s;
    }
    #ids-warning-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
      background: #fff;
      border: 3px solid #e74c3c;
      border-radius: 14px;
      box-shadow: 0 6px 32px 0 #e74c3c44, 0 1px 8px 0 #2222;
      min-width: 340px;
      max-width: 96vw;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      animation: ids-fade-in 0.3s;
    }
    .nondismissable-style .ids-warning-title {
      color: #a80000;
      font-size: 1.22em;
      font-weight: 800;
      margin-bottom: 7px;
      letter-spacing: 0.4px;
      text-shadow: 0 2px 8px #e74c3c22;
    }
    .nondismissable-style .ids-warning-icon svg circle {
      stroke: #a80000;
      fill: #fff;
    }
    .nondismissable-style .ids-warning-icon svg path {
      fill: #e74c3c;
    }
    .ids-warning-content {
      padding: 28px 30px 18px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .ids-warning-icon {
      margin-bottom: 12px;
      line-height: 0;
    }
    .ids-warning-msg {
      color: #a80000;
      margin-bottom: 18px;
      font-size: 1.12em;
      line-height: 1.55;
      font-weight: 600;
    }
    @keyframes ids-fade-in {
      from { opacity: 0; transform: translateY(-24px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @media (max-width: 500px) {
      #ids-warning-popup { min-width: 0; width: 92vw; }
      .ids-warning-content { padding: 18px 6px 10px 6px; }
    }
  `;
  document.head.appendChild(style);
}

function showBlock(reason) {
  document.getElementById("ids-warning-blur-overlay")?.remove();
  document.getElementById("ids-warning-popup")?.remove();
  document.getElementById("ids-block-blur-overlay")?.remove();
  document.getElementById("ids-block-popup")?.remove();

  const blurOverlay = document.createElement("div");
  blurOverlay.id = "ids-block-blur-overlay";
  document.body.appendChild(blurOverlay);

  // Determine main message based on reason
  let mainMsg = "Access is blocked for your safety.";
  const r = reason.toLowerCase();
  if (r.includes("blacklisted")) {
    mainMsg = "This website is on the blacklist and cannot be accessed.";
  } else if (r.includes("phishing")) {
    mainMsg = "Phishing risk detected. Access is blocked.";
  } else if (r.includes("malware")) {
    mainMsg = "Malware risk detected. Access is blocked.";
  } else if (r.includes("nonadmissible")) {
    mainMsg = "Nonadmissible keyword detected. Access is blocked.";
  } else if (r.includes("ddos")) {
    mainMsg = "DDoS-related keyword detected. Access is blocked.";
  } else if (r.includes("recon")) {
    mainMsg = "Reconnaissance-related keyword detected. Access is blocked.";
  }

  const popup = document.createElement("div");
  popup.id = "ids-block-popup";
  popup.innerHTML = `
    <div class="ids-block-content">
      <div class="ids-warning-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="#1a3a4a" stroke-width="2" fill="#f7fafd"/>
          <path d="M18 8L27 28H9L18 8Z" fill="#e74c3c"/>
          <rect x="16.25" y="15" width="3.5" height="7.5" rx="1.75" fill="#fff"/>
          <rect x="16.25" y="24" width="3.5" height="3" rx="1.5" fill="#fff"/>
        </svg>
      </div>
      <div class="ids-block-title">Access Blocked</div>
      <div class="ids-block-msg">
        <b>${mainMsg}</b>
        <br>
        <span style="font-size:0.98em; color:#444;">Reason: <span style="color:#e67e22;">${reason}</span></span>
      </div>
      <div style="margin-top:18px;color:#888;font-size:0.98em;">
        Please close this tab or navigate away.
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  const style = document.createElement("style");
  style.textContent = `
    #ids-block-blur-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      width: 100vw; height: 100vh;
      background: rgba(44,62,80,0.22);
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      z-index: 2147483646;
      transition: opacity 0.22s;
    }
    #ids-block-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2147483647;
      background: #fff;
      border: 2px solid #e74c3c;
      border-radius: 14px;
      box-shadow: 0 6px 32px 0 #e74c3c22, 0 1px 8px 0 #2222;
      min-width: 340px;
      max-width: 96vw;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      animation: ids-fade-in 0.3s;
    }
    .ids-block-content {
      padding: 32px 28px 22px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .ids-block-title {
      color: #1a7a9a;
      font-size: 1.18em;
      font-weight: 700;
      margin-bottom: 7px;
      letter-spacing: 0.3px;
    }
    .ids-block-msg {
      color: #222;
      margin-bottom: 10px;
      font-size: 1.06em;
      line-height: 1.45;
    }
    .ids-warning-icon {
      margin-bottom: 12px;
      line-height: 0;
    }
    @keyframes ids-fade-in {
      from { opacity: 0; transform: translateY(-24px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @media (max-width: 500px) {
      #ids-block-popup { min-width: 0; width: 92vw; }
      .ids-block-content { padding: 18px 6px 12px 6px; }
    }
  `;
  document.head.appendChild(style);
}

// Robustly always check blockMode and nonAdmissibleMode at the moment of flagging
function handleFlagged(reason) {
  chrome.storage.local.get(null, (data) => {
    waitForBody(() => {
      const blockMode = data && (
        data.blockMode === true ||
        data.blockMode === "true"
      );
      const nonAdmissibleMode = data && (
        data.nonAdmissibleMode === true ||
        data.nonAdmissibleMode === "true"
      );
      if (blockMode) {
        showBlock(reason);
      } else if (nonAdmissibleMode) {
        showUndismissableAlert(reason);
      } else {
        showWarning(reason);
      }
    });
  });
}

function checkPage() {
  const currentUrl = window.location.href.trim().toLowerCase();

  const matchedUrl = getBlacklistedMatch(currentUrl);
  if (matchedUrl) {
    handleFlagged(`Blacklisted URL: ${matchedUrl}`);
    return;
  }

  const customReason = getCustomKeywordMatch(currentUrl);
  if (customReason) {
    handleFlagged(customReason);
    return;
  }

  const keywordReason = getKeywordMatch(currentUrl);
  if (keywordReason) {
    handleFlagged(keywordReason);
  }
}

// --- Load blacklist and custom keywords, then check the page ---
Promise.all([
  fetch(chrome.runtime.getURL("blacklist.json")).then(resp => resp.json()).catch(() => []),
  new Promise(resolve => chrome.storage.local.get({ customKeywords: [] }, data => resolve(data.customKeywords)))
]).then(([blacklist, keywords]) => {
  blacklistedUrls = blacklist.map(url => url.trim().toLowerCase());
  customKeywords = keywords.map(kw => kw.trim().toLowerCase());
  checkPage();
});

// Listen for changes in custom keywords and re-check the page
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.customKeywords) {
    customKeywords = (changes.customKeywords.newValue || []).map(kw => kw.trim().toLowerCase());
    checkPage();
  }
});
