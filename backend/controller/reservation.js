import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res) => {
  const { name, lastName, email, date, time, phone } = req.body;
  console.log(req.body);
  if (!name || !lastName || !email || !date || !time || !phone) {
    return res.status(500).json({ success: false, message: "invalid form" });
  }
  try {
    await Reservation.create({ name, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export default send_reservation;
