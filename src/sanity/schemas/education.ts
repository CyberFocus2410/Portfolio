export const educationSchema = {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "institution",
      title: "Institution / University",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "degree",
      title: "Degree / Program",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fieldOfStudy",
      title: "Field of Study",
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
      title: "Currently Enrolled",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "gradeOrCgpa",
      title: "Grade / CGPA (Optional)",
      type: "string",
    },
    {
      name: "description",
      title: "Coursework / Highlights",
      type: "text",
      rows: 3,
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
      title: "degree",
      subtitle: "institution",
    },
  },
};
