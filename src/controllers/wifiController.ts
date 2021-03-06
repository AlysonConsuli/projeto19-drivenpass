import { Request, Response } from "express";

import * as wifiService from "../services/wifiService.js";
import { WifiInsertData } from "../services/wifiService.js";

export const createWifi = async (req: Request, res: Response) => {
  const userId: number = res.locals.user.id;
  const wifiData: WifiInsertData = req.body;
  await wifiService.createWifi({ userId, ...wifiData });
  res.sendStatus(201);
};

export const getWifi = async (req: Request, res: Response) => {
  const userId: number = res.locals.user.id;
  const wifi = await wifiService.getWifi(userId);
  res.send(wifi);
};

export const getWifiById = async (req: Request, res: Response) => {
  const userId: number = res.locals.user.id;
  const wifiId = parseInt(req.params.id);
  const wifi = await wifiService.getWifiById(userId, wifiId);
  res.send(wifi);
};

export const deleteWifi = async (req: Request, res: Response) => {
  const userId: number = res.locals.user.id;
  const wifiId = parseInt(req.params.id);
  await wifiService.deleteWifi(userId, wifiId);
  res.sendStatus(204);
};
