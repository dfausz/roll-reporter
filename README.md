# 🎲 Roll Reporter  
### _Track Your Tabletop Rolls in Real Time_

**Roll Reporter** is a lightweight, mobile-friendly **Angular** web app built to track and share dice rolls during online D&D sessions.  
It was designed to eliminate confusion when rolls are called out over voice chat but not clearly heard — keeping everyone in sync and focused on the game.

---

## 🧰 Tech Stack
| Layer | Tools / Frameworks |
|--------|---------------------|
| Framework | [Angular](https://angular.io/) |
| Backend / Hosting | [Firebase](https://firebase.google.com/) |
| UI System | [Angular Material](https://material.angular.io/) |
| Database | Firebase Realtime Database |
| Deployment | Firebase Hosting |

---

## ✨ Features
- ⚙️ **Angular + Firebase Integration** – Simple, real-time connected web app  
- 🔁 **Realtime Synchronization** – Roll data instantly updates across all connected clients via Firebase  
- 🧮 **Custom Numeric Keypad** – Optimized on-screen number pad for mobile roll entry  
- 🎨 **Angular Material UI** – Clean and consistent interface with responsive design  
- 💾 **DataService Abstraction Layer** – Separates business logic from UI components for maintainability  
- 🧑‍🤝‍🧑 **Built for Play** – Used in live D&D sessions to streamline and verify roll reporting  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/dfausz/roll-reporter.git
cd roll-reporter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase
- Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
- Add your Firebase configuration to the Angular environment files:
  ```typescript
  // environment.ts
  export const environment = {
    production: false,
    firebase: {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT.firebaseapp.com",
      databaseURL: "https://YOUR_PROJECT.firebaseio.com",
      projectId: "YOUR_PROJECT",
      storageBucket: "YOUR_PROJECT.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    }
  };
  ```

### 4. Run the development server
```bash
ng serve
```
Then open [http://localhost:4200](http://localhost:4200).

### 5. Deploy to Firebase
```bash
npm run build
firebase deploy
```

---

## 🧩 Project Structure
```
roll-reporter/
├── src/
│   ├── app/                  # UI components (roll table, keypad, etc.)
│   │   └── app.module.ts     # Root Angular module
│   │
│   ├── assets/               # Icons, dice graphics, etc.
│   ├── styles.scss           # Global theme + Angular Material styles
│   └── index.html            # App entry point
│
├── firebase.json             # Firebase hosting config
├── angular.json              # Angular project config
├── package.json              # Dependencies and scripts
└── README.md
```

---

## 💡 Design Goals
Roll Reporter focuses on **clarity, speed, and reliability** in group play.  
By eliminating verbal miscommunication, it creates a smoother tabletop experience — especially in remote sessions.  

The app is designed to:  
- Reduce cognitive load during combat  
- Work smoothly on mobile devices  
- Sync instantly across all connected browsers  

---

## 🧑‍💻 Author
**Daniel Fausz**  
Senior Software Engineer (Front-End / .NET MAUI / Angular / React)  
[fausz.dev](https://fausz.dev) · [GitHub](https://github.com/dfausz)
