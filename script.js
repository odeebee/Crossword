var grid = []
var entriesUsed = []
var loop = true

//These are all 5 letter words
//var entries = ["abyss","alibi","angle","arena","azure","badge","banjo","basil","bezel","blimp","bravo","cabby","canal","cedar","cheer","cider","comet","coral","crane","crypt","cubic","curio","daisy","delta","depot","dingo","dozen","drake","eagle","easel","ember","epoxy","epoch","event","fjord","flair","flick","flora","flute","folio","frost","fungi","gaffe","gamut","glide","gloat","gnome","graph","grove","guava","guild","habit","haven","hazel","hinge","hoist","hymen","icing","inbox","index","inlet","irony","ivory","jaunt","jiffy","jolly","joust","juror","karat","karma","kayak","kiosk","kneel","koala","latch","lava","leech","lemma","lilac","lunar","lurch","lyric","mango","mania","maple","maser","melon","metro","minim","moose","motel","mural","music","naval","neigh","nepal","niece","noble","noose","nymph","oasis","obese","ocean","onion","opera","orbit","oxide","ozone","pagan","palma","parka","pasta","penny","perch","pesto","pixel","plaza","poesy","pouch","quail","quart","queen","quirk","quota","racer","radio","radon","raven","relic","resin","rhyme","ridge","rinse","robot","rowdy","rumor","salsa","satin","scuba","sepia","sheep","sloop","snack","sneer","spasm","spice","stork","straw","swell","swine","synod","taffy","tango","tatty","tempo"]
//var clues = ["A bottomless chasm or pit (5)", "Excuse used to explain away a crime (5)", "A measurement of inclination or direction (5)", "Gladiator’s battleground (5)", "Sky blue hue (5)", "A symbol of rank or authority (5)", "Stringed musical instrument, often with a twang (5)", "Herb used in pesto and Italian cooking (5)", "A sloped ring or rim on a watch or jewelry (5)", "Airship with a blimp-like build (5)", "A shout of praise or approval (5)", "Taxi driver, informally (5)", "Man-made waterway (5)", "Tree known for its aromatic wood (5)", "Sound of encouragement or celebration (5)", "Alcoholic drink from fermented apples (5)", "Small icy celestial body with a tail (5)", "Marine creature with a hard skeleton (5)", "Tall, wading bird often seen near water (5)", "Underground chamber or vault (5)", "Three-dimensional geometric shape (5)", "Small, odd object collected for curiosity (5)", "White-petaled flower, often a sign of innocence (5)", "Greek letter or river delta (5)", "Transport station or warehouse (5)", "Wild Australian dog (5)", "Twelve items (5)", "Male duck (5)", "Bird of prey, symbol of the U.S. (5)", "Artist’s frame for a canvas (5)", "Glowing coal or flicker of fire (5)", "Strong adhesive resin (5)", "A significant era or time period (5)", "Occasion or happening (5)", "Narrow inlet carved by glaciers (5)", "Stylish elegance or dash (5)", "Quick, sudden movement (5)", "Plant life, especially in a region (5)", "Woodwind instrument (5)", "Sheet of paper or pamphlet (5)", "Frozen moisture on a cold morning (5)", "Mushroom-like organisms (5)", "Social blunder or mistake (5)", "Complete range or scope (5)", "Move smoothly and effortlessly (5)", "Gloat or celebrate smugly (5)", "Garden statue of a tiny mythical creature (5)", "Chart for data or numbers (5)", "Group of trees or small forest (5)", "Tropical fruit with pink flesh (5)", "Association or league (5)", "Repeated behavior or routine (5)", "Safe harbor or refuge (5)", "Nut-bearing tree with greenish wood (5)", "Door mechanism for swinging open (5)", "Lift something using ropes or pulleys (5)", "Thin membrane, also part of a flower (5)", "Cake topping made from sugar (5)", "Incoming messages folder (5)", "Alphabetical listing aid (5)", "Narrow strip of water between lands (5)", "Sarcastic expression of meaning opposite to the literal (5)", "Creamy-white substance from tusks (5)", "Short pleasure trip (5)", "Very brief moment (5)", "Cheerful and happy (5)", "Medieval knight’s competition (5)", "Person serving on a jury (5)", "Unit of gold purity (5)", "Destiny or spiritual fate (5)", "Palindromic canoe (5)", "Small booth or stand (5)", "To go down on one’s knees (5)", "Eucalyptus-eating marsupial (5)", "Door lock catch (5)", "Molten rock from a volcano (4)", "Bloodsucking worm (5)", "Word meaning subject or theme (5)", "Pale purple flower (5)", "Moon-related (5)", "Sudden, jerky movement (5)", "Poem or song text (5)", "Tropical stone fruit (5)", "Obsession or craze (5)", "Tree known for syrup (5)", "Device emitting electromagnetic radiation (5)", "Fruit with green flesh (5)", "Urban rail system (5)", "Musical note repeated with minimal variation (5)", "Antlered animal (5)", "Budget roadside hotel (5)", "Wall painting (5)", "Sounds combined in harmony (5)", "Relating to a navy (5)", "Horse sound (5)", "Country bordering China (5)", "Sibling's daughter (5)", "Showing high moral character (5)", "Rope loop used for tying (5)", "Mythical female spirit (5)", "Desert water source (5)", "Very overweight (5)", "Large body of salt water (5)", "Pungent vegetable in layers (5)", "Dramatic musical work (5)", "Celestial path (5)", "Chemical compound with oxygen (5)", "Layer of the atmosphere (5)", "Follower of ancient beliefs (5)", "Capital of the Balearic Islands (5)", "Cold weather coat with hood (5)", "Italian noodles (5)", "Small coin (5)", "Perch or resting spot (5)", "Green sauce often on pasta (5)", "Tiny digital image (5)", "City square or shopping center (5)", "Short poem or verse (5)", "Small bag or sack (5)", "Ground-nesting bird (5)", "Liquid measurement unit (5)", "Royal female (5)", "Unusual trait or behavior (5)", "Share or portion (5)", "Race car driver (5)", "Broadcast medium (5)", "Radioactive gas (5)", "Black bird associated with omens (5)", "Ancient artifact (5)", "Sticky plant secretion (5)", "Poetic repetition of sounds (5)", "Long narrow ridge or crest (5)", "Cleanse with water (5)", "Machine with sensors and gears (5)", "Disorderly or unruly (5)", "Unverified talk or gossip (5)", "Mexican dip or dance (5)", "Smooth, glossy fabric (5)", "Underwater breathing device (5)", "Sepia-toned photo effect (5)", "Woolly farm animal (5)", "Small sailboat (5)", "Light bite to eat (5)", "Look with disdain (5)", "Sudden involuntary muscle movement (5)", "Aromatic cooking ingredient (5)", "Wading bird with long legs (5)", "Dry plant stalk, often from grain (5)", "Impressive or excellent (5)", "Domesticated pig (5)", "Church council meeting (5)", "Chewy candy often in bright colors (5)", "Lively ballroom dance (5)", "Shabby or worn out (5)", "Musical speed (5)"]

