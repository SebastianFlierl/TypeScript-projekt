// Diese Klassen brauchen wir als Typen: Ein Smartphone hat einen Akku und mehrere Apps.
import { Akku } from "../Akku/akku.ts";
import { App } from "../App/app.ts";

export class Smartphone { // export: Die Klasse kann in main.ts importiert werden.
  // private: Auf diese Eigenschaften greifen wir nur innerhalb der Klasse direkt zu.
  private _modell: string;
  private _speicher: number;
  private _displaygroesse: number;
  private _akku: Akku; // Ein Objekt der Klasse Akku.
  private _apps: App[]; // Array mit Objekten der Klasse App.

  // Wird bei new Smartphone(...) in main.ts aufgerufen und speichert die Startwerte.
  constructor(
    modell: string,
    speicher: number,
    displaygroesse: number,
    akku: Akku,
  ) {
    this._modell = modell;
    this._speicher = speicher;
    this._displaygroesse = displaygroesse;
    this._akku = akku;
    this._apps = []; // Am Anfang ist noch keine App installiert.
  }

  // Aufruf in main.ts: smartphone.installiereApp(youtube) usw.
  installiereApp(app: App) {
    if (
      this._apps.find((installierteApp) => installierteApp.name === app.name)
    ) {
      console.log(app.name + " ist bereits installiert");
    } else {
      this._apps.push(app); // push() hängt das App-Objekt ans Array an.
      console.log(app.name + " wurde installiert!");
    }
  }

  ersetzeAkku(neuerAkku: Akku) {
    this._akku = neuerAkku;
    console.log("Der Akku wurde erfolgreich ersetzt!");
  }

  deinstalliereApp(name: string) {
    // findIndex() sucht den Index der App im Array
    let index = this._apps.findIndex((app) => app.name === name);
    // -1 bedeutet, dass die App nicht gefunden wurde
    if (index !== -1) {
      // splice() entfernt eine App an diesem Index
      this._apps.splice(index, 1);
      console.log(name + " wurde deinstalliert!");
    } else {
      console.log("App nicht gefunden!");
    }
  }

  // Aufruf in main.ts: smartphone.zeigeApps().
  zeigeApps() {
    this._apps.forEach((app) => { // forEach() geht jede installierte App durch.
      app.printdata(); // Ruft printdata() aus app.ts auf.
    });
  }

  // Aufruf in main.ts: smartphone.starteApp(apps[zufall]).
  starteApp(name: string) {
    // find() sucht das erste App-Objekt mit dem passenden Namen; === vergleicht genau.
    let app = this._apps.find((app) => app.name === name);

    if (app) { // Nur wenn eine passende App gefunden wurde.
      app.starten(); // Ruft starten() aus app.ts auf: _laeuft wird true.
      console.log(name + " wurde gestartet!");
    } else {
      console.log("App nicht gefunden!");
    }
  }

  // Aufruf in main.ts: smartphone.stoppeApp("YouTube").
  stoppeApp(name: string) {
    // Sucht die installierte App anhand ihres Namens.
    let app = this._apps.find((app) => app.name === name);

    if (app) {
      app.stoppen(); // Ruft stoppen() aus app.ts auf: _laeuft wird false.
      console.log(name + " wurde gestoppt!");
    }
  }

  // Aufruf in main.ts: smartphone.benutzen(2) und smartphone.benutzen(1).
  benutzen(stunden: number) {
    let gesamtverbrauch = 0; // Hier sammeln wir den Verbrauch aller laufenden Apps.

    this._apps.forEach((app) => {
      // Der Getter laeuft aus app.ts sagt uns, ob die App gerade läuft.
      if (app.laeuft) {
        gesamtverbrauch += app.verbrauch * stunden; // mAh/h × Stunden = mAh.
      }
    });

    // Ruft verbrauchen() aus akku.ts auf und reduziert dort den Ladestand.
    this._akku.verbrauchen(gesamtverbrauch);

    console.log("Verbrauch: " + gesamtverbrauch + " mAh");
    // ladestand ist ein Getter aus akku.ts; toFixed(2) zeigt 2 Nachkommastellen.
    console.log("Akkustand: " + this._akku.ladestand.toFixed(2) + "%");
  }

  // Aufruf in main.ts: smartphone.printdata() (am Anfang und am Ende).
  printdata() {
    console.log("Modell: " + this._modell);
    console.log("Speicher: " + this._speicher + " GB");
    console.log("Displaygröße: " + this._displaygroesse + " Zoll");

    this._akku.printdata(); // Ruft zusätzlich printdata() aus akku.ts auf.
  }

  // Sucht alle Apps, die mit dem eingegebenen Text anfangen
  sucheApp(name: string) {
    let gefunden = false;
    this._apps.forEach((app) => {
      if (app.name.toLowerCase().startsWith(name.toLowerCase())) {
        app.printdata();
        gefunden = true;
      }
    });
    if (gefunden === false) {
      console.log("Keine passende App gefunden");
    }
  }



// Version einer installierten App aktualisieren
  updateApp(name: string, neueVersion: string) {
    // Sucht nach einer installierten App mit diesem Namen
    let app = this._apps.find((app) => app.name === name);
    if (app) {
        // Ruft den Setter version aus app.ts auf
        app.version = neueVersion;
        console.log(name + " wurde auf Version " + neueVersion + " aktualisiert!");
    } else {
        console.log("App nicht gefunden!");
    }
  }
}
