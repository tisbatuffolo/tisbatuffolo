export default async function handler(req, res) {
  // ✅ Configurazione CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Gestione Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Accettiamo solo POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Iniviamo il dispatch a GitHub
    // Il payload è vuoto perché l'incremento logico lo farà la GitHub Action
    const response = await fetch(
      "https://api.github.com/repos/tisbatuffolo/tisbatuffoblog/dispatches",
      {
        method: "POST",
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": `token ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          event_type: "update_docce", // Questo deve corrispondere al nome nel workflow YAML
          client_payload: { 
            timestamp: new Date().toISOString() 
          }
        })
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ error: text });
    }

    return res.status(200).json({ message: "Richiesta incremento inviata con successo" });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}