//These words have varying lengths
var entries = ["apple", "train", "candle", "bridge", "piano", "guitar", "window", "planet", "button", "camera", "river", "cloud", "letter", "bottle", "jacket", "pocket", "helmet", "mirror", "rocket", "forest", "ladder", "anchor", "castle", "ticket", "saddle", "wallet", "engine", "circle", "square", "triangle", "rabbit", "monkey", "zebra", "giraffe", "pencil", "eraser", "notebook", "marker", "binder", "chalk", "lamp", "curtain", "blanket", "pillow", "remote", "sofa", "carpet", "spoon", "knife", "fork", "plate", "bowl", "mug", "cup", "shelf", "clock", "phone", "tablet", "laptop", "printer", "mouse", "keyboard", "screen", "cable", "switch", "router", "modem", "speaker", "microphone", "camera", "shoe", "boot", "glove", "scarf", "hat", "watch", "ring", "bracelet", "necklace", "belt", "coin", "note", "check", "card", "key", "lock", "door", "gate", "fence", "path", "road", "street", "avenue", "boulevard", "highway", "lane", "alley", "bridge", "tunnel", "crossing", "park", "garden", "beach", "island", "mountain", "valley", "desert", "ocean", "sea", "lake", "pond", "stream", "waterfall", "cliff", "cave", "hill", "meadow", "field", "barn", "stable", "shed", "garage", "attic", "basement", "hallway", "lobby", "elevator", "stairs", "balcony", "roof"]
var clues = ["Popular fruit often associated with Newton (5)", "A mode of transport running on tracks (5)", "Wax object with a wick for lighting (6)", "Structure used to cross a river or gap (6)", "Large musical instrument with keys (5)", "Stringed instrument often used in bands (6)", "Transparent opening in a wall (6)", "Earth is one of these celestial bodies (6)", "Fastener or control you can press (6)", "Device for taking photographs (6)", "Clue for the word 'river' (5)", "Clue for the word 'cloud' (5)", "Clue for the word 'letter' (6)", "Clue for the word 'bottle' (6)", "Clue for the word 'jacket' (6)", "Clue for the word 'pocket' (6)", "Clue for the word 'helmet' (6)", "Clue for the word 'mirror' (6)", "Clue for the word 'rocket' (6)", "Clue for the word 'forest' (6)", "Clue for the word 'ladder' (6)", "Clue for the word 'anchor' (6)", "Clue for the word 'castle' (6)", "Clue for the word 'ticket' (6)", "Clue for the word 'saddle' (6)", "Clue for the word 'wallet' (6)", "Clue for the word 'engine' (6)", "Clue for the word 'circle' (6)", "Clue for the word 'square' (6)", "Clue for the word 'triangle' (8)", "Clue for the word 'rabbit' (6)", "Clue for the word 'monkey' (6)", "Clue for the word 'zebra' (5)", "Clue for the word 'giraffe' (7)", "Clue for the word 'pencil' (6)", "Clue for the word 'eraser' (6)", "Clue for the word 'notebook' (8)", "Clue for the word 'marker' (6)", "Clue for the word 'binder' (6)", "Clue for the word 'chalk' (5)", "Clue for the word 'lamp' (4)", "Clue for the word 'curtain' (7)", "Clue for the word 'blanket' (7)", "Clue for the word 'pillow' (6)", "Clue for the word 'remote' (6)", "Clue for the word 'sofa' (4)", "Clue for the word 'carpet' (6)", "Clue for the word 'spoon' (5)", "Clue for the word 'knife' (5)", "Clue for the word 'fork' (4)", "Clue for the word 'plate' (5)", "Clue for the word 'bowl' (4)", "Clue for the word 'mug' (3)", "Clue for the word 'cup' (3)", "Clue for the word 'shelf' (5)", "Clue for the word 'clock' (5)", "Clue for the word 'phone' (5)", "Clue for the word 'tablet' (6)", "Clue for the word 'laptop' (6)", "Clue for the word 'printer' (7)", "Clue for the word 'mouse' (5)", "Clue for the word 'keyboard' (8)", "Clue for the word 'screen' (6)", "Clue for the word 'cable' (5)", "Clue for the word 'switch' (6)", "Clue for the word 'router' (6)", "Clue for the word 'modem' (5)", "Clue for the word 'speaker' (7)", "Clue for the word 'microphone' (10)", "Device for taking photographs (6)", "Clue for the word 'shoe' (4)", "Clue for the word 'boot' (4)", "Clue for the word 'glove' (5)", "Clue for the word 'scarf' (5)", "Clue for the word 'hat' (3)", "Clue for the word 'watch' (5)", "Clue for the word 'ring' (4)", "Clue for the word 'bracelet' (8)", "Clue for the word 'necklace' (8)", "Clue for the word 'belt' (4)", "Clue for the word 'coin' (4)", "Clue for the word 'note' (4)", "Clue for the word 'check' (5)", "Clue for the word 'card' (4)", "Clue for the word 'key' (3)", "Clue for the word 'lock' (4)", "Clue for the word 'door' (4)", "Clue for the word 'gate' (4)", "Clue for the word 'fence' (5)", "Clue for the word 'path' (4)", "Clue for the word 'road' (4)", "Clue for the word 'street' (6)", "Clue for the word 'avenue' (6)", "Clue for the word 'boulevard' (9)", "Clue for the word 'highway' (7)", "Clue for the word 'lane' (4)", "Clue for the word 'alley' (5)", "Structure used to cross a river or gap (6)", "Clue for the word 'tunnel' (6)", "Clue for the word 'crossing' (8)", "Clue for the word 'park' (4)", "Clue for the word 'garden' (6)", "Clue for the word 'beach' (5)", "Clue for the word 'island' (6)", "Clue for the word 'mountain' (8)", "Clue for the word 'valley' (6)", "Clue for the word 'desert' (6)", "Clue for the word 'ocean' (5)", "Clue for the word 'sea' (3)", "Clue for the word 'lake' (4)", "Clue for the word 'pond' (4)", "Clue for the word 'stream' (6)", "Clue for the word 'waterfall' (9)", "Clue for the word 'cliff' (5)", "Clue for the word 'cave' (4)", "Clue for the word 'hill' (4)", "Clue for the word 'meadow' (6)", "Clue for the word 'field' (5)", "Clue for the word 'barn' (4)", "Clue for the word 'stable' (6)", "Clue for the word 'shed' (4)", "Clue for the word 'garage' (6)", "Clue for the word 'attic' (5)", "Clue for the word 'basement' (8)", "Clue for the word 'hallway' (7)", "Clue for the word 'lobby' (5)", "Clue for the word 'elevator' (8)", "Clue for the word 'stairs' (6)", "Clue for the word 'balcony' (7)", "Clue for the word 'roof' (4)"]

