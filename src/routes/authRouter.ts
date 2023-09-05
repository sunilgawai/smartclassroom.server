import { Router } from "express"

const authRouter = Router()

/**
 * Register Staff.
 * @body(Staff)
 * @auth true
 */
authRouter.post("/")

/**
 * Update Staff.
 * @param(id)
 * @body(Staff)
 * @auth true
 */
authRouter.put("/:id")

/**
 * Delete Staff.
 * @param(id)
 * @auth true
 */
authRouter.delete("/:id")

/**
 * View Staff.
 * @param(id)
 * @auth true
 */
authRouter.get("/:id")

/**
 * Delete Staff.
 * @param(id)
 * @auth true
 */
authRouter.get("/")

export default authRouter