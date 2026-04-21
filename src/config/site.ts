interface SiteConfig {
  name: string;
  description: string;
  siteUrl: string;
  contact: {
    phone: {
      label: string;
      link: string;
    };
    email: {
      label: string;
      link: string;
    };
    whatsapp: {
      label: string;
      link: string;
    };
  };
  address: {
    location: string;
  };
  ogImage: string;
  socialLinks: {
    twitter: string;
    instagram: string;
    pinterest: string;
    tiktok: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Scripttag Dev",
  description: "Building web for the future",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  contact: {
    phone: {
      label: "+254 797 162 262",
      link: "tel:+254797162262",
    },
    email: {
      label: "scripttagdev@gmail.com",
      link: "mailto:scripttagdev@gmail.com",
    },
    whatsapp: {
      label: "+254 797 162 262",
      link: "https://wa.me/254797162262",
    },
  },
  address: {
    location: "Obama Estate",
  },
  ogImage: "",
  socialLinks: {
    twitter: "https://x.com/scripttag",
    pinterest: "https://pinterest.com/scripttag",
    instagram: "https://instagram.com/scripttag",
    tiktok: "https://www.tiktok.com/@scripttag",
  },
};
