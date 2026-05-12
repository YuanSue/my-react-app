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
const ans_4 =`正確答案：B. 通り
解析： 名詞 + 「通り」表示「照著……」、「正如……」。
翻譯： 搭乘下午1點出發的巴士，正如預定在3點抵達了飯店。
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

const Q7 = {
  sentences: [
    "Q7",
    "小林「田中くんは、なんで東京生まれなのに大阪弁なの？」",
    "田中「生まれは東京だけど、大阪で（　）、大阪弁に慣れちゃったんだ。」",
    "A. 育ったわりに",
    "B. 育ったもんだから",
    "C. 育ったようで",
    "D. 育ったようなら"
]
  };
const ans_7 =`正確答案：B. 育ったもんだから

解析： 「～（もの）だから」用於強調原因、理由，通常帶有一點解釋或辯解的語氣。

翻譯： 田中：「雖然出生在東京，但因為是在大阪長大的，所以就習慣大阪腔了。」
`

const Q8 = {
  sentences: [
    "Q8",
    "台風の大雨（　）、住宅地に水があふれてしまいました。",
    "A. によって",
    "B. として",
    "C. によると",
    "D. と比べると"
]
  };
const ans_8 =`正確答案：A. によって

解析： 「～によって」在這裡表示原因、理由，意為「由於……」。

翻譯： 由於颱風的大雨，住宅區淹水了。
`

const Q9 = {
  sentences: [
    "Q9",
    "（スーパーで）",
    "店員「本日もお越しいただき、ありがとうございます。",
    "毎週水曜日は会員カードをご提示いただくと、",
    "商品のお買い上げ一点（　） 50ポイント差し上げます。」",
    "A. とすれば",
    "B. にとって",
    "C. というと",
    "D. につき"
]
  };
const ans_9 =`正確答案：D. につき
解析： 「～につき」在這裡表示比例或單位，意為「每一……」。
翻譯： 店員：「每週三只要出示會員卡，每購買一件商品就贈送50點積分。」
`

const Q10 = {
  sentences: [
    "Q10",
    "5年間使った時計がついに壊れてしまった。",
    "だが、思い出がたくさんある時計なので、",
    "一回壊れた（　）捨てたりはできない。",
    "A. だろうと思っても",
    "B. らそれで",
    "C. てさえも",
    "D. からといって"
]
  };
const ans_10 =`正確答案：D. からといって
解析： 「～からといって」意為「雖說……（但也不一定……）」，常與否定呼應。
翻譯： 用了5年的手錶終於壞了。但因為充滿回憶，不能因為壞了一次就把它丟掉。
`

const Q11 = {
  sentences: [
    "Q11",
    "（市役所で）",
    "客:「あのう、住所変更の手続きが終わるまで、あとどのくらいかかりますか。」",
    "職員:「すみません。担当者が（　）更新ができないため、もう少々お待ちください。」",
    "A. 戻ってくるうちに",
    "B. 戻ったばかりが",
    "C. 戻ってきてからでないと",
    "D. 戻ってくるくらいに"
]
  };
const ans_11 =`正確答案：
解析： 「～てからでないと……ない」表示「如果不先……，就無法……」。
翻譯： 職員：「抱歉。因為負責人回來之前無法辦理更新，請再稍等一下。」
`

const Q12 = {
  sentences: [
    "Q12",
    "（学校で）",
    "吉田:「ねえ、明日って佐藤くんの誕生日（　）？ケーキを買ってお祝いしてあげようよ。」",
    "田村:「そういえば、そうだったね。うん、そうしよう。」",
    "吉田:「じゃあ、あとで一緒にケーキ屋に行こう。」",
    "A. だったら",
    "B. じゃん",
    "C. っぽい",
    "D. だもん"
]
  };
const ans_12 =`正確答案：B. じゃん
解析： 「じゃん」是口語中「不是嗎？」的確認語氣。
翻譯： 吉田：「吶，明天不是佐藤的生日嗎？買個蛋糕幫他慶祝吧。」
`

const Q13 = {
  sentences: [
    "Q13",
    "まるで見えない壁がある（　）、IさんとUさんは隣に座っていても全く話そうとしない。",
    "A. ようなものなら",
    "B. はずがなくても",
    "C. わけもなく",
    "D. かのように"
]
  };
const ans_13 =`正確答案：D. かのように
解析： 「まるで～かのように」意為「簡直就像……一樣」。
翻譯： 簡直就像中間隔了一道看不見的牆一樣，I先生和U小姐即使坐隔壁也完全不打算說話。
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

        {/* Q7 */}
        {Q7.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_7} />
        </Toggle>

        {/* Q8 */}
        {Q8.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_8} />
        </Toggle>

        {/* Q9 */}
        {Q9.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_9} />
        </Toggle>

        {/* Q10 */}
        {Q10.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_10} />
        </Toggle>

        {/* Q11 */}
        {Q11.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_11} />
        </Toggle>

        {/* Q12 */}
        {Q12.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_12} />
        </Toggle>

        {/* Q13 */}
        {Q13.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={ans_13} />
        </Toggle>

        
      </ul>
</div>
      );
}