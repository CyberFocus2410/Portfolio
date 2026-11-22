export const roleSchema = {
  name: "role",
  title: "Role (Flip Card)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Role Title",
      type: "string",
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
      subtitle: "order",
    },
  },
};
