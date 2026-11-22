export const badgeSchema = {
  name: "badge",
  title: "Badge",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Badge Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issuer",
      title: "Issuer",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Badge Graphic (Square PNG/SVG 512px+)",
      type: "image",
    },
    {
      name: "issueDate",
      title: "Issue Date",
      type: "date",
    },
    {
      name: "verifyUrl",
      title: "Verification URL",
      type: "url",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    },
  ],
};
