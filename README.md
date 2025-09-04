# 🎛 Mini Macropad

A simple **keyboard-driven macro launcher** built with **Node.js**.  
You can press keys to trigger actions like opening apps, launching websites, or running terminal commands — all configurable via `macros.json`.

---

## 🚀 Features
- 🔑 Map any key to a macro action
- 🌐 Open URLs in your browser
- 📂 Launch apps (VS Code, Spotify, etc.)
- 💻 Run terminal commands
- 🔄 Hot-reloads `macros.json` when edited (no restart needed)

---

## 📦 Installation
1. Clone this repository or download the files.
   ```bash
   git clone https://github.com/your-username/mini-macropad.git
   cd mini-macropad
   ```
2. Install Node.js (v14+ recommended).  
   [Download Node.js](https://nodejs.org/)

3. Install dependencies (none required, only Node.js standard modules).  
   ```bash
   npm install
   ```

---

## ▶️ Usage
Start the app:
```bash
npm start
```

You’ll see:
```
🎛  Mini Macropad ready.
➡  Press a key mapped in macros.json
⎋  Press q or Ctrl+C to exit.
```

Now press keys to trigger actions!

---

## 🎨 Configuring Macros
Edit the `macros.json` file to define your macros.

Example (`macros.json`):
```json
{
  "a": {
    "label": "Open Google",
    "action": { "type": "open_url", "url": "https://google.com" }
  },
  "s": {
    "label": "Open VS Code",
    "action": { "type": "open_app", "app": "Visual Studio Code" }
  },
  "d": {
    "label": "Open Spotify",
    "action": { "type": "open_app", "app": "C:/Users/YourName/AppData/Roaming/Spotify/Spotify.exe" }
  },
  "f": {
    "label": "Say Hello (terminal)",
    "action": { "type": "run_cmd", "cmd": "echo Hello from Mini Macropad" }
  }
}
```

### Action Types
- **`open_url`** → Opens a website  
  ```json
  { "type": "open_url", "url": "https://example.com" }
  ```
- **`open_app`** → Opens an app (path or name depending on OS)  
  ```json
  { "type": "open_app", "app": "Visual Studio Code" }
  ```
- **`run_cmd`** → Runs a shell command  
  ```json
  { "type": "run_cmd", "cmd": "echo Hello" }
  ```

---

## 🖥️ Supported Platforms
- ✅ Windows  
- ✅ macOS  
- ✅ Linux  

(OS-specific launch commands are handled automatically.)

---

## 🛑 Exiting
- Press **q**  
- Or press **Ctrl+C**

---

## 📸 Demo
You can show your Mini Macropad in action with a GIF or screenshot.  

Example (replace `demo.gif` with your file):  
```markdown
![Mini Macropad Demo](demo.gif)
```

Or if you want a static screenshot:  
```markdown
![Mini Macropad Screenshot](screenshot.png)
```

---

## 📜 License
ISC License © 2025  
