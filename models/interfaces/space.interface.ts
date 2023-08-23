import { Schema, Types } from 'mongoose';
// import { Risk, Industies, Referee, Status } from '../enums/merchant.enum';

export interface BankBody {
  accountName: string;
  accountNumber: string;
  currencyName: string;
  bankCode?: string;
  bankName: string;
  currencySymbol: string;
  reason: string;
  country: string;
  merchantId: string;
  merchantEmail: string;
  userEmail: true;
} 

export interface S {
  isReferred: boolean;
  phone: string;
  email: string;
  website: string;
  logoURL: string;
  banks?: BankBody[];
  regDocURL: string;
  repIdURL: string;
  createdBy?: Types.ObjectId;
  modifiedLastBy?: Types.ObjectId;
  userEmail?: string;
  name?: string;
  regNo: string;
  address: string;
  reason?: string;
  recurrentPaymentEnabled: boolean;
  // integrationKeys?: IntegrationKey[];
}

export interface SpaceStatusBody {
  reason: string;
  isSuspended: boolean;
  merchantId: Types.ObjectId
}