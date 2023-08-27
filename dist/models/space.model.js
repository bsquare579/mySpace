"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
// import { Schema, model, Document, Types } from "mongoose";
const mongoose_1 = require("mongoose");
// interface PaymentPartneRateComboI extends PaymentPartneRateCombo, Document {}
const SpaceSchema = new mongoose_1.Schema({
    phone: { type: String, required: true },
    email: { type: String, required: true, imutable: true, unique: true },
    website: { type: String, required: true },
    userEmail: { type: String, required: true, imutable: true },
    name: { type: String, requred: true },
    address: { type: String, requred: true },
    regNo: { type: String, requred: true },
    reason: { type: String, requred: false },
}, {
    timestamps: true,
    strict: "throw",
    strictQuery: false, // Turn off strict mode for query filters,
});
SpaceSchema.index({ userEmail: 1 }, { background: true });
exports.Space = (0, mongoose_1.model)("Space", SpaceSchema);
