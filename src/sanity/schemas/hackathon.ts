export const hackathonSchema = {
  name: "hackathon",
  title: "Hackathon",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Hackathon Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "organiser",
      title: "Organiser / Institute",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "result",
      title: "Result / Distinction",
      description: "e.g. Top 15 Finalist, Top 20 Finalist, Participant",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "bio",
      title: "2-3 Sentence Bio of the Experience",
      type: "text",
      rows: 3,
    },
    {
      name: "project",
      title: "Project Built",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "certificate",
      title: "Certificate File (PDF or PNG)",
      type: "file",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    },
  ],
};
