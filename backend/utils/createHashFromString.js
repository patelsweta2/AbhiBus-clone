import crypto from "node:crypto";
export default function (str) {
  return crypto.hash("sha256").update(str).digest("hex");
}
