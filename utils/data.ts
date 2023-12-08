import { SlidesProps } from "@/types/type"

export const navItems = [
    {
        id: 'cars',
        label: 'Cars',
        url: '/car',
    },
    {
        id: 'offers',
        label: 'Special Offers',
        url: '/offers',
    },
    {
        id: "terms",
        label: "Rental Terms",
        url: "/terms",
    },
    {
        id: 'faq',
        label: 'FAQ',
        url: '/faq',
    }
]

export const inputData = [
    {
        id: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        label: 'Your name',
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Your email',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your passw0rd',
        label: 'Your password',
    },
]

export const loginData = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Your email',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your passw0rd',
        label: 'Your password',
    },
]

export const slides: SlidesProps[] = [
    {
        id: 1,
        title: "A Legend in Action",
        description: "Experience Exceptional Comfort and Performance with BMW 5 Series",
        imgUrl: "/slides/bmw-slide.webp",
        bgColor: "#2D2D2D",
        cta: "Rent from $80/day"
    },
    {
        id: 2,
        title: "Electrify Your Journey",
        description: "Take the Wheel of the Future with Tesla Model S",
        imgUrl: "/slides/tesla-slide.webp",
        bgColor: "#8B0000",
        cta: "Rent from $95/day"
    },
    {
        id: 3,
        title: "Economy Meets Comfort",
        description: "Enjoy Dependability and Style with Hyundai Accent",
        imgUrl: "/slides/hyundai-slide.webp",
        bgColor: "#A9A9A9",
        cta: "Rent from $24/day"
    }
]

export const includedServices = [
    "Fair Fuel Policy",
    "Full Insurance Coverage",
    "Unlimited Miles",
    "24/7 Roadside Assistance"
  ];