// src/App.tsx
//import React from 'react';
// 把所有 export 的變數打包成一個叫作 'Reads' 的物件
import * as Reads from "../../component/zip_word_jlpt3";
import {questions} from "../../component/zip_word_jlpt3"
//import Toggle from "../../component/func_toggle_list";
import RedMarkdown from "../../component/func_mkdown_redpt";
import Toggle from "../../component/func_toggle_list";
// 抓出題目



export default function N3_t03() {
  return (
    <div className="font">
      <h3>第三回JLPT 試題review</h3>
      <h5>詞彙問題</h5>
      <ul>
        {/* Q15 */}
        {questions.Q15.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_15} />
        </Toggle>

        {/* Q16 */}
        {questions.Q16.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_16} />
        </Toggle>

        {/* Q17 */}
        {questions.Q17.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_17} />
        </Toggle>

        {/* Q18 */}
        {questions.Q18.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_18} />
        </Toggle>

        {/* Q19 */}
        {questions.Q19.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_19} />
        </Toggle>

        {/* Q20 */}
        {questions.Q20.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_20} />
        </Toggle>

        {/* Q21 */}
        {questions.Q21.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_21} />
        </Toggle>

        {/* Q22 */}
        {questions.Q22.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_22} />
        </Toggle>

        {/* Q23 */}
        {questions.Q23.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_23} />
        </Toggle>

        {/* Q24 */}
        {questions.Q24.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_24} />
        </Toggle>


        {/* Q25 */}
        {questions.Q25.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_25} />
        </Toggle>

        {/* Q26 */}
        {questions.Q26.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_26} />
        </Toggle>

        {/* Q27 */}
        {questions.Q27.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_27} />
        </Toggle>

        {/* Q28 */}
        {questions.Q28.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_28} />
        </Toggle>

        {/* Q29 */}
        {questions.Q29.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_29} />
        </Toggle>


        {/* Q30 */}
        {questions.Q30.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_30} />
        </Toggle>

        <h5>語意問題</h5>

        {/* Q1 */}
        {questions.QQ1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_1} />
        </Toggle>

        {/* Q2 */}
        {questions.QQ2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_2} />
        </Toggle>

        {/* Q3 */}
        {questions.QQ3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_3} />
        </Toggle>


        {/* Q4 */}
        {questions.QQ4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_4} />
        </Toggle>

        {/* Q5 */}
        {questions.QQ5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_5} />
        </Toggle>

        {/* Q6 */}
        {questions.QQ6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_6} />
        </Toggle>

        {/* Q7 */}
        {questions.QQ7.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_7} />
        </Toggle>

        {/* Q8 */}
        {questions.QQ8.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_8} />
        </Toggle>

        {/* Q9 */}
        {questions.QQ9.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_9} />
        </Toggle>

        {/* Q10 */}
        {questions.QQ10.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_10} />
        </Toggle>

        {/* Q11 */}
        {questions.QQ11.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_11} />
        </Toggle>

        {/* Q12 */}
        {questions.QQ12.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_12} />
        </Toggle>

        {/* Q13 */}
        {questions.QQ13.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_13} />
        </Toggle>

        {/* Q14 */}
        {questions.QQ14.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_14} />
        </Toggle>

        {/* Q15 */}
        {questions.QQ15.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_15} />
        </Toggle>

        {/* Q16 */}
        {questions.QQ16.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_16} />
        </Toggle>

        {/* Q17 */}
        {questions.QQ17.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_17} />
        </Toggle>

        {/* Q18 */}
        {questions.QQ18.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_18} />
        </Toggle>

        
        <RedMarkdown content={Reads.read_1} />

        {/* Q19 */}
        {questions.QQ19.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_19} />
        </Toggle>

        {/* Q20 */}
        {questions.QQ20.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_20} />
        </Toggle>

        {/* Q21 */}
        {questions.QQ21.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_21} />
        </Toggle>

        {/* Q22 */}
        {questions.QQ22.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_22} />
        </Toggle>

        {/* Q23 */}
        {questions.QQ23.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_23} />
        </Toggle>
      
      
      </ul>

      {/* <p>{Reads.read_2}</p> */}
    
      </div>
      );
}