import React from "react";
import { useState } from "react";
import { faqs } from '../constants/faq-data';

function Faq() {

  const [reactiveFaqs, setReactiveFaqs] = useState(faqs);

  const openQuestion = (index) => {
    const newFaqs = [...reactiveFaqs];
    if (newFaqs[index].active === true) {
      newFaqs[index].active = false;
    } else {
      newFaqs.map((item) => {
        item.active = false;
        return item;
      });
      newFaqs[index].active = true;
    }
    setReactiveFaqs(newFaqs);
  }

  return (
    <div className="faq py-5 w90 max800" id="faq">
      <h2 className="text-center increased-xl">Frequently Asked Questions</h2>
      <div className="faq-space" data-aos="zoom-in" data-aos-delay="300">
        <div className="core">
            {reactiveFaqs.map((item, index) => {
            return <div className="faq-question my-2 clickable" key={index} onClick={() => openQuestion(index)}>
              <div className="spread-info py-2">
                <h5 className="increased mb-0">{item.question}</h5>
                {
                  item.active ? 
                  <i className="fa-solid fa-chevron-up increased"></i> :
                  <i className="fa-solid fa-chevron-down increased"></i>
                }
              </div>
              <div className={"answer" + (item.active ? ' full' : '')}>
                <p className="reduced-soft mb-0">{item.answer}</p>
              </div>
            </div>
          })}
        </div>
      </div>
        
    </div>
  );
}
export default Faq;
