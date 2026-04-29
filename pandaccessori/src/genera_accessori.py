import os
import json

def genera_js_pandaccessori():
    # DETERMINA LA CARTELLA DOVE SI TROVA LO SCRIPT FISICAMENTE
    path_script = os.path.dirname(os.path.abspath(__file__))
    
    # Il nome della cartella (es. "progetto" o "salotto")
    nome_luogo = os.path.basename(path_script)
    
    # Estensioni immagini supportate
    estensioni_valide = ('.jpg', '.jpeg', '.png', '.webp', '.gif')
    
    lista_foto = []
    
    # Scansiona i file nella cartella dello script
    for file in os.listdir(path_script):
        if file.lower().endswith(estensioni_valide):
            # Il titolo è il nome del file senza estensione
            titolo = os.path.splitext(file)[0]
            
            lista_foto.append({
                "titolo": titolo,
                "immagine": file 
            })
    
    # Crea il nome del file .js
    nome_file_js = f"dati_{nome_luogo}.js"
    path_output = os.path.join(path_script, nome_file_js)
    
    # Scrittura del file JS nella stessa cartella
    with open(path_output, "w", encoding="utf-8") as f:
        f.write(f"// Dati generati automaticamente per {nome_luogo}\n")
        f.write(f"const dati_{nome_luogo} = ")
        json.dump(lista_foto, f, indent=4, ensure_ascii=False)
        f.write(";")
        
    print(f"--- ANALISI CARTELLA: {nome_luogo} ---")
    print(f"Percorso: {path_script}")
    print(f"Successo! Creato il file: {nome_file_js} con {len(lista_foto)} foto.")

if __name__ == "__main__":
    genera_js_pandaccessori()