# AWS P2 — AWS Practice Portal

AWS P2 (AWS Practice Portal) is a free, open, and modern platform for practicing AWS certification exams. The portal offers practice tests, error tracking, resources, and exam simulators for AWS Cloud Practitioner, AWS Solutions Architect, and AWS DevOps Professional certifications.

## Overview

![Project overview](./src/assets/images/home.png)

AWS P2 is built with React and Vite, designed to help individuals prepare for AWS certifications. It provides a variety of resources and tools to enhance your certification preparation, with a focus on accessibility, modern UI/UX, and open access.

## Features

- **Modern, Responsive Design:** Clean, minimal, and professional interface optimized for all devices.
- **Dark Mode Support:** Adapts automatically to your device's color scheme preferences.
- **Practice Exams:** Select the number of questions you want to practice for each exam.
- **Error Tracking:** Focused error tests to help you improve on previously failed questions.
- **Exam Simulator:** Downloadable exam simulators for realistic practice (Cloud Practitioner & Solutions Architect).
- **Learning Resources:** Curated resources, tips, and FAQs to guide your AWS certification journey.
- **Progression Tracking:** Track your correct/incorrect answers and progression.
- **SEO Optimized:** Meta tags, sitemap, and llms.txt for discoverability and AI indexing.
- **Open Source:** 100% free and open for contributions.

## Exams Available

- **Cloud Practitioner:** Practice tests, error tests, and downloadable exam simulator.
- **Solutions Architect:** Practice tests, error tests, and downloadable exam simulator.
- **DevOps Professional:** Practice tests, error tests, and downloadable exam simulator.

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/alvarogarciapiz/AWS-Certify-Hub.git
   cd AWS-Certify-Hub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
public/
  ├── AWSHub_fullorange.ico
  ├── BCPR_exams.webp
  ├── BCPR_errors.webp
  ├── BCPR_simulator.jpg
  ├── BCPR_simulator.webp
  ├── ISAR_exams.jpg
  ├── ISAR_errors.jpg
  ├── ISAR_simulator.jpg
  ├── icon192.png
  ├── icon512.png
  ├── og.png
  ├── fonts/
  ├── sitemap.xml
  ├── llms.txt
  ├── robots.txt
src/
  ├── assets/
  │   ├── styles/
  │   ├── images/
  │   ├── preguntas.json
  │   ├── ISAR.json
  ├── components/
  ├── App.jsx
  ├── main.jsx
```

## SEO & Discoverability

- **Meta tags** and Open Graph/Twitter Card for rich sharing.
- **Sitemap.xml** for search engines.
- **llms.txt** for AI assistants and LLMs ([spec](https://llmstxt.org)).
- **robots.txt** for crawler control.

## Contributing

We welcome contributions from the community! If you'd like to contribute to AWS P2, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:  
   `git checkout -b feature/your-feature-name`
3. Make your changes and ensure they are properly tested.
4. Commit your changes:  
   `git commit -m "Add your commit message"`
5. Push to your fork:  
   `git push origin feature/your-feature-name`
6. Create a pull request, explaining your changes and their benefits.

## License

This project is licensed under the AGPL-3.0 license.

## Author & Credits

Developed by [Álvaro García Pizarro](https://www.lvrpiz.com)  
GitHub: [@alvarogarciapiz](https://github.com/alvarogarciapiz)  
Twitter/X: [@lvrpiz](https://x.com/lvrpiz)

---

*AWS P2 — AWS Practice Portal is not affiliated with Amazon Web Services (AWS). All trademarks are property of their respective owners.*