export default async function handler(req, res) {
  // Configurazione CORS per permettere a pandagenda.html di comunicare con l'API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  try {
    const newEvents = req.body;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = "tisbatuffolo"; // Inserisci il tuo username GitHub
    const REPO_NAME = "tisbatuffoblog";
    const FILE_PATH = "agenda.json"; // Assicurati che il percorso sia corretto nel repo

    // 1. Dobbiamo prima ottenere lo SHA del file esistente per poterlo sovrascrivere
    const getFileRes = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "Accept": "application/vnd.github+json"
        }
      }
    );

    let sha = "";
    if (getFileRes.ok) {
      const fileData = await getFileRes.json();
      sha = fileData.sha;
    }

    // 2. Sovrascriviamo il file direttamente nel repository
    const updateRes = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        method: "PUT",
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "Accept": "application/vnd.github+json"
        },
        body: JSON.stringify({
          message: "Aggiornamento agenda.json da Pandagenda",
          content: Buffer.from(JSON.stringify(newEvents, null, 2)).toString("base64"),
          sha: sha // Obbligatorio per aggiornare file esistenti
        })
      }
    );

    if (!updateRes.ok) {
      const errorText = await updateRes.text();
      throw new Error(`Errore GitHub: ${errorText}`);
    }

    return res.status(200).json({ message: "Agenda aggiornata con successo direttamente su GitHub" });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}