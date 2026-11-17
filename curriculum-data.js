const CURRICULUM = [
  {
    title: "Lesson 1: The definite article (sample)",
    content: `
      <p>The word "the" changes with gender and number:</p>
      <p><span class="cop">ⲡⲓ</span> = the (masculine)<br>
         <span class="cop">ϯ</span> = the (feminine)<br>
         <span class="cop">ⲛⲓ</span> = the (plural)</p>
      <p>Examples: <span class="cop">ⲡⲓⲣⲱⲙⲓ</span> = the man, <span class="cop">ϯⲥϩⲓⲙⲓ</span> = the woman.</p>`,
    exercises: [
      { type: "mc", q: "How do you say \"the man\"?",
        options: ['<span class="cop">ⲡⲓⲣⲱⲙⲓ</span>', '<span class="cop">ϯⲣⲱⲙⲓ</span>', '<span class="cop">ⲛⲓⲣⲱⲙⲓ</span>'],
        answer: 0, explain: "ⲡⲓ is the masculine article." },
      { type: "fill", q: 'Type the English meaning of <span class="cop">ⲣⲱⲙⲓ</span>:',
        answer: ["man"], explain: "ⲣⲱⲙⲓ means man." }
    ]
  }
];