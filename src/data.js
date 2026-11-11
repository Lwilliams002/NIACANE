// All site copy, taken from the original niacane.com homepage.
// Edit text, prices and locations here; the components read from this file.

export const media = (name) => `${import.meta.env.BASE_URL}media/${name}`

export const phone = { label: '(713) 449-5705', href: 'tel:+17134495705' }

// URL of the mail function in /worker (sends the contact form through Resend).
// Leave empty until the worker is deployed; the form then shows a call/email fallback.
export const contactEndpoint = 'https://niacane-contact.niacane.workers.dev'

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Menu', href: '#menu' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Locations', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  title: 'Fresh Pressed Sugarcane Juice in Houston: Raw, Natural & Local',
  text: "Nia Cane's mission is to fuel the Houston Metropolitan area by setting the gold standard for the cleanest, freshest sugarcane juice and unrivaled customer service.",
}

export const benefits = [
  { icon: 'bolt', title: 'Instant Energy Boost', text: 'The natural sucrose in sugarcane provides a quick energy source that helps rehydrate the body and reduce fatigue.' },
  { icon: 'sun', title: 'Skin Health', text: 'The presence of alpha-hydroxy acids (AHAs) like glycolic acid helps keep the skin glowing and reduces acne.' },
  { icon: 'img:h2-filler-icons-03.svg', title: 'Rich in Antioxidants', text: 'Our juice is loaded with phenolic compounds that help fight inflammation and boost the immune system.' },
  { icon: 'medical', title: 'Liver Support', text: 'In traditional medicine, sugarcane juice is used to strengthen the liver and is often recommended for those recovering from jaundice.' },
  { icon: 'img:abt-icon-04.svg', title: 'Digestive Aid', text: 'Sugarcane juice helps maintain a healthy digestive system due to its high potassium content.' },
  { icon: 'mineral', title: 'Mineral Dense', text: 'Every bottle contains essential minerals including calcium, magnesium, and iron, supporting bone health and oxygen transport.' },
]

export const favorites = [
  { title: 'Beet', image: 'beet-flavor-nia-cane.png' },
  { title: 'Sugarcane', image: 'sugacane-flavor-nia-cane.png' },
  { title: 'Carrot', image: 'carrot-flavor-nia-cane.png' },
  { title: 'Dragon Fruit', image: 'dragonfruit-flavor-nia-cane-2.png' },
  { title: 'Strawberry', image: 'strawberry-flavor-nia-cane-.png' },
  { title: 'Mango', image: 'mango-flavor-nia-cane.png' },
  { title: 'Coffee', image: 'latte-flavor-nia-cane.png' },
]

export const aboutVideo = 'https://www.youtube.com/embed/3aOiyidu10c?autoplay=1'

export const wholesale = {
  title: 'Premium Wholesale Partnerships',
  subtitle: 'For Houston’s Finest Restaurants & Wellness Bars.',
  text: 'Are you a local business owner? We offer wholesale sugarcane juice for restaurants and bars looking to add a natural, exotic flair to their menus.',
  // The original counters had no number saved, so they showed the widget default (100).
  counters: [
    { icon: 'h3-juice-icon-05.svg', value: 100, title: 'Fruit' },
    { icon: 'h3-juice-icon-03.svg', value: 100, title: 'Sugarcane Juice' },
    { icon: 'h3-juice-icon-01.svg', value: 100, title: 'Herbs' },
  ],
}

export const sizes = [
  { name: 'SMALL', price: '$6' },
  { name: 'MEDIUM', price: '$7' },
  { name: 'LARGE', price: '$10' },
]

