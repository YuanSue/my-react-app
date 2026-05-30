// src/App.tsx
import React from 'react';
// 把所有 export 的變數打包成一個叫作 'Reads' 的物件
import * as Reads from "../../component/zip_word_jlpt3";
import {questions} from "../../component/zip_word_jlpt3"
import Toggle from "../../component/func_toggle_list";
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

                {/* Q15 */}
        {questions.Q15.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}

                {/* Q15 */}
        {questions.Q15.sentences.map((s, i) => (
          <li key={i} className="no-list-style">
            <RedMarkdown content={s} />
          </li>
        ))}


      
      <p>{Reads.read_2}</p>
    
      </div>
      );
}