// ----------------------------------------
// Interfaces
// ----------------------------------------
interface User {
    name: string;
    age: number;
    isEngineer: boolean;
    isEmployed?: boolean;
    renderName?: (name: string) => string;
}

interface PremiumUser extends User {
    premiumship: boolean;
}

const User: User = {
    name: "Fernando",
    age: 41,
    isEngineer: true,
    isEmployed: true,
}

// ----------------------------------------
// Types
// ----------------------------------------
type Book = {
    title: string;
    author: string;
    year: number;
}


// ----------------------------------------
// Intersection and Union Types
// ----------------------------------------




// ----------------------------------------
// Functions
// ----------------------------------------
