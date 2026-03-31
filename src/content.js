const resumePdf = `${import.meta.env.BASE_URL}assets/RTF_CV_close.pdf`;

export const coverImage = `${import.meta.env.BASE_URL}assets/linkedin-cover.png`;
export const profileImage = `${import.meta.env.BASE_URL}assets/hero_rounded.png`;

export const essays = [
  {
    id: 1,
    sectionId: "article1",
    title: "Diversity(cover)",
    category: "Balt Sun",
    date: "March 18, 2026",
    excerpt:
      "Wrote a 1A story about diversity (or lack thereof) in the video game industry. This was my first cover story and it highlighted how far the industry had to go when it came to representing different POVs. Reporting was done live from E3 in Los Angeles back to the newsroom in Baltimore.",
    pdf: `${import.meta.env.BASE_URL}assets/article1.pdf`
  },
  {
    id: 2,
    sectionId: "article2",
    title: "Diversity(II)",
    category: "Balt Sun (part two)",
    date: "March 12, 2026",
    excerpt:
      "This was the article jump from 1A. This piece was picked up by the AP,CNN and international wires.",
    pdf: `${import.meta.env.BASE_URL}assets/article2.pdf`
  },
  {
    id: 3,
    sectionId: "article3",
    title: "John Madden Gaming at Ravens camp",
    category: "Sports",
    date: "March 5, 2026",
    excerpt:
      "Covered iconic EA Sports John Madden franchise live from the Baltimore Ravens training camp. I interviewed players and coaches about how they used the game to prepare for the season and how it impacted their performance on the field.",
    pdf: `${import.meta.env.BASE_URL}assets/article3.pdf`
  }
];

export const featuredSeries = {
  title: "Mastering Needs-Based Selling",
  excerpt:
    "A 5-part series on conducting financial assessments that actually help people. From term life to final expense, learn to match products to real needs.",
  pdf: resumePdf
};

export const articleArchivePath = `${import.meta.env.BASE_URL}1a.html`;
