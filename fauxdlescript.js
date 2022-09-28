function getSecretWord() {
    console.log("step 1 complete");
    var fiveLetterWords = ["which", "there", "their", "about", "would", "these", "other", "words", "could", "write", "first", "water", "after", "where", "right", "think", "three", "years", "place", "sound",
    "great", "again", "still", "every", "small", "found", "those", "never", "under", "might", "while", "house", "world", "below", "asked", "going", "large", "until", "along", "shall", "being", "often", "earth",
    "began", "since", "study", "night", "light", "above", "paper", "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means", "music", "miles", "thing", "today", "later", "using",
    "money", "lines", "order", "group", "among", "learn", "known", "space", "table", "early", "trees", "short", "hands", "state", "black", "shown", "stood", "front", "voice", "kinds", "makes", "comes", "close",
    "power", "lived", "vowel", "taken", "built", "heart", "ready", "quite", "class", "bring", "round", "horse", "shows", "piece", "green", "stand", "birds", "start", "river", "tried", "least", "field", "whose",
    "girls", "leave", "added", "color", "third", "hours", "moved", "plant", "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman", "alone", "plane", "spell", "watch", "carry",
    "wrote", "clear", "named", "books", "child", "glass", "human", "takes", "party", "build", "seems", "blood", "sides", "seven", "mouth", "solve", "north", "value", "death", "maybe", "happy", "tells", "gives",
    "looks", "shape", "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed", "women", "metal", "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs", "rocks",
    "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight", "terms", "catch", "works", "board", "cover", "songs", "equal", "stone", "waves", "guess", "dance", "spoke", "break", "cause",
    "radio", "weeks", "lands", "basic", "liked", "trade", "fresh", "final", "fight", "meant", "drive", "spent", "local", "waxes", "knows", "train", "bread", "homes", "teeth", "coast", "thick", "brown", "clean",
    "quiet", "sugar", "facts", "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps", "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods",
    "crops", "fruit", "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones", "apart", "turns", "moves", "touch", "angle", "based", "range", "marks", "tired", "older", "farms", "spend", "shoes",
    "goods", "chair", "twice", "cents", "empty", "alike", "style", "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint", "heads", "shook", "serve", "angry", "crowd", "wheel", "quick", "dress",
    "share", "alive", "noise", "solid", "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved", "usual", "faces", "drove", "cabin", "boats", "towns", "proud", "court", "model",
    "prime", "fifty", "plans", "yards", "prove", "tools", "price", "sheet", "smell", "boxes", "raise", "match", "truth", "roads", "threw", "enemy", "lunch", "chart", "scene", "graph", "doubt", "guide", "winds",
    "block", "grain", "smoke", "mixed", "games", "wagon", "sweet", "topic", "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter", "broad", "steam", "atoms", "press", "lying",
    "basis", "clock", "taste", "grows", "thank", "storm", "agree", "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved", "sorry", "giant", "trail", "offer", "ought", "rough", "daily", "avoid",
    "keeps", "throw", "allow", "cream", "laugh", "edges", "teach", "frame", "bells", "dream", "magic", "occur", "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple", "climb", "outer", "pitch",
    "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten", "youth", "tones", "corgi", "globe", "gases", "doors", "poles", "loose", "apply", "tears", "exact", "brush", "chest", "layer",
    "whale", "minor", "faith", "tests", "judge", "items", "worry", "waste", "hoped", "strip", "begun", "aside", "lakes", "bound", "depth", "candy", "event", "worse", "aware", "shell", "rooms", "ranch", "image",
    "snake", "aloud", "dried", "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt", "flour", "drops", "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade",
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue", "birth", "feels", "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned", "trick", "yours", "sizes",
    "noted", "width", "burst", "route", "lungs", "uncle", "bears", "royal", "kings", "forty", "trial", "cards", "brass", "opera", "chose", "owner", "vapor", "beats", "mouse", "tough", "wires", "meter", "tower",
    "finds", "inner", "stuck", "arrow", "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh", "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot",
    "sales", "swept", "lucky", "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk", "error", "porch", "slave", "exist", "faced", "mines", "marry", "juice", "raced", "waved", "goose", "trust",
    "fewer", "favor", "mills", "views", "joint", "eager", "spots", "blend", "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates", "drill", "trace", "skins", "waxed", "seats", "stuff", "ratio",
    "minds", "dirty", "silly", "coins", "hello", "trips", "leads", "rifle", "hopes", "bases", "shine", "bench", "moral", "fires", "meals", "shake", "shops", "cycle", "movie", "slope", "canoe", "teams", "folks",
    "fired", "bands", "thumb", "shout", "canal", "habit", "reply", "ruled", "fever", "crust", "shelf", "walks", "midst", "crack", "print", "tales", "coach", "stiff", "flood", "verse", "awake", "rocky", "march",
    "fault", "swift", "faint", "civil", "ghost", "feast", "blade", "limit", "germs", "reads", "ducks", "dairy", "worst", "gifts", "lists", "stops", "rapid", "brick", "claws", "beads", "beast", "skirt", "cakes",
    "lions", "frogs", "tries", "nerve", "grand", "armed", "treat", "honey", "moist", "legal", "penny", "crown", "shock", "taxes", "sixty", "altar", "pulls", "sport", "drums", "talks", "dying", "dates", "drank",
    "blows", "lever", "wages", "proof", "drugs", "tanks", "sings", "tails", "pause", "herds", "arose", "hated", "clues", "novel", "shame", "burnt", "races", "flash", "weary", "heels", "token", "coats", "spare",
    "shiny", "alarm", "dimes", "sixth", "clerk", "mercy", "sunny", "guest", "float", "shone", "pipes", "worms", "bills", "sweat", "suits", "smart", "upset", "rains", "sandy", "rainy", "parks", "sadly", "fancy", 
    "rider", "unity", "bunch", "rolls", "crash", "craft", "newly", "gates", "hatch", "paths", "funds", "wider", "grace", "grave", "tides", "admit", "shift", "sails", "pupil", "tiger", "angel", "cruel", "agent",
    "drama", "urged", "patch", "nests", "vital", "sword", "blame", "weeds", "screw", "vocal", "bacon", "chalk", "cargo", "crazy", "acted", "goats", "arise", "witch", "loves", "queer", "dwell", "backs", "ropes",
    "shots", "merry", "phone", "cheek", "peaks", "ideal", "beard", "eagle", "creek", "cries", "ashes", "stall", "yield", "mayor", "opens", "input", "fleet", "tooth", "cubic", "wives", "burns", "poets", "apron",
    "spear", "organ", "cliff", "stamp", "paste", "rural", "baked", "chase", "slice", "slant", "knock", "noisy", "sorts", "stays", "wiped", "blown", "piled", "clubs", "cheer", "widow", "twist", "tenth", "hides",
    "comma", "sweep", "spoon", "stern", "crept", "maple", "deeds", "rides", "muddy", "crime", "jelly", "ridge", "drift", "dusty", "devil", "tempo", "humor", "sends", "steal", "tents", "waist", "roses", "reign",
    "noble", "cheap", "dense", "linen", "geese", "woven", "posts", "hired", "wrath", "salad", "bowed", "tires", "shark", "belts", "grasp", "blast", "polar", "fungi", "tends", "pearl", "loads", "jokes", "kappa"];
    console.log("step 2 complete");
    secretWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    console.log(secretWord);
    var secretHidingSpot = document.getElementsByClassName('background');
    secretHidingSpot.id = secretWord;

}


