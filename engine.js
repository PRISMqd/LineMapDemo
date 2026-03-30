
export function evaluate(medA, medB, rules) {
  if (!medA || !medB) return { status: "incomplete" };
  const key = [medA, medB].sort().join("|");
  const rule = rules.find(r => r.pair_key === key);
  if (!rule) return { same: "unknown", y: "unknown" };
  return { same: rule.same_lumen, y: rule.y_site };
}
