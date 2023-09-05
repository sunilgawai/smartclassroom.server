import { Router } from "express"

const staffRouter = Router()

/**
 * Register Staff.
 * @body(Staff)
 * @auth true
 */
staffRouter.post("/")

/**
 * Update Staff.
 * @param(id)
 * @body(Staff)
 * @auth true
 */
staffRouter.put("/:id")

/**
 * Delete Staff.
 * @param(id)
 * @auth true
 */
staffRouter.delete("/:id")

/**
 * View Staff.
 * @param(id)
 * @auth true
 */
staffRouter.get("/:id")

/**
 * Delete Staff.
 * @param(id)
 * @auth true
 */
staffRouter.get("/")

export default staffRouter