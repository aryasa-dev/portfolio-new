type Main = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
};

type WelcomeMe = Main & {
  title: string;
  role: string;
  image: Image;
};

type Image = {
  _type: "image";
  asset: Reference;
};

type Reference = {
  _ref: any;
  _type: "reference";
};

type AboutMe = Main & {
  image: Image;
  description: any;
  cvUrl: string;
};

type TechStack = Main & {
  stack: StackItem[];
};

type StackItem = {
  image: Image;
  label: string;
};

type Project = Main & {
  title: string;
  cover_title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  tags: string[];
  description: string;
  cover: Image;
  detail: any;
  images_detail: Image[];
  demo: string;
  github?: string;
};

type Contact = Main & {
  email: string;
  phone: string;
  linkedin: string
  github: string
};

type ContactLink = Main & {
  github: string
  linkedin: string
};

type FooterLink = Main & {
  links: ContactLink[]
}
