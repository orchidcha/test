const gameData = {
    "1": {
        "text": "Welcome to earth! Life here isn't much better than life in space, but we make do. What type of traveler are you?",
        "image": "smaller_images/earth.png",
        "choices": {
            "As light as I can be": [2, ["iPad Kid Tiny", "I've Lost It Tiny", "Polite Tiny"]],
            "I'll be bringing my entire house": [2, ["Professional Tiny", "Megamind Tiny", "Excited Tiny"]],
            "I like to live spontaneously": [2, ["Shocked Tiny", "Ghost Tiny"]],
            "I don't really get out much": [2, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "2": {
        "text": "You've got the choice to explore any setting of your choosing. Where are you going?",
        "image": "smaller_images/landscape.png",
        "choices": {
            "A quaint little town next to the river!": [3, ["Polite Tiny", "Professional Tiny", "Tired Tiny"]],
            "The big bustling city!": [4, ["iPad Kid Tiny", "Excited Tiny", "Megamind Tiny"]],
            "The glaciers!": [5, ["Ghost Tiny", "Side Eye Tiny", "I've Lost It Tiny"]],
            "The beach!": [6, ["Shocked Tiny"]]
        }
    },
    "3": {
        "text": "You've arrived at the small, riverside town! You love the small, cozy vibe of the town. What's the first thing you do?",
        "image": "smaller_images/small_town.png",
        "choices": {
            "Head into the Woodstock Cafe to get a drink": [41, ["Polite Tiny", "Excited Tiny"]],
            "Take a walk by Fort River": [41, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny"]],
            "Go into the Grand Library to read a book": [41, ["Megamind Tiny", "Professional Tiny"]],
            "Find a room and take a nap in": [41, ["iPad Kid Tiny", "I've Lost It Tiny", "Shocked Tiny"]],
        }
    },
    "41": {
        "text": "Better yet, you have the option to bring a buddy to help you explore the town! Who are you bringing?",
        "image": "smaller_images/friends.png",
        "choices": {
            "Lizzy, my best friend": [7, ["Excited Tiny", "Polite Tiny", "iPad Kid Tiny"]],
            "Siggy, my partner": [7, ["Professional Tiny", "Megamind Tiny", "Shocked Tiny"]],
            "Ozzy, my brother": [7, ["Ghost Tiny", "I've Lost It Tiny"]],
            "Pippy, my sister": [7, ["Tired Tiny", "Side Eye Tiny"]],
        }
    },
    "7": {
        "text": "You sit down to people watch for a little bit. So many interesting characters in this town! Who are you most fascinated by?",
        "image": "smaller_images/dogs.png",
        "choices": {
            "The dance team performing on the street!": [14, ["Excited Tiny", "iPad Kid Tiny", "Shocked Tiny"]],
            "The artist painting caricatures": [14, ["Megamind Tiny", "Professional Tiny", "Polite Tiny"]],
            "The woman sewing by the river": [14, ["Tired Tiny", "Ghost Tiny"]],
            "The dogs playing in the park": [14, ["I've Lost It Tiny", "Side Eye Tiny"]],
        }
    },

    "14": {
        "text": "As you walk around the town, you see a club fair for the town's local college! Which club is the most enticing to you?",
        "image": "smaller_images/clubs.png",
        "choices": {
            "The wine tasting club": [8, ["Megamind Tiny", "Polite Tiny"]],
            "The acapella group": [8, ["Excited Tiny", "Ghost Tiny", "Shocked Tiny"]],
            "The student investment club": [8, ["Professional Tiny", "Tired Tiny", "Side Eye Tiny"]],
            "The Asian dance troupe": [8, ["iPad Kid Tiny", "I've Lost It Tiny"]],
        }
    },

    "8": {
        "text": "All of a sudden, you hear a noise beyond the town's borders, closer to the woods past the river, but it seems like no one else can hear it. What do you do?",
        "image": "smaller_images/woods.png",
        "choices": {
            "Walk towards it confidently, you've got nothing to fear!": [9, ["Excited Tiny", "Shocked Tiny", "Side Eye Tiny"]],
            "Sneak off so no one can see you head towards it": [9, ["Ghost Tiny", "I've Lost It Tiny", "Professional Tiny"]],
            "Resist at first but curiosity ends up getting the better of you": [9, ["iPad Kid Tiny", "Megamind Tiny", "Polite Tiny", "Tired Tiny"]]
        }
    },
    "9": {
        "text": "As you walk, you start to feel a bit of fear. Who knows what's out there?? You're not sure if you should keep going. What do you do?",
        "image": "smaller_images/path.png",
        "choices": {
            "Run back to where you were, what you don't know can't harm you": [19, ["Tired Tiny", "Side Eye Tiny", "I've Lost It Tiny"]],
            "Keep heading forth - onward!": [48, ["Excited Tiny", "Professional Tiny", "Shocked Tiny"]],
            "Slow down and try to listen carefully": [55, ["iPad Kid Tiny", "Megamind Tiny", "Polite Tiny", "Ghost Tiny"]]
        }
    },
    "48": {
        "text": "You keep heading down the dirt path. The trees around you seem to shift, and the the air starts to thicken, swirling leaves into a frantic spiral. A powerful whirlwind erupts from nowhere, yanking you off your feet. ",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Continue": [49, ["iPad Kid Tiny", "Excited Tiny", "Ghost Tiny", "Tired Tiny", "Shocked Tiny", "Side Eye Tiny", "I've Lost It Tiny", "Professional Tiny", "Polite Tiny", "Megamind Tiny"]]
        }
    },
    "55": {
        "text": "Right as you slow down, a powerful whirlwind surges around you. The ground vanishes beneath your feet as you're lifted into the air, spinning helplessly into the unknown.",
        "image": "smaller_images/whirlwind.png",
        "choices": {
            "Continue": [49, ["iPad Kid Tiny", "Excited Tiny", "Ghost Tiny", "Tired Tiny", "Shocked Tiny", "Side Eye Tiny", "I've Lost It Tiny", "Professional Tiny", "Polite Tiny", "Megamind Tiny"]]
        }
    },
    "49": {
        "text": "As soon as the whirlwind lifts you off the ground, it suddenly stops, and you find yourself landing right next to a high school. Confused, you step inside, and memories of your high school years come rushing back. What was your favorite subject?",
        "image": "smaller_images/school.png",
        "choices": {
            "History": [10, ["Polite Tiny", "Megamind Tiny", "Professional Tiny"]],
            "Math": [10, ["iPad Kid Tiny", "Excited Tiny"]],
            "Science": [10, ["Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "English": [10, ["Ghost Tiny", "Tired Tiny"]]
        }
    },
    "10": {
        "text": "It seems that school has just ended, as no one's in the classrooms right now. What did you do after school during high school?",
        "image": "smaller_images/school_bus.png",
        "choices": {
            "Take the bus back home": [43, ["Tired Tiny", "Polite Tiny", "Side Eye Tiny"]],
            "Stop at a cafe nearby to unwind for a little bit": [43, ["iPad Kid Tiny", "Ghost Tiny"]],
            "Eat a tub of ice cream to relax": [43, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "Stay after school for sports/theater/etc.": [43, ["Professional Tiny", "Megamind Tiny"]]
        }
    },
    "43": {
        "text": "As you keep walking down the halls of the high school, you see a math classroom to your left, and a science classroom to your right. Which one do you enter?",
        "image": "smaller_images/classrooms.png",
        "choices": {
            "The science classroom": [11, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny", "Megamind Tiny"]],
            "The math classroom": [39, ["iPad Kid Tiny", "Ghost Tiny", "Tired Tiny", "Professional Tiny", "Polite Tiny"]]
        }
    },
    "11": {
        "text": "As you walk around the lab stations, you start to remember your own science class experience. Which memory is your favorite?",
        "image": "smaller_images/science_lab.png",
        "choices": {
            "The time that my lab group wasted who knows how much money on buffer": [42, ["Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "The time my well meaning chemistry teacher made the most disgusting chocolate you've ever had": [42, ["Excited Tiny"]],
            "When someone told me in lab that they had to figure out how to squat when using public toilets in China": [42, ["Megamind Tiny"]],
            "Staying up late to fix up my lab notebook for notebook checks": [42, ["iPad Kid Tiny", "Ghost Tiny", "Tired Tiny", "Professional Tiny", "Polite Tiny"]]
        }
    },
    "42": {
        "text": "Off in the distance, you hear a teacher humming a tune! It sounds like Let It Go from Frozen. Why did you walk away from your two buds when they were screaming out the lyrics to that song all those years ago?",
        "image": "smaller_images/christmas.png",
        "choices": {
            "They were annoying me": [12, ["Side Eye Tiny", "Professional Tiny", "Megamind Tiny"]],
            "I was tired and over it": [12, ["Tired Tiny", "Ghost Tiny"]],
            "I was pretending to not know them": [12, ["iPad Kid Tiny", "I've Lost It Tiny"]],
            "It is a Christmas song and I hate joy": [12, ["Excited Tiny", "Shocked Tiny", "Polite Tiny"]]
        }
    },
    "39": {
        "text": "You walk into the math classroom and think about all of the memories you had in math. Which is your favorite?",
        "image": "smaller_images/math_class.png",
        "choices": {
            "The time I completely forgot (a*b)^2 rule in calculus after being told it a bare minimum of 50 times the year prior": [40, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "That time I got 3/8 on a calculus multiple choice test": [40, ["Professional Tiny", "Megamind Tiny"]],
            "Some stranger putting glue on my hand during statistics": [40, ["Side Eye Tiny", "Ghost Tiny"]],
            "Intimidating said glue kid in precalculus because I looked scary": [40, ["iPad Kid Tiny", "Tired Tiny", "Polite Tiny"]]
        }
    },
    "40": {
        "text": "Math really turned out to be helpful in life. When was it most helpful?",
        "image": "smaller_images/macaron.png",
        "choices": {
            "When it helped me measure the perfect amount of egg whites to add into meringue so a little bit would plop onto my head": [44, ["iPad Kid Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "When it helped me calculate the mini golf scores so I could lie and say I beat someone else": [44, ["Professional Tiny", "Excited Tiny", "Shocked Tiny"]],
            "That lovely time when I took Bayesian statistics in New Zealand": [44, ["Megamind Tiny", "Ghost Tiny"]],
            "The time it helped me stay on beat while I danced to Fantastic Baby": [44, ["Polite Tiny", "Tired Tiny"]]
        }
    },
    "44": {
        "text": "The sun beats down on you through the window of the math classroom, and thinking back to how your calculus teacher had a lowkey very monotone voice, you slowly start to drift asleep. What do you dream about?",
        "image": "smaller_images/dream.png",
        "choices": {
            "The time that you overfed a goldfish and found it dead the next morning": [13, ["Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "The time you stole a calculator from your mom to do a math problem": [13, ["iPad Kid Tiny", "Professional Tiny", "Megamind Tiny"]],
            "The time meringue landed on your head and your dear friend got it all on video": [13, ["Ghost Tiny", "Tired Tiny"]],
            "The time you threw away your textbook before your final": [13, ["Excited Tiny", "Polite Tiny"]]
        }
    },
    "12": {
        "text": "You sit down at one of the lab stools, and the soft humming sends you off into a sleep. What do you dream about?",
        "image": "smaller_images/dream.png",
        "choices": {
            "The time that you overfed a goldfish and found it dead the next morning": [13, ["Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "The time you stole a calculator from your mom to do a math problem": [13, ["iPad Kid Tiny", "Professional Tiny", "Megamind Tiny"]],
            "The time meringue landed on your head and your dear friend got it all on video": [13, ["Ghost Tiny", "Tired Tiny"]],
            "The time you threw away your textbook before your final": [13, ["Excited Tiny", "Polite Tiny"]]
        }
    },
    "4": {
        "text": "You get to the bustling city! All around you are people walking at breakneck speed, everyone seems so busy! What's the first thing you're doing?",
        "image": "smaller_images/city.png",
        "choices": {
            "I'm headed straight for the ramen bar": [15, ["iPad Kid Tiny", "Excited Tiny", "Side Eye Tiny"]],
            "Walk into one of the art museums": [15, ["Megamind Tiny", "Professional Tiny", "Polite Tiny"]],
            "People watch on a bench with a drink and a book": [15, ["Ghost Tiny", "Tired Tiny"]],
            "Head into the nearest thrift store": [15, ["I've Lost It Tiny", "Shocked Tiny"]]
        }
    },
    "15": {
        "text": "After some walking, you stumble upon a massive park, bigger than your whole hometown. A rare pocket of nature in the middle of the city! Where do you head first?",
        "image": "smaller_images/park.png",
        "choices": {
            "Wander through the botanical gardens": [16, ["Tired Tiny", "Ghost Tiny", "Polite Tiny", "Megamind Tiny"]],
            "Check out the driving range": [16, ["iPad Kid Tiny", "Excited Tiny", "Shocked Tiny"]],
            "Walk towards the little waterfall": [16, ["Professional Tiny", "I've Lost It Tiny", "Side Eye Tiny"]]
        }
    },
    "16": {
        "text": "As you're strolling, you see a zoo! What exhibit are you checking out?",
        "image": "smaller_images/animals.png",
        "choices": {
            "The pandas ": [17, ["Ghost Tiny", "Tired Tiny", "I've Lost It Tiny"]],
            "The penguin cove": [17, ["iPad Kid Tiny", "Side Eye Tiny"]],
            "The dinosaur fossils": [17, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "The butterfly dome": [17, ["Excited Tiny", "Shocked Tiny"]]
        }
    },
    "17": {
        "text": "After going through the zoo, you decide to head to a cafe in the park. What do you ask the barista?",
        "image": "smaller_images/cafe.png",
        "choices": {
            "Ask them if they have lattes": [50, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "Order a hot chocolate": [50, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "Ask if they have a pot of earl grey tea": [50, ["iPad Kid Tiny", "Ghost Tiny"]],
            "Take a quick power nap": [50, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "50": {
        "text": "You sit in the cafe and see they have an array of books! Which one are you reading?",
        "image": "smaller_images/books.png",
        "choices": {
            "Sharp Objects by Gillian Flynn": [18, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "The Secret History by Donna Tartt": [18, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "The Women by Kristin Hannah": [18, ["iPad Kid Tiny", "Ghost Tiny"]],
            "When Breath Becomes Air by Paul Kalanithi": [18, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "18": {
        "text": "You head out after a bit of rest, but you start to hear a disconcerting noise. The sun is setting and the park is emptying. What's your next move?",
        "image": "smaller_images/sunset.png",
        "choices": {
            "Find a way out of the park before it gets too dark": [9, ["iPad Kid Tiny", "Ghost Tiny", "Side Eye Tiny", "Polite Tiny"]],
            "Stick to well-lit paths and keep walking": [9, ["Professional Tiny", "Megamind Tiny", "Tired Tiny"]],
            "Call a friend to meet up with you at a restaurant in the city so you're not alone": [9, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]]
        }
    },
    "19": {
        "text": "You hold your breath, listening intently. The sound is gone, but the air around you feels different, heavier. What do you do?",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Stay completely still, waiting to see if the sound returns": [20, ["Professional Tiny", "Megamind Tiny", "Polite Tiny", "Tired Tiny"]],
            "Take slow, cautious steps forward, testing if the strange feeling intensifies": [20, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "Turn around and walk in the opposite direction": [20, ["iPad Kid Tiny", "Ghost Tiny", "Side Eye Tiny"]]
        }
    },
    "20": {
        "text": "The uneasy feeling lingers. Nothing about this sits right. Where even are you??",
        "image": "smaller_images/uneasy.png",
        "choices": {
            "You've got to move. Whatever this is, you need to understand it": [21, ["iPad Kid Tiny", "Excited Tiny", "Shocked Tiny", "I've Lost It Tiny", "Professional Tiny", "Megamind Tiny"]],
            "Try to find something familiar, anything to anchor yourself and figure out where you are": [21, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny", "Polite Tiny"]]
        }
    },
    "21": {
        "text": "You close your eyes for a second to mentally escape from the situation you're in. When you next open your eyelids, you're transported to an unknown place — it looks like you're in someone's room in a house? No one seems to be home, so you have it all to yourself.",
        "image": "smaller_images/house.png",
        "choices": {
            "Continue": [22, ["iPad Kid Tiny", "Excited Tiny", "Ghost Tiny", "Tired Tiny", "Shocked Tiny", "Side Eye Tiny", "I've Lost It Tiny", "Professional Tiny", "Polite Tiny", "Megamind Tiny"]]
        }
    },
    "22": {
        "text": "You know what, if no one's home, there's no one to bother. You decide to take a shower — lucky for you, this bathroom has an assortment of candles to choose from. Which candle do you light before your shower?",
        "image": "smaller_images/candles.png",
        "choices": {
            "Anything with amber": [51, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "Something floral": [51, ["Professional Tiny", "Megamind Tiny"]],
            "A vanilla sugar gourmand scent": [51, ["iPad Kid Tiny", "Ghost Tiny", "Polite Tiny"]],
            "A crisp, linen-scented candle": [51, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "51": {
        "text": "You've got to try to get your energy up, today has been stressful and you're on edge. You decide to pick a song to listen to to set the mood for your shower. What song are you picking",
        "image": "smaller_images/music.png",
        "choices": {
            "Fire by BTS": [23, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny", "Polite Tiny"]],
            "Deja Vu by TXT": [23, ["Professional Tiny", "Megamind Tiny", "iPad Kid Tiny"]],
            "Drama by Aespa": [23, ["I've Lost It Tiny"]],
            "Mr. Vampire by ITZY": [23, ["Excited Tiny", "Shocked Tiny"]]
        }
    },
    "23": {
        "text": "You're in the middle of taking your shower when all of a sudden, the water turns scalding hot and turning the handle doesn't help! What do you do?",
        "image": "smaller_images/shower_hot.png",
        "choices": {
            "Yell and call for help in case anyone's passing by the house": [24, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "Jump out of the shower and shut the door": [25, ["Ghost Tiny", "Tired Tiny", "Polite Tiny"]],
            "Deal with it, a little hot water never hurt anyone": [26, ["iPad Kid Tiny", "Professional Tiny", "Megamind Tiny"]]
        }
    },
    "24": {
        "text": "You call for help, and thankfully, you left the window open. Someone biking past the house rushes in to help you by turning off the water supply to the house. What do you repay them with?",
        "image": "smaller_images/money.png",
        "choices": {
            "An embroidery piece that you had in your backpack": [27, ["Tired Tiny", "Side Eye Tiny", "I've Lost It Tiny"]],
            "The birthday card you got from random day with your buds": [27, ["Excited Tiny", "Polite Tiny", "Megamind Tiny"]],
            "A video from when you danced to Fantastic Baby": [27, ["iPad Kid Tiny", "Professional Tiny"]],
            "Two rows of a tank top you started knitting but gave up on": [27, ["Ghost Tiny", "Shocked Tiny"]]
        }
    },
    "25": {
        "text": "You jump out of the shower, but the hot water becomes so hot that it sets off the fire alarm. The firemen come in to save you! What do you repay them with?",
        "image": "smaller_images/firemen.png",
        "choices": {
            "An embroidery piece that you had in your backpack": [27, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "The birthday card you got from random day with your buds": [27, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "A video from when you danced to Fantastic Baby": [27, ["iPad Kid Tiny", "Ghost Tiny"]],
            "Two rows of a tank top you started knitting but gave up on": [27, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "26": {
        "text": "You stay in the shower, but it just gets hotter and hotter until you cannot take it anymore. You jump out of the shower - now what do you do?",
        "image": "smaller_images/hot_water.png",
        "choices": {
            "Have empathy for my friend who was in a very similar situation": [27, ["Excited Tiny", "Professional Tiny", "I've Lost It Tiny"]],
            "Realize that THESE THINGS ARE SOMETIMES OUT OF OUR CONTROL as my friend once said": [27, ["Shocked Tiny", "Megamind Tiny", "Tired Tiny"]],
            "Call said friend to tell her that she is forgiven": [27, ["Polite Tiny", "Ghost Tiny"]],
            "Take a breath and realize hot water is scary": [27, ["iPad Kid Tiny", "Side Eye Tiny"]]
        }
    },
    "27": {
        "text": "Today has been exhausting. You lie down on the bed and fall asleep. What do you dream about?",
        "image": "smaller_images/dream.png",
        "choices": {
            "The time that you overfed a goldfish and found it dead the next morning": [13, ["Shocked Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "The time you stole a calculator from your mom to do a math problem": [13, ["iPad Kid Tiny", "Professional Tiny", "Megamind Tiny"]],
            "The time meringue landed on your head and your dear friend got it all on video": [13, ["Ghost Tiny", "Tired Tiny"]],
            "The time you threw away your textbook before your final": [13, ["Excited Tiny", "Polite Tiny"]]
        }
    },
    "13": {
        "text": "You wake up, rested the next morning after an unbelievably hectic day. You manage your way to the airport - where are you going?",
        "image": "smaller_images/last_choice.png",
        "choices": {
            "Back home!": [0, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "As far away from here as you can": [0, ["Tired Tiny", "Side Eye Tiny"]],
            "I hate you :D is going back to space an option :D": [0, ["iPad Kid Tiny", "Ghost Tiny", "I've Lost It Tiny"]],
            "You think you'll hang around this town for a bit - who knows what else there is to explore!": [0, ["Excited Tiny", "Shocked Tiny"]]
        }
    },
    "5": {
        "text": "You've gotten to the glacier! It turns out to be much more touristy than you imagined. What is the first activity you partake in?",
        "image": "smaller_images/glacier_land.png",
        "choices": {
            "Go looking for penguins": [28, ["Professional Tiny", "Megamind Tiny", "I've Lost It Tiny"]],
            "Pet the huskies": [28, ["Excited Tiny", "Shocked Tiny"]],
            "Go ice-caving": [28, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny"]],
            "Hike around the glacier": [28, ["iPad Kid Tiny", "Polite Tiny"]]
        }
    },
    "28": {
        "text": "Afterwards, you head over to the ice rink to do some spins, and a crowd forms to watch! Who's your favorite figure skater?",
        "image": "smaller_images/ice_rink.png",
        "choices": {
            "Michelle Kwan": [45, ["iPad Kid Tiny", "Excited Tiny", "Shocked Tiny"]],
            "Yuzuru Hanyu": [45, ["Polite Tiny", "Professional Tiny", "Megamind Tiny"]],
            "Yuna Kim": [45, ["Ghost Tiny", "I've Lost It Tiny"]],
            "Tessa Virtue and Scott Moir": [45, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "45": {
        "text": "While you're skating, a small child trips you! You face-plant and chip a tooth - what do you do next?",
        "image": "smaller_images/chipped_tooth.png",
        "choices": {
            "Skate away scared - children are frightening!": [29, ["Ghost Tiny", "Tired Tiny"]],
            "Tell their parent that they have a brat on their hands": [29, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "Trip them back! Don't dish it if you can't take it": [29, ["iPad Kid Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "Ignore it - it's just a tooth": [29, ["Excited Tiny", "Shocked Tiny"]]
        }
    },
    "29": {
        "text": "As you walk around, you see a fresh patch of snow! What do you do with it?",
        "image": "smaller_images/snowman.png",
        "choices": {
            "Make a snow angel": [30, ["Tired Tiny", "Side Eye Tiny"]],
            "Make a snowball and throw it at the kid who tripped you": [30, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "Make some snow ducks": [30, ["iPad Kid Tiny", "Ghost Tiny", "I've Lost It Tiny"]],
            "Build a snowman": [30, ["Excited Tiny", "Shocked Tiny"]]
        }
    },
    "30": {
        "text": "You head over to the bar by the touristy area of the glacier. What drink are you getting?",
        "image": "smaller_images/bar.png",
        "choices": {
            "A negroni": [46, ["Excited Tiny", "Shocked Tiny"]],
            "A gin & tonic": [46, ["Ghost Tiny", "Tired Tiny", "Polite Tiny"]],
            "A hot chocolate - it's cold!": [46, ["Professional Tiny", "Megamind Tiny", "I've Lost It Tiny"]],
            "A Tom Collins": [46, ["iPad Kid Tiny", "Side Eye Tiny"]]
        }
    },
    "46": {
        "text": "Might as well get something to eat as well! What are you getting?",
        "image": "smaller_images/soup.png",
        "choices": {
            "A nice, hearty soup": [31, ["Professional Tiny", "Side Eye Tiny", "Polite Tiny"]],
            "A light salad": [31, ["Ghost Tiny", "Megamind Tiny"]],
            "A warm bowl of pho": [31, ["iPad Kid Tiny", "Excited Tiny"]],
            "A saucy, spicy pasta": [31, ["Tired Tiny", "Shocked Tiny", "I've Lost It Tiny"]]
        }
    },
    "31": {
        "text": "So many sweet treats to pick from! Which one is calling your name?",
        "image": "smaller_images/cake.png",
        "choices": {
            "The tiramisu": [32, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny"]],
            "The gelato": [32, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "A macaron": [32, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "A slice of chocolate cake": [32, ["iPad Kid Tiny"]]
        }
    },
    "32": {
        "text": "Right as you're about to sit down to enjoy your meal, a sudden gust of wind rattles the windows. Before you can react, a powerful whirlwind engulfs you, lifting you off your feet.",
        "image": "smaller_images/whirlwind.png",
        "choices": {
            "Continue": [49, ["iPad Kid Tiny", "Excited Tiny", "Ghost Tiny", "Tired Tiny", "Shocked Tiny", "Side Eye Tiny", "I've Lost It Tiny", "Professional Tiny", "Polite Tiny", "Megamind Tiny"]]
        }
    },
    "6": {
        "text": "Ah, the beach! You're right on the coastline, with nothing but the vast, vibrant blue ocean before you and the warm sand beneath your feet. What is your number one essential at the beach?",
        "image": "smaller_images/beach.png",
        "choices": {
            "A good pair of sunglasses": [33, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "A beach towel": [33, ["Ghost Tiny", "Tired Tiny", "Side Eye Tiny"]],
            "A swimsuit": [33, ["iPad Kid Tiny", "Excited Tiny"]],
            "An underwater camera": [33, ["Shocked Tiny", "I've Lost It Tiny"]]
        }
    },
    "33": {
        "text": "You prop yourself up on the sand ready to enjoy a good book. What book are you reading?",
        "image": "smaller_images/sandcastles.png",
        "choices":{
            "Intermezzo by Sally Rooney": [34, ["Professional Tiny", "Megamind Tiny", "Polite Tiny"]],
            "The Secret History by Donna Tartt": [34, ["Excited Tiny", "Shocked Tiny", "I've Lost It Tiny"]],
            "The Women by Kristin Hannah": [34, ["iPad Kid Tiny", "Ghost Tiny"]],
            "When Breath Becomes Air by Paul Kalanithi": [34, ["Tired Tiny", "Side Eye Tiny"]]
        }
    },
    "34": {
        "text": "You decide to head into the ocean. What's your first activity once you get into the water?",
        "image": "smaller_images/ocean.png",
        "choices": {
            "Snorkel and see the fish": [36, ["Tired Tiny", "Megamind Tiny", "Excited Tiny"]],
            "Float and look at the sky": [36, ["Polite Tiny", "Ghost Tiny", "I've Lost It Tiny"]],
            "Splash those around me with water": [36, ["iPad Kid Tiny", "Shocked Tiny"]],
            "Try to surf and catch a wave": [36, ["Professional Tiny", "Side Eye Tiny"]]
        }
    },
    "36": {
        "text": "Wow, isn't the water great? Which is your favorite body of water?",
        "image": "smaller_images/type_ocean.png",
        "choices": {
            "The Pacific Ocean": [37, ["Professional Tiny", "I've Lost It Tiny", "Side Eye Tiny"]],
            "The Tasman Sea": [37, ["Tired Tiny", "Shocked Tiny", "Megamind Tiny"]],
            "The Mediterranean Sea": [37, ["iPad Kid Tiny", "Ghost Tiny"]],
            "The Atlantic Ocean": [37, ["Excited Tiny", "Polite Tiny"]]
        }
    },
    "37": {
        "text": "You can't help but think about water bending when you're in an ocean like this. What type of bender would you want to be?",
        "image": "smaller_images/waterbending.png",
        "choices": {
            "A water bender": [38, ["Ghost Tiny", "Megamind Tiny", "Shocked Tiny"]],
            "An air bender": [38, ["iPad Kid Tiny", "Professional Tiny", "Tired Tiny"]],
            "An earth bender ": [38, ["Excited Tiny", "Polite Tiny", "I've Lost It Tiny"]],
            "A fire bender": [38, ["Side Eye Tiny"]]
        }
    },
    "38": {
        "text": "You're chest deep in the water when you see a wave headed towards you. It's a centimeter in front of your face before it engulfs you, lifting you far into the air. And then you fall, fall, fall, bracing yourself for impact.",
        "image": "smaller_images/falling.png",
        "choices": {
            "Continue": [20, ["iPad Kid Tiny", "Excited Tiny", "Ghost Tiny", "Tired Tiny", "Shocked Tiny", "Side Eye Tiny", "I've Lost It Tiny", "Professional Tiny", "Polite Tiny", "Megamind Tiny"]]
        }
    }
};

const personalities = { 
    "iPad Kid Tiny": 0,      // The Enthusiast
    "Ghost Tiny": 0,         // The Analyst
    "Excited Tiny": 0,       // The Dreamer
    "Tired Tiny": 0,     // The Adventurer
    "Shocked Tiny": 0,        // The Steady
    "Side Eye Tiny": 0,         // The Observer
    "I've Lost It Tiny": 0,   // The Harmonizer
    "Professional Tiny": 0,         // The Bold
    "Polite Tiny": 0, // The Solitary
    "Megamind Tiny": 0         // The Cautious
};

let currentState = 1;

// Preload all images
function preloadImages() {
    // Create an object to store all the image paths from gameData
    const imagePaths = new Set();
    
    // Extract all image paths from gameData
    for (const state in gameData) {
        if (gameData[state].image) {
            imagePaths.add(gameData[state].image);
        }
    }
    
    // Add the opening image
    imagePaths.add("smaller_images/landmark_opening.png");
    
    // Preload each image
    imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;
    });
}

// Call this function when the page loads
window.addEventListener('load', preloadImages);

function renderState(state) {
    console.log("Rendering state:", state);
    
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');
    
    // Create a loading state
    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = ''; // Clear previous choices
    
    // Create a promise for the image loading
    const loadImage = new Promise((resolve) => {
        if (gameData[state].image) {
            const img = new Image();
            img.onload = () => {
                storyImage.src = img.src;
                resolve();
            };
            img.onerror = () => {
                console.warn("Failed to load image:", gameData[state].image);
                storyImage.src = "smaller_images/placeholder.png";
                resolve();
            };
            img.src = gameData[state].image;
        } else {
            storyImage.src = "smaller_images/placeholder.png";
            resolve();
        }
    });
    
    // Create buttons after image is loaded
    loadImage.then(() => {
        // Now create all the buttons
        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            let selectedPersonalities = info[1];
            
            button.onclick = function() {
                console.log("Clicked to go to state", nextState);
                changeState(nextState, selectedPersonalities);
            };
            
            choicesContainer.appendChild(button);
        }
    });
}

function changeState(newState, selectedPersonalities) { 
    // Update personality scores
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    // Show loading state
    const loadingIndicator = document.getElementById('loading-indicator');
    const choicesContainer = document.getElementById('choices');
    const storyText = document.getElementById('story-text');
    
    // Clear current choices and fade image
    choicesContainer.innerHTML = '';
    document.getElementById('story-image').classList.add('image-fade');
    
    // Show loading indicator if we're not ending the game
    if (newState !== 0) {
        loadingIndicator.style.display = 'flex';
    }
    
    // Set a tiny timeout to ensure the UI updates before loading the next state
    setTimeout(() => {
        currentState = newState;

        if (currentState === 0) {
            loadingIndicator.style.display = 'none';
            revealMostSelectedCreature();
        } else {
            // Render next state after a short delay to show the loading effect
            renderState(currentState);
            
            // Hide loading indicator after rendering
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                document.getElementById('story-image').classList.remove('image-fade');
                document.getElementById('story-image').classList.add('image-show');
            }, 300); // Adjust timing as needed
        }
    }, 100);
}

function revealMostSelectedCreature() {
    let maxCount = 0;
    let maxCreature = '';

    for (const [creature, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCreature = creature;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const creatureImagePath = `smaller_images/id_cards/${maxCreature}.png`;

    // Preload the image
    const img = new Image();
    img.src = creatureImagePath;
    img.className = 'responsive-image'; 

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Tiny ID! Oh how I love this holiday...";
        text.appendChild(img);
    };
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    
    // Show game container
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    
    renderState(currentState);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

window.onload = () => {
    preloadImages(); // Make sure images are preloaded
    // Do not call renderState here, as it will render the game before user clicks "Enter the world"
};
