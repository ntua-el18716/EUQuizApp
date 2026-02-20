const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://euquizdb_o90o_user:JV6e9TA2RwoDd90xT4ylZ9RYqaCoezej@dpg-d6c657ftn9qs73cc5p3g-a.frankfurt-postgres.render.com/euquizdb_o90o",
  ssl: true,
});

// Answer data from the dump
const answers = [
  [
    106,
    22,
    1,
    JSON.stringify({
      el: "Διζωνική Δικοινοτική Ομοσπονδία",
      en: "Bizonal Bicommunal Federation",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "akel", value: 1 },
      { party: "diko", value: 1 },
      { party: "depa", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    110,
    22,
    2,
    JSON.stringify({ el: "Ενιαίο Κράτος", en: "Unitary state", tr: "ΤΒΙ" }),
    JSON.stringify([{ party: "edek", value: 1 }]),
  ],
  [
    107,
    22,
    3,
    JSON.stringify({ el: "Δύο κράτη", en: "Two states", tr: "ΤΒΙ" }),
    JSON.stringify([]),
  ],
  [
    108,
    22,
    4,
    JSON.stringify({ el: "Διπλή Ένωση", en: "Double Union", tr: "ΤΒΙ" }),
    JSON.stringify([]),
  ],
  [
    109,
    22,
    5,
    JSON.stringify({
      el: "Δεν ξέρω / Δεν απαντώ",
      en: "I don't not / Prefer not to say",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    120,
    23,
    1,
    JSON.stringify({
      el: "Η ΕΕ πρέπει να εξελιχθεί σε Ευρωπαϊκή Ομοσπονδία",
      en: "The EU should evolve to a European Federation",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([{ party: "volt", value: 1 }]),
  ],
  [
    121,
    23,
    2,
    JSON.stringify({
      el: "Η ΕΕ πρέπει να συνεχίσει τη διαδικασία ολοκλήρωσης",
      en: "The EU should continue the integration process",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "diko", value: 1 },
      { party: "disy", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    122,
    23,
    3,
    JSON.stringify({
      el: "Η ΕΕ πρέπει να παραμείνει όπως είναι",
      en: "The EU should remain as is",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    123,
    23,
    5,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    124,
    23,
    4,
    JSON.stringify({
      el: "Τα εθνικά κράτη πρέπει να αποκτήσουν ξανά την εθνική τους κυριαρχία",
      en: "The national states need to be sovereign again",
      tr: "TBI",
    }),
    JSON.stringify([{ party: "elam", value: 1 }]),
  ],
  [
    149,
    24,
    1,
    JSON.stringify({
      el: "Ναι, η εκ περιτροπής προεδρία μπορεί να γίνει αποδεκτή ως μέρος μιας συνολικά αποδεκτής λύσης",
      en: "Yes, rotating presidency can be accepted within an overall acceptable solution",
      tr: "TBI",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "akel", value: 1 },
      { party: "volt", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    150,
    24,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    151,
    24,
    3,
    JSON.stringify({
      el: "Μόνο εάν είναι με κοινό ψηφοδέλτιο και ενιαία εκλογική βάση",
      en: "Only if it's included with a single ballot and a single voting base",
      tr: "TBI",
    }),
    JSON.stringify([{ party: "greens", value: 1 }]),
  ],
  [
    152,
    24,
    2,
    JSON.stringify({
      el: "Όχι, καμιά μορφή εκ περιτροπής προεδρίας δεν μπορεί να γίνει  αποδεκτή",
      en: "No, no form of rotating presidency can be accepted",
      tr: "TBI",
    }),
    JSON.stringify([
      { party: "diko", value: 1 },
      { party: "edek", value: 1 },
      { party: "elam", value: 1 },
    ]),
  ],
  [
    157,
    26,
    1,
    JSON.stringify({
      el: "Πρέπει να συνεχίσει να υποστηρίζει την επιβολή κυρώσεων στην Ρωσία μέχρι την απελευθέρωση της Ουκρανίας",
      en: "Cyprus should continue supporting imposing of sanctions against Russia until Ukraine is free",
      tr: "TBI",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "diko", value: 1 },
      { party: "depa", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    158,
    26,
    3,
    JSON.stringify({
      el: "Πρέπει να μπλοκάρει μελλοντικές κυρώσεις κατά τις Ρωσίας",
      en: "Cyprus should block future sanctions to Russia",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([{ party: "elam", value: 1 }]),
  ],
  [
    159,
    26,
    2,
    JSON.stringify({
      el: "Πρέπει να υποστηρίξει το τέλος των εχθροπραξιών και την έναρξη ειρηνευτικών διαπραγματεύσεων μεταξύ Ουκρανίας-Ρωσσίας",
      en: "Cyprus should support the end of the conflict and for peace negotiations between Ukraine and Russia to begin",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "akel", value: 1 },
      { party: "greens", value: 1 },
    ]),
  ],
  [
    160,
    26,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    204,
    30,
    3,
    JSON.stringify({
      el: "Όχι και στα δύο, πρέπει να διαφυλαχθεί ο θεσμός της οικογένειας",
      en: "No, for neither same-sex marriage nor for adoption",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "elam", value: 1 },
      { party: "diko", value: 1 },
    ]),
  ],
  [
    170,
    29,
    1,
    JSON.stringify({
      el: "Το δικαίωμα της γυναίκας να επιλέγει για το σώμα της πρέπει να διαφυλαχθεί",
      en: "The right of women to choose what to do with their bodies needs to be protected",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "akel", value: 1 },
      { party: "greens", value: 1 },
      { party: "depa", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    171,
    29,
    2,
    JSON.stringify({
      el: "Μόνο σε περιπτώσεις βιασμού, ασθένειας του εμβρύου ή κίνδύνου της υγείας της μητέρας",
      en: "Abortions should only be acceptable in cases of rape, fetal abnormalities, or when the life of the mother is threatened",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "diko", value: 1 },
      { party: "edek", value: 1 },
    ]),
  ],
  [
    172,
    29,
    3,
    JSON.stringify({
      el: "Πρέπει να απαγορευθούν. Η ζωή του εμβρύου πρέπει να διαφυλαχθεί",
      en: "They need to be banned. The life of the embryo must be protected",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([{ party: "elam", value: 1 }]),
  ],
  [
    173,
    29,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    203,
    30,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    176,
    31,
    2,
    JSON.stringify({ el: "Όχι", en: "No", tr: "Hayır" }),
    JSON.stringify([{ party: "akel", value: 1 }]),
  ],
  [
    177,
    31,
    3,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    166,
    28,
    1,
    JSON.stringify({
      el: "Επικέντρωση στην επανέναρξη των συνομιλιών απο το σημείο που διακόπηκαν στο Κραν Μοντανα αποδεχόμενοι το Πλαίσιο Γκουτέρες ως έχει",
      en: "We should focus on the resumption of negotiations from the point they left off in Crans Montana",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "akel", value: 1 },
      { party: "volt", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    168,
    28,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    169,
    28,
    3,
    JSON.stringify({
      el: "Επανατοποθέτηση του κυπριακού στην ορθή του βάση ως πρόβλημα εισβολής και κατοχής, απόρριψη των δικοινοτικών συνομιλιών",
      en: "The Cyprus problem should be refocused as an issue of invasion and occupation, refraining from engaging in bi-communal dialogue",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "elam", value: 1 },
      { party: "edek", value: 1 },
    ]),
  ],
  [
    161,
    27,
    1,
    JSON.stringify({
      el: "Στην επιβολή κυρώσεων κατά της Τουρκίας",
      en: "On imposing sanctions to Turkey",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "edek", value: 1 },
      { party: "elam", value: 1 },
    ]),
  ],
  [
    162,
    27,
    2,
    JSON.stringify({
      el: "Στην εφαρμογή ουσιαστικών Μέτρων Οικοδόμησης Εμπιστοσύνης(χωρίς να αποκλείεται το πιθανό άνοιγμα νέων οδοφραγμάτων)",
      en: "On implementing Trust Building measures(including possibly opening new crossing points)",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "volt", value: 1 },
      { party: "akel", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    163,
    27,
    4,
    JSON.stringify({
      el: "Στην επιβολή κυρώσεων κατά της Τουρκίας και μέτρων κατά των Τουρκοκυπρίων(συμπεριλαμβανομένου του κλεισίμο των οδοφραγμάτων)",
      en: "On imposing sanctions to Turkey and to Turkish Cypriots (including possibly closing the crossing points)",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    164,
    27,
    3,
    JSON.stringify({
      el: "Και στα δύο πιο πάνω",
      en: "On both the above",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "greens", value: 1 },
      { party: "diko", value: 1 },
    ]),
  ],
  [
    165,
    27,
    5,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    153,
    25,
    1,
    JSON.stringify({
      el: "Πρέπει να υποστηρίξει την άμεση κατάπαυση του πυρός στην Γάζα και τον τερματισμό της κατοχής",
      en: "Cyprus should call for immediate ceasefire in Gaza and the end of the occupation",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "akel", value: 1 },
      { party: "edek", value: 1 },
      { party: "greens", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    156,
    25,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    175,
    31,
    1,
    JSON.stringify({ el: "Ναι", en: "Yes", tr: "Evet" }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "diko", value: 1 },
      { party: "elam", value: 1 },
      { party: "edek", value: 1 },
      { party: "volt", value: 1 },
      { party: "greens", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    154,
    25,
    2,
    JSON.stringify({
      el: "Πρέπει να υπερασπιστεί το δικαίμα του Ισραήλ στην άμυνα και τον συνεχισμό της επιχείρησης στην Γάζα",
      en: "Cyprus should defend Israel's right to defend itself and the continuation of the operation in Gaza",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "elam", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    155,
    25,
    3,
    JSON.stringify({
      el: "Πρέπει να τηρήσει στάση ουδερότητας",
      en: "Cyprus should stay neutral",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([]),
  ],
  [
    178,
    32,
    1,
    JSON.stringify({
      el: "Η ΚΔ πρέπει να υποβάλει αίτηση ένταξης στον ΣγτΕ και στόχος για το μέλλον πρέπει να είναι και η ένταξη στο ΝΑΤΟ",
      en: "The RoC should apply to join the PfP and joining NATO should be a future goal",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "volt", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    179,
    32,
    2,
    JSON.stringify({
      el: "Η ΚΔ πρέπει να ενταχθεί στον ΣγτΕ, όχι όμως στο ΝΑΤΟ",
      en: "The RoC needs to join the PfP, but not NATO",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "edek", value: 1 },
      { party: "diko", value: 1 },
      { party: "greens", value: 1 },
    ]),
  ],
  [
    180,
    32,
    3,
    JSON.stringify({
      el: "Η ΚΔ δεν πρέπει να ενταχθεί ούτε στον ΣγτΕ ούτε φυσικά και στο ΝΑΤΟ",
      en: "The RoC should neither join PfP nor NATO",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "akel", value: 1 },
      { party: "elam", value: 1 },
    ]),
  ],
  [
    181,
    32,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    182,
    33,
    1,
    JSON.stringify({
      el: "Ναι, για ιατρική και ψυχαγωγική χρήση",
      en: "Yes, both for medicinal and recreational purposes",
      tr: "TBI",
    }),
    JSON.stringify([
      { party: "greens", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    183,
    33,
    3,
    JSON.stringify({
      el: "Όχι, η αποποινικοποίηση θα οδηγήσει σε σοβαρά προβλήματα",
      en: "No, decriminalising it will lead to serious problems",
      tr: "TBI",
    }),
    JSON.stringify([{ party: "elam", value: 1 }]),
  ],
  [
    184,
    33,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    185,
    33,
    2,
    JSON.stringify({
      el: "Ναι, αλλά μόνο για αυστηρά ιατρική χρήση",
      en: "Yes, but strictly for medical use",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "diko", value: 1 },
      { party: "akel", value: 1 },
      { party: "depa", value: 1 },
      { party: "edek", value: 1 },
    ]),
  ],
  [
    188,
    34,
    4,
    JSON.stringify({
      el: "Άλλο / Δεν ξέρω / Δεν απαντώ",
      en: "Other / I don't know / Prefer not to say\"",
      tr: "TBI",
    }),
    JSON.stringify([]),
  ],
  [
    189,
    34,
    3,
    JSON.stringify({
      el: "Η εξόρυξη ορυκτών καυσίμων ανήκει στο παρελθόν. Πρέπει να επικεντρωθούμε στην ανάπτυξη ΑΠΕ",
      en: "Extraction of fossil fuels belongs to the past. We need to focus on Renewable Energy Sources",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "greens", value: 1 },
      { party: "akel", value: 1 },
      { party: "volt", value: 1 },
    ]),
  ],
  [
    201,
    30,
    1,
    JSON.stringify({
      el: "Ναι, πρέπει να νομιμοποιηθούν και τα δύο, τα ομοόφυλα ζευγάρια πρέπει να έχουν ίσα δικαιώματα με τα ετεροφυλόφυλα",
      en: "Yes, both should be legalised, same-sex couples should have the same rights as heterosexual couples",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "disy", value: 1 },
      { party: "akel", value: 1 },
      { party: "volt", value: 1 },
      { party: "greens", value: 1 },
    ]),
  ],
  [
    202,
    30,
    2,
    JSON.stringify({
      el: "Πρέπει να νομιμοποιηθεί ο γάμος, όχι όμως η υιοθεσία παιδιών",
      en: "Yes for same-sex marriage, but not for adoption",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "edek", value: 1 },
      { party: "depa", value: 1 },
    ]),
  ],
  [
    167,
    28,
    2,
    JSON.stringify({
      el: "Επικέντρωση στην επανέναρξη των συνομιλιών χωρίς όμως να αποδεκτούμε τις εώς τώρα απαράδεκτες συγκλίσεις",
      en: "We should focus on the resumption of negotiations without accepting some of the previous unacceptable convergences",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([
      { party: "diko", value: 1 },
      { party: "greens", value: 1 },
    ]),
  ],
  [
    186,
    34,
    1,
    JSON.stringify({
      el: "Πρέπει να συνεχιστούν οι προσπάθειες για δημιουργία του East Med ώστε να καταστεί η Κύπρος ενεργειακός κόμβος της Μεσογείου",
      en: "The ongoing efforts to create East Med should be sustained, as they are crucial for positioning Cyprus as a key energy hub in the Mediterranean",
      tr: "TBI",
    }),
    JSON.stringify([
      { party: "depa", value: 1 },
      { party: "elam", value: 1 },
      { party: "diko", value: 1 },
      { party: "edek", value: 1 },
    ]),
  ],
  [
    187,
    34,
    2,
    JSON.stringify({
      el: "Η δημιουργία του αγωγού θα ήταν ωφέλιμη για την Κύπρο, όμως δεν αποτελεί ρεαλιστική επιλογή",
      en: "While the creation of East Med would be beneficial for Cyprus, it is not a realistic option",
      tr: "ΤΒΙ",
    }),
    JSON.stringify([{ party: "disy", value: 1 }]),
  ],
];

async function insertAnswers() {
  try {
    await client.connect();

    let inserted = 0;
    for (const answer of answers) {
      try {
        await client.query(
          'INSERT INTO answers ("answerId", "questionId", "answerIndex", "answerText", "answerPoints") VALUES ($1, $2, $3, $4, $5)',
          answer,
        );
        inserted++;
      } catch (err) {
        console.error(`Failed to insert answer ${answer[0]}:`, err.message);
      }
    }

    console.log(`Inserted ${inserted}/${answers.length} answers`);
    await client.end();
  } catch (err) {
    console.error("Connection error:", err.message);
  }
}

insertAnswers();
