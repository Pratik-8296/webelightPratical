import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from '../types/product.types';

export interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema<IProductDocument>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

// Create indexes for filtering and searching
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });

export const Product = mongoose.model<IProductDocument>('Product', productSchema);

export default Product; 