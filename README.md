# The Hungry Host

**The Hungry Host** is a full-stack web app for a healthy meal catering subscription. Users choose diet plans, set delivery days, and manage their account. Admins use a dashboard to review subscribers and business stats.

## About the project

The Hungry Host is an online catering platform. Regular users subscribe to meal plans and keep their profile up to date. Admins see revenue and subscriber activity on a dedicated dashboard. The app uses the Next.js App Router, with server and client components split for performance.

## Key features

- **User authentication:** Registration, login, and logout with NextAuth.js (Credentials provider).
- **Password reset:** Forgot-password flow that emails a reset link through Resend.
- **User profile:** View and update personal details and subscription information.
- **Admin dashboard:** Revenue, new users, and the subscriber list. The admin role is assigned in the database.
- **Menu:** Food items with nutrition, pricing, and a detail popup.
- **Subscription form:** Plan, meal type, and delivery days, with a monthly total.
- **Contact page:** A message form sent through Web3Forms. Sending a message requires a signed-in user.
- **Testimonials:** Quotes shown with profiles from the randomuser.me API.
- **Responsive layout:** Mobile and desktop layouts with Tailwind CSS.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 14
- **UI:** [React](https://react.dev/) 18
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Password hashing:** [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- **Email:** [Resend](https://resend.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Charts:** [Recharts](https://recharts.org/)

## Getting started

1. Clone this repository and open the app folder:

    ```bash
    cd my-project
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file in `my-project` and fill in the values from [Environment variables](#environment-variables).

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` inside `my-project`:

```env
# MongoDB connection string (Atlas or a local instance)
MONGODB_URI="mongodb+srv://user:password@cluster.mongodb.net/database_name"

# Public URL used by NextAuth and password-reset links
NEXTAUTH_URL="http://localhost:3000"

# Long random string used to encrypt NextAuth sessions
NEXTAUTH_SECRET="A_VERY_LONG_AND_RANDOM_SECRET_YOU_CREATE_YOURSELF"

# Resend API key for the password reset email
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"
```

## Admin access

New accounts are created with `role: "user"`. To open the admin dashboard, register an account, then set that user's `role` field to `"admin"` in MongoDB. Sign in again so the session picks up the new role.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
