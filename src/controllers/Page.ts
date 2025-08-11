import { Request, Response } from "express";
import { TPage } from "@custom-types/page";
import { Page } from "@models/page";
import { validate } from "@/validators/validate";
import VALIDATION_RULES from "@/validators/validationRules";

class PageController {
  /**
   * Creates a new page with the provided data in the request body.
   *
   * @param req Express request containing `page: Page` details in its body.
   * @param res Express response used to return the created user details or an error.
   *
   * @returns A JSON response containing newly created page or the error message.
   */
  async create(req: Request<any, any, TPage>, res: Response) {
    const body = req.body ?? {};

    const validation = validate<TPage>(body, VALIDATION_RULES.Page);

    if (!validation.success) {
      return res.status(422).json({
        message: "Validation Failed",
        validationErrors: validation.errors,
      });
    }

    try {
      const dbResult = await Page.create(body);
      return res.json({ message: "Page Created", data: dbResult });
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: "Page creation failed", error: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const pages = await Page.find({}, { name: 1, slug: 1 });
      return res.json({ message: "Pages fetched", data: pages });
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: "Page fetch failed", error: error.message });
    }
  }
}

const pageController = new PageController();
export default pageController;