//var entries = ["arse","willy","shag","bonk","bollocks","tosser","knob","fanny","git","sod","boob","cock","prat","nob","bugger","pants","tea bag","slapper","beaver","boner","diddle","shaft","cheeky","hump","jerk","rump","chub","nut sack","bush","pickle","booty","flaps","whopper","meat","crack","gooch","moist","dong","balls","screw","shafted","spank","rumpus","grind","banana","pull out","popper","slobber","dumper","horny","tool","peach","plonker","rodeo","sploosh","boink","gag","cheeks","licker","dirty","pipe","kinky","whip","buzz","milf","daddy","stud","fox","ride","poke","snog","spurt","smack","twerk","ballsack","wad","quickie","splooge","grab","nibble","muff","bender","dipstick","clam","hooter","g-string","rear","tail","crank","junk","pickle tickle","beefcake","snatch","zaddy","buns","slinky","girth","sizzle","lube","shlong","pokehead","boobzilla","cheekyfest","lubemeister","milffest","smackpants","ballsackhead","bonerzilla","splooshfest","bootyhead","slobberfest","popperfest","gagjob","zaddyhead","popperzilla","grindzilla","sodpants","bonkface","nut sack2","chubzilla","zaddyface","screwhead","toolman","buzzjob","snatchpants","bonerman","tailman","bollockshead","whopperzilla","screwface","dongface","ridepants","shagmeister","snogpants","sploogemeister","daddyjob","beefcakeface","benderface","arseman","rumpzilla","pratjob","whopperfest","meatpants","buzzzilla","spankfest","slappermeister","rearmeister","whippants","flapsmeister","dumpermeister","willyfest","milfjob","nut sack9","cheekyzilla","shaftjob","fannyhead","shaftedmeister","bootypants","rumpface","milfman","jerkjob","crackzilla","smackman","shagjob","sizzleface","lickerface","tosserfest","pratzilla","bunsmeister","goochzilla","bunsman","junkjob","hooterpants","moistface","arsemeister","bonkzilla","bushmeister","jerkhead","g-stringmeister","bonerpants","pickle tickle3","cheekspants","grabface","kinkyface","shaftfest","pratpants","ballsman","pokeman","girthfest","tooljob","bunsface","hornyfest","toolhead","bollockspants","tea bag5","popperpants","boobhead","zaddymeister","flapspants","pickle tickle4","dongjob","tea bag2","dirtyjob","dumperzilla","bollocksface","prathead","quickiejob","sizzlepants","shagface","hooterman","pipehead","knobzilla","rodeojob","chubpants","zaddypants","popperface","twerkface","g-stringfest","cockpants","boinkfest","rumpmeister","hooterhead","shaftedman","slobberface","willypants","tosserzilla","pantsfest","arsejob","studzilla","whopperhead","crackfest","grindman","sploogefest","slinkyhead","studjob","popperhead","spankman","dirtyzilla","beaverjob","wadmeister","gagface","knobface","g-stringhead","nibbleface","junkman","moistfest","ballsackjob","whipman","goochjob","shaftedjob","boinkzilla","nut sack6","bananaface","kinkyzilla","pratmeister","cheekyjob","humpmeister","smackzilla","clamzilla","quickiefest","twerkpants","crankpants","crackpants","nibblemeister","slapperjob","nobpants","slapperpants","ridehead","pull out2","dirtyfest","clampants","bootymeister","gitman","bollockszilla","rumpusface","boobjob","hooterfest","meatfest","ballsackpants","crankmeister","spurtjob","diddlefest","moistzilla","sizzlezilla","screwman","rearface","cheekypants","ridezilla","pickle tickle5","beefcakepants","pipeface","spankpants","dongpants","daddyman","foxman","shafthead","twerkfest","grindpants","peachpants","quickiezilla"]
//var clues = ["Your gran wouldn't approve of this one (4)","You wouldn't say this at a dinner party... or would you? (5)","Crude, but makes people laugh every time (4)","Naughty slang for something or someone silly (4)","Juvenile humor goldmine word (8)","Cheeky way to refer to a 'tosser' (6)","Naughty slang for something or someone silly (4)","You wouldn't say this at a dinner party... or would you? (5)","You wouldn't say this at a dinner party... or would you? (3)","Used in the bedroom... or in a roast battle (3)","You wouldn't say this at a dinner party... or would you? (4)","Anatomical? Insult? Flirty joke? Yes. (4)","Anatomical? Insult? Flirty joke? Yes. (4)","Naughty slang for something or someone silly (3)","Naughty slang for something or someone silly (6)","Anatomical? Insult? Flirty joke? Yes. (5)","Could be body part, could be insult — you decide (7)","Cheeky way to refer to a 'slapper' (7)","Juvenile humor goldmine word (6)","Anatomical? Insult? Flirty joke? Yes. (5)","Your gran wouldn't approve of this one (6)","Cheeky way to refer to a 'shaft' (5)","You wouldn't say this at a dinner party... or would you? (6)","Crude, but makes people laugh every time (4)","Crude, but makes people laugh every time (4)","Naughty slang for something or someone silly (4)","Juvenile humor goldmine word (4)","Juvenile humor goldmine word (8)","Cheeky way to refer to a 'bush' (4)","Used in the bedroom... or in a roast battle (6)","Sounds rude, but it's probably just British slang (5)","Crude, but makes people laugh every time (5)","You wouldn't say this at a dinner party... or would you? (7)","Cheeky way to refer to a 'meat' (4)","You wouldn't say this at a dinner party... or would you? (5)","Cheeky way to refer to a 'gooch' (5)","Your gran wouldn't approve of this one (5)","Anatomical? Insult? Flirty joke? Yes. (4)","Juvenile humor goldmine word (5)","Cheeky way to refer to a 'screw' (5)","Sounds rude, but it's probably just British slang (7)","Your gran wouldn't approve of this one (5)","Cheeky way to refer to a 'rumpus' (6)","Your gran wouldn't approve of this one (5)","Used in the bedroom... or in a roast battle (6)","Cheeky way to refer to a 'pull out' (8)","Sounds rude, but it's probably just British slang (6)","Sounds rude, but it's probably just British slang (7)","Cheeky way to refer to a 'dumper' (6)","Sounds rude, but it's probably just British slang (5)","Juvenile humor goldmine word (4)","Sounds rude, but it's probably just British slang (5)","Naughty slang for something or someone silly (7)","Sounds rude, but it's probably just British slang (5)","Crude, but makes people laugh every time (7)","Anatomical? Insult? Flirty joke? Yes. (5)","Crude, but makes people laugh every time (3)","Juvenile humor goldmine word (6)","Used in the bedroom... or in a roast battle (6)","You wouldn't say this at a dinner party... or would you? (5)","Your gran wouldn't approve of this one (4)","Crude, but makes people laugh every time (5)","Crude, but makes people laugh every time (4)","Juvenile humor goldmine word (4)","Could be body part, could be insult — you decide (4)","Used in the bedroom... or in a roast battle (5)","Crude, but makes people laugh every time (4)","Sounds rude, but it's probably just British slang (3)","Cheeky way to refer to a 'ride' (4)","Naughty slang for something or someone silly (4)","Cheeky way to refer to a 'snog' (4)","Sounds rude, but it's probably just British slang (5)","Used in the bedroom... or in a roast battle (5)","Your gran wouldn't approve of this one (5)","Your gran wouldn't approve of this one (8)","Cheeky way to refer to a 'wad' (3)","Your gran wouldn't approve of this one (7)","Used in the bedroom... or in a roast battle (7)","Anatomical? Insult? Flirty joke? Yes. (4)","Used in the bedroom... or in a roast battle (6)","Cheeky way to refer to a 'muff' (4)","Sounds rude, but it's probably just British slang (6)","Used in the bedroom... or in a roast battle (8)","Anatomical? Insult? Flirty joke? Yes. (4)","Used in the bedroom... or in a roast battle (6)","Naughty slang for something or someone silly (8)","Juvenile humor goldmine word (4)","Naughty slang for something or someone silly (4)","Cheeky way to refer to a 'crank' (5)","Sounds rude, but it's probably just British slang (4)","Your gran wouldn't approve of this one (13)","Could be body part, could be insult — you decide (8)","Crude, but makes people laugh every time (6)","Crude, but makes people laugh every time (5)","Crude, but makes people laugh every time (4)","Cheeky way to refer to a 'slinky' (6)","Naughty slang for something or someone silly (5)","Sounds rude, but it's probably just British slang (6)","Cheeky way to refer to a 'lube' (4)","Could be body part, could be insult — you decide (6)","Crude, but makes people laugh every time (8)","You wouldn't say this at a dinner party... or would you? (9)","Juvenile humor goldmine word (10)","Crude, but makes people laugh every time (11)","Cheeky way to refer to a 'milffest' (8)","Crude, but makes people laugh every time (10)","Naughty slang for something or someone silly (12)","Sounds rude, but it's probably just British slang (10)","Crude, but makes people laugh every time (11)","Naughty slang for something or someone silly (9)","Crude, but makes people laugh every time (11)","Cheeky way to refer to a 'popperfest' (10)","Crude, but makes people laugh every time (6)","Anatomical? Insult? Flirty joke? Yes. (9)","Sounds rude, but it's probably just British slang (11)","Anatomical? Insult? Flirty joke? Yes. (10)","Anatomical? Insult? Flirty joke? Yes. (8)","Your gran wouldn't approve of this one (8)","You wouldn't say this at a dinner party... or would you? (9)","Could be body part, could be insult — you decide (9)","Sounds rude, but it's probably just British slang (9)","Could be body part, could be insult — you decide (9)","Used in the bedroom... or in a roast battle (7)","Your gran wouldn't approve of this one (7)","Juvenile humor goldmine word (11)","Your gran wouldn't approve of this one (8)","Juvenile humor goldmine word (7)","Sounds rude, but it's probably just British slang (12)","Your gran wouldn't approve of this one (12)","Juvenile humor goldmine word (9)","Could be body part, could be insult — you decide (8)","Naughty slang for something or someone silly (9)","Cheeky way to refer to a 'shagmeister' (11)","Could be body part, could be insult — you decide (9)","Cheeky way to refer to a 'sploogemeister' (14)","Sounds rude, but it's probably just British slang (8)","Juvenile humor goldmine word (12)","Crude, but makes people laugh every time (10)","Could be body part, could be insult — you decide (7)","Crude, but makes people laugh every time (9)","Sounds rude, but it's probably just British slang (7)","Anatomical? Insult? Flirty joke? Yes. (11)","Anatomical? Insult? Flirty joke? Yes. (9)","Sounds rude, but it's probably just British slang (9)","Your gran wouldn't approve of this one (9)","You wouldn't say this at a dinner party... or would you? (14)","Sounds rude, but it's probably just British slang (11)","Juvenile humor goldmine word (9)","Naughty slang for something or someone silly (12)","Used in the bedroom... or in a roast battle (13)","Naughty slang for something or someone silly (9)","Could be body part, could be insult — you decide (7)","You wouldn't say this at a dinner party... or would you? (9)","Cheeky way to refer to a 'cheekyzilla' (11)","Cheeky way to refer to a 'shaftjob' (8)","Anatomical? Insult? Flirty joke? Yes. (9)","Crude, but makes people laugh every time (14)","Anatomical? Insult? Flirty joke? Yes. (10)","Crude, but makes people laugh every time (8)","Juvenile humor goldmine word (7)","Naughty slang for something or someone silly (7)","Juvenile humor goldmine word (10)","Could be body part, could be insult — you decide (8)","Sounds rude, but it's probably just British slang (7)","Sounds rude, but it's probably just British slang (10)","Crude, but makes people laugh every time (10)","Sounds rude, but it's probably just British slang (10)","Could be body part, could be insult — you decide (9)","Anatomical? Insult? Flirty joke? Yes. (11)","Could be body part, could be insult — you decide (10)","Naughty slang for something or someone silly (7)","Sounds rude, but it's probably just British slang (7)","Could be body part, could be insult — you decide (11)","Used in the bedroom... or in a roast battle (9)","Could be body part, could be insult — you decide (11)","Crude, but makes people laugh every time (9)","Could be body part, could be insult — you decide (11)","Used in the bedroom... or in a roast battle (8)","Sounds rude, but it's probably just British slang (15)","Your gran wouldn't approve of this one (10)","Could be body part, could be insult — you decide (14)","Anatomical? Insult? Flirty joke? Yes. (11)","You wouldn't say this at a dinner party... or would you? (8)","Used in the bedroom... or in a roast battle (9)","Cheeky way to refer to a 'shaftfest' (9)","Anatomical? Insult? Flirty joke? Yes. (9)","Naughty slang for something or someone silly (8)","You wouldn't say this at a dinner party... or would you? (7)","Crude, but makes people laugh every time (9)","Naughty slang for something or someone silly (7)","Cheeky way to refer to a 'bunsface' (8)","You wouldn't say this at a dinner party... or would you? (9)","Naughty slang for something or someone silly (8)","Crude, but makes people laugh every time (13)","Juvenile humor goldmine word (8)","Cheeky way to refer to a 'popperpants' (11)","Sounds rude, but it's probably just British slang (8)","Your gran wouldn't approve of this one (12)","Could be body part, could be insult — you decide (10)","Naughty slang for something or someone silly (14)","Could be body part, could be insult — you decide (7)","You wouldn't say this at a dinner party... or would you? (8)","Naughty slang for something or someone silly (8)","Your gran wouldn't approve of this one (11)","You wouldn't say this at a dinner party... or would you? (12)","Crude, but makes people laugh every time (8)","Your gran wouldn't approve of this one (10)","Used in the bedroom... or in a roast battle (11)","Sounds rude, but it's probably just British slang (8)","Used in the bedroom... or in a roast battle (9)","Your gran wouldn't approve of this one (8)","Used in the bedroom... or in a roast battle (9)","Could be body part, could be insult — you decide (8)","Juvenile humor goldmine word (9)","Cheeky way to refer to a 'zaddypants' (10)","Crude, but makes people laugh every time (10)","Could be body part, could be insult — you decide (9)","You wouldn't say this at a dinner party... or would you? (12)","Juvenile humor goldmine word (9)","Crude, but makes people laugh every time (9)","Used in the bedroom... or in a roast battle (11)","Used in the bedroom... or in a roast battle (10)","Anatomical? Insult? Flirty joke? Yes. (10)","You wouldn't say this at a dinner party... or would you? (11)","Your gran wouldn't approve of this one (10)","Naughty slang for something or someone silly (11)","Naughty slang for something or someone silly (9)","Anatomical? Insult? Flirty joke? Yes. (7)","Sounds rude, but it's probably just British slang (9)","You wouldn't say this at a dinner party... or would you? (11)","Juvenile humor goldmine word (9)","Anatomical? Insult? Flirty joke? Yes. (8)","Could be body part, could be insult — you decide (11)","Juvenile humor goldmine word (10)","Cheeky way to refer to a 'studjob' (7)","Crude, but makes people laugh every time (10)","Could be body part, could be insult — you decide (8)","Anatomical? Insult? Flirty joke? Yes. (10)","Sounds rude, but it's probably just British slang (9)","Anatomical? Insult? Flirty joke? Yes. (10)","Cheeky way to refer to a 'gagface' (7)","Anatomical? Insult? Flirty joke? Yes. (8)","Crude, but makes people laugh every time (12)","Anatomical? Insult? Flirty joke? Yes. (10)","Crude, but makes people laugh every time (7)","Used in the bedroom... or in a roast battle (9)","Crude, but makes people laugh every time (11)","Your gran wouldn't approve of this one (7)","Could be body part, could be insult — you decide (8)","Sounds rude, but it's probably just British slang (10)","Anatomical? Insult? Flirty joke? Yes. (10)","Anatomical? Insult? Flirty joke? Yes. (9)","Sounds rude, but it's probably just British slang (10)","Juvenile humor goldmine word (10)","Juvenile humor goldmine word (11)","Juvenile humor goldmine word (9)","Sounds rude, but it's probably just British slang (11)","You wouldn't say this at a dinner party... or would you? (10)","Naughty slang for something or someone silly (9)","Crude, but makes people laugh every time (11)","You wouldn't say this at a dinner party... or would you? (10)","Anatomical? Insult? Flirty joke? Yes. (10)","Juvenile humor goldmine word (10)","You wouldn't say this at a dinner party... or would you? (13)","Sounds rude, but it's probably just British slang (10)","Crude, but makes people laugh every time (8)","Used in the bedroom... or in a roast battle (12)","You wouldn't say this at a dinner party... or would you? (8)","Anatomical? Insult? Flirty joke? Yes. (9)","Anatomical? Insult? Flirty joke? Yes. (9)","You wouldn't say this at a dinner party... or would you? (9)","Crude, but makes people laugh every time (12)","Sounds rude, but it's probably just British slang (6)","Cheeky way to refer to a 'bollockszilla' (13)","You wouldn't say this at a dinner party... or would you? (10)","You wouldn't say this at a dinner party... or would you? (7)","Your gran wouldn't approve of this one (10)","Cheeky way to refer to a 'meatfest' (8)","You wouldn't say this at a dinner party... or would you? (13)","Cheeky way to refer to a 'crankmeister' (12)","Crude, but makes people laugh every time (8)","Your gran wouldn't approve of this one (10)","Your gran wouldn't approve of this one (10)","Cheeky way to refer to a 'sizzlezilla' (11)","Crude, but makes people laugh every time (8)","Used in the bedroom... or in a roast battle (8)","Juvenile humor goldmine word (11)","Used in the bedroom... or in a roast battle (9)","Juvenile humor goldmine word (14)","Cheeky way to refer to a 'beefcakepants' (13)","Cheeky way to refer to a 'pipeface' (8)","Used in the bedroom... or in a roast battle (10)","Sounds rude, but it's probably just British slang (9)","You wouldn't say this at a dinner party... or would you? (8)","You wouldn't say this at a dinner party... or would you? (6)","Used in the bedroom... or in a roast battle (9)","Used in the bedroom... or in a roast battle (9)","Cheeky way to refer to a 'grindpants' (10)","Naughty slang for something or someone silly (10)","Naughty slang for something or someone silly (12)"]

