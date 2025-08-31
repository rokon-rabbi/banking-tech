
export interface Company {
    id: string;
    name: string;
    logo: string;
    alt: string;
}

export interface CreditCard {
    id: string;
    name: string;
    number: string;
    expiry?: string;
    image: string;
    alt: string;
    rotation: number;
}

export interface NavItem {
    label: string;
    href?: string;
    hasDropdown?: boolean;
    items?: NavItem[];
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}