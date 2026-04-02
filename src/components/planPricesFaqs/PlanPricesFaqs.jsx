import React, { useState } from "react";
import "./PlanPricesFaqs.css";

const prices = [
  {
    id: 1,
    question:
      "If we buy the launch plan, will that be added to our existing subscription?",
    answer: `Yes it shall be added to your existing subscription and will start after the existing subscription ends`,
  },
  {
    id: 2,
    question: "What does CoreBTR include?",
    answer: `CoreBTR offers a complete revision ecosystem—high-yield videos, structured notes, PYQs, a curated QBank, video solutions, grand tests, and topic-wise pearls—all in one platform.`,
  },
  {
    id: 3,
    question: "Are the revision videos enough for exam preparation?",
    answer: `Yes. The videos are designed to be concise, high-yield, and concept-driven, covering all 19 subjects with integrated systems for effective revision.`,
  },
  {
    id: 4,
    question: "How are the notes and workbooks structured?",
    answer: `The notes and workbooks are aligned with the video content and focus on quick revision, active recall, and easy retention during multiple revisions.`,
  },
  {
    id: 5,
    question: "Does CoreBTR include PYQs from all exams?",
    answer: `Yes. PYQs from NEET PG, INI-CET, and FMGE are included, organized topic-wise and exam-wise for targeted practice.`,
  },
  {
    id: 6,
    question: "What makes the QBank different?",
    answer: `The QBank is curated with application-based MCQs that help improve clinical thinking, accuracy, and exam temperament—not just theory recall.`,
  },
  {
    id: 7,
    question: "What are #ZVRecommended PYQs?",
    answer: `These are handpicked, high-yield PYQs recommended by Dr. Zainab Vora.`,
  },
  {
    id: 8,
    question: "Are there tests to track performance?",
    answer: `Yes. CoreBTR includes Grand Tests and Subject Tests to help you assess your preparation, identify weak areas, and improve performance.`,
  },
  {
    id: 9,
    question: "What are Topic-Wise Pearls?",
    answer: `These are ultra high-yield, quick-revision points designed for last-minute recall and rapid revision before exams.`,
  },
  {
    id: 10,
    question: "Will there be flashcards available?",
    answer: `Yes. Flashcards are coming soon and will help with active recall, memory reinforcement, and efficient revision.`,
  },
  {
    id: 11,
    question: "Is CoreBTR suitable for revision?",
    answer: `Absolutely. The entire platform is designed for rapid, high-yield revision—making it ideal for both ongoing prep and last-phase revision.`,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is changing?",
    answer: `Dr. Zainab Vora will be launching her independent academic app on <strong>2nd April 2026</strong>.
<ul>
<li>Academic commitments at Cerebellum will continue till <strong>NEET PG 2026</strong>.</li>
<li>There will be <strong>no abrupt changes.</strong></li>
<li>All scheduled classes and topics will be completed as planned.</li>
</ul>
This is a structured academic transition based on growth.`,
  },
  {
    id: 2,
    question: "Do I need to take any action right now?",
    answer: `No. Till <strong>31st March 2026</strong>:
<ul>
<li>Continue studying normally on Cerebellum.</li>
<li>No action required.</li>
</ul>
Transition instructions will be communicated in advance.`,
  },
  {
    id: 3,
    question: "Why is this transition happening?",
    answer: `This is a growth-driven decision. Dr. Zainab Vora is launching her own platform to:
<ul>
<li>Connect more personally with students.</li>
<li>Expand academic flexibility.</li>
<li>Experiment with new teaching approaches.</li>
</ul>`,
  },
  {
    id: 4,
    question:
      "Will BTR online students lose access after March 31, 2026 on Cerebellum App?",
    answer: `No. Here is how it works:
<ul>
<li>BTR online access continues on Cerebellum till <strong>31st March 2026</strong>.</li>
<li>BTR online recorded videos will be accessible on Cerebellum App after <strong>31st March 2026</strong>.</li>
<li>From <strong>2nd April 2026</strong>, the current BTR online subscribers access shifts to the new independent app.</li>
<li>Your validity remains exactly as per your original subscription till <strong>31st March 2027</strong>.</li>
</ul>
There is:
<ul>
<li>No loss of subscription duration or interruption in preparation.</li>
<li>No reduction in access.</li>
</ul>`,
  },
  {
    id: 5,
    question: "Do students need to pay anything extra for the transition?",
    answer: `No. All BTR online and Mission subscribers:
<ul>
<li>Do not need to pay any additional fee till course validity.</li>
<li>Do not need to repurchase the course till course validity.</li>
</ul>`,
  },
  {
    id: 6,
    question: "What happens to Mission students who have BTR online included?",
    answer: `Mission subscribers will continue to receive access to BTR Online recorded videos on the Cerebellum platform as per their subscription validity.</br>
Access in new app will be added till course validity.`,
  },
  {
    id: 7,
    question:
      "If I purchase BTR online or Mission in March 2026, what happens?",
    answer: `You will:
<ul>
<li>Get access on the new platform for the remaining validity period i.e.: <strong>31st March 2027</strong>.</li>
<li>Experience no disruption in preparation.</li>
<li>For Mission subscribers, only BTR online access will be shifted after <strong>31st March 2026</strong>, and they will only get BTR recorded videos on Cerebellum.</li>
</ul>`,
  },
  {
    id: 8,
    question: "What about BTR online Notes?",
    answer: `Options:
<ul>
<li>Continue using existing BTR online notes, or</li>
<li>Purchase new updated notes when the new platform launches.</li>
</ul>
Buying new notes is optional.`,
  },
  {
    id: 9,
    question: "What changes will happen at Cerebellum after 31st March 2026?",
    answer: `After March 31, 2026: </br>
1. A new <strong>Ultra High Revision Program</strong> will be launched.
  <ul>
    <li>Structured high-yield format</li>
    <li>Designed with all 19 faculties</li>
    <li>Available to active Mission and BTR subscribers till subscription validity</li>
  </ul>
2. A new Radiology faculty will be introduced.</li> </br>
All other academic systems remain unchanged.`,
  },
  {
    id: 10,
    question: "Will Cerebellum's Mission Program continue?",
    answer: `Yes. The following remain unchanged:
<ul>
<li>19 Faculty structure (Radiology update post April)</li>
<li>Grand Tests</li>
<li>Test Series</li>
<li>QBank</li>
<li>Flashcards</li>
<li>E&amp;D</li>
<li>Mentorship</li>
<li>Academic Schedule</li>
</ul>`,
  },
  {
    id: 11,
    question: "Will NEET PG 2026 preparation be affected?",
    answer: `No.
<ul>
<li>All academic commitments till NEET PG 2026 will be completed.</li>
<li>Classes will continue as scheduled.</li>
<li>There will be no interruption in preparation.</li>
</ul>`,
  },
  {
    id: 12,
    question: "Is there any conflict between Cerebellum and Dr. Zainab?",
    answer: `No. This is a structured academic transition based on professional growth. Both parties maintain mutual respect and transparency.`,
  },
  {
    id: 13,
    question: "What is the transition timeline?",
    answer: `<ul>
<li><strong>Till 31st March 2026:</strong> BTR online continues on Cerebellum App.</li>
<li><strong>2nd April 2026:</strong> Independent app launches.</li>
<li><strong>After March 31:</strong> Remaining validity of BTR online shifts to new app.</li>
</ul>`,
  },
  {
    id: 14,
    question:
      "Mission Plan subscriber who have subscribed for more than 1 year?",
    answer: `BTR online access on Cerebellum will remain active till <strong>31st March 2026</strong>.</br>
After that, access will shift to the new app and continue till <strong>31st March 2027</strong>.</br>
Post this date, a new plan will need to be purchased.`,
  },
  {
    id: 15,
    question: "Will my preparation be interrupted?",
    answer: `Absolutely not. The transition is designed to ensure:
<ul>
<li>Zero loss of access</li>
<li>Zero financial impact</li>
<li>Full academic continuity</li>
</ul>`,
  },
  {
    id: 16,
    question: "Will all Cerebellum videos be available on the new platform?",
    answer: `Only BTR online program will migrate to Dr. Zainab's independent app, Cerebellum Mission content and other faculties remain on Cerebellum.`,
  },
  {
    id: 17,
    question: "Who should I contact for issues during transition?",
    answer: `You can connect on our customer care number i.e.: <strong>7428581909</strong>.`,
  },
  {
    id: 18,
    question: "Who is this transition applicable to?",
    answer: `The transition applies to:
<ul>
<li>Independent BTR online subscribers.</li>
<li>Mission students who have BTR online.</li>
<li>Students purchasing BTR online till <strong>31st March 2026</strong>.</li>
</ul>
Cerebellum's other courses and systems remain unaffected.`,
  },
  {
    id: 19,
    question: "Should new students wait until April to buy BTR Online?",
    answer: `Not necessary. Students can start BTR Online now, then transition automatically to the new platform or wait for the new version after April. Both options are acceptable.`,
  },
];

