import { type NextApiRequest, type NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  switch (method) {
    case "GET":
      break;

    default:
      res.status(405).json({ success: false, message: "Method prohibited" });
      break;
  }
};

export default handler;
