const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    res
      .status(500)
      .json({ error: "MailerLite API key or Group ID not configured" });
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  try {
    const response = await fetch(
      `https://connect.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          resubscribe: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      res
        .status(response.status)
        .json({ error: errorData.error || "Failed to subscribe" });
      return;
    }

    res.status(200).json({ message: "Subscribed successfully" });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}
