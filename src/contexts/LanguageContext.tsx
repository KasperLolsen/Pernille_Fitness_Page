import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'no' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  no: {
    // Header
    'nav.home': 'Hjem',
    'nav.about': 'Om Meg',
    'nav.services': 'Tjenester',
    'nav.liftapp': 'LiftApp',
    'nav.testimonials': 'Resultater',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kom i gang',

    // Hero
    'hero.tagline': 'Din vei til mestring og treningsglede',
    'hero.cta': 'Start din reise',

    // About
    'about.title': 'Om',
    'about.title.highlight': 'Meg',
    'about.subtitle': 'Coach, samarbeidspartner og venninne i samme person',
    'about.name': 'Pernille Strand',
    'about.title.role': 'Personlig Trener & Kostholdsveileder',
    'about.p1': 'Hei, jeg heter Pernille Strand og min største lidenskap er styrketrening.',
    'about.p2': 'Jeg har drevet med idrett hele livet, men det var først i 2021, da jeg la fotballskoene på hylla, at jeg virkelig forelsket meg i styrketrening. Det var noe helt spesielt med følelsen av å trene for å bli sterkere – både fysisk og mentalt.',
    'about.p3': 'Etter hvert som jeg ble sterkere og mer muskuløs, vokste også interessen for selve faget og jeg bestemte meg for at jeg ville lære mer. Derfor tok jeg utdanning og ble sertifisert personlig trener og kostholdsveileder i 2024.',
    'about.p4': 'Nå har jeg jobbet som online coach i over ett år og coachet over 100 fantastiske kvinner! Jeg liker å se på meg selv som coach, samarbeidspartner og venninne i samme person. Mitt mål er å hjelpe deg med å nå målene dine samtidig som du får kjenne på mestring og treningsglede!',
    'about.education': 'Utdannet ved Active education',
    'about.cert1': 'Sertifisert Personlig trener',
    'about.cert2': 'Sertifisert Kostholdsveileder',
    'about.cta': 'Ta Kontakt',

    // Services
    'services.title': 'Mine',
    'services.title.highlight': 'Tjenester',
    'services.subtitle': 'Jeg tilbyr flere tjenester som kan justeres etter dine mål og ditt behov for oppfølging. Alle tjenester inkluderer tilgang til appen Zenfit, og ukentlig oppfølging.',
    'services.package.title': 'Full pakke (anbefalt)',
    'services.package.desc': 'Her får du den ultimate kombinasjon mellom treningsoppfølging og kostholdsveiledning for å sikre best mulig resultat.',
    'services.training.title': 'Treningsveiledning',
    'services.training.desc': 'Få et skreddersydd treningsprogram som er spesiallaget til deg. Planen utarbeides utifra dine mål, forutsetninger og preferanser.',
    'services.nutrition.title': 'Kostholdsveiledning',
    'services.nutrition.desc': 'Få en skreddersydd matplan som tar deg fra A til Å, samtidig som at du nyter og lærer av prosessen. Planen baserer seg på hva du liker å spise fra før og målet er en varig kostholdsendring.',
    'services.cta': 'Bestill Konsultasjon',

    // Testimonials
    'testimonials.title': 'Feedback fra',
    'testimonials.title.highlight': 'klienter',
    'testimonials.subtitle': 'Her kan du lese hvordan tidligere klienter opplevde coachingen og hva de sitter igjen med etter å ha hatt meg som coach.',

    // Contact
    'contact.title': 'Ta steget',
    'contact.title.highlight': 'mot dine treningsmål',
    'contact.subtitle': 'Fortell meg litt om deg selv og dine mål så vi vet hvor vi skal starte når jeg tar kontakt!',

    // CardQuestionnaire
    'form.step1.title': 'Hva ønsker du å oppnå?',
    'form.goal.strength': 'Bli sterkere og bygge muskler',
    'form.goal.weight': 'Vektendring',
    'form.goal.calisthenics': 'Lære calisthenics',
    'form.goal.other': 'Annet',
    'form.other.placeholder': 'Fortell oss om dine spesifikke mål...',
    'form.next': 'Neste steg',
    'form.step2.title': 'Når er du født?',
    'form.step3.title': 'Fortell meg litt mer',
    'form.step3.subtitle': 'Utdyp med et par setninger hva du ønsker å oppnå gjennom coachingen.',
    'form.step3.placeholder': 'F.eks. øke styrke, forbedre kondisjon, bygge gode treningsvaner, forbedre livskvalitet, etc.',
    'form.step4.title': 'Dine kontaktopplysninger',
    'form.name': 'Navn',
    'form.name.placeholder': 'Ditt fulle navn',
    'form.email': 'E-post',
    'form.email.placeholder': 'din@email.no',
    'form.phone': 'Telefon',
    'form.phone.placeholder': '+47 XXX XX XXX',
    'form.submit': 'Send inn',
    'form.sending': 'Sender...',
    'form.privacy': 'Ved å sende inn dette skjemaet godtar du at jeg tar kontakt med deg angående treningstjenester. Jeg respekterer ditt privatliv og dine data vil aldri deles med tredjepart.',
    'form.success.title': 'Takk for din henvendelse!',
    'form.success.message': 'Jeg ser frem til å hjelpe deg med å nå dine mål. Du vil høre fra meg innen 1-2 virkedager for å diskutere hvordan vi kan skape resultater sammen.',
    'form.error': 'Kunne ikke sende meldingen. Vennligst prøv igjen senere.',

    // LiftApp
    'liftapp.title': 'LIFT',
    'liftapp.title.suffix': 'by Pernille',
    'liftapp.subtitle': 'Et Billigere alternativ for 1-til-1 coaching',
    'liftapp.description': 'Ta treningsreisen din til neste nivå med LIFT by Pernille - din trofaste treningspartner, laget av Pernille Strand.',
    'liftapp.feature1': 'Treningsprogrammer for alle nivåer',
    'liftapp.feature2': 'Video på hver øvelse for riktig teknikk',
    'liftapp.feature3': 'Månedlige utfordringer',
    'liftapp.feature4': 'Oppskrifter',
    'liftapp.feature5': 'Logging av treningsøkter',
    'liftapp.feature6': 'Felleskap du kan dele din reise med',
    'liftapp.cta': 'App Store',

    // GluteGuide
    'gluteguide.title': 'Last ned din gratis glute guide her',
    'gluteguide.cta': 'Få tilgang nå',

    // Footer
    'footer.brand': 'Strandcoaching',
    'footer.description': 'Forvandler liv gjennom personlig treningsveiledning og ernæringsplaner.',
    'footer.links.title': 'Hurtiglenker',
    'footer.links.about': 'Om meg',
    'footer.links.services': 'Tjenester',
    'footer.links.testimonials': 'Tilbakemeldinger',
    'footer.links.contact': 'Kontakt',
    'footer.contact.title': 'Kontaktinformasjon',
    'footer.contact.email': 'E-post:',
    'footer.contact.location': 'Oslo, Norge',
    'footer.copyright': 'Strandcoaching - Din vei til mestring og treningsglede. Alle rettigheter reservert.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.services': 'Services',
    'nav.liftapp': 'LiftApp',
    'nav.testimonials': 'Results',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',

    // Hero
    'hero.tagline': 'Your path to mastery and training joy',
    'hero.cta': 'Start your journey',

    // About
    'about.title': 'About',
    'about.title.highlight': 'Me',
    'about.subtitle': 'Coach, partner, and friend all in one',
    'about.name': 'Pernille Strand',
    'about.title.role': 'Personal Trainer & Nutrition Advisor',
    'about.p1': 'Hi, my name is Pernille Strand and my greatest passion is strength training.',
    'about.p2': 'I have been involved in sports all my life, but it was not until 2021, when I hung up my football boots, that I truly fell in love with strength training. There was something special about the feeling of training to become stronger – both physically and mentally.',
    'about.p3': 'As I became stronger and more muscular, my interest in the field itself grew and I decided I wanted to learn more. That is why I pursued education and became a certified personal trainer and nutrition advisor in 2024.',
    'about.p4': 'Now I have worked as an online coach for over a year and coached over 100 amazing women! I like to see myself as a coach, partner, and friend all in one. My goal is to help you reach your goals while experiencing mastery and training joy!',
    'about.education': 'Educated at Active Education',
    'about.cert1': 'Certified Personal Trainer',
    'about.cert2': 'Certified Nutrition Advisor',
    'about.cta': 'Get in Touch',

    // Services
    'services.title': 'My',
    'services.title.highlight': 'Services',
    'services.subtitle': 'I offer several services that can be adjusted according to your goals and your need for follow-up. All services include access to the Zenfit app and weekly follow-up.',
    'services.package.title': 'Full Package (recommended)',
    'services.package.desc': 'Here you get the ultimate combination of training guidance and nutrition advice to ensure the best possible results.',
    'services.training.title': 'Training Guidance',
    'services.training.desc': 'Get a customized training program specially designed for you. The plan is developed based on your goals, conditions, and preferences.',
    'services.nutrition.title': 'Nutrition Guidance',
    'services.nutrition.desc': 'Get a customized meal plan that takes you from A to Z, while you enjoy and learn from the process. The plan is based on what you like to eat and the goal is a lasting dietary change.',
    'services.cta': 'Book Consultation',

    // Testimonials
    'testimonials.title': 'Feedback from',
    'testimonials.title.highlight': 'clients',
    'testimonials.subtitle': 'Here you can read how previous clients experienced the coaching and what they took away from having me as their coach.',

    // Contact
    'contact.title': 'Take the step',
    'contact.title.highlight': 'towards your training goals',
    'contact.subtitle': 'Tell me a bit about yourself and your goals so we know where to start when I get in touch!',

    // CardQuestionnaire
    'form.step1.title': 'What do you want to achieve?',
    'form.goal.strength': 'Get stronger and build muscle',
    'form.goal.weight': 'Weight change',
    'form.goal.calisthenics': 'Learn calisthenics',
    'form.goal.other': 'Other',
    'form.other.placeholder': 'Tell us about your specific goals...',
    'form.next': 'Next step',
    'form.step2.title': 'When were you born?',
    'form.step3.title': 'Tell me a bit more',
    'form.step3.subtitle': 'Elaborate with a few sentences on what you want to achieve through coaching.',
    'form.step3.placeholder': 'E.g. increase strength, improve fitness, build good training habits, improve quality of life, etc.',
    'form.step4.title': 'Your contact information',
    'form.name': 'Name',
    'form.name.placeholder': 'Your full name',
    'form.email': 'Email',
    'form.email.placeholder': 'your@email.com',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+47 XXX XX XXX',
    'form.submit': 'Submit',
    'form.sending': 'Sending...',
    'form.privacy': 'By submitting this form, you agree that I will contact you regarding training services. I respect your privacy and your data will never be shared with third parties.',
    'form.success.title': 'Thank you for your inquiry!',
    'form.success.message': 'I look forward to helping you reach your goals. You will hear from me within 1-2 business days to discuss how we can create results together.',
    'form.error': 'Could not send the message. Please try again later.',

    // LiftApp
    'liftapp.title': 'LIFT',
    'liftapp.title.suffix': 'by Pernille',
    'liftapp.subtitle': 'A cheaper alternative to 1-on-1 coaching',
    'liftapp.description': 'Take your training journey to the next level with LIFT by Pernille - your trusted training partner, created by Pernille Strand.',
    'liftapp.feature1': 'Training programs for all levels',
    'liftapp.feature2': 'Video for each exercise for proper technique',
    'liftapp.feature3': 'Monthly challenges',
    'liftapp.feature4': 'Recipes',
    'liftapp.feature5': 'Logging of training sessions',
    'liftapp.feature6': 'Community to share your journey with',
    'liftapp.cta': 'App Store',

    // GluteGuide
    'gluteguide.title': 'Download your free glute guide here',
    'gluteguide.cta': 'Get access now',

    // Footer
    'footer.brand': 'Strandcoaching',
    'footer.description': 'Transforming lives through personal training and nutrition plans.',
    'footer.links.title': 'Quick Links',
    'footer.links.about': 'About me',
    'footer.links.services': 'Services',
    'footer.links.testimonials': 'Testimonials',
    'footer.links.contact': 'Contact',
    'footer.contact.title': 'Contact Information',
    'footer.contact.email': 'Email:',
    'footer.contact.location': 'Oslo, Norway',
    'footer.copyright': 'Strandcoaching - Your path to mastery and training joy. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'no') ? saved : 'no';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