function checkGuess() {

    console.log("activation complete");
    let blockID = "box0";
    let numID = 0;
    let secretWord = document.getElementsByClassName('background').id;
    console.log(secretWord);

    for (let block = 1; block < 31; block++) {
        blockID = "box".concat(String(block));
        if (document.getElementById(blockID).value < "A" || document.getElementById(blockID).value > "z") {
            console.log(document.getElementById(blockID).value);
            console.log(blockID);
            if (block == 1) {
                alert("Please fill in guess entirely before submitting!");
                return;
            }
            else if (block >= 30) {
                numID = 30;
            }
            else if ((block - 1) % 5 == 0) {
                numID = block;
            }
            else {
                alert("Please fill in guess entirely before submitting!");
                return;
            }
            break;
        }
    }

    for (let i = 0; i < 5; i++) {
        let id = "box" + String(numID - 5 + i);
        //idk why it does this bug but it is 7:16am and i am too exhausted to figure this out rn
        if (id == "box-5") {
            id = "box26";
        }
        else if (id == "box-4") {
            id = "box27";
        }
        else if (id == "box-3") {
            id = "box28";
        }
        else if (id == "box-2") {
            id = "box29";
        }
        else if (id == "box-1") {
            id = "box30";
        }
        let id2 = String(numID - 5 + i) + "box";
        if (id2 == "-5box") {
            id2 = "26box";
        }
        else if (id2 == "-4box") {
            id2 = "27box";
        }
        else if (id2 == "-3box") {
            id2 = "28box";
        }
        else if (id2 == "-2box") {
            id2 = "29box";
        }
        else if (id2 == "-1box") {
            id2 = "30box";
        }
        let userLetter = document.getElementById(id).value;
        if (userLetter == secretWord[i]) {
            document.getElementById(id2).setAttribute("class", "correct");
        }
        else {
            for (letter in secretWord) {
                if (userLetter == secretWord[letter]) {
                    document.getElementById(id2).setAttribute("class", "wrongspot");
                }
            }
        }
    }
}