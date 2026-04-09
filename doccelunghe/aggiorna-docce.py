# aggiorna-docce.py
import json
import datetime
import os

# 1. Gestione percorsi: punta alla cartella dello script
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Cambiato il nome del file in .json
DOCCE_JSON_FILE = os.path.join(BASE_DIR, 'docce.json')

# Prendi anno e mese corrente
today = datetime.date.today()
year = str(today.year)
month = str(today.month)

# 2. Leggi il file docce.json
if not os.path.exists(DOCCE_JSON_FILE):
    # Se il file non esiste, ne creiamo uno base per evitare l'errore
    print(f"⚠️ Il file {DOCCE_JSON_FILE} non esiste. Lo creo ora...")
    docce_data = {}
else:
    with open(DOCCE_JSON_FILE, 'r', encoding='utf-8') as f:
        try:
            docce_data = json.load(f)
        except json.JSONDecodeError:
            print("❌ Errore: il file JSON è corrotto o vuoto.")
            docce_data = {}

# 3. Incrementa docce mese corrente
if year not in docce_data:
    # Inizializza l'anno con tutti i mesi a 0
    docce_data[year] = {str(m): 0 for m in range(1, 13)}

# Incremento
docce_data[year][month] = docce_data[year].get(month, 0) + 1

# 4. Salva il file JSON aggiornato
with open(DOCCE_JSON_FILE, 'w', encoding='utf-8') as f:
    json.dump(docce_data, f, indent=2)

print(f"✅ Docce aggiornate in docce.json: {month}/{year} ora a quota {docce_data[year][month]}")