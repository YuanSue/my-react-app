const comparison = [
  {
    expression: "から",
    type: "主觀理由",
    focus: "說話者的意志 / 判斷",
    zh: "因為少，所以我加點了（強調主觀決定）",
    tone: "較口語、帶個人意志"
  },
  {
    expression: "ので",
    type: "客觀原因",
    focus: "事實背景 / 陳述情況",
    zh: "因為份量少，所以加點了（陳述客觀事實）",
    tone: "冷靜、中性、委婉"
  }
];

const grammarRules = [
  {
    expression: "い形容詞 (少ない)",
    type: "直接接續",
    focus: "少ない + ので",
    zh: "高いので買いません。",
    tone: "普通形直接加"
  },
  {
    expression: "な形容詞 (便利)",
    type: "語幹 + な",
    focus: "便利な + ので",
    zh: "便利なので使っています。",
    tone: "必須加「な」"
  },
  {
    expression: "名詞 (学生)",
    type: "名詞 + な",
    focus: "学生な + ので",
    zh: "学生なのでお金がありません。",
    tone: "必須加「な」"
  }
];

export default function NodeKaraComparison() {
  return (
    <ul style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <em>🔹 為什麼用「ので」而不是「から」？</em>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", marginBottom: "30px", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: '#ccc569d7' }}>
            <th>表現</th>
            <th>文法類型</th>
            <th>語意重點</th>
            <th>中文說明 (例句)</th>
            <th>語氣 / 感覺</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((w, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 'bold' }}>{w.expression}</td>
              <td>{w.type}</td>
              <td>{w.focus}</td>
              <td>{w.zh}</td>
              <td>{w.tone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <em>「ので」文法結構整理</em>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: '#ccc569d7' }}>
            <th>接續對象</th>
            <th>變化規則</th>
            <th>組合公式</th>
            <th>例句呈現</th>
            <th>備註</th>
          </tr>
        </thead>
        <tbody>
          {grammarRules.map((g, i) => (
            <tr key={i}>
              <td>{g.expression}</td>
              <td>{g.type}</td>
              <td style={{ color: '#aa8f79', fontWeight: 'bold' }}>{g.focus}</td>
              <td>{g.zh}</td>
              <td>{g.tone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ul>
  );
}