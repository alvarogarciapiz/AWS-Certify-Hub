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
      answer: 'Coming soon...'
    },
    {
      question: 'Exam Structure',
      answer: 'Coming soon...'
    },
    {
      question: 'How can I register to the exam?',
      answer: 'Coming soon...'
    },
    {
      question: 'Submit a Question',
      answer: 'Coming soon...'
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