import Toggle from "../../component/func_toggle_list";
import RedMarkdown from "../../component/func_mkdown_redpt";

const Q1 = {
  sentences: [
    "Q1",
    "ご飯を作っている（　）に電話がかかってきたので、電話に出られなかった。",
    "A. 段階",
    "B. 大幅",
    "C. 最中",
    "D. 区間"
]
  };
const ans_1 =`正確答案：
答案：C. 最中（さいちゅう）
解析： 「～最中に」表示正在做某件事的高潮或中間，突然發生了另一件事（通常是不受歡迎的干擾）。
翻譯： 正忙著做飯的時候電話響了，所以沒能接。
`

const Q2 = {
  sentences: [
    "Q2",
    "試合会場に着いた（　）、大雨が降り始めた。サッカーの大会は中止だろう。",
    "A. とたんに",
    "B. だろうと",
    "C. ことから",
    "D. としたら"
]
  };
const ans_2 =`正確答案：C. とたんに
解析： 「～たとたんに」表示前一個動作剛完成，後一個動作就緊接著發生，通常帶有驚訝或意外感。
翻譯： 剛一到達比賽會場，就開始下起大雨。足球大賽大概會取消吧。
`

const Q3 = {
  sentences: [
    "Q3",
    "たとえなかなか結果が出ないとしても、あきらめずに練習を（　）続けることが大切だ。",
    "A. やる",
    "B. やれ",
    "C. やり",
    "D. やら"
]
  };
const ans_3 =`正確答案：C. やり
解析： 這是複合動詞的用法。動詞去 ます 形（やり）加上 続ける（繼續），表示「持續做某事」。
翻譯： 即使遲遲沒有結果，不放棄並持續練習是很重要的。
`

const Q4 = {
  sentences: [
    "Q4",
    "午後1時出発のバスに乗って、予定（　）に3時にホテルに着いた。",
    "A. 済み",
    "B. 通り",
    "C. 進み",
    "D. 起こし"
]
  };
const ans_4 =`正確答案：
`

const Q5 = {
  sentences: [
    "Q5",
    "（会社で）",
    "社員A「すみません。そこにある資料を（　）か。」",
    "社員B「はい、いいですよ。これですか。」",
    "社員A「はい、それです。ありがとうございます。」",
    "A. 取れてしまいます",
    "B. 取らせておきます",
    "C. 取ろうとしません",
    "D. 取ってもらってもいいです"
]
  };
const ans_5 =`正確答案：D. 取ってもらってもいいです
解析： 「～てもらう」用於請求他人為自己做某事。
翻譯： A：「抱歉，能請你幫我拿一下那邊的資料嗎？」 B：「好啊，是這個嗎？」
`

const Q6 = {
  sentences: [
    "Q6",
    "（道を歩いている時に）",
    "A:「急に泣き（　）、どうしたんですか。」",
    "B:「ちょっと辛いことを思い出してしまって。」",
    "A:「ちょうどあそこにベンチがあるので、少し休みましょうか。」",
    "A. 出しといて",
    "B. 出したりして",
    "C. 出そうと",
    "D. 出すなど"
]
  };
const ans_6 =`正確答案：
解析： 動詞去 ます 形 + 「出す」表示突然開始。「～たりして」用於列舉動作。
翻譯： A：「突然哭了起來，是怎麼了呢？」
`

// const Q = {
//   sentences: [
//     "",
//     "",
//     "A. ",
//     "B. ",
//     "C. ",
//     "D. "
// ]
//   };
// const ans_ =`正確答案：
// `


// const Q = {
//   sentences: [
//     "",
//     "",
//     "A. ",
//     "B. ",
//     "C. ",
//     "D. "
// ]
//   };
// const ans_ =`正確答案：
// `

export default function N3_t02() {
  return (
    <div className="font">
      <h3>第二回JLPT 試題review</h3>
      <h5>詞彙問題</h5>
      <ul>
        {/* Q1 */}
        {Q1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_1} />
        </Toggle>

        {/* Q2 */}
        {Q2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_2} />
        </Toggle>

        {/* Q3 */}
        {Q3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_3} />
        </Toggle>

        {/* Q4 */}
        {Q4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_4} />
        </Toggle>

        {/* Q5 */}
        {Q5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_5} />
        </Toggle>

        {/* Q6 */}
        {Q6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_6} />
        </Toggle>

        
      </ul>
</div>
      );
}