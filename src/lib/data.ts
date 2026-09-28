/**
 * =============================================================================
 * CONTENT & IMAGE SLOTS — WORKS OF ART HAIR SALON
 * =============================================================================
 *
 * IMAGE SLOT MAP (place your real salon photos in /public/images/):
 *
 *  Hero / About / Services:
 *    hero-interior.jpg       — salon interior (shelves, mirror, plants, sofa)
 *    about-1.jpg             — large portrait / stylist-at-work shot
 *    about-2.jpg             — smaller overlapping interior shot
 *    service-women.jpg       — best women's color / cut photo
 *    service-men.jpg         — best men's cut photo
 *    service-color.jpg       — best color / curls photo
 *
 *  Gallery (reused/cropped from above if fewer than 12 are supplied):
 *    gallery-01 ... gallery-12.jpg
 *
 *  If you attach FEWER images than slots, the same files are reused at
 *  different crops via CSS `object-position`. If an image is low resolution,
 *  it is masked with a subtle overlay so it still looks intentional.
 *
 *  TO SWAP: simply replace the JPGs in /public/images/ — no code changes.
 * =============================================================================
 *
 * CONTACT:
 *   Phone: 323-667-0072  (tap-to-call link: tel:+13236670072)
 *   Address: 4655 1/2 Hollywood Blvd, Los Angeles, CA 90027
 *
 * HOURS (LA timezone):
 *   Tuesday–Friday: 10am–6pm
 *   Saturday: 9am–5pm
 *   Sunday–Monday: Closed (or by special appointment)
 *
 * SOCIAL:
 *   Instagram: https://www.instagram.com/worksofarthair
 *   Facebook:  https://www.facebook.com/worksofarthair
 *
 * PLACEHOLDER FACTS TO VERIFY BEFORE LAUNCH (see brief):
 *   - "25 Years in Los Feliz"           (claimed in About stats)
 *   - "A-List Clientele"                (claimed in About stats)
 *   - "Award-Winning Stylists"          (claimed in About stats)
 *   - Pull-quote attribution wording    (Art Cartilel, Owner — needs
 *                                        confirmation from salon owner)
 * =============================================================================
 */

export const SALON = {
  name: "Works of ART Hair Salon",
  shortName: "Works of ART",
  tagline: "Los Feliz's Best Hair Salon Since 2001",
  established: 2001,
  phone: "323.667.0072",
  phoneRaw: "+13236670072",
  address: {
    street: "4655 1/2 Hollywood Blvd",
    city: "Los Angeles",
    region: "CA",
    postal: "90027",
    full: "4655 1/2 Hollywood Blvd, Los Angeles, CA 90027",
  },
  instagram: "https://www.instagram.com/worksofarthair",
  facebook: "https://www.facebook.com/worksofarthair",
  twitter: "https://x.com/worksofarthair",
  yelp: "https://www.yelp.com/biz/works-of-art-hair-salon-los-angeles",
};

