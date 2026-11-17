const W2 = [
  { full: "E;ouab", gap: "E;....ab", miss: "ou", wrong: ["eu", "oi"],
    abbr: '<span class="cop ov">=e=;=u</span>', mean: "القدوس" },
  { full: "Vnou}", gap: "Vnou....", miss: "}", wrong: ["t", "i"],
    abbr: '<span class="cop ov">V]</span>', mean: "الله" },
  { full: "Pneuma", gap: "Pn....ma", miss: "eu", wrong: ["ou", "ei"],
    abbr: '<span class="cop">P</span><span class="cop ov">=n=a</span>', mean: "روح" },
  { full: "Allylouia",
    abbr: '<span class="cop ov">=a=l</span>', mean: "هلليلويا" },
  { full: "Iycouc", gap: "Iyco....c", miss: "u", wrong: ["o", "i"],
    abbr: '<span class="cop ov">I=y=c</span>', mean: "يسوع" },
  { full: "Pi,rictoc", gap: "Pi,r....ctoc", miss: "i", wrong: ["e", "y"],
    abbr: '<span class="cop">P</span><span class="cop ov">=,=c</span>', mean: "المسيح" },
  { full: "[oic", gap: "[....ic", miss: "o", wrong: ["a", "u"],
    abbr: '<span class="cop ov">=[=c</span>', mean: "رب/سيد" },
  { full: "Cwtyr", gap: "Cwt....r", miss: "y", wrong: ["i", "e"],
    abbr: '<span class="cop">C</span><span class="cop ov">=w=r</span>', mean: "مخلص" }
];

const cop = t => '<span class="cop">' + t + "</span>";
const ar = t => '<span dir="rtl">' + t + "</span>";
const N = W2.length;

function mc(q, right, wrongs, pos) {
  const o = wrongs.slice();
  o.splice(pos, 0, right);
  return { type: "mc", q: q, options: o, answer: pos, explain: "راجع جدول كلمات للحفظ" };
}

const ex2 = [];
W2.forEach((w, i) => {
  if (w.gap) ex2.push(mc(ar("أكمل الكلمة:") + " " + cop(w.gap), cop(w.miss), w.wrong.map(cop), i % 3));
});
W2.forEach((w, i) => {
  ex2.push(mc(ar("اختر الاختصار:") + " " + cop(w.full), w.abbr,
    [1, 2].map(k => W2[(i + k) % N].abbr), (i + 1) % 3));
});
W2.forEach((w, i) => {
  ex2.push(mc(ar("ما معنى") + " " + cop(w.full) + "؟", ar(w.mean),
    [1, 2].map(k => ar(W2[(i + k) % N].mean)), (i + 2) % 3));
});

const rows = W2.map(w =>
  '<tr><td dir="rtl">' + w.mean + "</td><td>" + w.abbr + '</td><td><span class="cop">' + w.full + "</span></td></tr>"
).join("");

const CURRICULUM = [
  {
    title: "Level 1",
    lessons: [
      {
        title: "الدرس الثاني: بعض الاختصارات",
        content: `
          <div class="ar"><p>بعض الكلمات والتي يتم استخدامها وتكرارها كثيراً، يتم اختصارها في حرفين او ثلاثة، مع وضع شرطة على بعضهم.</p>
          <h4>كلمات للحفظ</h4></div>
          <table class="t"><tr><th>المعنى</th><th>الاختصار</th><th>الكلمة كاملة</th></tr>${rows}</table>`,
        exercises: ex2
      }
    ]
  },
  { title: "Level 2", lessons: [] },
  { title: "Level 3", lessons: [] },
  { title: "Level 4", lessons: [] },
  { title: "Level 5", lessons: [] }
];
