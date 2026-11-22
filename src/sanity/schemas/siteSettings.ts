export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "headline",
      title: "Hero Headline",
      type: "string",
    },
    {
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 3,
    },
    {
      name: "availabilityText",
      title: "Availability Text",
      type: "string",
      initialValue: "AVAILABLE FOR INTERNSHIPS & CONTRACTS",
    },
    {
      name: "location",
      title: "Current Location",
      type: "string",
      initialValue: "DELHI, INDIA",
    },
    {
      name: "portraitGrayscale",
      title: "Grayscale Portrait Cutout",
      type: "image",
    },
    {
      name: "portraitColor",
      title: "Color Portrait Cutout",
      type: "image",
    },
    {
      name: "resumePdf",
      title: "Resume PDF Document",
      type: "file",
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      initialValue: "https://github.com/CyberFocus2410",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
      initialValue: "cyberfocus2410@gmail.com",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings & Profile",
      };
    },
  },
};