const extensions = [
  {
    id: 1,
    question: "What happens if I do NOT purchase any extension?",
    answer: `Your access remains as per your current plan.`,
  },
  {
    id: 2,
    question:
      "What if I purchase a 3-month extension BEFORE 31st March 2026 (11:59 PM)?",
    answer: `The extension will apply to both CBA and CoreBTR.`,
  },
  {
    id: 3,
    question:
      "What if I purchase a 3-month extension AFTER 31st March 2026 (11:59 PM)?",
    answer: `The extension will apply <strong>ONLY to CBA</strong>. CoreBTR will <strong>NOT</strong> be extended.`,
  },
  {
    id: 4,
    question:
      "I am enrolled in a 4-Year Mission Plan. What will be my validity?",
    answer: `You will get CoreBTR access till <strong>31st March 2027</strong>.`,
  },
  {
    id: 5,
    question:
      "What if I purchased TWO extensions (6 months each) BEFORE 31st March 2026?",
    answer: `You will get CoreBTR access till <strong>31st March 2027</strong>.`,
  },
  {
    id: 6,
    question: "Is there any deadline for extension?",
    answer: `Yes. The deadline is <strong>31st March 2026 (11:59 PM)</strong>.`,
  },
  {
    id: 7,
    question: "Will I get CoreBTR access if I extend AFTER the deadline?",
    answer: `No. CoreBTR access will <strong>NOT</strong> be available after the deadline. </br>
    Only CBA validity will be extended.`,
  },
  {
    id: 8,
    question: "I am a BTR-only subscriber. What should I do?",
    answer: `<ul>
<li><strong>Before 31st March:</strong> You can extend and retain BTR access.</li>
<li><strong>After 31st March:</strong> No extension option for BTR will be available.</li>
</ul>`,
  },
  {
    id: 9,
    question:
      "I am a Mission student with complimentary BTR. How does extension work for me?",
    answer: `<ul>
<li><strong>Before 31st March:</strong> Extension will include complimentary CoreBTR access.</li>
<li><strong>After 31st March:</strong> Extension will be available WITHOUT CoreBTR access.</li>
</ul>`,
  },
  {
    id: 10,
    question: "Who should definitely take extension before the deadline?",
    answer: `Students targeting <strong>NEET PG 2026 (August)</strong> whose plan expires before the exam should strongly consider extending before <strong>31st March</strong> to avoid losing CoreBTR access.`,
  },
];

