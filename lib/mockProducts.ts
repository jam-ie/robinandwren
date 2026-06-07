// Mock product data for Phase 1 storefront development.
// Replace with Printify API calls in Phase 2 — the shape of each object must stay the same.
//
// Pricing convention (modeled on ofthehills.com — flat by size):
//   Prints  — 8×10: $28 | 11×14: $45
//   Cards   — single: $5 | pack of 8: $18
//   Tote    — one size: $22
//   Tea Towel — one size: $36
//   Originals — priced per painting ($150–$450)

export type ProductVariant = {
  id: string;
  label: string;       // displayed in the variant selector, e.g. "8×10", "Pack of 8"
  price: number;       // in cents, e.g. 3500 = $35.00
  printifyVariantId?: string; // filled in when Printify is connected
};

export type Product = {
  id: string;
  category: "prints" | "cards" | "small-goods" | "originals";
  occasionCategory: "for-the-wall" | "for-giving" | "for-the-home" | "originals";
  collection: string;  // used for filter labels within a category
  title: string;
  description: string;
  images: string[];    // public paths, first image is the listing thumbnail
  variants: ProductVariant[];
  sold?: boolean;      // originals only; keep listing visible when true
  printifyProductId?: string; // filled in when Printify is connected
};

const mockProducts: Product[] = [
  // ─── PRINTS ──────────────────────────────────────────────────────────────────

  {
    id: "print-fox-in-the-leaves",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Nature & Seasons",
    title: "Fox in the Leaves",
    description:
      "A red fox moves through the brilliant copper and gold of a Vermont autumn. Painted in loose, luminous watercolor, this piece captures the quiet wonder of the season at its peak.",
    images: ["/images/artwork/faves/tgiving fox with leaves.webp"],
    variants: [
      { id: "fox-leaves-8x10",  label: "8×10",  price: 2800 },
      { id: "fox-leaves-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-christmas-fox-and-bunny",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Holiday",
    title: "The Christmas Walk",
    description:
      "A fox and a bunny share a cozy Christmas moment together, bundled up and glowing. A perennial favourite for holiday mantles and gift-giving.",
    images: ["/images/artwork/christmas-fox-and-bunny.webp"],
    variants: [
      { id: "xmas-fox-bunny-8x10",  label: "8×10",  price: 2800 },
      { id: "xmas-fox-bunny-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-springtime-bunny",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Nature & Seasons",
    title: "Springtime Bunny",
    description:
      "A bunny clutches a fresh bunch of carrots, perfectly at home in the warmth of spring. Cheerful and sweet — a lovely addition to any room.",
    images: ["/images/artwork/faves/bunny-with-carrots.webp"],
    variants: [
      { id: "springtime-bunny-8x10",  label: "8×10",  price: 2800 },
      { id: "springtime-bunny-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-sail-with-me",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Nature & Seasons",
    title: "Sail with Me",
    description:
      "A classic sailboat glides across sun-dappled water in this breezy, luminous watercolor. Evokes long summer days and open horizons.",
    images: ["/images/artwork/Sailboat_1.webp"],
    variants: [
      { id: "sail-with-me-8x10",  label: "8×10",  price: 2800 },
      { id: "sail-with-me-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-party-time",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Birthday & Celebration",
    title: "Party Time",
    description:
      "A very festive chicken dressed for the occasion, balloon in hand and ready to celebrate. Pure joy on paper.",
    images: ["/images/artwork/birthday chicken.webp"],
    variants: [
      { id: "party-time-8x10",  label: "8×10",  price: 2800 },
      { id: "party-time-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-make-a-wish",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Birthday & Celebration",
    title: "Make a Wish",
    description:
      "Bears gather around a beautiful birthday cake, candles aglow. A warm and celebratory piece for birthdays, nurseries, and anyone who loves a good party.",
    images: ["/images/artwork/birthday-bears-cake-and-balloon.webp"],
    variants: [
      { id: "make-a-wish-8x10",  label: "8×10",  price: 2800 },
      { id: "make-a-wish-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-happy-birthday",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "Birthday & Celebration",
    title: "Happy Birthday",
    description:
      "Two bears share a stack of cupcakes in this sweet, hand-painted birthday scene. Perfect for birthday displays, gift-giving, and anyone who believes every day deserves a cupcake.",
    images: ["/images/artwork/birthday bears with cupcakes.webp"],
    variants: [
      { id: "happy-birthday-8x10",  label: "8×10",  price: 2800 },
      { id: "happy-birthday-11x14", label: "11×14", price: 4500 },
    ],
  },

  {
    id: "print-baguette-bear",
    category: "prints",
    occasionCategory: "for-the-wall",
    collection: "For Little Rooms",
    title: "Baguette Bear",
    description:
      "A very content bear strolls home with an armful of fresh baguettes. A favourite for nurseries, children's rooms, and anyone who loves bread.",
    images: ["/images/artwork/faves/baguette-bear.webp"],
    variants: [
      { id: "baguette-bear-8x10",  label: "8×10",  price: 2800 },
      { id: "baguette-bear-11x14", label: "11×14", price: 4500 },
    ],
  },

  // ─── CARDS ───────────────────────────────────────────────────────────────────

  {
    id: "card-valentine-bears",
    category: "cards",
    occasionCategory: "for-giving",
    collection: "Valentine's Day",
    title: "Valentine Bears",
    description:
      "Two bears sharing a heart — sweet and simple, just right for Valentine's Day or any time you want to say you care. Blank inside.",
    images: ["/images/artwork/valentine-bears-with-heart.webp"],
    variants: [
      { id: "valentine-bears-single", label: "Single card", price: 500 },
      { id: "valentine-bears-8pack",  label: "Pack of 8",   price: 1800 },
    ],
  },

  {
    id: "card-happy-easter",
    category: "cards",
    occasionCategory: "for-giving",
    collection: "Spring & Easter",
    title: "Happy Easter",
    description:
      "A bunny and a bear celebrate spring together in this cheerful watercolor greeting card. Blank inside. Perfect for Easter baskets and spring notes.",
    images: ["/images/artwork/faves/easter-bunny-and-bear.webp"],
    variants: [
      { id: "easter-single", label: "Single card", price: 500 },
      { id: "easter-8pack",  label: "Pack of 8",   price: 1800 },
    ],
  },

  // ─── SMALL GOODS ─────────────────────────────────────────────────────────────

  {
    id: "small-fox-tote",
    category: "small-goods",
    occasionCategory: "for-the-home",
    collection: "Tote Bags",
    title: "Fox in the Leaves Tote Bag",
    description:
      "Kathy's beloved autumn fox printed on a sturdy natural cotton tote. Large enough for the farmers market, beautiful enough to carry everywhere.",
    images: ["/images/artwork/faves/tgiving fox with leaves.webp"],
    variants: [
      { id: "fox-tote-natural", label: "Natural cotton", price: 2200 },
    ],
  },

  {
    id: "small-bunnies-tea-towel",
    category: "small-goods",
    occasionCategory: "for-the-home",
    collection: "Tea Towels",
    title: "Christmas Bunnies Tea Towel",
    description:
      "Three bunnies decorate a Christmas tree in this festive, heirloom-quality flour-sack tea towel. Makes a lovely holiday gift — and looks beautiful hanging in the kitchen all December.",
    images: ["/images/artwork/christmas bunnies decorating tree.webp"],
    variants: [
      { id: "bunnies-teatowel-floursack", label: "Flour sack cotton", price: 3600 },
    ],
  },

  // ─── ORIGINALS ───────────────────────────────────────────────────────────────

  {
    id: "original-bunny-with-cello",
    category: "originals",
    occasionCategory: "originals",
    collection: "Originals",
    title: "Musical Bunny",
    description:
      "An original watercolor painting — one of a kind and painted by hand. A bunny sits quietly with a cello, lost in music. Unframed; approximately 7×10 inches on 140 lb. cold-press paper. Ships flat with a certificate of authenticity.",
    images: ["/images/artwork/faves/bunny-with-cello.webp"],
    variants: [
      { id: "original-bunny-cello-unframed", label: "Original, unframed", price: 19000 },
    ],
    sold: false,
  },

  {
    id: "original-bear-in-boat",
    category: "originals",
    occasionCategory: "originals",
    collection: "Originals",
    title: "Bear in a Boat",
    description:
      "An original watercolor painting — one of a kind and painted by hand. A bear paddles a canoe through a still, sun-dappled lake. Unframed; approximately 8×11 inches on 140 lb. cold-press paper. Ships flat with a certificate of authenticity.",
    images: ["/images/artwork/bear-in-boat-0001.webp"],
    variants: [
      { id: "original-bear-boat-unframed", label: "Original, unframed", price: 39000 },
    ],
    sold: true,
  },
];

export default mockProducts;