function setup(rows){
    //Sets up grid and places words, also places clues beneath the grid
    var container = document.getElementById("Container");
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", rows);
    let cell;
    for (let c = 0; c < (rows * rows); c++){
        cell = document.createElement("div");
        cell.innerText ="";

        if((c+1) % rows && c+1 != 0){
            null;
        }
        else{
            cell.id = "end"
        }
        //This is such a stupid way of going about things but it works ig

        grid.push(cell);
        container.appendChild(cell).className = "grid-item";

    }

    var wordCount = 0;

    var position = 0
    // -21
    //-1 +1
    // +21

    var dir = "Across"

    var count = 0;

    var end = false;

    //grid[1].innerText = "a"

    while (loop == true){
        //break;
        if(end == true){
            console.log("Breaking")
            console.log("Starting vertical fill.")
            verticalFill(grid,rows)
            //console.log(entriesUsed)
            break;
        }
        else{
            var index = Math.floor(Math.random() * entries.length);
            var entrie = entries[index];
            console.log("Selected ",entrie)
            // if(entriesUsed.includes(entrie)){
            //     console.log("Checks not passed ",entrie," in array already.")
            //     continue;
            //     //This worked, then it didnt fuck my life, fuck my pussy, fuck my son.
            // }
            if(entriesUsed.includes(entrie) == false){
                //entriesUsed.push(entrie)
                //Row then collum
                //First check if there is space to generate a word
                //Then check if its the last square / collum in a row
                //console.log("Direction: ",dir)
                //Checks if it can fit 
                //console.log(entrie," has not been used before, parsing checks.")
                if(dir == "Across"){
                    //Horizontal checks
                    var count = 0;
                    var dummypos = position;
                    var endofrow = false;
                    var endofgrid = false;
                    //Need to check for 
                    //If its an empty space 
                    //If it shares a letter with the current letter in the word
                    //If its not the end of a row 
                    for(let i = 0; i < entrie.length; i++){
                        if(dummypos >= rows*rows){
                            //endofrow = true;
                            endofgrid = true;
                            break;
                        }
                        if(grid[dummypos].id == "end" && entrie.length != 3){
                            endofrow = true;
                            break;
                        }

                        if(grid[dummypos].innerText == ""){
                            //console.log("Square valid, empty")
                            count+=1;
                        }
                        else{
                            if(grid[dummypos].innerText == entrie[i]){
                                //TODO: add endrow checks, do that after making the row generation truly iterative
                                //console.log("Square valid, shared")
                                count+=1;
                            }
                            else{
                                //console.log("Square invalid")
                            }
                        }
                        
                        dummypos+=1
                    }
                    if(count == entrie.length){
                        //console.log("Checks have been passed, word can fit")
                        console.log("Adding word ",entrie," to position ",position)
                        for(let i = 0; i < entrie.length; i++){
                            grid[position].innerText = entrie[i]
                            if(grid[position].id == "end"){
                                console.log("While writing ",entrie," end of a row has been reached",position)
                        
                                if(position == (rows * rows) - 1){
                                    end = true;
                                    //break;
                                }

                                position+=rows * 2;
                                //TODO: newline
                            }
                            position+=1
                        }
                        if(endofgrid != true){
                            grid[position].style.backgroundColor = "black"
                        }
                        if(grid[position].id == "end"){
                            console.log("While blacking at end of word, end of row has been encounterde",position)
                        
                            if(position == (rows * rows) - 1){
                                end = true;
                                //break;
                            }

                            position+=rows * 2;
                            //break;
                        }
                        if(end != true){
                            entriesUsed.push(entrie)
                        }
                        position+=1
                    }
                    if(endofgrid == true){
                        console.log("end of grid, breaking before fuck shit happens")
                        verticalFill(grid,rows)
                        //console.log(entriesUsed)
                        break;
                    }
                    if(endofrow == true  && (count+1) <= 2){
                        //console.log("Filling ", count+1," spaces black")
                        //console.log("Starting at ",position)
                        for(let i = 0; i < (count+1); i++){
                            grid[position].style.backgroundColor = "black"
                            if(grid[position].id == "end"){
                                console.log("While blacking, end of row has been encountered",position)
                                
                                if(position == (rows * rows) - 1){
                                    end = true;
                                    //break;
                                }

                                position+=rows*2;
                            }
                            position+= 1;
                        }
                    }
                }
                wordCount+=1
            }
        }
    }
}

