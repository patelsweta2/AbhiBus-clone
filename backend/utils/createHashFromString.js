import crypto from "node:crypto";
export default function (str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}
