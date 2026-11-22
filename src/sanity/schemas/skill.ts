export const skillSchema = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Security & Blue Team Tooling", value: "security" },
          { title: "Languages", value: "languages" },
          { title: "Frameworks, Data & Cloud", value: "frameworks" },
          { title: "AI / ML", value: "ai-ml" },
          { title: "Developer Tools", value: "tools" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "level",
      title: "Proficiency Level",
      type: "string",
      options: {
        list: [
          { title: "Learning", value: "learning" },
          { title: "Working Knowledge", value: "working" },
          { title: "Strong Proficiency", value: "strong" },
        ],
      },
      initialValue: "working",
    },
    {
      name: "icon",
      title: "Icon Name / Badge Slug",
      type: "string",
    },
    {
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
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
      title: "name",
      subtitle: "category",
    },
  },
};
