# Links Landing Page

A dynamic and mobile-friendly landing page for showcasing links to social profiles, portfolio, and contact information. Built with **Next.js**, this project demonstrates a clean, modern UI with performance optimizations.

![Screenshot of the Links Landing Page](public/screenshot.png) <!-- Replace with an actual screenshot -->

---

## 🚀 Features

- Responsive design optimized for mobile and desktop.
- Dynamic profile/logo switching with smooth animations.
- SEO-friendly metadata for social sharing and discoverability.
- Optimized images and lazy loading for fast performance.
- Accessible design with ARIA labels.
- Easy customization for links and content.

---

## 🛠️ Technologies

- **[Next.js](https://nextjs.org/):** Framework for React applications.
- **[Tailwind CSS](https://tailwindcss.com/):** For styling.
- **[React Icons](https://react-icons.github.io/react-icons/):** For scalable vector icons.
- **[Vercel](https://vercel.com/):** Deployment and hosting.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/links-landing-page.git
Navigate into the project directory:
bash
Copy code
cd links-landing-page
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
🔧 Configuration
Update your social links and profile information in Home.js:
javascript
Copy code
const links = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    url: "https://wa.me/your-number",
    aria: "Chat with me on WhatsApp",
  },
  // Add more links as needed
];
Replace placeholder images in the /public folder (profile.webp, logo.webp, bg.jpg).
Update metadata in layout.js for SEO:
javascript
Copy code
export const metadata = {
  title: 'Thiago Lopes | Experience, Design, Explore!',
  description: 'Explore the work of Thiago Lopes, blending design, technology, and adventure.',
};
🌐 Deployment
This project is ready to be deployed on Vercel:

Link your GitHub repository to Vercel.
Push your changes to the main branch.
Vercel will automatically deploy your project.
📈 Performance Optimizations
Images are optimized using Next.js' Image component.
Fonts are preloaded for faster rendering.
Built-in support for lazy loading and dynamic imports.
🖼️ Screenshots
Mobile View
<!-- Replace with an actual screenshot -->

Desktop View
<!-- Replace with an actual screenshot -->

🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Fork the project.
Create a feature branch:
bash
Copy code
git checkout -b feature/new-feature
Commit your changes:
bash
Copy code
git commit -m "Add a new feature"
Push to your branch:
bash
Copy code
git push origin feature/new-feature
Open a pull request.
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact
Thiago Lopes - thiagolopes344@gmail.com

Project Link: https://github.com/yourusername/links-landing-page

markdown
Copy code

---

### **Instructions for Use**
1. Replace all `yourusername` occurrences with your GitHub username.
2. Replace the screenshot placeholders (`public/screenshot.png`, `public/screenshot-mobile.png`, `public/screenshot-desktop.png`) with actual images from your project.
3. Add your GitHub project link in the **Contact** section.

Let me know if you’d like additional help! 😊
