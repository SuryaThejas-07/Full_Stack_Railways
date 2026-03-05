# 🚂 Railway Rover

A comprehensive, full-stack railway ticket booking and management system with an intuitive user interface, secure authentication, and real-time train management capabilities.

---

## 🎯 Overview

Railway Rover is a modern web application built with **React**, **TypeScript**, and **Firebase** that enables users to:

- Search and browse available trains
- Book tickets with ease
- Make secure payments
- Track booking status using PNR (Passenger Name Record)
- View and manage bookings
- Access admin dashboard for railway management

The application provides a seamless experience for both passengers and administrators with a responsive design that works across all devices.

---

## ✨ Features

### User Features

- 🔐 **Secure Authentication** - User registration and login with Firebase
- 🚂 **Train Search** - Search trains by source, destination, and date
- 🎫 **Booking System** - Easy-to-use ticket booking interface
- 💳 **Payment Processing** - Secure payment gateway integration
- 📋 **PNR Tracking** - Check booking status and ticket details
- 👤 **Passenger Details** - Manage passenger information
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### Admin Features

- 📊 **Dashboard** - Overview of bookings and system statistics
- 🏢 **Train Management** - Add, edit, and manage train information
- 🚉 **Station Management** - Manage railway stations
- 📈 **Analytics** - Booking trends and passenger insights

### Technical Features

- ⚡ **Fast Performance** - Optimized with Vite for rapid development
- 🎨 **Modern UI** - shadcn/ui components with Tailwind CSS styling
- 📱 **Mobile Optimized** - Fully responsive and mobile-first design
- 🔄 **Real-time Updates** - Firebase Firestore for instant data synchronization
- 🛡️ **Type Safety** - Full TypeScript support
- ✅ **Testing** - Vitest configured for unit and integration tests

---

## 🛠️ Tech Stack

### Frontend

- **React 18+** - UI library with hooks and context API
- **TypeScript** - For type-safe development
- **Vite** - Lightning-fast build tool and bundler
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library with Radix UI primitives

### Backend & Database

- **Firebase** - BaaS platform providing:
  - Firebase Authentication (Email/Password, Google OAuth)
  - Cloud Firestore (NoSQL database)
  - Real-time data synchronization

### Build & Development

- **Vite** - Build tool with hot module replacement
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Bun** - Fast JavaScript runtime

---

## 📁 Project Structure

```
railway-rover/
├── public/                      # Static assets
│   └── robots.txt
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchForm.tsx
│   │   ├── TicketCard.tsx
│   │   ├── TrainCard.tsx
│   │   ├── Loader.tsx
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── table.tsx
│   │       └── ... (other UI components)
│   ├── pages/                  # Page components
│   │   ├── Admin.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── SearchResults.tsx
│   │   ├── Ticket.tsx
│   │   ├── Payment.tsx
│   │   ├── PNRStatus.tsx
│   │   ├── PassengerDetails.tsx
│   │   ├── Stations.tsx
│   │   └── NotFound.tsx
│   ├── services/               # Business logic services
│   │   ├── trainService.ts
│   │   ├── bookingService.ts
│   │   └── stationService.ts
│   ├── firebase/               # Firebase configuration
│   │   ├── config.ts
│   │   ├── auth.ts
│   │   └── firestore.ts
│   ├── contexts/               # React context providers
│   │   └── AuthContext.tsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   ├── test/                   # Test files
│   │   ├── setup.ts
│   │   └── example.test.ts
│   ├── App.tsx                 # Main app component
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts              # Vite configuration
├── vitest.config.ts            # Vitest configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager
- Git
- Firebase project (for backend integration)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/SuryaThejas-07/Full_Stack_Railways.git
cd railway-rover
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
# or
bun install
```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Copy your Firebase configuration
   - Update `src/firebase/config.ts` with your credentials:

```typescript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

4. **Start Development Server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📜 Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview
```

### Testing & Quality

```bash
# Run tests once
npm test
# or
npm run test

# Run tests in watch mode
npm run test:watch

# Lint code with ESLint
npm run lint
```

