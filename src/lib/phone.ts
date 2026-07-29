/** Format Russian mobile as +7 (XXX) XXX-XX-XX */
export function formatRuPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  let d = digits;
  if (d.length === 0) return "";
  if (d[0] === "8") d = "7" + d.slice(1);
  if (d[0] !== "7") d = "7" + d;
  d = d.slice(0, 11);

  const p1 = d.slice(1, 4);
  const p2 = d.slice(4, 7);
  const p3 = d.slice(7, 9);
  const p4 = d.slice(9, 11);

  let out = "+7";
  if (d.length > 1) out += " (" + p1;
  if (d.length >= 4) out += ")";
  if (p2) out += " " + p2;
  if (p3) out += "-" + p3;
  if (p4) out += "-" + p4;
  return out;
}

export function isCompleteRuPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length === 11;
}

export const PHONE_PLACEHOLDER = "+7 (___) ___-__-__";
export const PHONE_INCOMPLETE_MSG = "Введите телефон полностью: +7 (___) ___-__-__";
