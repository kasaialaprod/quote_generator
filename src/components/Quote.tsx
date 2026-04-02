import { useState } from "react";

export function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const sumQuote = [
    { text: "Hello, World!", author: "Me" },
    { text: "Call the opps!", author: "Thugger" },
    { text: "Un homme heureux, c’est un adulte qui répond à ses promesses d’enfant.", author: "Georgio" },
    { text: "Vieillir est une obligation mais grandir est un choix.", author: "Youssoupha" },
    { text: "La rue a plusieurs écoles, mais pas les mêmes cours.", author: "So La Zone" },
    { text: "Nul n’est méchant volontairement.", author: "Socrate" },
    { text: "Commettre l’injustice est pire que la subir.", author: "Platon" },
    { text: "Deux amours ont bâti deux cités : l’amour de soi jusqu’au mépris de Dieu, la cité terrestre ; l’amour de Dieu jusqu’au mépris de soi, la cité céleste.", author: "Saint Augustin" },
    { text: "I can't change the world but I can change your perception.", author: "Lucki - Faith" },
    { text: "I don't wanna die but I don't feel like fighting.", author: "Lucki - Hide My Face" },
    { text: "You make all nights look sad like drunk parents.", author: "Lucki" },
    { text: "I swear to God. Stay yourself. Stay out of trouble. Trust me. Stay off drugs.", author: "Lucki" },
    { text: "Just not said, but we been rich. Fly out, please get friendships. Family kill you, but that's what it's about.", author: "Lucki" },
    { text: "I’ve been through hell and back, but I’m still standing tall.", author: "Lucki" },
    { text: "The game is gonna test you, never fold. Stay ten toes down.", author: "Nispey Hussle - Victory Lap" },
    { text: "Ownership is everything. Own your mind. Mind your own.", author: "Nispey Hussle" },
    { text: "Create a plan and then attack it — a dream without a plan is a wish.", author: "Nispey Hussle" },
    { text: "When your intentions are pure you don’t lose anyone, they lose you.", author: "Nispey Hussle" }
  ];

  function showTheQuotes() {
    const randomIndex = Math.floor(Math.random() * sumQuote.length);
    const randomItem = sumQuote[randomIndex];

    setQuote(randomItem.text);
    setAuthor(randomItem.author);
  }

  function handleShareTwitter() {
    const text = `"${quote}" — ${author}`;

    const intentUrl =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

    window.open(intentUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <button onClick={showTheQuotes}>The word of the day</button>

      <p className="quote">{quote}</p>
      <p className="author">{author && `- ${author}`}</p>

      <button className="share-btn" onClick={handleShareTwitter} disabled={!quote}>
        Partager sur Twitter
      </button>
    </div>
  );
}