import React from "react";

function Faq() {
  return (
    // <div className="faq py-5 w90 max800" id="faq">
    //   <h2 className="text-center increased-xl">Frequently Asked Questions</h2>
    //   <div className="faq-space" data-aos="zoom-in" data-aos-delay="300">
    //     <div className="core">
    //         {reactiveFaqs.map((item, index) => {
    //         return <div className="faq-question my-2 clickable" key={index} onClick={() => openQuestion(index)}>
    //           <div className="spread-info py-2">
    //             <h5 className="increased mb-0">{item.question}</h5>
    //             {
    //               item.active ?
    //               <i className="fa-solid fa-chevron-up increased"></i> :
    //               <i className="fa-solid fa-chevron-down increased"></i>
    //             }
    //           </div>
    //           <div className={"answer" + (item.active ? ' full' : '')}>
    //             <p className="reduced-soft mb-0">{item.answer.map((item, index) => <span key={index}>- {item}<br /></span>)}</p>
    //           </div>
    //         </div>
    //       })}
    //     </div>
    //   </div>

    // </div>

    <div className="faq-section">
      <div className="h3 text-center mb-4 title">Frequenty asked questions</div>
      <p className="text-center my-4">
        We’ve collated answers to some questions you might have and we hope this
        helps you understand our app.
      </p>
      <div className="container-lg" data-aos="zoom-in" data-aos-delay="300">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 col-12">
            <div className="faq-card my-3">
              <div className="row faq">
                <div className="col">
                  <div className="divider"></div>
                  <div className="tabs">
                    <div className="tab">
                      <input type="checkbox" id="tab-one" />
                      <label className="tab-label" htmlFor="tab-one">
                        What is Haraka
                      </label>
                      <div className="tab-content">
                        Haraka is a technology solution that integrates online
                        food and grocery delivery all-in-one app to simplify
                        accessibility and delivery. Our vision is to make your
                        life simpler, one order at a time.
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="tab">
                      <input type="checkbox" id="tab-two" />
                      <label className="tab-label" htmlFor="tab-two">
                        At what locations does Haraka deliver?
                      </label>
                      <div className="tab-content">
                        We're currently running our services within Tanzania.
                        Our goal is to expand our activities in Kenya, Rwanda
                        and eventually Nigeria.
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="tab">
                      <input type="checkbox" id="tab-three" />
                      <label className="tab-label" htmlFor="tab-three">
                        How do I create an account on Haraka?
                      </label>

                      <div className="tab-content">
                        'You can download Haraka by searching the Playstore or
                        App Store on your phone.', 'Launch the Haraka app and
                        then click the Create button on your phone.', 'Provide
                        your first name, last name, phone number, email address,
                        and any referral codes you have.',
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
