const lectures = [
  {
    week: "Week 01",
    title: "Introduction to Professional Skills",
    p1: "This lecture introduced employability, workplace behavior, values, beliefs, attitudes, and character. It explained that professional success depends on more than technical ability. I learned that the way a person behaves in class, in a team, and in the workplace can shape how others trust and respect them.",
    p2: "The Johari Window activity helped me understand self-awareness. It showed that some strengths are known to me, some are seen by others, and some can be discovered through feedback. That idea stayed important through the rest of the module because the course was really about growing as a person, not only as a student.",
    points: ["Employability skills matter in real jobs.", "Values and attitudes shape behavior.", "Self-awareness helps personal growth.", "Feedback can reveal hidden strengths."]
  },
  {
    week: "Week 02",
    title: "Emotional Intelligence",
    p1: "This lecture focused on understanding emotions and using them well in professional situations. It covered self-awareness, self-management, social awareness, and relationship management. I understood that emotional intelligence helps people stay calm, think clearly, and communicate in a respectful way.",
    p2: "In group work and everyday life, emotional intelligence makes teamwork smoother. It helps reduce conflict and makes it easier to listen to others. I learned that confidence works best when it is balanced with empathy and patience.",
    points: ["Know your own emotions.", "Stay calm under pressure.", "Listen with empathy.", "Build positive relationships."]
  },
  {
    week: "Week 03",
    title: "Portfolio Management",
    p1: "This lecture explained what a portfolio is and why it is important in academic and professional life. A portfolio should collect evidence of learning, achievements, and skills in an organized way. I learned that a good portfolio does not just show work, it also explains why the work matters.",
    p2: "The lecture also showed that a digital portfolio can be more flexible and easier to share. Reflection is part of strong portfolio writing because it shows what was learned from each activity. This website follows that idea by organizing lecture summaries, project evidence, and reflection in one place.",
    points: ["A portfolio collects selected evidence.", "Digital format is easy to share.", "Organization matters.", "Reflection adds meaning."]
  },
  {
    week: "Week 04",
    title: "CV and Cover Letter Writing",
    p1: "This lecture taught how to prepare a professional CV and cover letter. A CV should clearly show personal details, education, skills, and experience in a neat structure. I learned that the document must match the job and should not include unnecessary information.",
    p2: "The cover letter section showed how to connect your strengths with a specific opportunity. That was useful because employers look for candidates who can present themselves clearly. The lecture helped me understand that good writing can open the door to an interview.",
    points: ["Keep the CV clear and relevant.", "Tailor the cover letter.", "Show skills and achievements.", "First impression matters."]
  },
  {
    week: "Week 05",
    title: "Job Hunting and Interview Skills",
    p1: "This lecture covered how to search for jobs and prepare for interviews. It highlighted researching the company, understanding the role, and presenting yourself professionally. I learned that preparation reduces stress and helps answer questions with confidence.",
    p2: "The STAR method was especially useful because it gives a simple way to answer interview questions. It helped me see how body language, tone, and eye contact also matter. Together these skills make a person look ready and trustworthy in an interview.",
    points: ["Research before interviews.", "Use the STAR method.", "Practice body language.", "Dress and speak professionally."]
  },
  {
    week: "Week 06",
    title: "Email, Online and Telephone Etiquette",
    p1: "This lecture explained professional communication through email, online platforms, and phone conversations. I learned that a formal email needs a clear subject, greeting, and closing, and the tone must stay respectful. Online behavior also matters because digital messages shape reputation.",
    p2: "Telephone etiquette was another important part because speaking clearly and listening carefully are essential in real conversations. This topic showed that professional communication is about being polite, accurate, and careful with every message.",
    points: ["Write formal emails properly.", "Use a respectful tone.", "Listen carefully on calls.", "Be professional online."]
  },
  {
    week: "Week 07",
    title: "Dining Etiquette",
    p1: "This lecture introduced dining etiquette in formal settings. It explained how table manners, conversation, and respectful behavior can create a strong impression. I learned that etiquette helps people feel comfortable and confident in social or professional events.",
    p2: "The lecture showed that small actions matter, such as waiting politely, using utensils properly, and speaking in a calm way. These details may seem simple, but they shape how others see your character.",
    points: ["Table manners matter.", "Be respectful in formal events.", "Use calm conversation.", "Confidence comes from practice."]
  },
  {
    week: "Week 08",
    title: "Grooming and Etiquette",
    p1: "This lecture explained the importance of grooming and personal presentation. It showed that neat clothing, proper posture, cleanliness, and respectful behavior all influence first impressions. I learned that grooming is not about fashion, but about being suitable for the situation.",
    p2: "The lecture also helped me understand that appearance and confidence are connected. When a person looks prepared, they often feel more ready to speak and work with others. That makes grooming part of professional success.",
    points: ["Grooming affects first impressions.", "Dress appropriately.", "Posture matters.", "Confidence grows with preparation."]
  },
  {
    week: "Week 09",
    title: "Negotiation Skills",
    p1: "This lecture discussed negotiation as a skill for solving problems and reaching agreement. It showed that negotiation is not about winning at all costs, but about understanding needs and finding a fair outcome. Listening carefully was one of the most important lessons.",
    p2: "I learned that negotiation is useful in teamwork, meetings, and project planning. It helped me think about how people can disagree without becoming hostile. Good negotiation keeps respect in the conversation while moving toward a solution.",
    points: ["Listen before replying.", "Look for fair solutions.", "Respect different views.", "Use negotiation in teamwork."]
  },
  {
    week: "Week 10",
    title: "Professional Responsibilities and Code of Ethics",
    p1: "This lecture introduced professionalism, ethics, and responsibility. It explained that professionals must act honestly and think about the effect of their work on others. That idea is especially important in IT because technology can affect privacy, trust, and daily life.",
    p2: "I understood that codes of ethics are not only rules to memorize. They are guidance for making responsible decisions. This lecture connected technical work with values like integrity, accountability, and public trust.",
    points: ["Act with honesty.", "Protect trust and privacy.", "Use responsibility in IT.", "Follow ethical standards."]
  },
  {
    week: "Week 11",
    title: "Business Ethics in Practice",
    p1: "This final lecture applied ethics to practical business situations. It asked students to think about fairness, responsibility, and the long-term impact of their actions. I learned that good decisions are not only legal, but also thoughtful and respectful to others.",
    p2: "The lecture tied together the whole module because professional behavior is visible in everyday actions. It reminded me that trust is built through repeated honest choices, not just big moments.",
    points: ["Consider stakeholders.", "Choose fair action.", "Build trust daily.", "Ethics guide decisions."]
  }
];