export const flavors = [
  { title: 'Apple', image: 'niacane-apple-4.png', text: 'Nia Cane’s Apple Sugarcane Infusion combines the crisp, orchard-fresh taste of apples with the natural, raw sweetness of our premium juice.' },
  { title: 'Avocado', image: 'niacane-avocado-4.png', text: "Nia Cane's Avocado Sugarcane Infusion offers a creamy, decadent twist on our classic juice, blending the buttery richness of fresh avocado with the clean sweetness of raw cane." },
  { title: 'Banana', image: 'niacane-banana-4.png', text: 'Nia Cane’s Banana Sugarcane Infusion offers a smooth, creamy profile that blends the tropical essence of ripe bananas with the refreshing sweetness of raw sugarcane.' },
  { title: 'Blacksalt', image: 'niacane-blacksalt-3-1.png', text: 'Nia Cane’s Black Salt Sugarcane Infusion is a sophisticated, savory-sweet blend that incorporates traditional Kala Namak for a unique, volcanic flavor profile.' },
  { title: 'Blueberry', image: 'niacane-blueberry-3.png', text: 'Nia Cane’s Blueberry Sugarcane Infusion is a vibrant, antioxidant-rich blend that pairs the deep, jammy sweetness of ripe blueberries with our crisp, raw sugarcane juice.' },
  { title: 'Carrot', image: 'niacane-carrot-3.png', text: 'Nia Cane’s Carrot Sugarcane Infusion is a vibrant, earthy blend that marries the garden-fresh sweetness of carrots with our raw sugarcane juice.' },
  { title: 'Classic Sugarcane', image: 'niacane-sugarcane-3.png', text: 'Nia Cane’s Classic Sugarcane is the pure, unadulterated heart of our collection, featuring 100% raw and fresh-pressed juice.' },
  { title: 'Coconut Water (Natural)', image: 'niacane-coconut.jpg', text: 'Nia Cane’s Coconut Water (Natural) Sugarcane Infusion is the ultimate hydration duo, blending the light, mineral-rich properties of fresh coconut water with the raw energy of sugarcane juice.' },
  { title: 'Cucumber', image: 'niacane-cucumber-3.png', text: 'Nia Cane’s Cucumber Sugarcane Infusion is a crisp and cooling blend that marries the garden-fresh, hydrating properties of cucumber with our raw sugarcane juice.' },
  { title: 'Dragon Fruit', image: 'niacane-dragonfruit-3.png', text: 'Nia Cane’s Dragon Fruit Sugarcane Infusion is a visually stunning and exotic blend that pairs the mild, refreshing sweetness of dragon fruit with our raw sugarcane juice.' },
  { title: 'Ginger', image: 'niacane-ginger-3.png', text: 'Nia Cane’s Ginger Sugarcane Infusion is a bold, warming blend that pairs the spicy kick of fresh ginger with the natural sweetness of our raw sugarcane juice.' },
  { title: 'Kumquat', image: 'niacane-kumquat-3.png', text: 'Nia Cane’s Kumquat Sugarcane Infusion is a complex and zesty blend that pairs the tiny, vibrant citrus notes of kumquat with the smooth sweetness of raw sugarcane juice.' },
  { title: 'Lime', image: 'niacane-sugarcane-lime-3.png', text: 'Nia Cane’s Lime Sugarcane Infusion is a refreshing choice, blending the zesty, citrus bite of fresh lime with the raw sweetness of our juice.' },
  { title: 'Mango', image: 'niacane-mango-3.png', text: 'Nia Cane’s Mango Sugarcane Infusion is a lush, tropical masterpiece that blends the velvety richness of sun-ripened mangoes with the crisp, hydrating sweetness of raw sugarcane juice.' },
  { title: 'Mint', image: 'niacane-mint-3.png', text: 'Nia Cane’s Mint Sugarcane Infusion is the ultimate cooling elixir, blending the crisp, herbal brightness of fresh mint leaves with the raw sweetness of our signature juice.' },
  { title: 'Orange', image: 'niacane-orange-3.png', text: 'Nia Cane’s Orange Sugarcane Infusion is a bright and zesty blend that combines the sun-ripened tang of citrus with our signature raw sugarcane juice.' },
  { title: 'Passion Fruit', image: 'niacane-passionfruit-3.png', text: 'Nia Cane’s Passion Fruit Sugarcane Infusion is an exotic, aromatic blend that pairs the bold, tangy zest of tropical passion fruit with the smooth, raw sweetness of our fresh-pressed juice.' },
  { title: 'Pineapple', image: 'niacane-pineapple.jpg', text: 'Nia Cane’s Pineapple Sugarcane Infusion is the ultimate tropical escape, blending the zesty, tangy sweetness of ripe pineapples with our signature raw sugarcane juice.' },
  { title: 'Tumeric', image: 'niacane-tumeric-3.png', text: 'Nia Cane’s Turmeric Sugarcane Infusion is an earthy, anti-inflammatory powerhouse blending the warm, peppery notes of fresh turmeric with our raw sugarcane juice.' },
  { title: 'Watermelon', image: 'niacane-watermelon-3.png', text: 'Nia Cane’s Watermelon Sugarcane Infusion is the ultimate hydration duo, blending the ultra-light, crisp essence of summer watermelon with our raw sugarcane juice.' },
]

