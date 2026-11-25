console.log("\x1b[36m");
console.log("╔══════════════════════════════════════════════════════╗");
console.log("║                                                      ║");
console.log("║                ███████╗██╗    ██╗██████╗             ║");
console.log("║                ██╔════╝██║    ██║██╔══██╗            ║");
console.log("║                ███████╗██║ █╗ ██║██████╔╝            ║");
console.log("║                ╚════██║██║███╗██║██╔═══╝             ║");
console.log("║                ███████║╚███╔███╔╝██║                 ║");
console.log("║                ╚══════╝ ╚══╝╚══╝ ╚═╝                 ║");;
console.log("║                                                      ║");
console.log("╠══════════════════════════════════════════════════════╣");
console.log("║  \x1b[32m● ONLINE\x1b[36m       SYSTEM CONTROL PANEL                 ║");
console.log("╠══════════════════════════════════════════════════════╣");
console.log("║                                                      ║");
console.log("║   \x1b[35m[01]\x1b[36m  akku.ts loaded                               ║");
console.log("║   \x1b[35m[02]\x1b[36m  app.ts loaded                                ║");
console.log("║   \x1b[35m[03]\x1b[36m  smartphone.ts loaded                         ║");
console.log("║   \x1b[35m[04]\x1b[36m  main.ts loaded                               ║");
console.log("║                                                      ║");
console.log("╠══════════════════════════════════════════════════════╣");
console.log("║   STATUS: \x1b[32mTEST STARTED\x1b[36m                               ║");
console.log("╚══════════════════════════════════════════════════════╝");
console.log("\x1b[0m");




// Wir importieren unsere drei Klassen, damit wir in main.ts Objekte davon erstellen können.
import { Smartphone } from "./Smartphone/smartphone.ts";
import { Akku } from "./Akku/akku.ts";
import { App } from "./App/app.ts";

// Der Konstruktor aus akku.ts bekommt: Kapazität (mAh), Ladestand (%), Ladezyklen.
const akku = new Akku(5000, 100, 50);

// Erstellt ein Smartphone mit Modell, Speicher (GB), Displaygröße (Zoll) und unserem Akku.
const smartphone = new Smartphone("Samsung S24", 256, 6.2, akku);

// Der App-Konstruktor aus app.ts bekommt: Name, Version, Verbrauch (mAh pro Stunde).
const youtube = new App("YouTube", "1.0", 400);
const spotify = new App("Spotify", "2.0", 150);
const whatsapp = new App("WhatsApp", "3.0", 50);
const tiktok = new App("Tiktok", "4", 100);
const instagram = new App("Instagram", "7", 70);
const chatgpt = new App("ChatGPT", "7", 200);
const snapchat = new App("Snapchat", "6", 60);


// Ruft installiereApp() aus smartphone.ts auf: Die Objekte landen im Array _apps.
smartphone.installiereApp(youtube);
smartphone.installiereApp(spotify);
smartphone.installiereApp(whatsapp);
smartphone.installiereApp(tiktok);
smartphone.installiereApp(instagram);
smartphone.installiereApp(chatgpt);
smartphone.installiereApp(snapchat);

//verhindern das man 2 mal die gleiche app installieren kann wenn sie schon vorhanden ist

smartphone.installiereApp(spotify);

// Ruft printdata() aus smartphone.ts auf; dort werden auch die Akku-Daten ausgegeben.
console.log("\n=== SMARTPHONE ===");
smartphone.printdata();

// Ruft zeigeApps() aus smartphone.ts auf: Zeigt alle installierten Apps.
console.log("\n=== INSTALLIERTE APPS ===");
smartphone.zeigeApps();

// Wir wählen zwei unterschiedliche App-Namen zufällig aus.
console.log("\n=== APPS STARTEN ===");
const apps = [
  "YouTube",
  "Spotify",
  "WhatsApp",
  "Tiktok",
  "Instagram",
  "ChatGPT",
  "Snapchat",
]; // Nur Namen zur Auswahl, keine neuen App-Objekte.

for (let i = 0; i < 2; i++) { // Wiederholt das Starten zweimal.
  // Math.random() liefert eine Zufallszahl; Math.floor() macht daraus einen gültigen Array-Index.
  let zufall = Math.floor(Math.random() * apps.length);

  // Ruft starteApp() aus smartphone.ts mit dem zufällig ausgewählten Namen auf.
  smartphone.starteApp(apps[zufall]);

  // Entfernt diesen Namen nur aus der Auswahl, damit er nicht doppelt gewählt wird.
  apps.splice(zufall, 1);
}

// Ruft benutzen() aus smartphone.ts auf: Laufende Apps verbrauchen 2 Stunden lang Akku.
console.log("\n=== 2 STUNDEN BENUTZEN ===");
smartphone.benutzen(2);

// Ruft stoppeApp() aus smartphone.ts auf. YouTube könnte zufällig gar nicht gestartet sein.
console.log("\n=== YOUTUBE STOPPEN ===");
smartphone.stoppeApp("YouTube");

// Berechnet den Verbrauch für eine weitere Stunde mit den jetzt noch laufenden Apps.
console.log("\n=== 1 STUNDE BENUTZEN ===");
smartphone.benutzen(1);

// Ruft nochmals printdata() auf, damit wir den neuen Akkustand sehen.
console.log("\n=== ENDERGEBNIS ===");
smartphone.printdata();

// Spotify deinstallieren
console.log("\n=== APP DEINSTALLIEREN ===");
smartphone.deinstalliereApp("Spotify");

// Kontrollieren, welche Apps noch installiert sind
console.log("\n=== VERBLEIBENDE APPS ===");
smartphone.zeigeApps();

console.log("\n");
console.log("\n");
console.log("\n");

let akkukaputt = Math.floor(Math.random() * 2);
if (akkukaputt === 1) {
  console.log("Der Akku ist kaputt und muss ersetzt werden!");

  // Neuen Akku mit 5000 mAh, 100 % und 0 Ladezyklen erstellen
  const neuerAkku = new Akku(5000, 100, 0);

  // Funktion aus smartphone.ts aufrufen und Akku ersetzen
  smartphone.ersetzeAkku(neuerAkku);
} else {
  console.log("Der Akku ist nicht kaputt!");
}

console.log("\n=== APPS SUCHEN ===");
smartphone.sucheApp("s");
smartphone.sucheApp("z");
smartphone.sucheApp("y");
smartphone.sucheApp("t");


//version update von bestimmten apps
console.log("\nApps updaten")
smartphone.updateApp("YouTube", "2.0");

console.log("\n" + youtube.name + " " + youtube.version + " " + youtube.verbrauch)