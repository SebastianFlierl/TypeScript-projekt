export class Akku { // export: Damit main.ts und smartphone.ts die Klasse nutzen können.
    private _kapazitaet: number; // Gesamtkapazität in mAh.
    private _ladestand: number; // Aktueller Akkustand in Prozent.
    private _ladezyklen: number; // Wird gespeichert, aber im Programm nicht verändert.

    // Aufruf in main.ts: new Akku(5000, 100, 50).
    constructor(kapazitaet: number, ladestand: number, ladezyklen: number) {
        this._kapazitaet = kapazitaet;
        this._ladestand = ladestand;
        this._ladezyklen = ladezyklen;
    }

    // Getter: Damit andere Klassen private Akku-Werte lesen können.
    get kapazitaet(): number {
        return this._kapazitaet;
    }

    get ladestand(): number {
        return this._ladestand; // Wird in smartphone.ts für die Ausgabe verwendet.
    }

    get ladezyklen(): number {
        return this._ladezyklen;
    }

    // Aufruf in smartphone.ts: this._akku.verbrauchen(gesamtverbrauch).
    verbrauchen(verbrauch: number) {

        // mAh in Prozent umrechnen: 500 mAh von 5000 mAh sind 10 %.
        let prozent = (verbrauch / this._kapazitaet) * 100;

        this._ladestand -= prozent; // -= bedeutet: aktuellen Ladestand um prozent verringern.

        if (this._ladestand < 0) { // Weniger als 0 % soll nicht möglich sein.
            this._ladestand = 0;
        }

    }

    // Die Aufladefunktion ist in deinem Original auskommentiert und wird nicht aufgerufen.
    // Falls du sie später aktivierst: Sie erhöht den Ladestand um Prozentpunkte, max. 100 %.
//    aufladen(prozent: number) {

//       this._ladestand += prozent;

//        if (this._ladestand > 100) {
//            this._ladestand = 100;
//        }

//    }

    // Wird in smartphone.ts mit this._akku.printdata() aufgerufen.
    printdata() {
        console.log("Kapazität: " + this._kapazitaet + " mAh");
        // toFixed(2) zeigt zwei Nachkommastellen, z. B. 75.00 statt 75.
        console.log("Ladestand: " + this._ladestand.toFixed(2) + "%");
        console.log("Ladezyklen: " + this._ladezyklen);
    }
}
