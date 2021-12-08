import "./App.css";
import { BookEntry } from "./BookEntry";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Pill } from "./Pill";

import { WritingEntry } from "./WritingEntry";

var library = {
  books: [
    {
      name: "The Giver",
      author: "Lois Lowry",
      description:
        "Jonas, a young boy, exists in a seemingly utopian but actually distopian society and needs to collect the truth from The Giver",
      rating: "5",
      emoji: "🗝",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/The_Giver_first_edition_1993.jpg/220px-The_Giver_first_edition_1993.jpg",
    },
    {
      name: "Educated",
      author: "Tara Westover",
      description:
        "Memoir about a lady who went from a simple, science-less, education-less past to a career and life that was significantly different.",
      rating: "5",
      emoji: "✍🏼",
      image: "https://images-na.ssl-images-amazon.com/images/I/81NwOj14S6L.jpg",
    },
    {
      name: "American Kingpin",
      author: "Nick Bilton",
      description:
        "Action packed narrative based on true incidents of Ross Ulbritch, libertarian, who constructed the worlds largest drug empire, The Silk Road.",
      rating: "5",
      emoji: "🚔",
      image: "https://m.media-amazon.com/images/I/51ynhBxufsL.jpg",
    },
    {
      name: "Da Vinci Code",
      author: "Dan Brown",
      description:
        "Action packed mystery thriller featuring Robert Langdon, cryptologist, who investigates a murder that happened in the Louvre -- ending up in a rabbit hole.",
      rating: "5",
      emoji: "🎭",
      image: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg",
    },
    {
      name: "Next",
      author: "Michael Crichton",
      description:
        "Techno-thriller that dives through multiple storylines that all converge. Lots of futuristic biotech and genetic research related plot points -- exciting read.",
      rating: "5",
      emoji: "🧬",
      image:
        "http://prodimage.images-bn.com/pimages/9780060873165_p0_v2_s1200x630.jpg",
    },
    {
      name: "The Rise of Kyoshi",
      author: "F. C. Yee",
      description:
        "Any fan of Avatar the Last Airbender will love the Kyoshi novels! Gritty, more intense, and darker subject matter -- but all in the same amazing Avatar universe.",
      rating: "4.5",
      emoji: "🧗🏽‍♀️",
      image:
        "http://prodimage.images-bn.com/pimages/9781419735042_p0_v2_s1200x630.jpg",
    },
    {
      name: "The Shadow of Kyoshi",
      author: "F. C. Yee",
      description:
        "Amazing follow up to the first book! Non-stop page turner. Yee uses vivid imagery to describe Kyoshi's story -- I had a hard time putting this book down.",
      rating: "4.5",
      emoji: "🧗🏽‍♀️",
      image: "https://images-na.ssl-images-amazon.com/images/I/91SKlgSB+EL.jpg",
    },
    {
      name: "Bhagavad Gita (Translation)",
      author: "Stephen Mitchell",
      description:
        "The lessons from Krishna to Arjuna were phenomenal, but the translation lacks deeper meanings which are only uncovered from the untranslated Gita.",
      rating: "4",
      emoji: "🙏",
      image: "https://images-na.ssl-images-amazon.com/images/I/818OKvcTU8L.jpg",
    },
    {
      name: "The Sixth Extinction",
      author: "Elizabeth Kolbert",
      description:
        "The Earth is currently going through a man-made global extinction and we needa make some changes to stop it.",
      rating: "4",
      emoji: "🦖",
      image: "https://images-na.ssl-images-amazon.com/images/I/811HumtGpTL.jpg",
    },
    {
      name: "Inferno",
      author: "Dan Brown",
      description:
        "Harvard Professor wakes up with amnesia and needs to solve mystery to save world from dangerous disease.",
      rating: "4",
      emoji: "🔥",
      image:
        "https://www.florenceinferno.com/wp-content/uploads/2013/11/inferno-italian-cover.jpg",
    },
    {
      name: "Prey",
      author: "Michael Crichton",
      description:
        "Cautionary tale about nanotech that runs rampant, develops a malicious AI, and wreaks havoc to its creators. Exciting read, just like the rest of Crichton's writing.",
      rating: "4",
      emoji: "🙏",
      image: "https://m.media-amazon.com/images/I/51QMLNfIOwL.jpg",
    },
    {
      name: "Angels & Demons",
      author: "Dan Brown",
      description:
        "Cool mystery thriller, featuring Robert Langdon, who needs to solve yet another mystery, this time involving the Illuminati & the Vatican.",
      rating: "4",
      emoji: "🏛",
      image: "https://images-na.ssl-images-amazon.com/images/I/81S+VsvKTlL.jpg",
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      description:
        "Pretty solid self-improvement book. Clear is very clear about habit formation strategies, easy tips to breaking bad habits, and how small behavioral changes lead to long term effects.",
      rating: "3.5",
      emoji: "🧠",
      image: "https://images-na.ssl-images-amazon.com/images/I/91S+nNHdHSL.jpg",
    },
    {
      name: "Mindset",
      author: "Carol Dweck",
      description:
        "A series of case studies about why having a 'growth mindset' is better than having a 'fixed mindset'. Makes a good point but I felt that it was too repetitive.",
      rating: "3",
      emoji: "🌲",
      image: "https://danielkarim.com/wp-content/uploads/mindset-600x932.jpg",
    },
    {
      name: "The Happiness Advantage",
      author: "Shawn Anchor",
      description:
        "Case studies that go on to convince that being happy is the secret to unlocking success and even more happiness from life.",
      rating: "3",
      emoji: "😁",
      image: "https://images-na.ssl-images-amazon.com/images/I/71cmPEvfueL.jpg",
    },
  ],
};

function ratingToStars(rating) {
  let stars = "";
  for (var i = 0; i < rating; i++) {
    stars += "★";
  }
  return stars;
}

export function Books() {
  let books = library.books;
  books = books.sort((a, b) => {
    console.log(a.rating);
    return parseFloat(a.rating) + parseFloat(b.rating);
  });

  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      {books.map((entry) => {
        return (
          <BookEntry
            title={entry.name}
            author={entry.author}
            stars={ratingToStars(entry.rating)}
            description={entry.description}
            image={entry.image}
          />
        );
      })}

      <Footer />
    </div>
  );
}
