# Aditya Vinayak Chavan — 3D Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

Welcome to my personal **3D Developer Portfolio**. This website showcases my projects in **Artificial Intelligence, Deep Learning, Full-Stack Web Development, and Mobile Engineering**, alongside my experience, education, and credentials.

---

## 👨‍💻 About Me

- 🎓 **B.Tech in Computer Engineering (Honours in Next-Gen AI)** — *Vidyalankar Institute of Technology, Mumbai* (CGPA: **9.75 / 10**)
- 💼 **Former Flutter Developer Intern** — *DreamVentz*
- 🛠️ **Core Specialties**:
  - **AI / ML**: PyTorch, Hugging Face Transformers, BERT, 3D ResNet-18, torchaudio, Scikit-learn
  - **Backend & Cloud**: FastAPI, Node.js, Express.js, AWS SageMaker, AWS S3, Supabase, PostgreSQL, MongoDB
  - **Frontend & Mobile**: React, Next.js, Flutter, Dart, Tailwind CSS, Three.js, TanStack Query, Zustand
- 🌐 **Links**: [GitHub](https://github.com/TearCake) | [LinkedIn](https://linkedin.com/in/aditya-chavan-500a59267) | Email: [adityachavan1357@gmail.com](mailto:adityachavan1357@gmail.com)

---

## 🚀 Featured Projects

### 1. [Multimodal Video Sentiment & Emotion Analysis](https://github.com/TearCake/video-sentiment-model.git)
- End-to-end multimodal deep learning system predicting 3-class sentiment and 7-class emotion from video by fusing text, visual, and audio features using frozen **BERT**, **3D ResNet-18**, and **Mel-spectrogram 1D CNNs** on the MELD dataset.
- Deployed as a SaaS pipeline with **AWS SageMaker**, **S3**, and a **Next.js** frontend.

### 2. [Audio Classifier & Visualizer](https://github.com/TearCake/audio-classifier.git)
- Local-first audio classification and visualization platform achieving **81.25% validation accuracy**.
- Features an inference pipeline delivering predictions, waveforms, spectrograms, and intermediate CNN feature-map activations via **FastAPI** JSON endpoints and an interactive **Next.js** dashboard.

### 3. [Picassa – Full-Stack Social App with Image Editor](https://github.com/TearCake/Picassa.git)
- Social media platform featuring image sharing and a custom layer-based image editor built with the **HTML5 Canvas API**.
- Implemented with **React**, **Node.js/Express**, **MongoDB**, **ImageKit CDN**, **Zustand**, and **TanStack Query**.

---

## ⚙️ Tech Stack

- **Framework**: React 18
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, `react-parallax-tilt`
- **Build Tool**: Vite
- **Contact Service**: EmailJS

---

## 🛠️ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/TearCake/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory (refer to `.env.example`):
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Acknowledgements & Credits

This portfolio's 3D visual layout and foundation was adapted from the open-source [3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) template by [Adrian Hajdin (JavaScript Mastery)](https://github.com/adrianhajdin). Special thanks to Adrian for creating and sharing the base 3D interactive portfolio architecture with the developer community!
