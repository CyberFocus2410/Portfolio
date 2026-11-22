export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "domain",
      title: "Domain",
      type: "string",
      options: {
        list: [
          { title: "Cybersecurity", value: "cybersecurity" },
          { title: "Medical AI", value: "healthcare-ai" },
          { title: "Freelancing Works", value: "web-freelance" },
          { title: "AI / ML Projects", value: "ai-ml" },
          { title: "Apps & Mobile", value: "apps" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "body",
      title: "Detailed Case Study",
      type: "text",
      rows: 6,
    },
    {
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "role",
      title: "My Role",
      type: "string",
    },
    {
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "gallery",
      title: "Screenshots Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "mockupType",
      title: "Device Mockup Frame",
      type: "string",
      options: {
        list: [
          { title: "Desktop Monitor", value: "monitor" },
          { title: "Mobile Phone", value: "phone" },
          { title: "None", value: "none" },
        ],
      },
      initialValue: "monitor",
    },
    {
      name: "video",
      title: "Demo Video (MP4/WebM under 20MB)",
      type: "file",
    },
    {
      name: "repoUrl",
      title: "GitHub Repository URL",
      type: "url",
    },
    {
      name: "liveUrl",
      title: "Live Deployed URL",
      type: "url",
    },
    {
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "label",
      title: "Badge Label (e.g. AI AUDITOR, BLUE TEAM)",
      type: "string",
    },
    {
      name: "clientName",
      title: "Client Name (Optional)",
      type: "string",
    },
    {
      name: "permissionConfirmed",
      title: "Client Permission Confirmed",
      description: "Must be true before showing client name or screenshots publicly",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Live / Maintained", value: "live" },
          { title: "Research Prototype", value: "prototype" },
          { title: "In Progress", value: "progress" },
        ],
      },
      initialValue: "live",
    },
    {
      name: "date",
      title: "Completion Date",
      type: "date",
    },
    {
      name: "published",
      title: "Published",
      description: "Only published projects will be displayed on the portfolio",
      type: "boolean",
      initialValue: true,
    },
  ],
};
