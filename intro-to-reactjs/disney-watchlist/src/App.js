import './App.css';
import Movie from './components/Movie.js'

const movies = [
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BFD0DE060C96543FB5195A01A8AF2000B68C8E643DAE26E0563694424602E2E8/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Captain America: The First Avenger",
    description: "After being deemed unfit for military service, Steve Rogers volunteers for a top- secret research project that turns him into Captain America."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35E0FEAE8E899723A1C10C9DE2B3D4053AD6A493A552FB624E202E40A1E29ED0/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Captain Marvel",
    description: "Marvel Studios’ Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the universe’s most powerful heroes. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger!"
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F37A6278C253E9686FA90E60F5225B18A23440C6F8902B9DC608CE29642235F/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Iron Man",
    description: "After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CE2F5D52A1CD5DA89E5A0A05DBF80AF803E9ED43C6668CC69E3C07F782CFCDB/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Iron Man 2",
    description: "Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a madman out to destroy him, but the very technology designed to save his life is slowly killing him."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8FE8F30D57EF86772FD4CEBB5AEF7FE8B5578B69807A5B031C9F3E4BE5541C1F/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Thor",
    description: "The Mighty Thor is set to ascend to the throne of the fantastic realm of Asgard, until his reckless arrogance reignites an ancient war. As a result, Thor is banished to Earth to live among humans. From Earth, Thor must make preparations to stop his evil brother Loki from dethroning Odin, seizing power and imposing his villainous rule on all of Asgard."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3881F51BCDE042BE2311FE121EF0F95B5BB4E91C85C2378AD3BABB21502C9AAD/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Avengers",
    description: "When an unexpected enemy threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D890F19B04A98C7ECC1C84E87CD59B431639DDF6BC53995FB633177827617C61/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Thor: The Dark World",
    description: "While Thor fights to restore order across the cosmos, an ancient race led by vengeful Malekith returns to plunge the universe back into darkness.  Setting out on his most dangerous and personal journey yet, Thor is forced into an alliance with the treacherous Loki to save his people and those he loves...and our universe itself."
  },
  {
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/20BE390237ECE1FAB22BC9DD73D4882253F076000698DC110ABAF9DC854949DC/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Iron Man 3",
    description: "When Tony Stark/Iron Man finds his world reduced to rubble, one question haunts him: Does the man make the suit, or does the suit make the man?"
  },
];

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Watchlist</h1>
        <h4>My Movies & Series</h4>
      </div>
      <div id="movieGrid">
        {
          movies.map((movie, i) => {
            return <Movie
              key={i}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;