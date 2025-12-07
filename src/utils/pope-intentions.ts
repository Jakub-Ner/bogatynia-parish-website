import matter from "gray-matter";

export interface PopeIntentionData {
  title: string;
  date: Date;
  category: string;
  month: string;
  draft: boolean;
}

export interface PopeIntention {
  data: PopeIntentionData;
  content: string;
  body: string; // raw markdown body for parsing h1/h2
}

function getCurrentMonth(): string {
  return new Date().toISOString().slice(0, 7); // "YYYY-MM"
}

export async function fetchPopeIntention(): Promise<PopeIntention | null> {
  try {
    const baseUrl =
      "https://hhuvw60wkv08yr9b.public.blob.vercel-storage.com/pope-intentions";
    const url = `${baseUrl}/${getCurrentMonth()}.md`;
    console.log("Fetching pope intention from:", url);
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        console.log("No pope intention found for current month");
        return null;
      }
      throw new Error(`Failed to fetch pope intention: ${response.statusText}`);
    }

    const markdownContent = await response.text();

    // Parse frontmatter and content
    const { data, content } = matter(markdownContent);

    const popeIntention: PopeIntention = {
      data: {
        title: data.title || "Intencja Papieska",
        date: data.date ? new Date(data.date) : new Date(),
        category: data.category || "Intencja Papieska",
        month: data.month || getCurrentMonth(),
        draft: data.draft ?? false,
      },
      content: content.trim(),
      body: content.trim(),
    };

    return popeIntention;
  } catch (error) {
    console.error("Error fetching pope intention from blob storage:", error);
    return null;
  }
}
