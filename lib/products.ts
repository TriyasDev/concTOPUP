export type Product = {
  slug: string
  name: string
  publisher: string
  image: string
  price: number
  discount?: number
  category: "goods" |  "game" | "voucher" 
}

export const products: Product[] = [
//goods
  {
    slug: "pln",
    name: "Token Listrik",
    publisher: "PT PLN",
    image: "/goods/pln.webp",
    price: 50000,
    category: "goods"
  },

// Games App
  {
    slug: "roblox",
    name: "Roblox",
    publisher: "Roblox Corporation",
    image: "/games/roblox.webp",
    price: 7000,
    category: "game",
  },
  {
    slug: "mobile-lagends",
    name: "Mobile Lagends",
    publisher: "Moonton",
    image: "/games/mobile-legends.webp",
    price: 10000,
    discount: 10,
    category: "game",
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    publisher: "Garena",
    image: "/games/free-fire.webp",
    price: 10000,
    discount: 10,
    category: "game",
  },
  {
    slug: "honor-of-kings",
    name: "Honor Of Kings",
    publisher: "Level Infinite",
    image: "/games/hok.webp",
    price: 10000,
    discount: 10,
    category: "game",
  },

// digital voucher
 {
    slug: "video",
    name: "Video",
    publisher: "PT Video Dot Com",
    image: "/apps/video.webp",
    price: 10000,
    discount: 10,
    category: "voucher",
  },
]

export const categories = [
  { id: "goods", title: "Essential-Goods" },
  { id: "game", title: "TopUp-Games" },
  { id: "voucher", title: "Digital-Voucher" },
] as const