const charityImages = [
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.56.41.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.56.47.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.56.48 (1).jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.56.48.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.56.59.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.02.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.03.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.04.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.07.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.08.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.09.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.11.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.12.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.14.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.18.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.33.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.34.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.35.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.36.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.37.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.38.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.39 (1).jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.39.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.40 (1).jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.40.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.52.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.57.58.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.01.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.03.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.13.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.15.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.18.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.23.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.26.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.28.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.30.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.31.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.32 (1).jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.32.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.33.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.34.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.36.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.38.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.44.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.45.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.52.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.53.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.55.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.58.59.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.02.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.04.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.06.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.08 (1).jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.08.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.09.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.11.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.25.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.35.jpeg",
  "assets/charity/charity funding/WhatsApp Image 2026-06-13 at 19.59.42.jpeg"
];

let currentImage = 0;
let albumTimer = null;
let soundEnabled = localStorage.getItem("sazeekaSound") !== "off";
let audioCtx;

function sfx(type = "click") {
  if (!soundEnabled) return;
  audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const tones = {
    hover: [940, 0.025, "sine", 0.016],
    click: [780, 0.04, "triangle", 0.022],
    nav: [1120, 0.06, "sine", 0.02],
    activate: [1340, 0.08, "sine", 0.024]
  };
  const [f, dur, wave, amp] = tones[type] || tones.click;
  osc.type = wave;
  osc.frequency.setValueAtTime(f, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(120, f * 0.72), now + dur);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(amp, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + dur + 0.02);
}

function sparkle(x, y, emoji = "❄") {
  const node = document.createElement("div");
  node.className = "emoji-pop";
  node.textContent = emoji;
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 700);
}

function emitEmoji(event) {
  const choices = ["❄", "✨", "⛄", "💙"];
  sparkle(event.clientX, event.clientY, choices[Math.floor(Math.random() * choices.length)]);
}

