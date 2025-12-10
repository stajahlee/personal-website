import type { Project, ProjectRaw } from "@/app/components/types";
import { sql } from "@vercel/postgres";

export async function fetchAllProjects() {
  try {
    const data = await sql<ProjectRaw>`
      SELECT 
          projects.title, 
          projects.description,
          projects.subtitle,
          images.href,
          images.src,
          images.alt,
          images.caption
        FROM projects
        JOIN images ON projects.image_id = images.id
        ORDER BY projects.title ASC
        LIMIT 5
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project data.");
  }
}

export async function fetchProject(likeTitleString: string) {
  try {
    const data = await sql<ProjectRaw>`
      SELECT * FROM projects
        JOIN images ON projects.image_id = images.id
        WHERE title LIKE ${likeTitleString}
    `;

    const project = (data.rowCount || 0) > 0 ? data.rows[0] : null;
    if (project) {
      return project as Project;
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project data.");
  }
}
