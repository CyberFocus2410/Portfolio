export const experienceSchema = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "organisation",
      title: "Organisation / Company",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role / Position",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "isCurrent",
      title: "Currently Active Role",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "bullets",
      title: "Key Contributions & Impact Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "organisation",
    },
  },
};