setup(11)
//15,15
//21 21

//This is the old vertical filling function, i hate it - it is too much voodoo magic
function vertfill(grid,size){
    console.log("vertfilling")
    null;
    //Fill all the columns it can
    //The plan - bruteforce. 
    //rows / 2 (rounded down) = empty rows to fill with collums 
    var vertpos = 0;
    var row = 0;
    var maxrow = size
    var breaker = false;

    var indexer = 0;
    while(true){
        
        //break;
        if(breaker == true){
            break;
        }
        rowentry = []
        for(let i = 0; i < maxrow; i++){
            rowentry.push(grid[vertpos].innerText)
            vertpos+=(size);
        }
        for(let i = 0; i < maxrow; i++){
            vertpos-=(size); //resets position 
        }
        var index = Math.floor(Math.random() * entries.length);
        var vertentrie = entries[index];
        console.log(vertentrie,"Starting at ",vertpos);
        //first loop needs to run size - length of word
        console.log(vertentrie," is ",vertentrie.length," letters long")
        console.log("it fits in the row ",size - vertentrie.length," times")
        for(let i = 0; i < (size - vertentrie.length); i++){
            console.log(" ")
            console.log("iteration" ,i);
            word = []
            var count = 0
            for(let k = size * (i); k < ((size) * vertentrie.length)+(size * (i)); k+=size){ //This took SO fucking long to figure out
                //word.push(grid[k].innerText)
                if(grid[k].innerText == "" && grid[k].style.backgroundColor != "black"){
                    console.log(grid[k].innerText, vertentrie[count],"Empty space, filling")
                    word.push(vertentrie[count]);
                }
                else if(grid[k].innerText == vertentrie[count]){
                    console.log(grid[k].innerText, vertentrie[count],"Letter matched, filling")
                    word.push(vertentrie[count]);
                }
                else{
                    console.log(grid[k].innerText, vertentrie[count],"No match")
                    break;
                }
                console.log("Increasing count")
                count+=1;
            }
            //console.log(word)
        }
        if(word.length == vertentrie.length){
            console.log(" ");
            console.log("ITS A MATCH ",vertentrie)
            breaker = true;
        }
        else{
            if(indexer < entries.length){
                indexer+=1;
            }
            else{
                row+=1;
                indexer=0;
            }
        }
    }
    console.log(" ")
    console.log(rowentry)
}

