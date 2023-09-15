import img1 from "./assets/tour-1.jpeg";
import img2 from "./assets/tour-2.jpg";
import img3 from "./assets/tour-3.jpg";
import img4 from "./assets/tour-4.jpeg";



export const pageLinks = [
    { id: 1, href: "#home", text: 'home' },
    { id: 2, href: "#about", text: 'about' },
    { id: 3, href: "#services", text: 'services' },
    { id: 4, href: "#tours", text: 'tours' },
];


export const socialLinks = [
    { id: 1, href: 'https://twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }
];

export const tours = [
    {
        id: 1,
        image: img1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        duration: 6,
        cost: 2100,
    },
    {
        id: 2,
        image: img2,
        date: 'january 1th, 2024',
        title: 'Marina Bay Sands Singapore',
        info: 'Marina Bay Sands is an integrated resort fronting Marina Bay in Singapore and a landmark of the city. At its opening in 2010, it was deemed the worlds most expensive standalone casino property at S$8 billion.',
        location: 'singapore',
        duration: 11,
        cost: 1400,
    },
    {
        id: 3,
        image: img3,
        date: 'september 15th, 2023',
        title: 'explore hong kong',
        info: "Hong Kong Disneyland (Chinese: 香港迪士尼樂園) (abbreviated HKDL;[1] also known as HK Disneyland) is a theme park located on reclaimed land in Penny's Bay, Lantau Island, Hong Kong. It is the first Disneyland in China.[2] The Hong Kong Disneyland is located inside the Hong Kong Disneyland Resort and it is owned and managed by Hong Kong International Theme Parks.",
        location: 'hong kong',
        duration: 8,
        cost: 5000,
    },
    {
        id: 4,
        image: img4,
        date: 'december 5th, 2023',
        title: 'Taj Mahal',
        info: "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
        location: 'india',
        duration: 20,
        cost: 3300,
    },
];