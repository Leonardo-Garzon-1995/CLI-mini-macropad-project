const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const macrosPath = path.join(__dirname, "macros.json");

// Load macros at startup
let macros = JSON.parse(fs.readFileSync(macrosPath, "utf8"));

// Hot-reload macros when you edit macros.json
fs.watchFile(macrosPath, () => {
    try {
        macros = JSON.parse(fs.readFileSync(macrosPath, "utf8"));
        console.log("↻ Reloaded macros.json");
    } catch (e) {
        console.error("⚠️ macros.json invalid:", e.message);
    }
});

function openURL(url) {
  if (process.platform === "darwin") exec(`open "${url}"`);
  else if (process.platform === "win32") exec(`start "" "${url}"`, { shell: "cmd.exe" });
  else exec(`xdg-open "${url}"`);
}

function openApp(app) {
  if (process.platform === "darwin") {
    // macOS can open by app name
    exec(`open -a "${app}"`);
  } else if (process.platform === "win32") {
    // Windows: prefer a full .exe path OR an app protocol like "spotify:"
    // Example in macros.json. Using start for paths/protocols:
    exec(`start "" "${app}"`, { shell: "cmd.exe" });
  } else {
    // Linux: try launching by binary name; edit to full path if needed
    exec(`${app} >/dev/null 2>&1 &`);
  }
}

function runCmd(cmd) {
  exec(cmd);
}



function runAction(action) {
  if (!action || !action.type) return;
  switch (action.type) {
    case "open_url":
      openURL(action.url);
      break;
    case "open_app":
      openApp(action.app);
      break;
    case "run_cmd":
      runCmd(action.cmd);
      break;
    default:
      console.log("Unknown action:", action.type);
  }
}

// --- Keyboard loop (terminal must be focused) ---
process.stdin.setEncoding("utf8");
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.resume();

console.log("🎛  Mini Macropad ready.");
console.log("➡  Press a key mapped in macros.json");
console.log("⎋  Press q or Ctrl+C to exit.\n");

process.stdin.on("data", (key) => {
  if (key === "\u0003" || key === "q") process.exit(0); // Ctrl+C or q

  const macro = macros[key];
  if (macro) {
    console.log(`→ ${macro.label}`);
    runAction(macro.action);
  } else {
    // Optional: show code for special keys (arrows, etc.)
    const show = key === "\r" ? "Enter" : JSON.stringify(key);
    console.log(`(no macro mapped for ${show})`);
  }
});
