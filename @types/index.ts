export interface SkillsType {
    name: string;
    icon: string;
}

export interface ProjectType {
    name: string;
    thumb: string;
    description: string;
    gitLink: string;
    pageLink: string;
}

export interface ContanctType {
    name: string;
    phone: string;
    email: string;
    career: [
        {
            companyName: string;
            date: string;
            task: string;
        }
    ];
}

export interface CortfolioType {
    userId: string;
    avatarUrl: string;
    skills: SkillsType[];
    project: ProjectType[];
    contact: ContanctType;
}

export interface UserType {
    _id: string;
    avatarUrl: string;
    repos: string;
    followers: string;
    followings: string;
    bio: string | null;
    name: string;
    email: string;
    url: string;
    userId: string;
    blog: string;
    location: string | null;
    company: string | null;
}
