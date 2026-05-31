// src/App.tsx
//import React from 'react';
// 把所有 export 的變數打包成一個叫作 'Reads' 的物件
import * as Reads from "../../component/zip_word_jlpt3";
import {questions} from "../../component/zip_word_jlpt3"
//import Toggle from "../../component/func_toggle_list";
import RedMarkdown from "../../component/func_mkdown_redpt";

// 抓出題目



export default function N3_t03() {
  return (
    <div className="font">
      <h3>第三回JLPT 試題review</h3>
      <h5>詞彙問題</h5>
    
        {/* Q15 */}
        {questions.Q15.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q16 */}
        {questions.Q16.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q17 */}
        {questions.Q17.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q18 */}
        {questions.Q18.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q19 */}
        {questions.Q19.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q20 */}
        {questions.Q20.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q21 */}
        {questions.Q21.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q22 */}
        {questions.Q22.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q23 */}
        {questions.Q23.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

        {/* Q24 */}
        {questions.Q24.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}


        {/* Q25 */}
        {questions.Q25.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

              {/* Q18 */}
        {questions.Q18.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

              {/* Q18 */}
        {questions.Q18.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}


      
      <p>{Reads.read_2}</p>
    
      </div>
      );
}