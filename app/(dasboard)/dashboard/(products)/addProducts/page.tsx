"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { ProductType } from "@/app/types/types";
import { createProduct } from "@/actions/creatProducts";
import { FaTimes, FaSyncAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useCurrentUser } from "@/lib/use-session-client";

const ProductForm: React.FC = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const initialFormData: ProductType = {
    name: "",
    slug: "",
    description: "",
    price: 0,
    sale_price: 0,
    sku: 0,
    quantity: 0,
    in_stock: true,
    is_taxable: false,
    height: 0,
    width: 0,
    image: "",
    video: "",
    gallery: [],
    author_id: "",
    manufacturer_id: "",
    is_digital: false,
    is_external: false,
    external_product_url: "",
    external_product_button_text: "",
    ratings: 0,
    total_reviews: 0,
    rating_count: 0,
    my_review: "",
    in_wishlist: false,
    categories: [],
    shop_id: "",
    status: "Draft",
    product_type: "Simple",
    language: "",
  };

  const [formData, setFormData] = useState<ProductType>(initialFormData);
  const [galleryFiles, setGalleryFiles] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === "number") {
      setFormData({
        ...formData,
        [name]: Math.max(0, Number(value)), // Ensure no negative numbers
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const generateSKU = () => {
    const newSKU = Math.floor(Math.random() * 1000000000); // Generate a random number as SKU
    setFormData({
      ...formData,
      sku: newSKU,
    });
  };

  const handleImageUpload = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64 = reader.result as string;
        try {
          const response = await fetch("/api/upload-product-image", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              base64: base64.split(",")[1],
              fileName: file.name,
              userName: user?.firstname,
            }),
          });

          const result = await response.json();
          if (response.ok) {
            setFormData({
              ...formData,
              image: result?.url,
            });
          } else {
            console.error("Error uploading file:", result.message);
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [formData]
  );

  const handleGalleryUpload = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64 = reader.result as string;
        try {
          const response = await fetch("/api/upload-product-gallery", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              base64: base64.split(",")[1],
              fileName: file.name,
              userName: user?.firstname,
            }),
          });

          const result = await response.json();
          if (response.ok) {
            setGalleryFiles((prevFiles) => [
              ...prevFiles,
              reader.result as string,
            ]);
          } else {
            console.error("Error uploading file:", result.message);
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [formData]
  );

  const handleVideoUpload = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      console.log(file);

      if (file) {
        try {
          // Fetch the presigned URL from the server
          const response = await fetch("/api/upload-product-video", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: file.name,
              fileType: file.type,
              userName: user?.firstname,
            }),
          });

          const data = await response.json();

          console.log("Server response:", data);

          if (response.ok) {
            const { presignedUrl, url } = data;

            // Upload the file to S3 using the presigned URL
            const uploadResponse = await fetch(presignedUrl, {
              method: "PUT",
              headers: {
                "Content-Type": file.type,
              },
              body: file,
            });

            if (uploadResponse.ok) {
              // Set the form data with the uploaded video URL
              setFormData((prevData) => ({
                ...prevData,
                video: url,
              }));
            } else {
              console.error(
                "Error uploading video:",
                await uploadResponse.text()
              );
            }
          } else {
            console.error(
              "Error generating presigned URL:",
              data.message || response.statusText
            );
          }
        } catch (error) {
          console.error("Error uploading video:", error);
        }
      }
    },
    [setFormData]
  );

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      onDrop: handleImageUpload,
      accept: { "image/*": [] },
      multiple: false,
    });

  const {
    getRootProps: getGalleryRootProps,
    getInputProps: getGalleryInputProps,
  } = useDropzone({
    onDrop: handleGalleryUpload,
    accept: { "image/*": [] },
    multiple: true,
  });

  const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } =
    useDropzone({
      onDrop: handleVideoUpload,
      accept: { "video/*": [] },
      multiple: false,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);

    // Append gallery files URLs to formData
    const updatedFormData = { ...formData, gallery: galleryFiles };

    const response = await createProduct(updatedFormData);
    console.log("Response:", response);

    if (response.status === "success") {
      console.log("Product created successfully");
      router.push(`/`);
    } else {
      console.error("Error creating product:", response.message);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={generateSKU}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