export const specials = [
  { title: 'Sugarcane Gallons', price: '$40', image: 'gallon.png', text: 'Perfect for parties, catering, or stocking up for the week' },
  { title: 'Green/White Coconut', price: '$5', image: 'coconuts.png', text: 'Fresh, young coconuts cracked to order for pure coconut water.' },
  { title: 'Sugarcane Bites', price: '$5', image: 'sugarcanesticks.png', text: 'Raw sugarcane bites for those who enjoy the traditional way of chewing on the cane.' },
]

export const slushes = ['Watermelon', 'Pineapple', 'Mango', 'Blueberry', 'Dragon Fruit', 'Coconut Water (Natural)', 'Strawberry', 'Lime', 'Classic Sugarcane', 'Passion Fruit', 'Kumquat']

export const testimonials = [
  { name: 'Sonia', role: 'Student', image: 'niacane-customer-4.png', text: "I have tried plenty of juice spots around here, but nothing really compares to this place. The sugarcane is always pressed fresh right when you order, and you can definitely taste the difference in quality. It is my favorite way to get a quick natural energy boost between my classes. I highly recommend trying the ginger mix if you want something with a little kick! You won't be disappointed by the service or flavor." },
  { name: 'Jasmine', role: 'Accountant', image: 'niacane-customer-5.png', text: 'I am usually stuck behind a screen all day, so finding a healthy way to stay hydrated is vital. Nia Cane has become my go-to spot for a quick break. Their juice is incredibly crisp and refreshing, giving me that much-needed boost without the typical afternoon sugar crash. The quality is consistently top-notch every time I visit. It is honestly the best natural drink in the city. You really have to try it for yourself!' },
  { name: 'Laara', role: 'Teacher', image: 'niacane-customer-6.png', text: 'Between grading papers and managing a busy classroom, I need all the natural energy I can get. This sugarcane juice is a total game-changer for my daily routine. It is light, delicious, and clearly made from the freshest ingredients available. I love that there are no added preservatives or artificial sweeteners involved. It’s just pure, healthy goodness in a cup. My students are even starting to ask where I get my vibrant green drinks!' },
  { name: 'Joe', role: 'Engineer', image: 'niacane-customer-1.png', text: 'I really appreciate the efficiency and transparency of their process. You can see the fresh stalks being pressed right in front of you, which ensures you are getting the highest quality product possible. The flavor profiles are perfectly balanced, especially when you add a bit of lime or ginger. It is a fantastic alternative to soda or processed energy drinks. If you value authenticity and great taste, this is definitely the place you should be going.' },
]

