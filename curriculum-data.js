const W2 = [
  { full: "Ⲉⲑⲟⲩⲁⲃ", gap: "Ⲉⲑ....ⲁⲃ", miss: "ⲟⲩ", wrong: ["ⲉⲩ", "ⲟⲓ"],
    abbr: '<span class="cop ov">ⲉⲑⲩ</span>', mean: "القدوس" },
  { full: "Ⲫⲛⲟⲩϯ", gap: "Ⲫⲛⲟⲩ....", miss: "ϯ", wrong: ["ⲧ", "ⲓ"],
    abbr: '<span class="cop ov">Ⲫϯ</span>', mean: "الله" },
  { full: "Ⲡⲛⲉⲩⲙⲁ", gap: "Ⲡⲛ....ⲙⲁ", miss: "ⲉⲩ", wrong: ["ⲟⲩ", "ⲉⲓ"],
    abbr: '<span class="cop">Ⲡ</span><span class="cop ov">ⲛⲁ</span>', mean: "روح" },
  { full: "Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ",
    abbr: '<span class="cop ov">Ⲁⲗ</span>', mean: "هلليلويا" },
  { full: "Ⲓⲏⲥⲟⲩⲥ", gap: "Ⲓⲏⲥⲟ....ⲥ", miss: "ⲩ", wrong: ["ⲟ", "ⲓ"],
    abbr: '<span class="cop ov">Ⲓⲏⲥ</span>', mean: "يسوع" },
  { full: "Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ", gap: "Ⲡⲓⲭⲣ....ⲥⲧⲟⲥ", miss: "ⲓ", wrong: ["ⲉ", "ⲏ"],
    abbr: '<span class="cop">Ⲡ</span><span class="cop ov">ⲭⲥ</span>', mean: "المسيح" },
  { full: "Ϭⲟⲓⲥ", gap: "Ϭ....ⲓⲥ", miss: "ⲟ", wrong: ["ⲁ", "ⲩ"],
    abbr: '<span class="cop ov">ⲟⲥ</span>', mean: "رب/سيد" },
  { full: "Ⲥⲱⲧⲏⲣ", gap: "Ⲥⲱⲧ....ⲣ", miss: "ⲏ", wrong: ["ⲓ", "ⲉ"],
    abbr: '<span class="cop">Ⲥ</span><span class="cop ov">ⲱⲣ</span>', mean: "مخلص" }
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
