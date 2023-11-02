import React, { useState } from 'react';
import '../assets/styles/Resources.css';

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Where can I find learning resources?',
      answer: `You can find learning resources for AWS (Amazon Web Services) on the <a class="linkDecoration" href="https://docs.aws.amazon.com" target="_blank">official AWS website</a>, which offers extensive documentation, tutorials, and whitepapers. Additionally, AWS provides free online training through its AWS Training and Certification program, including webinars, self-paced labs, and certification exam preparation. Third-party platforms like Coursera, Udemy, and A Cloud Guru also offer AWS courses and certifications, while forums like Stack Overflow and Reddit's /r/aws are useful for community support and discussions. AWS re:Invent and AWS Summit events are great for in-person or virtual conferences to learn from experts and network with peers.`,
    },
    {
      question: 'Exam Tips',
      answer: `
      <b>1. Study the AWS Exam Guide</b><br />
        Review the official AWS Exam Guide for the certification you're pursuing. It outlines the topics, domains, and objectives covered in the exam. Use this as your study roadmap.<br />
      <b>2. Hands-on Experience</b><br />
      Gain practical experience with AWS services by working on real-world projects or using AWS's free tier. Hands-on experience will reinforce your understanding of the concepts and help you remember them during the exam.<br />
      <b>3. AWS Documentation and Whitepapers</b><br />
      AWS provides extensive documentation and whitepapers that cover the services and best practices. These resources offer valuable insights and often contain information relevant to the exam. Make sure to read them thoroughly.<br />
      <b>4. Online Training and Practice Exams</b><br />
      Enroll in online training courses and take practice exams. Platforms like A Cloud Guru, Udemy, and the official AWS Training website offer courses and practice tests that mimic the actual exam format. Practicing with these resources will help you get familiar with the question types and improve your time management skills.<br />
      <b>5. Join Study Groups and Forums</b><br />
      Join AWS certification study groups, online forums, and communities to engage with other learners and professionals. You can exchange tips, insights, and resources, ask questions, and clarify doubts. Sites like the AWS Certification forums can be a valuable resource for connecting with others.<br />`,
    },
    {
      question: 'Exam Structure',
      answer: `
        <b>Multiple-Choice Questions:</b><br />
        Most AWS certification exams consist of multiple-choice questions, where you'll choose the correct answer(s) from a list of options. Some questions may have more than one correct answer, and you must select all that apply.<br />
        <b>Multiple-Response Questions:</b><br />
        In addition to multiple-choice questions, some exams may include multiple-response questions, where you must select two or more correct answers from a list.<br />
        <b>Sample Directions:</b><br />
        You will usually receive sample directions at the beginning of the exam to explain how to answer different question types.<br />
        <b>Exam Duration:</b><br />
        The duration of AWS certification exams varies depending on the specific certification level and exam. Typically, associate-level exams have a 130-minute time limit, professional-level exams have a 180-minute time limit, and specialty exams may vary.<br />
        <b>Number of Questions:</b><br />
        The number of questions in an exam can vary. Associate-level exams often have around 65 questions, while professional-level exams typically have around 75 questions. Specialty exams may have a different number of questions.<br />
        <b>Passing Score:</b><br />
        You will need to achieve a minimum passing score to pass the exam. The passing score can vary between different AWS certifications, but it is usually around 70-75%.<br />
        <b>Exam Domains:</b><br />
        AWS certification exams are divided into domains or subject areas, each covering specific topics. You will see the domains listed in the exam guide, and the questions will be distributed among these domains.<br />
        <b>Unscored Questions:</b><br />
        Some AWS exams may include unscored questions, which are used for research and do not count toward your final score. You won't know which questions are unscored, so it's essential to answer every question to the best of your ability.<br />
        <b>Exam Format:</b><br />
        AWS offers both in-person and online proctored exam options. You can choose the format that suits your preferences and circumstances.<br />`,
    },
    {
      question: 'How can I register to the exam?',
      answer: `To register for an AWS certification exam, create an AWS Certification Account, select your desired exam, schedule a date and time, make payment, and prepare for the exam. On the scheduled date, take the exam, and you\'ll receive immediate results and an email with your score. <a class="linkDecoration" href="https://aws.amazon.com/es/certification/certification-prep/testing/" target="_blank">AWS official website</a>`
    },
    {
      question: 'Submit a Question',
      answer: `You can submit a question to the AWS Certify Hub team by opening an issue on our <a class="linkDecoration" href="https://github.com/alvarogarciapiz/AWS-Certify-Hub" target="_blank">GitHub Repository</a>.`
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
  <div key={index} className="faq-item">
    <div
      className={`faq-question ${activeIndex === index ? 'active' : ''}`}
      onClick={() => toggleAccordion(index)}
    >
      {item.question}
    </div>
    {activeIndex === index && (
      <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
    )}
  </div>
))}

    </div>
  );
};

export default Resources;
