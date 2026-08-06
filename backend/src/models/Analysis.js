import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false
  },
  faceShape: {
    type: String,
    required: true
  },
  skinTone: {
    type: String,
    required: true
  },
  skinType: {
    type: String,
    required: true
  },
  beautyScore: {
    type: Number,
    required: true
  },
  recommendation: {
    type: String,
    required: true
  }
}, {
  timestamps: true // This automatically adds createdAt and updatedAt fields
});

export const Analysis = mongoose.model('Analysis', analysisSchema);
export default Analysis;
