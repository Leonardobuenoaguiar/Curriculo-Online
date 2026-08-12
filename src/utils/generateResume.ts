import { education, experiences, profile, skills } from "../data/portfolio";

export async function downloadResume() {
  const { jsPDF } = await import("jspdf");
  const document = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = document.internal.pageSize.getWidth();
  const pageHeight = document.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  const paintPage = () => {
    document.setFillColor(243, 240, 232);
    document.rect(0, 0, pageWidth, pageHeight, "F");
  };

  const addPage = () => {
    document.addPage();
    paintPage();
    y = 18;
  };

  const ensureSpace = (required: number) => {
    if (y + required > pageHeight - 18) addPage();
  };

  const addLines = (
    text: string,
    options?: { size?: number; color?: [number, number, number]; gap?: number }
  ) => {
    const size = options?.size ?? 9.5;
    const color: [number, number, number] = options?.color ?? [8, 8, 8];
    const gap = options?.gap ?? 5;
    document.setFont("helvetica", "normal");
    document.setFontSize(size);
    document.setTextColor(...color);
    const lines = document.splitTextToSize(text, contentWidth);
    ensureSpace(lines.length * gap + 3);
    document.text(lines, margin, y);
    y += lines.length * gap + 3;
  };

  const addSection = (title: string) => {
    ensureSpace(18);
    y += 5;
    document.setDrawColor(95, 108, 255);
    document.setLineWidth(0.7);
    document.line(margin, y, margin + 8, y);
    document.setFont("helvetica", "bold");
    document.setFontSize(13);
    document.setTextColor(8, 8, 8);
    document.text(title.toUpperCase(), margin + 12, y + 1.5);
    y += 10;
  };

  paintPage();
  document.setFillColor(8, 8, 8);
  document.rect(0, 0, pageWidth, 62, "F");
  document.setTextColor(95, 108, 255);
  document.setFont("helvetica", "bold");
  document.setFontSize(10);
  document.text("CURRÍCULO PROFISSIONAL", margin, 16);
  document.setTextColor(243, 240, 232);
  document.setFontSize(24);
  document.text("Leonardo Bueno de Aguiar", margin, 31);
  document.setFontSize(11);
  document.setFont("helvetica", "normal");
  document.text(profile.title, margin, 41);
  document.setFontSize(8.5);
  document.setTextColor(243, 240, 232);
  document.text(`${profile.location}  |  ${profile.phone}  |  ${profile.email}`, margin, 51);
  document.text(profile.github, margin, 57);
  y = 72;

  addSection("Perfil");
  addLines(profile.description);
  addLines(
    "Comunicativo, dinâmico, ágil e motivado por desafios, possui facilidade com computadores, bom relacionamento interpessoal e facilidade para trabalhar em equipe. Busca constantemente se atualizar sobre tecnologias e boas práticas de TI."
  );

  addSection("Experiência profissional");
  experiences.forEach((experience) => {
    ensureSpace(24);
    document.setFont("helvetica", "bold");
    document.setFontSize(11.5);
    document.setTextColor(8, 8, 8);
    document.text(`${experience.company} | ${experience.role}`, margin, y);
    document.setFontSize(9);
    document.setTextColor(95, 108, 255);
    document.text(experience.period, pageWidth - margin, y, { align: "right" });
    y += 7;
    addLines(experience.description);
    addLines(experience.additional);
    addLines(`Atividades e conhecimentos: ${experience.activities.join("; ")}.`, { size: 8.8 });
    y += 3;
  });

  addSection("Formação");
  education.forEach((item) => {
    ensureSpace(18);
    document.setFont("helvetica", "bold");
    document.setFontSize(10.5);
    document.setTextColor(8, 8, 8);
    document.text(item.course, margin, y);
    y += 5.5;
    addLines(`${item.institution} | ${item.period} | ${item.status}`, { size: 9 });
    y += 2;
  });

  addSection("Conhecimentos");
  skills.forEach((group) => {
    const note = group.note ? ` ${group.note}` : "";
    addLines(`${group.category}: ${group.items.join(", ")}.${note}`, { size: 9 });
  });

  addSection("Contato");
  addLines(`Email: ${profile.email}`);
  addLines(`Telefone: ${profile.phone}`);
  addLines(`Localização: ${profile.location}`);
  addLines(`GitHub: ${profile.github}`);

  document.save("curriculo-leonardo-bueno-de-aguiar.pdf");
}