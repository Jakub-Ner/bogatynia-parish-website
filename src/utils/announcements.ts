import matter from "gray-matter";

export interface AnnouncementData {
  title: string;
  date: Date;
  featured: boolean;
  draft: boolean;
}

export interface Announcement {
  data: AnnouncementData;
  content: string;
}

function announcementDate(): string {
  // Use last Sunday or today if today is Sunday
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  today.setDate(today.getDate() - dayOfWeek);
  return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
}

export async function fetchAnnouncement(): Promise<Announcement> {
  try {
    const baseUrl =
      "https://hhuvw60wkv08yr9b.public.blob.vercel-storage.com/ogloszenia";
    const url = `${baseUrl}/${announcementDate()}.md`;
    console.log("Fetching announcement from:", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch announcement: ${response.statusText}`);
    }

    const markdownContent = await response.text();

    // Parse frontmatter and content
    const { data, content } = matter(markdownContent);

    // Validate and transform the data
    const announcement: Announcement = {
      data: {
        title: data.title || "Ogłoszenia Parafialne",
        date: data.date ? new Date(data.date) : new Date(),
        featured: data.featured ?? false,
        draft: data.draft ?? false,
      },
      content: content.trim(),
    };

    // Update cache
    return announcement;
  } catch (error) {
    console.error("Error fetching announcement from blob storage:", error);
    throw error;
  }
}