function setupSound() {
  const toggle = document.querySelector("#soundToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem("sazeekaSound", soundEnabled ? "on" : "off");
      sfx(soundEnabled ? "activate" : "click");
    });
  }

  document.addEventListener("pointerover", e => {
    const hit = e.target.closest("a, button, .toc, .lecture, .album, .panel");
    if (hit) sfx(hit.matches("a") ? "nav" : "hover");
  }, { passive: true });

  document.addEventListener("pointerdown", e => {
    const hit = e.target.closest("a, button, .toc, .lecture, .album, .panel");
    if (hit) {
      sfx(hit.matches("a") ? "nav" : "click");
      emitEmoji(e);
    }
  }, { passive: true });
}

function reveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 50}ms`;
    io.observe(el);
  });
}

function addCrystalSnow() {
  if (document.querySelector(".snowfield")) return;

  const makeLayer = (className, amount, front = false) => {
    const layer = document.createElement("div");
    layer.className = `snowfield ${className}`;
    layer.setAttribute("aria-hidden", "true");

    for (let i = 0; i < amount; i += 1) {
      const flake = document.createElement("span");
      const size = front ? 14 + Math.random() * 10 : 9 + Math.random() * 11;
      const duration = front ? 9 + Math.random() * 5 : 13 + Math.random() * 9;
      const wind = front ? 70 + Math.random() * 110 : 40 + Math.random() * 90;
      flake.className = "crystal-snow";
      flake.style.setProperty("--x", `${Math.random() * 100}vw`);
      flake.style.setProperty("--size", `${size}px`);
      flake.style.setProperty("--duration", `${duration}s`);
      flake.style.setProperty("--delay", `${Math.random() * -duration}s`);
      flake.style.setProperty("--wind", `${Math.random() > 0.5 ? wind : -wind}px`);
      flake.style.setProperty("--opacity", `${front ? 0.22 + Math.random() * 0.18 : 0.16 + Math.random() * 0.2}`);
      layer.appendChild(flake);
    }

    document.body.appendChild(layer);
  };

  makeLayer("back", 22);
  makeLayer("front", 7, true);
}

function lectureMarkup() {
  const el = document.querySelector("#lectureList");
  if (!el) return;
  el.innerHTML = lectures.map(item => `
    <article class="lecture glass reveal">
      <div class="week">${item.week}</div>
      <div>
        <h2>${item.title}</h2>
        <p>${item.p1}</p>
        <p>${item.p2}</p>
        <ul class="points">${item.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function albumMarkup() {
  const img = document.querySelector("#albumImage");
  const counter = document.querySelector("#albumCounter");
  const strip = document.querySelector("#thumbStrip");
  const prev = document.querySelector("#prevImage");
  const next = document.querySelector("#nextImage");
  const play = document.querySelector("#playAlbum");
  if (!img || !strip) return;

  const set = index => {
    currentImage = (index + charityImages.length) % charityImages.length;
    img.classList.add("switching");
    setTimeout(() => {
      img.src = charityImages[currentImage];
      counter.textContent = `${String(currentImage + 1).padStart(2, "0")} / ${String(charityImages.length).padStart(2, "0")}`;
      strip.querySelectorAll("button").forEach((b, i) => b.classList.toggle("active", i === currentImage));
      img.classList.remove("switching");
    }, 140);
  };

  strip.innerHTML = charityImages.map((src, i) => `<button type="button" data-i="${i}"><img src="${src}" alt="" loading="lazy"></button>`).join("");

  strip.addEventListener("click", e => {
    const btn = e.target.closest("button[data-i]");
    if (!btn) return;
    set(Number(btn.dataset.i));
    sfx("click");
    emitEmoji(e);
  });
  prev?.addEventListener("click", e => { set(currentImage - 1); sfx("click"); emitEmoji(e); });
  next?.addEventListener("click", e => { set(currentImage + 1); sfx("click"); emitEmoji(e); });
  play?.addEventListener("click", e => {
    if (albumTimer) {
      clearInterval(albumTimer);
      albumTimer = null;
      play.textContent = "Play Album";
      sfx("click");
      emitEmoji(e);
      return;
    }
    sfx("activate");
    emitEmoji(e);
    play.textContent = "Pause Album";
    albumTimer = setInterval(() => set(currentImage + 1), 2400);
  });

  set(0);
}

lectureMarkup();
albumMarkup();
setupSound();
reveal();
addCrystalSnow();
