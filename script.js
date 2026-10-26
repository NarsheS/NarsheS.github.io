// =========================
// Ícones (Lucide)
// =========================

if (window.lucide) {
  lucide.createIcons();
}

// =========================
// Terminal
// =========================

const terminal = document.getElementById("terminal");

const terminalLines = [
  { text: "> whoami", cls: "t-cmd" },
  { text: "Gabriel Gonçalves, desenvolvedor júnior e TI", cls: "t-out" },
  { text: "", cls: "t-out" },
  { text: "> skills --desenvolvimento", cls: "t-cmd" },
  { text: "React, Next.js, TypeScript", cls: "t-out" },
  { text: "Node.js, NestJS, PostgreSQL", cls: "t-out" },
  { text: "", cls: "t-out" },
  { text: "> skills --suporte", cls: "t-cmd" },
  { text: "Instalação e formatação de SO", cls: "t-out" },
  { text: "Configuração de software e drivers", cls: "t-out" },
  { text: "Diagnóstico de problemas", cls: "t-out" },
  { text: "", cls: "t-out" },
  { text: "> status", cls: "t-cmd" },
  { text: "Disponível para novas oportunidades", cls: "t-out" },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTerminal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  for (const line of terminalLines) {
    const row = document.createElement("span");
    row.className = `${line.cls} block min-h-[1.75rem]`;
    terminal.appendChild(row);

    if (reduceMotion) {
      row.textContent = line.text;
      continue;
    }

    for (const char of line.text) {
      row.textContent += char;
      await sleep(22);
    }

    // pausa um pouco mais depois de cada comando
    await sleep(line.cls === "t-cmd" ? 350 : 80);
  }

  const cursor = document.createElement("span");
  cursor.className = "cursor t-out";
  cursor.textContent = "_";
  terminal.lastElementChild.appendChild(cursor);
}

if (terminal) {
  setTimeout(runTerminal, 600);
}
