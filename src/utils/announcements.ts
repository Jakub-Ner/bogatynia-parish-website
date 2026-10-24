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

const BLOB_BASE_URL = "https://hhuvw60wkv08yr9b.public.blob.vercel-storage.com";

function announcementDate(): string {
  // Use last Sunday or today if today is Sunday
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  today.setDate(today.getDate() - dayOfWeek);
  return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
}

function parseAnnouncement(markdownContent: string, defaultTitle: string): Announcement {
  const { data, content } = matter(markdownContent);

  return {
    data: {
      title: data.title || defaultTitle,
      date: data.date ? new Date(data.date) : new Date(),
      featured: data.featured ?? false,
      draft: data.draft ?? false,
    },
    content: content.trim(),
  };
}

async function fetchFromBlob(
  path: string,
  defaultTitle: string
): Promise<Announcement> {
  try {
    const url = `${BLOB_BASE_URL}${path}`;
    console.log("Fetching from blob storage:", url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const markdownContent = await response.text();
    return parseAnnouncement(markdownContent, defaultTitle);
  } catch (error) {
    console.error("Error fetching from blob storage:", error);
    throw error;
  }
}

export async function fetchAnnouncement(): Promise<Announcement> {
  return fetchFromBlob(
    `/ogloszenia/${announcementDate()}.md`,
    "Ogłoszenia Parafialne"
  );
}

export async function fetchWypominki(): Promise<Announcement> {
  return fetchFromBlob("/wypominki/wypominki.md", "Wypominki");
}