//This is the new vert filling function
function verticalFill(grid,size){
    //For each row in the grid:
    //Fills array X with N squares, Starting from 0
    //N equals the row size minus the iteration
    //Finds out what word can fit in that also matches, then places
    //much quicker than bruteforce. 
    console.log("Vertical fill starting now")
    entries.sort()

    var count = 0;

    var final = 0;
    var finals = []
    
    for(let i = 0; i < entries.length; i++){
        if(!entriesUsed.includes(entries[i])){
            var selectedEntrie = entries[i];
            console.log(selectedEntrie)
            var dummy;
            for(let x = 0; x < size - selectedEntrie.length + 1; x++){
                var placeholder = []
                dummy = x * size
                count = 0;
                for(let y = 0; y < selectedEntrie.length; y++){
                    placeholder.push(grid[dummy].innerText)
                    //If its the first letter in the word, check the above square is empty
                    if(grid[dummy].innerText == "" && grid[dummy].backgroundColor != "black"){
                        if(y == 0){
                            if(grid[dummy - size].innerText == ""){
                                count+=1
                            }
                        }
                        else{
                            count+=1;
                        }
                    }
                    else{
                        if(grid[dummy].innerText == selectedEntrie[y]){
                            count+=1;
                        }
                    }
                    //Run this snippet last to avoid problems
                    dummy+=size;
                }
                console.log(placeholder)
                console.log(count," words out of ",selectedEntrie.length," matched")
                if(count == selectedEntrie.length){
                    final+=1;
                    finals.push(selectedEntrie)
                }
            }
        }
    }
    console.clear()
    console.log("We found ",final," matches")
    console.log(finals)
    //console.log(entries)
}