const device = [
  {
    id: 1,
    question: "What does my CoreBTR subscription include?",
    answer: `Your subscription gives access to high-yield revision videos, notes, QBank, PYQs, tests, and all platform features during your validity period.`,
  },
  {
    id: 2,
    question: "Can I transfer my subscription to someone else?",
    answer: `No. Subscriptions are strictly non-transferable and meant for individual use only.`,
  },
  {
    id: 3,
    question: "What happens after my subscription expires?",
    answer: `You will lose access to all CoreBTR content once your validity ends unless you renew or extend your subscription.`,
  },
  {
    id: 4,
    question: "Which devices support CoreBTR?",
    answer: `CoreBTR works only on: </br>
    ✔ Android phones &amp; tablets (Android Version - 10 or Above) </br>
    ✔ iPhones &amp; iPads (IOS Version - 14) <br/>
     For More Information - <a href="https://corebtr.com/fair-usage-policy">Click Here</a>
    `,
  },
  {
    id: 5,
    question: "Can I use CoreBTR on laptop or desktop?",
    answer: `No. The app is strictly blocked on: </br>
✖ macOS </br>
✖ Windows </br>
✖ Chromebooks </br>
✖ Emulators &amp; Virtual Machines
`,
  },
  {
    id: 6,
    question: "How many devices can I use with one account?",
    answer: `Each account can be linked to a maximum of 2 unique devices (mobiles/tablets only).`,
  },
  {
    id: 7,
    question: "When does a device get linked?",
    answer: `Devices are linked after purchase during login/setup, with prompts shown to the user.`,
  },
  {
    id: 8,
    question: "Can I add more than 2 devices?",
    answer: `No. Once 2 devices are linked, no additional devices can be added.`,
  },
  {
    id: 9,
    question: "Can I change, remove, or reset a registered device?",
    answer: `No. Device mapping is permanent (lifetime limit).</br>
No resets, replacements, or changes are allowed.`,
  },
  {
    id: 10,
    question: "What happens if I share my account and someone else logs in?",
    answer: `If a third device gets linked:
<ul>
<li>You will permanently lose one device slot</li>
<li>This cannot be reversed</li>
</ul>`,
  },
  {
    id: 11,
    question: "Can I use both devices at the same time?",
    answer: `No. Only one active session is allowed at any given time.`,
  },
  {
    id: 12,
    question: "What happens if I log in on another device?",
    answer: `Your previous session will be automatically logged out.`,
  },
  {
    id: 13,
    question: "Can multiple users use the same account?",
    answer: `No. Sharing credentials for simultaneous or multi-user access is a policy violation.`,
  },
  {
    id: 14,
    question: "Will the app work on rooted or jailbroken devices?",
    answer: `No. The app will not function on rooted or jailbroken devices.`,
  },
  {
    id: 15,
    question: "Can I record, mirror, or capture the content?",
    answer: `Strictly prohibited:
<ul>
<li>Screen recording</li>
<li>Screen mirroring</li>
<li>External capture tools/software</li>
</ul>
Violation may result in:
<ul>
<li>Immediate account ban</li>
</ul>`,
  },
  {
    id: 16,
    question: "Why are these restrictions in place?",
    answer: `To ensure: </br>
✔ Fair usage </br>
✔ Prevention of account sharing </br>
✔ Content protection &amp; platform security </br>
`,
  },
  {
    id: 17,
    question: "What should I do if I face login or device issues?",
    answer: `Contact CoreBTR Helpline: 7428581909`,
  },
];

