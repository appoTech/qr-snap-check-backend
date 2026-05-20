const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  id: String,
  type: String, // "signature" | "selfie"
  data: String,
  name: String,
  timestamp: Number
});

const signatureProfileSchema = new mongoose.Schema({
  strokes: Number,
  totalLength: Number,
  durationMs: Number,
  bboxRatio: Number,
  fillRatio: Number,
  avgSpeed: Number
});

const mediaKitSchema = new mongoose.Schema({
  profession: String,
  genre: String,
  niche: String,
  bio: String,
  email: String,
  location: String,
  audienceSize: String,
  audienceAge: String,
  audienceGeo: String,
  topPlatforms: [String],
  avgReach: String,
  engagementRate: String,
  ctr: String,
  conversionRate: String,
  avgWatchTime: String,
  services: [String],
  contentTypes: [String],
  postPrice: String,
  reelPrice: String,
  storyPrice: String,
  bundlePrice: String,
  consultationPrice: String,
  pastBrands: String,
  testimonials: String,
  caseStudy: String,
  vision: String,
  roadmap: String,
  experience: String,
  proposal: String,
  marketShare: String,
  photos: [String],
  updatedAt: Number
});

const creatorSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  brandName: String,
  profession: String,
  tagline: String,
  tags: [String],
  logoDataUrl: String,
  accentColor: String,
  paid: Boolean,
  suspended: Boolean,
  signatureHash: String,
  selfieHash: String,
  signatureProfile: signatureProfileSchema,
  meetingUrl: String,
  createdAt: Number,
  attendance: { type: [attendanceSchema], default: [] },
  mediaKit: mediaKitSchema,
  mediaKitSubscribed: Boolean
});

module.exports = mongoose.model('Creator', creatorSchema);
