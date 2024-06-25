"use client";

import { z } from "zod";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { ProductType } from "@/app/types/types";
import { createProduct } from "@/actions/creatProducts";
import { FaTimes, FaSyncAlt } from "react-icons/fa";
import { useCurrentUser } from "@/lib/use-session-client";
import { handleImageUpload } from "@/lib/data/handleImageUpload";
import { handleGalleryUpload } from "@/lib/data/handleGalleryUpload";
import { handleChange } from "@/lib/data/handleChange";
import { generateSKU } from "@/lib/data/generateSKU";
import { handleVideoUpload } from "@/lib/data/handleVideoUpload";
import { productSchema } from "@/app/schemas";

const ProductForm: React.FC = () => {
  const router = useRouter();
  const user = useCurrentUser();
  let initialFormData: ProductType = {
    name: "",
    slug: "",
    description: "",
    price: 0,
    sale_price: 0,
    sku: 0,
    quantity: 0,
    in_stock: true,
    is_taxable: false,
    image: "",
    video: "",
    gallery: [],
    // author_id: "",
    ratings: 0,
    total_reviews: 0,
    my_review: "",
    in_wishlist: false,
    categories: [],
    // shop_id: "",
    status: "Draft",
    product_type: "Simple",
  };

  const [formData, setFormData] = useState<ProductType>(initialFormData);
  const [galleryFiles, setGalleryFiles] = useState<string[]>([]);

  const handleInputChange = handleChange(formData, setFormData);

  const handleGenerateSKU = () => generateSKU(formData, setFormData);

  const imageUploadHandler = handleImageUpload(formData, setFormData);
  const galleryUploadHandler = handleGalleryUpload(
    formData,
    setFormData,
    setGalleryFiles
  );
  const videoUploadHandler = handleVideoUpload(formData, setFormData);

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      onDrop: imageUploadHandler,
      accept: { "image/*": [] },
      multiple: false,
    });

  const {
    getRootProps: getGalleryRootProps,
    getInputProps: getGalleryInputProps,
  } = useDropzone({
    onDrop: galleryUploadHandler,
    accept: { "image/*": [] },
    multiple: true,
  });

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } =
    useDropzone({
      onDrop: videoUploadHandler,
      accept: { "video/*": [] },
      multiple: false,
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/create-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      // Handle success
      console.log("Product created:", result.product);
      setFormData(initialFormData);
    } else {
      // Handle error
      console.error("Error creating product:", result.message);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // Update formData's gallery
    setFormData((prevFormData) => ({
      ...prevFormData,
      gallery: prevFormData.gallery?.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md h-full mt-32 pb-32">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Sale Price
            </label>
            <input
              type="number"
              name="sale_price"
              value={formData.sale_price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">SKU</label>
            <div className="flex items-center">
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={handleGenerateSKU}
                className="ml-2 p-2 bg-blue-600 text-white rounded"
              >
                <FaSyncAlt />
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              In Stock
            </label>
            <input
              type="checkbox"
              name="in_stock"
              checked={formData.in_stock}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Is Taxable
            </label>
            <input
              type="checkbox"
              name="is_taxable"
              checked={formData.is_taxable}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Suspended">Suspended</option>
              <option value="OutOfStock">Out Of Stock</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Type
            </label>
            <select
              name="product_type"
              value={formData.product_type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Simple">Simple</option>
              <option value="Variable">Variable</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Image
            </label>
            <div
              {...getImageRootProps({
                className: "dropzone border rounded p-4 text-center",
              })}
            >
              <input {...getImageInputProps()} />
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Product"
                  className="w-full h-48 object-cover mt-2"
                />
              ) : (
                <p>Drag 'n' drop an image here, or click to select one</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Video
            </label>
            <div
              {...getVideoRootProps({
                className: "dropzone border rounded p-4 text-center",
              })}
            >
              <input {...getVideoInputProps()} />
              {formData.video ? (
                <video controls className="w-full h-48 mt-2">
                  <source src={formData.video} />
                </video>
              ) : (
                <p>Drag 'n' drop a video here, or click to select one</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Gallery
            </label>
            <div
              {...getGalleryRootProps({
                className: "dropzone border rounded p-4 text-center",
              })}
            >
              <input {...getGalleryInputProps()} />
              <p>Drag 'n' drop images here, or click to select files</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {galleryFiles.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded overflow-hidden"
                >
                  <img
                    src={file}
                    alt={`Gallery ${index}`}
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Author ID
            </label>
            <input
              type="text"
              name="author_id"
              value={user?.id}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded shadow"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
