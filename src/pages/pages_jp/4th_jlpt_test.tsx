
// 把所有 export 的變數打包成一個叫作 'Reads' 的物件
import * as Reads from "../../component/zip_word_jlpt4";
import {questions} from "../../component/zip_word_jlpt4"
//import Toggle from "../../component/func_toggle_list";
import RedMarkdown from "../../component/func_mkdown_set";
import Toggle from "../../component/func_toggle_list";

export default function N3_t04() {
  return (
    <div className="font">
      <h3>第四回JLPT 試題review</h3>
      <h5>詞彙問題</h5>
      <ul>
        {/* Q1 */}
        {questions.Q1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_1} />
        </Toggle>

        {/* Q2 */}
        {questions.Q2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_2} />
        </Toggle>

        {/* Q3 */}
        {questions.Q3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_3} />
        </Toggle>

        {/* Q4 */}
        {questions.Q4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_4} />
        </Toggle>

        {/* Q5 */}
        {questions.Q5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_5} />
        </Toggle>

        {/* Q6 */}
        {questions.Q6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_6} />
        </Toggle>

        {/* Q7 */}
        {questions.Q7.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_7} />
        </Toggle>

        {/* Q8 */}
        {questions.Q8.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_8} />
        </Toggle>

        <p>問題 2 ______のことばを漢字で書くとき、最もよいものを、1・2・3・4から一つえらびなさい。
            </p>


        {/* Q9 */}
        {questions.Q9.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_9} />
        </Toggle>

        {/* Q10 */}
        {questions.Q10.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_10} />
        </Toggle>

        {/* Q11 */}
        {questions.Q11.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_11} />
        </Toggle>

        {/* Q12 */}
        {questions.Q12.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_12} />
        </Toggle>

        {/* Q13 */}
        {questions.Q13.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_13} />
        </Toggle>

        {/* Q14 */}
        {questions.Q14.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_14} />
        </Toggle>

        <p>問題 3 （  ）に入れるのに最もよいものを、1・2・3・4から一つえらびなさい。</p>

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

        <p>問題4
          ＿＿＿に意味が最も近いものを、1・2・3・4から一つえらびなさい。</p>

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

        <p>問題5 つぎのことばの使い方として最もよいものを、1・2・3・4から一つえらびなさい。</p>
        
        {/* Q31 */}
        {questions.Q31.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_31} />
        </Toggle>

        {/* Q32 */}
        {questions.Q32.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_32} />
        </Toggle>


        {/* Q33 */}
        {questions.Q33.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_33} />
        </Toggle>

        {/* Q34 */}
        {questions.Q34.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_34} />
        </Toggle>

        {/* Q35 */}
        {questions.Q35.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans_35} />
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

        <RedMarkdown content={Reads.read_2} />
        {/* Q24 */}
        {questions.QQ24.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_24} />
        </Toggle>

        <RedMarkdown content={Reads.read_3} />
        {/* Q25 */}
        {questions.QQ25.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_25} />
        </Toggle>

        <RedMarkdown content={Reads.read_4} />
        {/* Q26 */}
        {questions.QQ26.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_26} />
        </Toggle>

        <RedMarkdown content={Reads.read_5} />
        {/* Q27 */}
        {questions.QQ27.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_27} />
        </Toggle>

                <RedMarkdown content={Reads.read_6} />
        {/* Q28 */}
        {questions.QQ28.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_28} />
        </Toggle>
      
      {/* Q29 */}
        {questions.QQ29.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_29} />
        </Toggle>

        {/* Q30 */}
        {questions.QQ30.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_30} />
        </Toggle>

        <RedMarkdown content={Reads.read_7} />
        {/* Q31 */}
        {questions.QQ31.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_31} />
        </Toggle>

        {/* Q32 */}
        {questions.QQ32.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_32} />
        </Toggle>
      
      {/* Q33 */}
        {questions.QQ33.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_33} />
        </Toggle>

        <RedMarkdown content={Reads.read_8} />
        {/* Q34 */}
        {questions.QQ34.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_34} />
        </Toggle>

        {/* Q35 */}
        {questions.QQ35.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_35} />
        </Toggle>
      
      {/* Q36 */}
        {questions.QQ36.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_36} />
        </Toggle>

       {/* Q37 */}
        {questions.QQ37.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ans2_37} />
        </Toggle>
      
        <h5>聽力</h5>
        <p>Part1</p>
        {questions.L1_1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_1} />
        </Toggle>

        {questions.L1_2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_2} />
        </Toggle>


        {questions.L1_3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_3} />
        </Toggle>

        {questions.L1_4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_4} />
        </Toggle>


        {questions.L1_5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}


        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_5} />
        </Toggle>

        {questions.L1_6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL1_6} />
        </Toggle>

        <p>Part2</p>
        {questions.L2_1.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_1} />
        </Toggle>

        {questions.L2_2.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_2} />
        </Toggle>


        {questions.L2_3.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_3} />
        </Toggle>

        {questions.L2_4.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_4} />
        </Toggle>


        {questions.L2_5.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_5} />
        </Toggle>

        {questions.L2_6.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL2_6} />
        </Toggle>

        <p>Part3</p>
        <p>1 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL3_1} />
        </Toggle>

        <p>2 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL3_2} />
        </Toggle>

        <p>3 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL3_3} />
        </Toggle>

        <p>Part5</p>
        <p>1 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_1} />
        </Toggle>

        <p>2 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_2} />
        </Toggle>

        <p>3 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_3} />
        </Toggle>

        <p>4 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_4} />
        </Toggle>

        <p>5 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_5} />
        </Toggle>

        <p>6 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_6} />
        </Toggle>

        <p>7 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_7} />
        </Toggle>

        <p>8 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_8} />
        </Toggle>

        <p>9 ばん</p>
        <Toggle title="ans">
        <RedMarkdown content={Reads.ansL5_9} />
        </Toggle>
        
      </ul>

      {/* <p>{Reads.read_2}</p> */}
    
      </div>
      );
}