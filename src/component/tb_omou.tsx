const words = [
  { 
    kanji: "思う", 
    kana: "おもう", 
    zh: "覺得、認為", 
    feature: "瞬間想法", 
    time: "當下的瞬間想法", 
    emotion: "輕微意見或感受", 
    tone: "口語、輕鬆" 
  },
  { 
    kanji: "思っている", 
    kana: "おもっている", 
    zh: "一直覺得、持續認為", 
    feature: "持續想法 / 信念 / 意向", 
    time: "想法已經存在一段時間", 
    emotion: "內心深層想法或決心", 
    tone: "正式或強調內心想法" 
  },
];

export default function OMOU() {
  return (
    <table border={1} cellPadding="8" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>表現</th>
          <th>解釋</th>
          <th>特點</th>
          <th>時間感</th>
          <th>情感 / 決心</th>
          <th>語氣感覺</th>
        </tr>
      </thead>

      <tbody>
        {words.map((w, i) => (
          <tr key={i}>
            <td>
              <ruby>
                {w.kanji}
                <rt>{w.kana}</rt>
              </ruby>
            </td>
            <td>{w.zh}</td>
            <td>{w.feature}</td>
            <td>{w.time}</td>
            <td>{w.emotion}</td>
            <td>{w.tone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
