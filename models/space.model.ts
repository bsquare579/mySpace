// import { Schema, model, Document, Types } from "mongoose";
import { Schema, model, Document, Types } from "mongoose";
import { S } from "./interfaces/space.interface";
// import { Industies, Referee, Risk, Status } from "./enums/merchant.enum";

export interface SpaceModel extends S, Document {}
// interface PaymentPartneRateComboI extends PaymentPartneRateCombo, Document {}

const SpaceSchema = new Schema<SpaceModel>(
  {
    phone: { type: String, required: true },
    email: { type: String, required: true, imutable: true , unique: true},
    website: { type: String, required: true },
    userEmail: { type: String, required: true, imutable: true },
    name: { type: String, requred: true },
    address: { type: String, requred: true },
    regNo: { type: String, requred: true },
    reason: { type: String, requred: false },
  },
  {
    timestamps: true,
    strict: "throw", // validates type from client
    strictQuery: false, // Turn off strict mode for query filters,
  }
);

SpaceSchema.index({ userEmail: 1 }, { background: true });


export const Space = model("Space", SpaceSchema);


