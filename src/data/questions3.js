export const parties = {
  disy: 0,
  akel: 0,
  diko: 0,
  elam: 0,
  edek: 0,
  depa: 0,
  greens: 0,
};

export const questions = [
  {
    questionId: 1,
    questionTitle: "Ποια βάση λύσης υποστηρίζετε για το Κυπριακό;",
    questionAspect: "Κυπριακό Πρόβλημα",
    answers: [
      {
        answerId: 1,
        answerText: "Διζωνική Δικοινοτική Ομοσπονδία",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "akel", value: 1 },
          { party: "diko", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText: "Ενιαίο κράτος",
        answerPoints: [
          { party: "edek", value: 1 },
          { party: "elam", value: 1 },
        ],
      },
      {
        answerId: 3,
        answerText: "Δύο κράτη",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Διπλή ένωση",
        answerPoints: [],
      },
      {
        answerId: 5,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 2,
    questionTitle:
      "Τι πιστεύετε για τη διαδικασία ολοκλήρωσης της Ευρωπαϊκής Ένωσης;",
    questionAspect: "Εξωτερική Πολιτική",
    answers: [
      {
        answerId: 1,
        answerText: "Η ΕΕ πρέπει να εξελιχθεί σε Ευρωπαϊκή Ομοσπονδία",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText: "Η ΕΕ πρέπει να συνεχίσει τη διαδικασία ολοκλήρωσης",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Η ΕΕ πρέπει να παραμείνει όπως είναι",
        answerPoints: [{ party: "akel", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "Τα εθνικά κράτη πρέπει να αποκτήσουν ξανά κυριαρχία",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "elam", value: 1 },
          { party: "edek", value: 1 },
        ],
      },
      {
        answerId: 5,
        answerText: "Δεν ξέρω",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 3,
    questionTitle:
      "Αποδέχεστε την εκ περιτροπής προεδρία στο πλαίσιο μιας λύσης για το Κυπριακό;",
    questionAspect: "Κυπριακό Πρόβλημα",
    answers: [
      {
        answerId: 1,
        answerText:
          "Ναι, η εκ περιτροπής προεδρία μπορεί να γίνει αποδεκτή ως μέρος μιας συνολικά αποδεκτής λύσης",
        answerPoints: [
          { party: "disy", value: 1 },
          { party: "akel", value: 1 },
          { party: "depa", value: 1 },
        ],
      },
      {
        answerId: 2,
        answerText:
          "Όχι, καμιά μορφή εκ περιτροπής προεδρίας δεν μπορεί να γίνει  αποδεκτή",
        answerPoints: [
          { party: "edek", value: 1 },
          { party: "elam", value: 1 },
          { party: "greens", value: 1 },
        ],
      },
      {
        answerId: 3,
        answerText:
          "Ναι μόνο εάν είναι με κοινό ψηφοδέλτιο και ενιαία εκλογική βάση",
        answerPoints: [{ party: "diko", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 4,
    questionTitle:
      "Ποια στάση πρέπει να τηρήσει η Κύπρος στο Μεσανατολίτικο Πρόβλημα",
    questionAspect: "Economy",
    answers: [
      {
        answerId: 1,
        answerText:
          "Πρέπει να υποστηρίξει την άμεση κατάπαυση του πυρός στην Γάζα και τον τερματισμό της κατοχής",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 2,
        answerText:
          "Πρέπει να υπερασπιστεί το δικαίμα του Ισραήλ στην άμυνα και τον συνεχισμό της επιχείρησης στην Γάζα",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Πρέπει να τηρήσει στάση ουδερότητας",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Πρεπει να υποστηρίξει την",
        answerPoints: [],
      },
      {
        answerId: 5,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 5,
    questionTitle:
      "Ποια στάση πρέπει να τηρήσει η Κύπρος εντός ΕΕ για το Ουρκανικό",
    questionAspect: "Ευρωπαϊκή Ένωση",
    answers: [
      {
        answerId: 1,
        answerText:
          "Πρέπει να συνεχίσει να υποστηρίζει την επιβολή κυρώσεων στην Ρωσία",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Πρέπει να μπλοκάρει ",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Και στα δύο",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 6,
    questionTitle:
      "Που πρέπει να επικεντρωθούν οι προσπάθειες της Κυπριακής Δημοκρατίας σε σχέση με την Τουρκία",
    questionAspect: "Ευρωπαϊκή Ένωση",
    answers: [
      {
        answerId: 1,
        answerText: "Στην επιβολή κυρώσεων κατά της Τουρκίας",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Στην εφαρμογή ουσιαστικών Μέτρων Οικοδόμησης Εμπιστοσύνης",
        answerPoints: [],
      },
      {
        answerId: 3,
        answerText: "Και στα δύο",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 7,
    questionTitle:
      "Ποια στρατηγική πρέπει να ακολουθηθεί για την επίτευξη λύσης του Κυπριακού",
    questionAspect: "Κυπριακό Πρόβλημα",
    answers: [
      {
        answerId: 1,
        answerText:
          "Επικέντρωση στην επανέναρξη των συνομιλιών απο το σημείο που διακόπηκαν στο Κραν Μοντανα αποδεχόμενοι το Πλαίσιο Γκουτέρες ως έχει",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Επικέντρωση στην επανέναρξη των συνομιλιών χωρίς όμως να αποδεκτούμε τις εώς τώρα απαράδεκτες συγκλίσεις",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Επανατοποθέτηση του κυπριακού ως πρόβλημα εισβολής και κατοχής",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 8,
    questionTitle: "Ποια είναι η θέση σας για τις αμβλώσεις",
    questionAspect: "Κοινωνικά Θέματα",
    answers: [
      {
        answerId: 1,
        answerText:
          "Το δικαίωμα της γυναίκας να επιλέγει για το σώμα της πρέπει να διαφυλαχθεί.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Μόνο σε περιπτώσεις βιασμού, ασθένειας του εμβρύου ή κίνδύνου της υγείας της μητέρας",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Πρέπει να απαγορευθούν. Η ζωή του εμβρύου πρέπει να διαφυλαχθεί",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 9,
    questionTitle:
      "Πρέπει να νομιμοποιηθούν οι γάμοι και οι υιοθεσίες παιδιών από ομόφυλα ζευγάρια;",
    questionAspect: "Κοινωνικά Θέματα",
    answers: [
      {
        answerId: 1,
        answerText:
          "Ναι, πρέπει να νομιμοποιηθούν και τα δύο, τα ομοόφυλα ζευγάρια πρέπει να έχουν ίσα δικαιώματα με τα ετεροφυλόφυλα",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Πρέπει να νομιμοποιηθεί ο γάμος, όχι όμως η υιοθεσία παιδιών",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Όχι και στα δύο, πρέπει να διαφυλαχθεί ο θεσμός της οικογένειας",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 10,
    questionTitle: "Υποστηρίζεται την δημιουργία Ευρωπαικού Στρατού",
    questionAspect: "Ευρωπαϊκή Ένωση",
    answers: [
      {
        answerId: 1,
        answerText: "Ναι",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Όχι",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 11,
    questionTitle:
      "Ποια είναι η άποψη σας όσον αφορά την ένταξη της Κύπρου στον 'Συνεταιρισμό για την Ειρήνη' και το ΝΑΤΟ",
    questionAspect: "Εξωτερική Πολιτική",
    answers: [
      {
        answerId: 1,
        answerText:
          "Η ΚΔ πρέπει να υποβάλει αίτηση ένταξης στον ΣγτΕ και στόχος για το μέλλον πρέπει να είναι και η ένταξη στο ΝΑΤΟ.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Η ΚΔ πρέπει να ενταχθεί στον ΣγτΕ, όχι όμως στο ΝΑΤΟ",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Η ΚΔ δεν πρέπει να ενταχθεί ούτε στον ΣγτΕ ούτε φυσικά και στο ΝΑΤΟ",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 12,
    questionTitle: "Πρέπει να υπάρξει νομιμοποίηση της Κάνναβης",
    questionAspect: "Κοινωνικά Θέματα",
    answers: [
      {
        answerId: 1,
        answerText: "Ναι, για ιατρική και ψυχαγωγική χρήση.",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText: "Ναι, αλλά μόνο για αυστηρά ιατρική χρήση",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText: "Όχι, η αποποινικοποίηση θα οδηγήσει σε σοβαρά προβλήματα",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
  {
    questionId: 13,
    questionTitle:
      "Ποια είναι η άποψη σας για τον υποθαλάσσιο αγωγό φυσικού αερίου East Med",
    questionAspect: "Ενέργεια και Περιβάλλον",
    answers: [
      {
        answerId: 1,
        answerText:
          "Πρέπει να συνεχιστούν οι προσπάθειες για δημιουργία του East Med ώστε να καταστεί η Κύπρος ενεργειακός κόμβος της Μεσογείου",
        answerPoints: [],
      },
      {
        answerId: 2,
        answerText:
          "Η δημιουργία του αγωγού θα ήταν ωφέλιμη για την Κύπρο, όμως δεν αποτελεί ρεαλιστική επιλογή",
        answerPoints: [{ party: "disy", value: 1 }],
      },
      {
        answerId: 3,
        answerText:
          "Η εξόρυξη ορυκτών καυσίμων ανήκει στο παρελθόν. Πρέπει να επικεντρωθούμε στην ανάπτυξη ΑΠΕ",
        answerPoints: [],
      },
      {
        answerId: 4,
        answerText: "Δεν ξέρω / Δεν απαντώ",
        answerPoints: [],
      },
    ],
  },
];
