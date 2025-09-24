const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    father_name: { type: String, required: true },
    birth_date: { type: String, required: false },
    phone: { type: String, required: true },
    address: { type: String, required: false },
    status: { type: String, enum: ['pending', 'created', 'rejected', 'successfull'], default: 'created' },
    additionalInfo: { type: String, required: false },
    passport: {
      series: { type: String, required: true },
      number: { type: String, required: true },
      jsshir: { type: String, required: true },
      images: [{ type: String }], // front va back rasmlar shu massivga tushadi
      // back_img: { type: String, required: false },
      // front_img: { type: String, required: false },
    },

  },
  {
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: false
  }
);

module.exports = mongoose.model("Application", schema);