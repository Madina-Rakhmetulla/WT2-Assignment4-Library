const express = require("express");
const auth = require("../middleware/auth");
const requireAdmin = require("../middleware/requireAdmin");
const {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember
} = require("../controllers/memberController");

const router = express.Router();

// Public read
router.get("/", getMembers);
router.get("/:id", getMember);

// Admin write (Assignment 4 RBAC requirement)
router.post("/", auth, requireAdmin, createMember);
router.put("/:id", auth, requireAdmin, updateMember);
router.delete("/:id", auth, requireAdmin, deleteMember);

module.exports = router;
