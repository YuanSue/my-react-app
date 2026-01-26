const words = [
  {
    expression: "助けがなくても",
    type: "名詞",
    focus: "狀態 / 支援 / 外力",
    zh: "即使沒有『幫助』這個東西",
    tone: "成熟、抽象、偏書面"
  },
  {
    expression: "助けなくても",
    type: "動詞",
    focus: "行為",
    zh: "即使（別人）不幫忙",
    tone: "具體、偏口語、動作感強"
  }
];

export default function TASUKE() {
  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>表現</th>
          <th>文法類型</th>
          <th>語意重點</th>
          <th>中文說明</th>
          <th>語氣 / 感覺</th>
        </tr>
      </thead>

      <tbody>
        {words.map((w, i) => (
          <tr key={i}>
            <td>{w.expression}</td>
            <td>{w.type}</td>
            <td>{w.focus}</td>
            <td>{w.zh}</td>
            <td>{w.tone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
