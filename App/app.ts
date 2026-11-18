export class App { // export: Damit Smartphone und main.ts die Klasse nutzen können.
    // Eigenschaften einer App; private = nicht direkt von außen veränderbar.
    private _name: string;
    private _version: string;
    private _verbrauch: number; // Verbrauch pro Stunde in mAh.
    private _laeuft: boolean; // true = läuft, false = gestoppt.

    // Aufruf in main.ts mit new App("YouTube", "1.0", 400) usw.
    constructor(name: string, version: string, verbrauch: number) {
        this._name = name;
        this._version = version;
        this._verbrauch = verbrauch;
        this._laeuft = false; // Eine neue App ist zunächst nicht gestartet.
    }

    // Getter geben private Werte nach außen weiter (ohne sie direkt freizugeben).
    get name(): string {
        return this._name; // Wird z. B. in smartphone.ts zum Suchen verwendet.
    }

    get version(): string {
        return this._version;
    }

    get verbrauch(): number {
        return this._verbrauch; // Wird in smartphone.ts bei benutzen() gebraucht.
    }

    get laeuft(): boolean {
        return this._laeuft; // Damit benutzen() nur laufende Apps berechnet.
    }

    // Wird in smartphone.ts durch app.starten() aufgerufen.
    starten() {
        this._laeuft = true;
    }

    // Wird in smartphone.ts durch app.stoppen() aufgerufen.
    stoppen() {
        this._laeuft = false;
    }

    // Wird in smartphone.ts durch app.printdata() in zeigeApps() aufgerufen.
    printdata() {
        console.log(
            this._name + " | Version: " + this._version +
            " | Verbrauch: " + this._verbrauch + " mAh/h"
        );
    }
}
