import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { Collapse } from "antd";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import ShareBoxFillIcon from "remixicon-react/ShareBoxFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import moment from 'moment';

export default function Contact() {
  const { Panel } = Collapse;
  const [completefeedback, setCompletefeedback] = useState(false)
  const [formdata, setFormdata] = useState({ name: '', eMail: "", message: "" })
  const date = moment().format("ddd D MMM").toLocaleLowerCase();
  const divRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);
  useEffect(() => {
    if (divRef.current) {
      const div = divRef.current;
      const lineHeight = parseFloat(getComputedStyle(div).lineHeight);
      const divHeight = div.clientHeight;
      const lines = divHeight / lineHeight;
      setLineCount(Math.ceil(lines));
    }
  }, [formdata]);
  console.log(lineCount)

  const contact = () => (
    <div className="contact_main">
      {/* <Checkum /> */}
      <div className="contact_detail">
        <MailFillIcon className="fontsize" />
        miabubacker98@gmail.com
      </div>
      <div className="contact_detail">
        <PhoneFillIcon className="fontsize" />
        8144679552
      </div>
    </div>
  );

  const shareAccount = () => (
    <div className="contact_main">
      <div className="contact_detail" onClick={()=>{ window.open('https://github.com/dashboard', "_blank");}}>
        <ShareBoxFillIcon className="fontsize" />
        github
      </div>
      <div className="contact_detail"  onClick={()=>{ window.open('https://www.instagram.com',"_blank")}} >
        <ShareBoxFillIcon className="fontsize" />
        instagram account
      </div>
    </div>
  );
  const completeFrom = () => (
    <div className="completeContatiner">
      <h4>Thank you! 🤘</h4>
      <div className="notification">Your message has been accepted. You will recieve answer really soon!</div>
      <button className="newform_button" onClick={() => { newform() }}>send_new message</button>
    </div>
  )

  const numbers = () => {
    let size = [];
    for (let i = 1; i < lineCount; i++) {
      size.push(i);
    }
    return size;
  };
  const submitform = (e) => {
    e.preventDefault()
    if (formdata.eMail !== '' && formdata.name !== '' && formdata.message) {
      setCompletefeedback(true)
    }
    else {
      alert('Please complete this form')
    }
  }
  const newform = () => {
    setCompletefeedback(false)
    setFormdata({})
  }

  const changeform = (type, typevalue) => {
    let prev = formdata
    if (type === 'name') {
      setFormdata({ ...prev, name: typevalue })
    }
    else if (type === 'mail') {
      setFormdata({ ...prev, eMail: typevalue })
    }
    else if (type === 'message') {
      setFormdata({ ...prev, message: typevalue })
    }
  }


  return (
    <section className="contact_section">
      <div className="mbHeader">_contact-me</div>
      <div className="left_container">
        <Collapse
          bordered={false}
          className="CollapseParent"
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <div>
              <ArrowDownSFillIcon
                className={`${isActive
                    ? "collapseHeaderIconExpand"
                    : "collapseHeaderIconCollapse"
                  }`}
              />
            </div>
          )}
          expandIconPosition="left"
          onChange={() => { }}
        >
          <Panel key="1" header="Contacts">
            {/* <div> */}
            {contact()}
            {/* </div> */}
          </Panel>
        </Collapse>
        <Collapse
          bordered={false}
          className="CollapseParent"
          defaultActiveKey={["2"]}
          expandIcon={({ isActive }) => (
            <div>
              <ArrowDownSFillIcon
                className={`${isActive
                    ? "collapseHeaderIconExpand"
                    : "collapseHeaderIconCollapse"
                  }`}
              />
            </div>
          )}
          expandIconPosition="left"
          onChange={() => { }}
        >
          <Panel key="2" header="find-me-also-in">
            {shareAccount()}
          </Panel>
        </Collapse>
      </div>
      <div className="right_container">
        <div className="header_container">
          <div className="header">
            Contact <CloseFillIcon />
          </div>
        </div>
        <div className="main_drawer">
          <section className="formsection">

            {!completefeedback ? <form className="form">
              <label>_name:</label>
              <input type="text" className="input_feild" value={formdata.name} onChange={(e) => { changeform('name', e.target.value) }} />
              <label>_email:</label>
              <input type="email" className="input_feild" value={formdata.eMail} onChange={(e) => { changeform('mail', e.target.value) }} />
              <label>_message:</label>
              <textarea className="message" value={formdata.message} onChange={(e) => { changeform('message', e.target.value) }} />
              <button className="sumbit_button" onClick={(e) => { submitform(e) }}>submit-message</button>
            </form> : <div className="form">
              {completeFrom()}
            </div>
            }

          </section>
          <div className="code_snippet">
            <div className="snippet">
              <div className="number_forminput">
                {numbers().map((num, index) => (
                  <span key={index} className="numbers">
                    {num}
                    <br />
                  </span>
                ))}
                <div></div>
              </div>
              <div className="sinpped_code" ref={divRef}>
                <> <span className="const">const</span> <span className="function">button</span> <span className="const">=</span> <span className="function">document.querySelector  </span><span className="brackets">(</span><span className="codebtn">'#sendBtn'</span><span className="brackets">);</span></>
                <div></div>
                <><span className="const">const</span> <span className="function">message</span> <span className="const">=</span> <span className="brackets">{`{`}</span> </>
                <div className="innerfunction">
                  <span className="function">name<span className="brackets">:</span> </span><span className="codebtn"> "{formdata.name}"</span><br />
                  <span className="function">email<span className="brackets">:</span> </span><span className="codebtn">"{formdata.eMail}"</span><br />
                  <span className="function">message<span className="brackets">:</span></span><span className="codebtn">"{formdata.message}"</span><br />
                  <div className="date"><span className="brackets">date:</span> <span className="codebtn ">"{date}"</span> <br /></div>
                </div>
                <span className="brackets">{`}`}</span><br />
                <span className="function">button.addEventListener</span><span className="brackets">(</span><span className="codebtn">'click'</span><span className="brackets">, () </span><span className="const">{`=>`}</span><span className="brackets">{`{`}</span><br />
                <div className="innerfunction">
                  <span className="function" >	form.send(message);</span>
                </div>
                <span className="brackets">{`})`}</span>
              </div>
            </div>
            <div className="emptycontact">
            <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
