export interface ModalImage{
    src: string;
    alt: string;
    frontText: string;
    backText: {
        name: string;
        nickname: string;
        funfact: string;
        position: string;
        email: string;
        whatsapp: string;
    };
}

export interface GalaImage{
    frontImg: string;
    backImg: string; 
    frontAlt: string; 
    backAlt: string;
}

export interface ContactUsModalImage{
    src: {
        src: string;
    };
    alt: string;
    frontText: string;
    backText: {
        name: string;
        nickname: string;
        funfact: string;
        position: string;
        email: string;
        whatsapp: string;
    };
}

export interface PartnerBoxData{
    logoSrc: string;
    partnerTitle: string;
    description: string;
    url: string;
    styleClass: string;
}