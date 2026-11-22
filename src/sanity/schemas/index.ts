import { projectSchema } from "./project";
import { hackathonSchema } from "./hackathon";
import { certificateSchema } from "./certificate";
import { badgeSchema } from "./badge";
import { skillSchema } from "./skill";
import { experienceSchema } from "./experience";
import { educationSchema } from "./education";
import { doorSchema } from "./door";
import { roleSchema } from "./role";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  projectSchema,
  hackathonSchema,
  certificateSchema,
  badgeSchema,
  skillSchema,
  experienceSchema,
  educationSchema,
  doorSchema,
  roleSchema,
  siteSettingsSchema,
];
