// src/api.js
import axios from "axios";

const BASE_URL = "https://yuntechiidapi-production.up.railway.app";

// 取得 news 資料
export const fetchNews = async () => {
  const res = await axios.get(`${BASE_URL}/news`);
  return res.data;
};

// 取得 announcements 資料
export const fetchAnnouncements = async () => {
  const res = await axios.get(`${BASE_URL}/announcements`);
  return res.data;
};

