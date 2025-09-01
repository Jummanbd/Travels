import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const filePath = path.join(process.cwd(), "data", "category.json");
//     const fileData = fs.readFileSync(filePath, "utf-8");
//     const categories = JSON.parse(fileData);

//     // Compact JSON response (no pretty-print)
//     return new NextResponse(JSON.stringify(categories), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({ message: "Failed to load categories" }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }

import category from "@/data/category.json";

// GET method
export async function GET() {
  return NextResponse.json(category);
}