export const HOURS = [
  { day: "Sunday", hours: "Closed", isToday: false },
  { day: "Monday", hours: "Closed", isToday: false },
  { day: "Tuesday", hours: "10:00 AM – 6:00 PM", isToday: false },
  { day: "Wednesday", hours: "10:00 AM – 6:00 PM", isToday: false },
  { day: "Thursday", hours: "10:00 AM – 6:00 PM", isToday: false },
  { day: "Friday", hours: "10:00 AM – 6:00 PM", isToday: false },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM", isToday: false },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  {
    num: "A",
    title: "Styles for Women",
    slot: "service-women",
    summary:
      "We have two types of clients at Works of Art: those who love beautiful, wearable hair, and those who love to try new and different things, pushing the cutting edge.",
    full:
      "We have two types of clients at Works of Art: those who love beautiful, wearable hair, and those who love to try new and different things, pushing the cutting edge. Whatever your look is, we can deliver it to you. We don't feel everyone fits in a box. We feel everyone is an individual and therefore should have what makes them feel comfortable. Does pink or blue hair make you jump up and down with delight and make you wanna party all night? GREAT! We love doing it! Do you love soft, natural, highlights and a beautiful classic cut? We love it, too.",
    category: "Women",
  },
  {
    num: "B",
    title: "Styles for Men",
    slot: "service-men",
    summary:
      "We have a large clientele of men who come to Works of Art. From executives to musicians, artists to students, we do it all.",
    full:
      "We have a large clientele of men who come to Works of Art. From executives to musicians, artists to students, we do it all. Many of our stylists specialize in men's cuts and colors. We have created iconic styles for major A-list musicians and actors, as well as for the businessman down the street. We put our reputations on the line for you. We want to make sure you love your hair. We get straight to the point, and give you what you want and need. We take our time to consult with you. We want you to come back! Rest assured, we have a style that will make you happy. Just read our reviews.",
    category: "Men",
  },
  {
    num: "C",
    title: "Color & Repair",
    slot: "service-color",
    summary:
      "If you have ever walked out of a salon and not been happy with your color, we know how it is. We have had hair too!",
    full:
      "If you have ever walked out of a salon and not been happy with your color, we know how it is. We have had hair too! We've all had bad experiences in our lives with hair color disasters! That is why every one of the stylists at Works of Art Hair Salon prides themselves on their ability to deliver consistently good hair color. We don't want to put you through the stress of hating your hair color! We like to do it all. Whether it's a simple single process color, beautiful natural-looking highlights, bleach and crazy colors like blue or violet, or that perfect shade of sunflower yellow, or the latest in balayage or ombre techniques... we know our stuff. And we guarantee our services. If for some reason you are not happy, let us know! You will be invited back and we will change it for no charge. If someone else messed it up, or you have had a bad 'at home' coloring disaster, CALL US! We are here to help! We have fantastic reviews on Yelp.com for our hair coloring services. So if you are scared, don't be! Read our reviews and come in for a consultation. You will be happy you did!",
    badge: "We guarantee our services",
    category: "Color",
  },
];

export const PRICING = [
  {
    service: "Men's Haircut",
    price: "$60",
    desc: "1 hour appointment. Award winning salon and stylists. Shampoo & blowdry. Luxe salon. Top-quality products used. Highly qualified stylists who specialize in men's cuts. Cut and style. Includes neck and sideburn trim.",
  },
  {
    service: "Women's Haircut with Styling",
    price: "$120",
    desc: "1 hour appointment. Award winning salon and stylists. Shampoo & blowdry. Blowout style. Skilled and talented stylists. Top-quality products used. Curly hair clients pay $20 extra for straight blow-dry with haircut.",
  },
];

// Gallery — 12 slots. If you have fewer source images, just reuse the same
// JPGs in /public/images/. CSS `object-position` will recompose them.
export const GALLERY = [
  {
    src: "/images/gallery-01.jpg",
    alt: "Sleek platinum blonde bob with blunt bangs",
    category: "Blonde",
    aspect: "tall",
  },
  {
    src: "/images/service-women.jpg",
    alt: "Long copper auburn waves",
    category: "Color",
    aspect: "wide",
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "Sleek brunette with face-framing bangs",
    category: "Cuts",
    aspect: "tall",
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Vibrant copper red waves",
    category: "Color",
    aspect: "square",
  },
  {
    src: "/images/service-men.jpg",
    alt: "Modern textured men's cut",
    category: "Men",
    aspect: "tall",
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "Silver pixie haircut",
    category: "Cuts",
    aspect: "wide",
  },
  {
    src: "/images/service-color.jpg",
    alt: "Dimensional blonde balayage with curls",
    category: "Blonde",
    aspect: "tall",
  },
  {
    src: "/images/about-1.jpg",
    alt: "Stylist at work shaping hair",
    category: "Cuts",
    aspect: "square",
  },
  {
    src: "/images/gallery-01.jpg",
    alt: "Platinum bob portrait",
    category: "Blonde",
    aspect: "tall",
    objectPosition: "center 30%",
  },
  {
    src: "/images/service-women.jpg",
    alt: "Copper color detail",
    category: "Color",
    aspect: "wide",
    objectPosition: "right center",
  },
  {
    src: "/images/about-2.jpg",
    alt: "Color application in salon",
    category: "Color",
    aspect: "tall",
  },
  {
    src: "/images/hero-interior.jpg",
    alt: "Salon interior detail",
    category: "Cuts",
    aspect: "wide",
    objectPosition: "center 60%",
  },
];

export const FILTER_CHIPS = [
  "All",
  "Blonde",
  "Color",
  "Cuts",
  "Men",
] as const;
