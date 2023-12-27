
// random quotes list
const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    },
    {
        quote: "Make it work first...then make it better.",
        author: "Per Harald Borgen"
    },
    {
        quote: "The greatest glory in living lies not in never falling but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Truth is the offspring of silence and meditation.",
        author: "Issac Newton"
    },
    {
        quote: "As long as they know why they do it, the rest will follow.",
        author: "Yoon Sean-hak"
    },
    {
        quote: "If you\'re 40 years old and the last book you read was from high school, you got a lot of catching up to do.",
        author: "John Villanueva"
     },
     {
        quote: "You can teach competence.  You can\'t teach character.",
        author: "John Villanueva"
      },
      {
        quote: "If you want to be a mathametician, you don\'t spend most of your time hanging out with writers.",
        author: "John Villanueva"
      },
      {
        quote: "How to stay awake when you\'re reading...easy, stop reading and start doing something with the reading.",
        author: "Mark Meyers"
      },
      {
        quote: "It\s not the destination.  It\s the journey.",
        author: "Ralph Waldo Emerson"
      },
      { 
        quote: "I will prepare and some day my chance will come.",
        author: "Abraham Lincoln"
      },
      {
        quote: "Punch fear in the face.",
        author: "Jon Acuff"
      },
      {
        quote: "No one aims for average.",
        author: "Jon Acuff"
      },
      {
        quote: "Action always beats intention.  Anyone can dream.  It\'s doing that is such a hasle.",
        author: "Jon Acuff"
      },
      {
        quote: "What\'s ordinary to one person can be extraordinary to another.",
        author: "Seo Dal-mi"
      },
      {
        quote: "Think about it: have YOU done anything impressive today? Your personal genius is right at your fingertips. Feel free to use it.",
        author: "John MacCormich"
      },
      {
        quote: "If you wait for perfect conditions to seize an opportunity, you\'ll be wating till the day you die.",
        author: "Mark Batterson"
      },
      {
        quote: "Reading books is like lifting weights for the body.",
        author: "John Villanueva"
      },
      {
        quote: "If you want to succeed, you have to take control of your life. You have to influence yourself.",
        author: "John Villanueva"
      },
      {
        quote: "We need to focus our energies to be good at anything.",
        author: "John Villanueva"
      },
      {
        quote: "You must master a new way to think before you can master a new way to be.",
        author: "Marianne Williamson"
      },
      {
        quote: "There is no chance, no destiny, no fate, that can circumvent or hinder or control the firm resolve of a determined soul.",
        author: "Ella Wheeler Wilcox"
      },
      {
        quote: "There\'s still some dreams floating around out there.  It\'s not too late, you just have to reach out and grab them.",
        author: "Nick Campbell"
      },
      {
        quote: "You have the courage to dream. Inspite of your limitations, you never gave up on that dream.",
        author: "Mr. Chetty"
      },
      {
        quote: "Lift your head up. Take a breath. there\'s a lot of great possibilities out there.",
        author: "Bill McMahon"
      },
      {
        quote: "If you fight for your limitatons, you get to keep them.",
        author: "Jim Kwik"
      },
      {
        quote: "Whatever it is you\'re scared of doing, DO IT.",
        author: "Neil Gaiman"
      },
      {
        quote: "No man ever steps in the same river twice, for it is not the same river and he is not the same man.",
        author: "Heraclitus"
      },
      {
        quote: "If you think you\'re leading but no one is following, then you are only taking a walk.",
        author: "John C. Maxwell"
      },
      {
        quote: "Every person has the ability to improve in leadership.  Becoming a leader isn't a mystical subject. It can be appoarched very practically.",
        author: "John C. Maxwell"
      },
      {
        quote: "Leadership isn\'t about the title or having an office. It\'s about influence and the fact that you can make an impact on others.",
        author: "John C. Maxwell"
      },
      {
        quote: "If you want to grow as a leader, be prepared to be uncomfortable.",
        author: "John C. Maxwell"
      },
      {
        quote: "There is no progress without risk.",
        author: "John C. Maxwell"
      },
      {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "The desert would cover the entire world if it was sunny every day. We need the rain and the snow for plants and delicious fruits to grow.",
        author: "Seo Dal-mi"
      },
      {
        quote: "If the start is easy, then it\'ll be taken away easily as well.",
        author: "Seo In-jin"
      },
      {
        quote: "Luck favors the prepared.",
        author: "Louis Pasteur"
      },
      {
        quote: "Stop trying to change everyone else, focus on finding your purpose and then elevate!",
        author: "Jason Van Camp"
      },
      {
        quote: "He that is good at making excuses is seldom good at anything else.",
        author: "Benjamin Franklin"
      },
      {
        quote: "You build on failure. You use it as a stepping stone.",
        author: "Johnny Cash"
      },
      {
        quote: "If you stay in your comfort zone, that is where you will fail. Success is not a comfortable procedure.",
        author: "Steve Harvey"
      },
      {
        quote: "You can\'t cheat the grind.",
        author: "Nashaly Maldonado"
      },
      {
        quote: "The world breaks everyone, many are strong at the broken places.",
        author: "Ernest Hemingway"
      },
      {
        quote: "It\'s not the load that breaks you down. It\'s the way you carry it. We are capable of carrying heavy things.",
        author: "Jason Van Camp"
      },
      {
        quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        author: "Martin Luther King, Jr."
      },
      {
        quote: "Don\'t let someone else\'s opinion of you become your reality.",
        author: "Les Brown"
      },
      {
        quote: "In life it\'s more important to ask questions than to provide answers. Questions are a true measure of a first rate mind.",
        author: "John Villanueva"
      },
      {
        quote: "It\'s easy to blame others, blame circumstances...but it is the person I see in the mirror who truly creates the most obstacles.",
        author: "Thomas George"
      },
      {
        quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "Great leaders learn from failures and continue to move forward. Failure is inevitable. Your response to failure is your choice.",
        author: "Petrick R. Leddin"
      },
      {
        quote: "Leaders who frequently employ the word IMAGINE when working with others foster a spirit of creativity, determination, and potential.",
        author: "Petrick R. Leddin"
      },
      {
        quote: "If you set out to acommplish priorities that you have never accomplilshed before, you need to remain open to new ways of doing things.",
        author: "Petrick R. Leddin"
      },
      {
        quote: "Remember, if you\'re not uncomfortable, you\'re probably not growing.",
        author: "Thomas Parker"
      },
      {
        quote: "It\'s simple. All you need to do is keep moving forward. Do the best that you can do. Be better than you were yesterday.",
        author: "Jason Van Camp"
      },
      {
        quote: "Prove to yourself that you don\'t quit when you\'re having a bad day or life throws a wrench in your plans. Figure it out. Drive on. Be an inspiration for someone else to keep going.",
        author: "Jason Van Camp"
      },
      {
        quote: "Your listening to that voice in your head whispering in your ear to give up. Don\'t. Stop lisening to yourself and start talking to yourself.",
        author: "Jason Van Camp"
      },
      {
        quote: "Thinking something is hard? Remember man could not fly until he tried...",
        author: "Ken Vennera"
      },
      {
        quote: "Leaders are defined as people who have conversations of value that empower others to achieve their goals. This puts leaders in charge regardless of their position or authority, simply by virtue of how they speak and listen.",
        author: "Dr. Thomas D. Zweifel"
      },
      {
        quote: "To become a leader, you have to throw yourself into the action of leading.",
        author: "Dr. Thomas D. Zweifel"
      },
      {
        quote: "Even if you\’re on the right track, you\’ll get run over if you just sit there.",
        author: "Yogi Berra"
      },
      {
        quote: "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
        author: "Andre Gide"
      },
      {
        quote: "If the only tool in one\’s possession is a hammer, everything in sight begins to resemble a nail.",
        author: "Abraham Kaplan"
      },
      {
        quote: "Be today the future you wish for in the world.",
        author: "Ghandi"
      },
      {
        quote: "Changing your mindset doesn\’t happen without being uncomfortable.",
        author: "Jason Van Camp"
      },
      {
        quote: "The best way to find out if you can trust somebody is to trust them.",
        author: "Ernest Hemingway"
      },
      {
        quote: "The real voyage of discovery consists not in seeking new landscapes but in having new eyes.",
        author: "Marcel Proust"
      },
      {
        quote: "Stillness is a quality and a behavior virtually overlooked in leaders. Yet without stillness, leadership is a hollow shell of blind activity; it lacks insight and wisdom.",
        author: "Dr. Thomas D. Zweifel"
      },
      {
        quote: "What is the fundamental strategy for attacking issues in life that need to be resolved? A critical part of the answer is simply to begin.",
        author: "Edward B. Burger"
      },
      {
        quote: "Seek above all, for a game worth playing…Having found the game, play it with intensity – play as if your life and sanity depended on it.",
        author: "Robert S. Deropp"
      },
      {
        quote: "Give me a lever long enough and a prop strong enough. I can single-handedly move the world.",
        author: "Archimedes"
      },
      {
        quote: "When we do not do the thing that we ought to do, we have no time for anything else.",
        author: "Eric Hoffer"
      },
      {
        quote: "To be nobody-but-yourself, in a world which is doing it\’s best night and day to make you everybody else – means to fight the hardest battle which any human being can fight, and never stop fighting.  Does this sound dismal? It isn\’t. It\’s the most wonderful life on earth.",
        author: "e.e. cummings"
      },
      {
        quote: "A conclusion is the place where you got tired of thinking.",
        author: "Martin H. Fischer"
      },
      {
      quote: "If we do not expect the unexpected, we will never find it.",
      author: "Heraclitus"
    },
    {
      quote: "Don\’t be satisfied with mere knowledge. Challenge yourself to attain the power to figure things out on your own.",
      author: "Edward B. Burger"
    },
    {
      quote: "Truth comes out of error more easily than out of confusion.",
      author: "Francis Bacon"
    },
    {
      quote: "A journey of one thousand miles begins with a single step.",
      author: "Chinese proverb"
    },
    {
      quote: "...where the senses fail us, reason must step in.",
      author: "Galileo Galilei"
    },
    {
      quote: "As a leader, you will experience failure and disappointment. That\’s expected when you try new things and strive to be great at something. How you process that failure and how you develop others to deal with it is often the difference between settling and soaring.",
        author: "Patrick R. Leddin"
      },
      {
        quote: "How you think about leading yourself and others will directly influence your actions and results. Everything you do as a leader flows from your mindset.",
        author: ""
      },
      {
        quote: "Knowledge speaks, but wisdom listens.",
        author: "Jimi Hendrix"
      },
      {
        quote: "Be willing, at all times, to give up who you are for who you could become.",
        author: "WEB Du Bois"
      },
      {
        quote: "…the dreamers of the day are dangerous…for they may act their dream with open eyes and make it possible.",
        author: "TE Lawrence"
      },
      {
        quote: "Do not become a lover of comfort; it will destroy you long before the difficulties of life.",
        author: "Matthew Kelly"
      },
      {
        quote: "Never discourage anyone who continually makes progress, no matter how slow.",
        author: "Plato"
      },
      {
        quote: "Whatever you can do or dream you can, begin it.  Boldness has genius, power, and magic in it. Begin now.",
        author: "Johann Wolfgang von Goethe"
      },
      {
        quote: "Hapiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
      },
      {
        quote: "Critical thinking is not what you hear or read, it\’s asking questions.  Want to sharpen your mind? Learn how to ask questions.",
        author: "John Villanueva"
      },
      {
        quote: "If you\’re not uncomfortable, you\’re probably not growing.",
        author: "Tommy Parker"
      },
      {
        quote: "Want to lose your credibility in an argument? Lose control of your emotions. If you react in anger, the other person will mirror you and it will only make them angrier.  Calm breeds calm.",
        author: "Jason Van Camp"
      },
      {
        quote: "When there\’s resistance, performance may suffer…but your character is strengthened in the struggle.",
        author: "April Minatrea"
      },
      {
        quote: "Mental skills are learned behaviors. It\’s not an outcome achieved by accident. It is a process intentionally practiced.",
        author: "Jason Van Camp"
      },
      {
        quote: "Everything around you that you call life was made up by people that were no smarter than you and you can change it, you can influence it, you can build your own things that other people can use.",
        author: "Steve Jobs"
      },
      {
        quote: "What needs to die in me to become the person I said I’d be?",
        author: "Brené Brown"
      },
]

export default quotes  


 /* "There is a long list of unknown poets, musicians, and other dreamers who gave up on achieving greatness at the first sign of failure. Instead of standing at the summit of their own success, they settled for something less. They decided that good was good enough. – Patrick R. Leddin", 
             
             " – ", "The beginning of the sales pitch only started once they told you NO. If they said yes too fast, then you probably did not ask for enough. – Earl G. Graves", 
               "Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible. - Francis of Assisi", "Believe you can and you\'re halfway there. - Theodore Roosevelt", "It does not matter how slowly you go as long as you do not stop. - Confucius", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison", "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. - Confucius", "Don\'t watch the clock; do what it does. Keep going. - Sam Levenson", "A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand", "Expect problems and eat them for breakfast. - Alfred A. Montapert", "Start where you are. Use what you have. Do what you can. - Arthur Ashe", "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. Samuel Beckett", "Be yourself; everyone else is already taken. - Oscar Wilde",
               "Always remember that you are absolutely unique. Just like everyone else.  - Margaret Mead", "Always do whatever's next. - George Carlin", " - ", " - "]; */