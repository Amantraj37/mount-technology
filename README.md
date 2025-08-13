# Mount Technology

This repository contains the source code for the official website of Mount Technology, a digital marketing agency. The website is designed to showcase the company's services, provide information about the team, and generate leads through a fully functional contact form.

## ✨ Key Features

*   **Responsive Multi-Page Design:** A clean, modern interface that adapts seamlessly to desktops, tablets, and mobile devices.
*   **Comprehensive Service Pages:** Dedicated pages providing detailed information about each service offered.
*   **Lead Generation Form:** A contact form on the home and contact pages that uses a PHP backend to process and email submissions.
*   **Informative Sections:** Includes an "About Us" page, client testimonials, and a detailed privacy policy.
*   **Dynamic Navigation:** A JavaScript-powered responsive navigation menu for a smooth user experience on smaller screens.

## 🚀 Services Showcase

The website highlights the core services provided by Mount Technology:

*   **Web Development:** Crafting custom, high-performance, and SEO-friendly websites.
*   **Search Engine Optimization (SEO):** Strategies to improve website visibility and organic ranking on search engines.
*   **Social Media Marketing:** Building brand presence and engagement across various social media platforms.
*   **Content Marketing:** Creating compelling content, including blog posts, videos, and email campaigns, to drive audience engagement.

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3, JavaScript
*   **Backend:** PHP (for contact form processing)

## 📂 Repository Structure

The project is organized with a clear and straightforward file structure:

```
.
├── index.html            # Home page
├── about.html            # About Us page
├── contact.html          # Contact page with form
├── services.html         # Main services overview page
├── service-seo.html      # SEO service detail page
├── web-dev.html          # Web Development service detail page
├── social-media.html     # Social Media service detail page
├── content-marketing.html# Content Marketing service detail page
├── privacy-policy.html   # Privacy Policy page
└── assets/
    ├── Style.css         # Main stylesheet for all pages
    ├── script.js         # JavaScript for responsive navbar
    ├── submit.php        # PHP script for handling form submissions
    └── img/              # Contains all images and icons
```

## 🔧 Setup and Usage

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/amantraj37/mount-technology.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd mount-technology
    ```
3.  **Serve the files:**
    *   You can open the `.html` files directly in your browser for a preview.
    *   For the contact form functionality (`submit.php`) to work, you need a local server environment with PHP support (e.g., XAMPP, MAMP, or WAMP). Place the project files in your server's root directory (like `htdocs` for XAMPP) and access it via `http://localhost/mount-technology`.

4.  **Configure the Contact Form (Optional):**
    *   To receive emails from the contact form, open `assets/submit.php` and change the recipient email address in the `$to` variable:
    ```php
    // assets/submit.php
    $to = "your-email@example.com"; // Change this to your email address
