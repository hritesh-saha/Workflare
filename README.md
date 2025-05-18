![github](https://img.shields.io/badge/GitHub-000000.svg?style=for-the-badge&logo=GitHub&logoColor=white)
![markdown](https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white)

# WorkFlare - Job Portal for Recruiters and Applicants

WorkFlare is a modern job portal designed to simplify and streamline the hiring process. It caters to both recruiters and job seekers, providing intuitive interfaces for posting jobs, managing applications, and tracking opportunities in real-time.

## Features

- **Job Posting & Management**: Recruiters can easily post jobs, manage listings, and view applicants.
- **Seamless Application Process**: Applicants can search for jobs, apply, and track their application status.
- **Role-Based Authentication**: Separate access and features for recruiters and applicants.
- **Modern UI/UX**: Clean and responsive design with accessible components.
- **Real-Time Data**: Live updates for job posts and application status.
- **Secure Authentication**: Robust user authentication and session management.

## 🚀 Tech Stack

- **Frontend**: React.js ⚛️ | Tailwind CSS 💨 | Shadcn UI 🎨  
- **Backend**: Supabase 🧩 (Database & API)  
- **Authentication**: Clerk 🔐  
- **Hosting/Storage**: Supabase (for job listings, user data, etc.)

## 🛠️ Setup Instructions

1. Clone the repository  
   ```bash
   git clone https://github.com/hritesh-saha/Workflare
   cd WorkFlare
   ```
#### Install Dependencies

1. Install backend dependencies:

    ```bash
    cd job_portal
    npm install
    ```

### Setup Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Run the Project

To start the development server, run the following command in your project directory:

  ```bash
    npm run dev
  ```

The app should now be running on [http://localhost:5173](http://localhost:5173)

<p align="center"><a href="https://github.com/hritesh-saha/WorkFlare/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=BSD-3-Clause&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>

