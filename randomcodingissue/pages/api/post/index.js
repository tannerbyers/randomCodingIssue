export default function handler(req, res) {
  res
    .status(200)
    .json([
      { postName: "Test issue", error: "Not found", resolution: "I found it" },
    ]);
}
