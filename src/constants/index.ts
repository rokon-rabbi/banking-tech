import { Company, CreditCard, NavItem } from "@/types";

export const NAVIGATION_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Products',
        hasDropdown: true,
        items: [
            { label: 'Personal Banking', href: '/products/personal' },
            { label: 'Business Banking', href: '/products/business' },
            { label: 'Investments', href: '/products/investments' },
        ]
    },
    {
        label: 'Resources',
        hasDropdown: true,
        items: [
            { label: 'Blog', href: '/blog' },
            { label: 'Help Center', href: '/help' },
            { label: 'Contact', href: '/contact' },
        ]
    },
    { label: 'Pricing', href: '/pricing' },
];

export const COMPANIES: Company[] = [
    {
        id: 'boltshift',
        name: 'Boltshift',
        logo: 'Zap', // Lightning bolt icon
        alt: 'Boltshift logo',
    },
    {
        id: 'lightbox',
        name: 'Lightbox',
        logo: 'Lightbulb', // Light bulb icon
        alt: 'Lightbox logo',
    },
    {
        id: 'featherdev',
        name: 'FeatherDev',
        logo: 'Feather', // Feather icon
        alt: 'FeatherDev logo',
    },
    {
        id: 'spherule',
        name: 'Spherule',
        logo: 'Circle', // Circle/sphere icon
        alt: 'Spherule logo',
    },
    {
        id: 'globalbank',
        name: 'GlobalBank',
        logo: 'Globe', // Globe icon
        alt: 'GlobalBank logo',
    },
    {
        id: 'nietzsche',
        name: 'Nietzsche',
        logo: 'BookOpen', // Book icon
        alt: 'Nietzsche logo',
    },
];

export const CREDIT_CARDS: CreditCard[] = [
    {
        id: 'card-1',
        name: 'LANA STERN',
        number: '1234 1234 1234 1234',
        expiry: '06/24',
        image: '/images/cards/card-1.jpg',
        alt: 'Purple gradient credit card',
        rotation: -40,
    },
    {
        id: 'card-2',
        name: 'Untitled',
        number: '1234 1234 1234 1234',
        image: '/images/cards/card-2.jpg',
        alt: 'Purple gradient credit card',
        rotation: -20,
    },
    {
        id: 'card-3',
        name: 'Untitled',
        number: '1234 1234 1234 1234',
        image: '/images/cards/card-3.jpg',
        alt: 'Purple gradient credit card',
        rotation: 0,
    },
    {
        id: 'card-4',
        name: 'Untitled',
        number: '1234 1234 1234 1234',
        image: '/images/cards/card-4.jpg',
        alt: 'Purple gradient credit card',
        rotation: 20,
    },
    {
        id: 'card-5',
        name: 'CHASE VUI',
        number: '1234 1234 1234 1234',
        image: '/images/cards/card-5.jpg',
        alt: 'Purple gradient credit card',
        rotation: 40,
    },
];

export const BRAND = {
    name: 'Untitled UI',
    tagline: 'Super. Simple. Banking.',
} as const;