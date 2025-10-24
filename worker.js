export default {
  async fetch(request) {
    const ua = request.headers.get("user-agent") || "";
    const isBot = /facebookexternalhit|Twitterbot|Discordbot|LinkedInBot|Slackbot|WhatsApp|TelegramBot/i.test(ua);

    if (isBot) {
      return new Response(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta property="og:title" content="Kevin & Wilona's Wedding">
          <meta property="og:description" content="Join us in celebrating our wedding — details, RSVP, and more.">
          <meta property="og:image" content="https://kevinandwilona.com/preview.jpg">
          <meta property="og:url" content="https://kevinandwilona.com/">
          <meta name="twitter:card" content="summary_large_image">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Kevin & Wilona's Wedding</title>
        </head>
        <body>
          Redirecting to our wedding site...
          <script>location.href="https://withjoy.com/kevin-wilona";</script>
        </body>
      </html>`, {
        headers: { "content-type": "text/html; charset=UTF-8" },
      });
    }

    // For everyone else, just redirect normally
    return Response.redirect("https://withjoy.com/kevin-wilona", 301);
  }
};