const mission = [
  // {
  //   id: 1,
  //   question:
  //     "I do not have my old registered number for the Cerebellum app. How can I log in to the new app?",
  //   answer: `We will provide you with an OTP for login after verification between <b>9:30 AM to 6:00 PM.</b>`,
  // },
  // {
  //   id: 2,
  //   question:
  //     "I have given consent but have not received any email. What should I do?",
  //   answer: `Please check your Spam and “All Mail” folders. If you still haven’t received it, contact support.`,
  // },
  // {
  //   id: 3,
  //   question:
  //     "I gave consent after 31st March. Will I still be able to log in?",
  //   answer: `Please share your registered details along with a screenshot of the consent confirmation with the support team for verification.`,
  // },
  {
    id: 1,
    question: "Will Champions subscribers get access to CoreBTR?",
    answer: `Yes, Champions subscribers will get access to CoreBTR.`,
  },
  // {
  //   id: 5,
  //   question:
  //     "The Cerebellum app is working on my device, but Core BTR is not working. Why?",
  //   answer: `This may be due to updated security features or device compatibility requirements in the Core BTR app. Please ensure your app and device are updated.`,
  // },
  {
    id: 2,
    question:
      "I am an active subscriber in Cerebellum. When will I get access to the Core BTR app?",
    answer: `Access will be provided from <b>2nd April, 11:30 PM onwards.</b>`,
  },
  {
    id: 3,
    question:
      "I have a 3-year Cerebellum plan and have also taken Core BTR. When will my plan get activated?",
    answer: `You will be able to access the app from <b>2nd April 2026 11:30 PM onwards.</b> However, if your subscription in Cerebellum is ending post <b>March 2027</b>, then app access in CoreBTR will be till <b>31st March 2027 only.</b>`,
  },
  {
    id: 4,
    question:
      "Do we need to follow the old BTR group, or will a new group be created? How will I get access?",
    answer: `There is no update yet. Please wait for the official announcement.`,
  },
  {
    id: 5,
    question:
      "Will we be able to watch Dr. Zainab Ma’am’s old videos in the Cerebellum app? If yes, till when?",
    answer: `Yes, you can watch them as long as your Cerebellum plan remains active.`,
  },
  {
    id: 6,
    question: "I have a BTR plan. Will I be able to watch videos on both apps?",
    answer: `Yes, you can access both apps. However, all new videos will be available only on the CoreBTR app.`,
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`plan-faq-item ${open ? "plan-faq-item-open" : ""}`}
      style={{ "--i": index }}
      onClick={() => setOpen(!open)}
    >
      <div className="plan-faq-item-header">
        <span className="plan-faq-item-number">
          {String(faq.id).padStart(2, "0")}
        </span>
        <h3 className="plan-faq-item-question">{faq.question}</h3>
        <span className="plan-faq-item-icon">{open ? "−" : "+"}</span>
      </div>
      <div className="plan-faq-item-body">
        <div
          className="plan-faq-item-answer"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
}

function PlanPricesFaqs() {
  return (
    <div className="plan-faq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="plan-faq-main">
        <h4>1. About Plans & Prices</h4>
        <div className="faq-list">
          {prices.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="plan-faq-main">
        <h4>2. Cerebellum Subscribers to CoreBTR</h4>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="plan-faq-main">
        <h4>3. Cerebellum Extensions</h4>
        <div className="faq-list">
          {extensions.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="plan-faq-main">
        <h4>4. Subscription & Device Policy</h4>
        <p>
          For More Information -{" "}
          <a href="https://corebtr.com/fair-usage-policy">Click Here</a>
        </p>

        <div className="faq-list">
          {device.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>

      <div className="plan-faq-main">
        <h4>5. FAQs for Mission & BTR Subscribers - Cerebellum Academy</h4>
        <div className="faq-list">
          {mission.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanPricesFaqs;
