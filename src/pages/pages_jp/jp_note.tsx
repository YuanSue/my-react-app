// 把所有 export 的變數打包成一個叫作 'Reads' 的物件
import * as Reads from "../../component/zip_word_jlpt_note";
import {questions} from "../../component/zip_word_jlpt_note"
//import Toggle from "../../component/func_toggle_list";
import RedMarkdown from "../../component/func_mkdown_set";
// import Toggle from "../../component/func_toggle_list";

export default function N3_note() {
  return (
    <div className="font">
<p>解題小撇步：
在 N3 考題中，只要看到後半句是 「過去式（～ました／～た）」，
且表示一個連續動作時，選「たら」的機率高達 90% 以上。因為「と、ば、なら」在這種情況下限制非常多。</p>
<ul>
 {/* Q1 */}
        {questions.QQ1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_1} />
        </Toggle> */}

        {/* Q2 */}
        {questions.QQ2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_2} />
        </Toggle> */}

        {/* Q3 */}
        {questions.QQ3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_3} />
        </Toggle> */}

        {/* Q4 */}
        {questions.QQ4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_4} />
        </Toggle> */}

        
        <RedMarkdown content={Reads.read_1} />

        {/* Q5 */}
        {questions.QQ5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_5} />
        </Toggle> */}

        {/* Q6 */}
        {questions.QQ6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_6} />
        </Toggle> */}

        {/* Q7 */}
        {questions.QQ7.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_7} />
        </Toggle> */}

        {/* Q8 */}
        {questions.QQ8.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_8} />
        </Toggle> */}

        {/* Q9 */}
        {questions.QQ9.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* <Toggle title="ans">
        <RedMarkdown content={Reads.ans_9} />
        </Toggle> */}

  </ul>
  </div>
      );
}