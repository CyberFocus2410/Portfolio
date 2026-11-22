export const certificateSchema = {
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issuer",
      title: "Issuer / Organization",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Certification", value: "certification" },
          { title: "Exam", value: "exam" },
          { title: "Course", value: "course" },
          { title: "Workshop / Award", value: "workshop" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issueDate",
      title: "Issue Date",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "expiryDate",
      title: "Expiry Date (Optional)",
      description: "Leave empty if the certificate does not expire",
      type: "date",
    },
    {
      name: "credentialId",
      title: "Credential ID / License Number",
      type: "string",
    },
    {
      name: "verifyUrl",
      title: "Verification URL",
      type: "url",
    },
    {
      name: "file",
      title: "Certificate Document (PDF or PNG)",
      type: "file",
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
      title: "title",
      subtitle: "issuer",
    },
  },
};
