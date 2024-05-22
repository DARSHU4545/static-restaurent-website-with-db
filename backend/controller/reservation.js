import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return res.status(500).json({ success: false });
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export default send_reservation;