---

## ⚙️ Configuration

### Vite Configuration

- **Port:** 5173 (default)
- **Proxy:** Can be configured in `vite.config.ts`
- **Build Output:** `dist/` folder

### TypeScript

- **Target:** ES2020
- **Module:** ESNext
- **JSX:** react-jsx
- **Strict Mode:** Enabled

### Tailwind CSS

Customized in `tailwind.config.ts` with:

- Custom color schemes
- Extended spacing
- Custom fonts
- Dark mode support

---

## 🧩 Components Overview

### Layout Components

- **Navbar** - Navigation header with links and user profile
- **Footer** - Footer with company information
- **Loader** - Loading spinner component

### Feature Components

- **SearchForm** - Train search form with filters
- **TrainCard** - Train information display
- **TicketCard** - Ticket booking and details card

### UI Components (shadcn/ui)

- Buttons, inputs, forms, dialogs, modals
- Tables, cards, alerts, badges
- Accordions, tabs, dropdowns, navigation menus
- And many more...

---

## 🔧 Services

### Train Service (`trainService.ts`)

- Fetch available trains
- Get train details
- Filter by date, route, and preferences

### Booking Service (`bookingService.ts`)

- Create new bookings
- Retrieve booking history
- Update booking status
- Cancel bookings
- Process refunds

### Station Service (`stationService.ts`)

- Get list of all stations
- Add new stations (admin)
- Update station information
- Delete stations (admin)

---

## 🔐 Authentication

### Features

- Email/Password registration and login
- Google OAuth integration
- Token-based authentication
- Protected routes and pages
- Role-based access (User/Admin)

### Implementation

- Managed through `AuthContext.tsx`
- Firebase Authentication integration
- Session persistence

---

## 🗄️ Database

### Firestore Collections

- **users** - User profiles and preferences
- **trains** - Train information and schedules
- **bookings** - Ticket bookings and reservations
- **stations** - Railway station data
- **payments** - Payment transaction records

### Real-time Synchronization

- Firebase listeners for live updates
- Optimistic UI updates
- Conflict resolution

---

## 👥 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- Feature branches - `feature/feature-name`
- Bug fixes - `bugfix/issue-name`

### Code Style

- ESLint enforces consistent code style
- TypeScript for type safety
- Prettier for code formatting

### Testing

- Write unit tests for utility functions
- Integration tests for services
- Component tests for UI components
- Run `npm run test:watch` during development

---

## 🌐 Deployment

### Development Deployment

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Production Deployment

The application can be deployed to:

- **Vercel** - Recommended for fastest deployment
- **Netlify** - Alternative option
- **Firebase Hosting** - Integrated with Firebase
- **GitHub Pages** - Static hosting
- **Docker** - Containerized deployment

**Steps:**

1. Run `npm run build` to create production build
2. Deploy the `dist/` folder to your hosting service
3. Configure environment variables on hosting platform
4. Set up custom domain (optional)

---

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Write clean, readable code
- Add tests for new features
- Update documentation
- Follow TypeScript and React best practices
- Run linter before submitting PR (`npm run lint`)

---

## 📄 License

This project is licensed under the **MIT License** - a permissive open-source license that allows you to:

- ✅ Use the software for any purpose
- ✅ Copy, modify, and distribute the software
- ✅ Include the software in proprietary applications
- ✅ Sublicense the software

### License Terms

The only requirement is to include the original copyright notice and license in any copies or substantial portions of the software.

**Full License:** See the [LICENSE](LICENSE) file for the complete MIT License text.

### Copyright

© 2024 Surya Thejas. All rights reserved.

### Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

---

## 📞 Support

For support, email [suryathejas970@gmail.com] or create an issue in the GitHub repository.

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Firebase](https://firebase.google.com) - Backend services

---

## 📊 Project Status

- ✅ Core functionality implemented
- 🔄 Ongoing improvements and feature additions
- 🐛 Bug fixes and optimization
- 📈 Ready for production deployment

---

**Last Updated:** March 2026