export const faqs = [
  { q: '1. Is sugarcane juice high in sugar?', a: 'While naturally sweet, raw sugarcane contains complex sucrose with a lower glycemic index than refined white sugar. This results in a more stable, sustained release of energy.' },
  { q: '2. How long does the juice stay fresh?', a: 'To maintain peak nutrition and flavor, we recommend enjoying our cold-pressed juice within five days of purchase when refrigerated.' },
  { q: '3. Do you add any water or syrup?', a: "Never. We pride ourselves on the 'Gold Standard' of purity. Our juice is 100% raw and freshly pressed, with absolutely no added water, syrups, or preservatives." },
  { q: '4. Can diabetics drink sugarcane juice?', a: 'Many people with diabetes safely enjoy raw sugarcane juice due to its unique mineral content and complex sugars. As with all things, moderation is key, and we recommend consulting your physician.' },
  { q: '5. Where do you source your sugarcane?', a: 'We are dedicated to sustainable practices and directly partner with small, local farms that prioritize organic, non-GMO farming methods.' },
  { q: '6. Is it safe for children?', a: 'Yes! It is a fantastic, nutrient-rich alternative to soda for kids.' },
  { q: '7. Can I freeze NiaCane juice?', a: 'Yes, you can freeze it to extend its life, though the flavor is best when enjoyed fresh.' },
  { q: '8. Is your juice pasteurized?', a: 'No, we serve raw juice to preserve the natural enzymes and nutrients.' },
  { q: '9. Do you offer delivery in Houston?', a: 'Please check our current delivery partners or contact us directly for large bulk orders.' },
  { q: '10. What is the difference between green and white coconuts?', a: 'Green coconuts are typically younger with more water, while "white" (shaved) coconuts are easier to handle and offer a great balance of water and soft meat.' },
]

export const contact = {
  title: 'Let’s Curate Your Wellness Journey',
  text: 'Have a question about our process or want to bring Nia Cane to your next event? Reach out and our team will be in touch shortly.',
}

export const locationsIntro = {
  heading: 'Serving the Houston Metropolitan Area & Surrounding Communities',
  subtitle: 'Visit Our Mobile Juice Bar at Houston Area Farmer’s Markets',
  title: 'Find Nia Cane Sugarcane Juice Near Me in Houston & Sugar Land',
  text: 'We are proud to be a staple in the Houston Metropolitan demographic, ensuring that fresh wellness is accessible to everyone. For those searching for "Sugarcane Juice near me," we have optimized our reach to serve key communities, including Sugar Land—a natural home for our brand. Our presence at local events ensures that fresh-pressed juice is never out of reach. Experience the "press" in person. Our mobile juice bar frequently travels across the city attending events, allowing you to watch raw stalks be transformed into a refreshing beverage before your eyes.',
}

export const locations = [
  { name: 'Houston', lines: ['9435 N Houston Rosslyn Rd', 'Houston, TX 77088, USA'], phone: '(713) 449-5705', tel: 'tel:+17134495705', map: 'https://maps.app.goo.gl/8cHNKtL5J4LVEwqD8', query: '9435 N Houston Rosslyn Rd, Houston, TX 77088' },
  { name: 'Sugarland', lines: ['11750 S Texas 6', 'Sugar Land, TX 77498'], phone: '(713) 449-5705', tel: 'tel:+17134495705', map: 'https://maps.app.goo.gl/tbmZxFi1xeQoniUr5', query: '11750 S Texas 6, Sugar Land, TX 77498' },
]

export const gallery = ['niacane-customer-6.png', 'niacane-customer-1.png', 'niacane-customer-2.png', 'niacane-customer-3.png', 'niacane-customer-4.png', 'niacane-customer-5.png']

export const footer = {
  heading: 'Locally Sourced Ingredients and Houston Small Business Roots',
  text: "By choosing Nia Cane, you are supporting a local economy. We take pride in our Houston heritage, ensuring our sourcing and production methods reflect our city's resilience and diversity. We believe in transparency, from the farm to the bottle.",
  features: [
    { icon: 'map', title: 'Two Locations' },
    { icon: 'calendar', title: 'Event Booking' },
    { icon: 'card', title: 'Credit Cards Accepted' },
    { icon: 'phone', title: 'Customer Support' },
  ],
  about: 'Nia Cane is dedicated to the people of Houston. We invite you to taste the difference that raw, natural pressing makes. Follow us on social media to find our mobile bar or visit us online to order your ',
  aboutBold: 'Sugar Cane Gallons',
  social: {
    facebook: 'https://www.facebook.com/houstonchronicle/posts/nia-cane-is-a-new-food-truck-that-sells-freshly-juiced-sugarcane-juice-out-of-a-/899039152240224/',
    instagram: 'https://www.instagram.com/nia_cane/',
  },
}
