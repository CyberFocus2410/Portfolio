export const doorSchema = {
  name: "door",
  title: "Door",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Door Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "domain",
      title: "Domain Slug",
      type: "string",
      options: {
        list: [
          { title: "Cybersecurity", value: "cybersecurity" },
          { title: "Medical AI", value: "medical-ai" },
          { title: "Freelancing Works", value: "freelancing" },
          { title: "AI / ML Projects", value: "ai-ml" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "colour",
      title: "Accent Colour (Hex)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Monospace Tagline",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "checklist",
      title: "Checklist Points",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
    },
  },
};
