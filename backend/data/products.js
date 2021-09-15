const products = [
  {
    name: "Dell Inspiron 3501",
    imageUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_3501_non-touch/in3501nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=647&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=647,402",
    description:
      "Get the best combination of Windows features you know and new improvements you’ll love. Get the best combination of Windows features you know and new improvements you’ll love. View, read, watch, stream, listen, and learn with the 10th Gen or the latest 11th Gen Intel® processors that offer a wide range of multimedia capabilities.",
    price: 75800,
    countInStock: 4,
  },
  {
    name: "HP ProBook 440 G8 Notebook",
    imageUrl:
      "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06884228.png",
    description:
      "Your growing business requires the protection of a PC with commercial-grade security features. The HP ProBook 440 is enhanced with security and privacy features from the BIOS up.The compact, light, slim chassis with aluminum components is easy to carry from place to place. Enjoy an over 87-percent screen-to-body ratio and a quiet, responsive keyboard.",
    price: 43254,
    countInStock: 5,
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    imageUrl:
      "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-amd-subseries-gallery-2.jpg?context=bWFzdGVyfHJvb3R8MzAyODB8aW1hZ2UvanBnfGhjOC9oOTAvMTA3NDQ5NjI5NDA5NTguanBnfDdiYzRjYTA5NTY4MGU3MjBlNjMwYWVhYjhmZDg3NGQyZWRhODBlMWJiMzBhZWExNWQ0OTE4MTEwYzFlM2ZhYjU",
    description:
      "Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 6MB Cache. OS: Pre-Loaded Windows 10 Home with Lifetime Validity. Pre-Installed: MS Office Home and Student 2019",
    price: 33159,
    countInStock: 4,
  },
  {
    name: "Dell 14",
    imageUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/14_5410_non-touch/in5410nt_cnb_00055rf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&wid=4339&hei=2877&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=4339,2877",
    description:
      "Processor:1th Generation Intel Core i3-1125G4 Processor (8MB Cache, up to 3.7GHz).Others:McAfee Security Center 15 month subscription,Finger Print Reader,1 Year In-Home Hardware Service-Retail,Backlit Keyboard, Display:14.0-inch FHD (1920 x 1080) Truelife Touch Narrow Border WVA Display",
    price: 23334,
    countInStock: 2,
  },
  {
    name: "HP Laptop 15s-fq",
    imageUrl:
      "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06591177_2.png",
    description:
      "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere. Tackle your busiest days with the performance of an Intel® processor. Save more of what you love with abundant storage for all your photos, videos and documents.",
    price: 32932,
    countInStock: 3,
  },
  {
    name: "Lenovo IdeaPad Slim 10th Gen",
    imageUrl:
      "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery-1.png?context=bWFzdGVyfHJvb3R8MjIxNjM1fGltYWdlL3BuZ3xoMjIvaDkyLzEwNzU3MjQzOTI4NjA2LnBuZ3xhMjhmOWI5NmQ1ODE2YzIyN2RjZjg0YjU1MTIzYzAyNzY2Y2I3MTU4ZTAyNWI1MjQ5OTY4ZTFjMjBmMzYyNWI4",
    description:
      "Display: 15.6 Full HD (1920x1080)  Brightness: 250 nits  Anti-Glare  IPS Technology. Memory and Storage: 8GB RAM DDR4-2666, Upgradable up to 12GB | 512 GB SSDOS: Pre-Loaded Windows 10 Home with Lifetime Validity",
    price: 23053,
    countInStock: 5,
  },
  {
    name: "Dell Vostro 3405",
    imageUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/vostro_notebooks/14_3405/pdp/vostro-14-3405-pdp-mod3-nofpr-dune.jpg?fmt=jpg&wid=390&hei=309",
    description:
      "Memory & Storage:8GB, 1x8GB, DDR4, 2400MHz |512GB M.2 PCIe NVMe Solid State Drive. Operating System & Software:Windows 10 Home Single Language | Microsoft Office Home and Student 2019. Others:English International Standard keyboard | Laptop weight:1.58 kg | Black",
    price: 43005,
    countInStock: 3,
  },
  {
    name: "HP ZBook Firefly 15",
    imageUrl:
      "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06638133_1_4.png",
    description:
      "Our lightest 15” ZBook provides true mobility for people who push the typical business PC past its breaking point. In the office or in the field, with pro-level performance and a full-size numeric keypad, you have everything to review work and manage projects from anywhere.",
    price: 46404,
    countInStock: 4,
  },
  {
    name: "Iphone 11 pro max",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-max-space-gray-2019?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1611101628000",
    description:
      "With its 6.1-inch display, the iPhone 11 is between the 5.8-inch iPhone 11 Pro and 6.5-inch iPhone 11 Pro Max in size. The iPhone 11 has an edge-to-edge display with slim bezels and no Home button, adopting a notch at the top for the TrueDepth camera system.",
    price: 762.86,
    countInStock: 15,
  },
  {
    name: "Samsung Ultra s21",
    imageUrl: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SL1500_.jpg",
    description:
      "Galaxy S21 Ultra 5G has a total of four rear cameras and one 40MP selfie camera. The rear cameras include: one 108MP Wide-angle Camera, one 12MP Ultra Wide Camera and two 10MP Telephoto Cameras.  Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video.",
    price: 999.99,
    countInStock: 3,
  },
  {
    name: "Iphone 12 pro max",
    imageUrl: "https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Samsung Galaxy S20 FE",
    imageUrl: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg",
    description:
      "Far beyond the 12 megapixel category, Galaxy S20 Ultra gives you millions more pixels in each photograph. Which means for the first time ever you can pinch in for details you'd never have seen before.It starts with 10x Hybrid Optic Zoom enabled by a revolutionary folded lens and high resolution image sensor. Couple that with Super Resolution Zoom enhanced by camera AI to get really close to the action and capture moments you might have missed.",
    price: 616.38,
    countInStock: 6,
  },
  {
    name: "Iphone X",
    imageUrl: "https://m.media-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg",
    description:
      "Apple's aim with the iPhone X was to create an iPhone that's all display, blurring the line between physical object and experience. The 5.8-inch front screen melts into a highly polished curved-edge stainless steel band encircling a durable all-glass body available in two pearlescent finishes: Space Gray and Silver. Both feature a black front panel.",
    price: 999,
    countInStock: 4,
  },
  {
    name: "OnePlus Nord 2",
    imageUrl: "https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg",
    description:
      "Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever: the 3GHz Arm Cortex-A78 provides the most immediate response, with up to 22% faster CPU performance while also being 25% more power-efficient versus the previous generation",
    price: 399,
    countInStock: 7,
  },
  {
    name: "Redmi Note 10 Pro Max",
    imageUrl: "https://m.media-amazon.com/images/I/8130rAC+NzL._SL1500_.jpg",
    description:
      "The most affordable 108-megapixel camera should the first reason to spend on the Redmi Note 10 Pro Max, that is if you are into numbers. If not, the 64-megapixel camera on the Redmi Note 10 Pro should be enough for Rs 3,000 lesser. the main camera on the Note 10 Pro Max is assisted by a second 8-megapixel ultra-wide-angle camera, a third 5-megapixel macro camera, and a fourth 2-megapixel depth sensor.",
    price: 299,
    countInStock: 4,
  },
  {
    name: "Oppo f19 Pro",
    imageUrl: "https://m.media-amazon.com/images/I/712PBW8cGBL._SL1500_.jpg",
    description:
      "Enjoy HD content on the large Super AMOLED screen featuring a 90.8% screen-to-body ratio³ and In-Display Fingerprint 3.0⁴. Available with Super Nighttime Standby⁵ to keep you running, even if you're low on power. 5 minutes， get 3.2 hours of talk time. The 4310 mAh battery of this smartphone offers up to 16 hours of video playback time",
    price: 199.0,
    countInStock: 8,
  },
  {
    name: "Garmin Venu Sq",
    imageUrl: "https://m.media-amazon.com/images/I/61j+ws4z-4S._SL1500_.jpg",
    description:
      "Step counter, Calories burned, Distance traveled, Intensity Minutes. See your body’s energy levels throughout the day so you can find the best times for activity and rest. Find out if you’re having a calm, balanced or stressful day. Relax reminders will even prompt you to do a short breathing activity when you’re feeling stressed.",
    price: 540,
    countInStock: 4,
  },
  {
    name: "Fitbit FB512GLWT",
    imageUrl: "https://m.media-amazon.com/images/I/51WhoCW0H9L._SL1000_.jpg",
    description:
      "It Assess your heart for atrial fibrillation (Afib) with a compatible ECG app right on your wrist. Use for Heart Health, Stress Management and Skin Temperature Trends.Great battery life - I have been using this watch full blast with always on display and using the EDA sensor at least thrice a day.",
    price: 765,
    countInStock: 3,
  },
  {
    name: "Casio G-shock G-squad",
    imageUrl: "https://m.media-amazon.com/images/I/61Xasby2DcL._UL1200_.jpg",
    description:
      "Uses an algorithm from FIRSTBEAT technologies which is renowned for helping in maximizing training effectiveness through highly accurate data analysis. The algorithm is used to measure VO2max (fitness level), Training status, Training load, Recovery time, Training effect, Training plan, Calories burned during training.",
    price: 356,
    countInStock: 6,
  },
  {
    name: "Fitbit Versa Unisex Health",
    imageUrl: "https://m.media-amazon.com/images/I/81ggwnicsOL._SL1280_.jpg",
    description:
      "Fitbit Today : See all your daily stats, plus personalised insights and reminders all in one place. Automatic Activity Sleep Tracking : See steps, distance, calories, floors climbed, active minutes time in light, deep and REM sleep. Guided Breathing Sessions : Find moments of calm throughout the day with personalised breathing sessions based on your heart rate.",
    price: 765,
    countInStock: 2,
  },
  {
    name: "Shocknshop Outdoor Sports Digital",
    imageUrl: "https://m.media-amazon.com/images/I/716tqTuExZL._UL1500_.jpg",
    description:
      "Black Dial Mens Boys Watch. Dial Diameter: 55 millimeters, Recommended for customers looking for large dial sized watches. Warranty Type: Manufacturer, 6 Month Mfg Defects Warranty. Dial Color: Black, Dial Material: Resin, Dial Shape: Round Digital . Watch Movement Type: Quartz, Model: Watch321",
    price: 506,
    countInStock: 7,
  },
  {
    name: "Fastrack reflex 3.0 ",
    imageUrl: "https://m.media-amazon.com/images/I/71HkupULtKL._UL1500_.jpg",
    description:
      "Unisex activity tracker - Full touch, color display, Heart rate monitor, Dual- tone silicone strap and up to 10 days. 24-hrs Real Time HR monitoring | Sleep Tracker | Music Control | Camera Control | Phone Finder | Breath (feature) | Idle Alert | Call and Social Media modifications. 10+ Sports Mode | Outdoor Walk, Indoor Walk, Outdoor Running, Indoor Running, Hiking, Outdoor Cycling, Spinning, Elliptical Machine, Rowing, Yoga, HIIT, Other training modes",
    price: 956,
    countInStock: 5,
  },
  {
    name: "Citizen Eco-Drive Super",
    imageUrl: "https://m.media-amazon.com/images/I/71dg1uTUb5L._UL1500_.jpg",
    description:
      "Dial Color: White, Case Shape: Round Band Color: Silver, Band Material: Titanium Watch Movement Type: Light Powered, Watch Display Type: Chronograph Warranty type: Manufacturer; 1 Year International Guarantee Recommended for customers looking for a large dial sized watches. light into energy to power watches. Watches with Eco-Drive do not require any battery replacement, charging or winding to maintain constant operation.",
    price: 679,
    countInStock: 5,
  },
  {
    name: "V2A Digital Men's Watch",
    imageUrl: "https://m.media-amazon.com/images/I/41kXTRjMLxL.jpg",
    description:
      "Stay fashionable with Quartz watch from V2A available on Amazon. This Digital watch has Square Black dial with a dial diameter of 43 mm The straps in the watch are made of Silicone. Dial Color: Black; Dial Material: Polyurethane Dial Shape: Square; Dial Diameter: 43 mm .Strap Color: Green; Strap Material: Resin .Strap Width: 18 Millimeters; Watch Movement Type: Quartz Model number: Skm-1299-Green",
    price: 540,
    countInStock: 4,
  },
  {
    name: "OnePlus Buds Z",
    imageUrl: "https://m.media-amazon.com/images/I/51vwQzwM+ZL._SL1500_.jpg",
    description:
      "Call your buddies with your Buds Z. Advanced Bluetooth 5.0 technology, dual-microphones, and OnePlus noise reduction algorithms combine for exceptional call clarity and stability. Quick Pair lets you pair automatically. Every time you open the case, Quick Connect immediately connects with your phone for a truly fluid music experience. Transform your audio. Elevate your sound with Dynamic 3D stereo with Dolby Atmos and panoramic sound fidelity using the latest Dirac Audio Tuner digital technology.",
    price: 96,
    countInStock: 5,
  },
  {
    name: "Boult Audio AirBass FX1",
    imageUrl: "https://m.media-amazon.com/images/I/31lf9okwyLS.jpg",
    description:
      "These Truly Wireless earbuds can block out most of surrounding noises. You will be out of the street noise and get into the fantastic world of music with the sound quality. Automatically pair with your device as soon as you take them out of the case. No need to manually pair to your device each time. water resistant]push your limits as the IPX5 water-resistant rating takes care of the water and sweat.",
    price: 210,
    countInStock: 3,
  },
  {
    name: "Noise Air Buds",
    imageUrl: "https://m.media-amazon.com/images/I/61VqvZhg5IL._SL1500_.jpg",
    description:
      "air buds offer a play time of up to 4 hours on a single charge and an additional 16 hours making a total play-time of up to 20 hours with the charging case. the bluetooth 5.0 ensures stable connectivity, better wireless range and super quick pairing right out of the box. enjoy deep bass, crisp highs and clear mids via 13mm dynamic speaker driver.",
    price: 103,
    countInStock: 5,
  },
  {
    name: "Philips Audio Upbeat",
    imageUrl: "https://m.media-amazon.com/images/I/61efWo-q59L._SL1500_.jpg",
    description:
      "Powerful 9mm drivers deliver a deep, dynamic bass. Maximum range : 10 m .Passive noise isolation for better sound at lower volume. Premium metal housing offers accurate sound transmission. Soft rubberized neckband for comfort and stability.Wireless control for music enjoyment and calls",
    price: 146,
    countInStock: 8,
  },
  {
    name: "AirBass Q10 True Wireless",
    imageUrl: "https://m.media-amazon.com/images/I/71tbRkp4SoS._SL1500_.jpg",
    description:
      "These Truly Wireless earbuds can block out most of surrounding noises. You will be out of the street noise and get into the fantastic world of music with the sound quality. [One Touch Control & Voice Assistant] With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access Siri/Google Assistant. The earbuds can be used separately after successful pairing.",
    price: 304,
    countInStock: 7,
  },
  {
    name: "OnePlus Bullets",
    imageUrl: "https://m.media-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg",
    description:
      "With convenient features like Quick Switch, Quick Pair and Magnetic Control, listening to your music on your Bullets Wireless Z Bass Edition is a whole new acoustic experience； Low latency Mode. The Bass Edition comes equipped with Bluetooth v5.0 and is fully compatible with all smartphones. IP55 Water & Sweat Resistance. Bluetooth range : Up to 33ft (10m).",
    price: 239,
    countInStock: 3,
  },
  {
    name: "Papa Protect Freedom",
    imageUrl: "https://m.media-amazon.com/images/I/71N2AgwGNAL._SL1500_.jpg",
    description:
      "🇳 Active Noise Cancellation: After providing you with the best possible sound, the Papa Freedom Headset then induces noise cancellation as well so that your ears aren’t exposed to any of the sounds from the outside world. It cancels noise across almost every frequency and also utilizes less power. This is what leads to the exceptional sound quality it delivers.",
    price: 58,
    countInStock: 3,
  },
  {
    name: "boAt Bassheads 100",
    imageUrl: "https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg",
    description:
      "Features a HD microphone to make crystal clear calls - making life easier on the go, play/pause music or answer/end calls with one-click, track forward with two-clicks or back with 3 clicks make these earphones extremely user-friendly. With 1.2 meters perfect length cable now plug it in anywhere with ease - while the earphones are extremely user-friendly and stylish, extruding premium coating on the wire cable is a manufacturing process that we've been performing and refining since our company's inception",
    price: 140,
    countInStock: 6,
  },
];

module.exports = products;
