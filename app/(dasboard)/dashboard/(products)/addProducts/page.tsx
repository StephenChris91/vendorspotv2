"use client";

import { z } from "zod";
import React, { startTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { CategoriesType, ProductType } from "@/app/types/types";
import { createProduct } from "@/actions/creatProducts";
import { FaTimes, FaSyncAlt } from "react-icons/fa";
import { useCurrentUser } from "@/lib/use-session-client";
import { handleImageUpload } from "@/lib/data/handleImageUpload";
import { handleGalleryUpload } from "@/lib/data/handleGalleryUpload";
import { handleChange } from "@/lib/data/handleChange";
import { generateSKU } from "@/lib/data/generateSKU";
import { handleVideoUpload } from "@/lib/data/handleVideoUpload";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCategory, getAllCategories } from "@/actions/categories";
import { createSlug } from "@/lib/data/create-slug";

const ProductForm: React.FC = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const { toast } = useToast();
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<
    CategoriesType[]
  >([]);
  // State to hold selected categories
  const [newCategory, setNewCategory] = useState(""); // State to hold new category input

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getAllCategories(); // Replace with actual function to fetch categories
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
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
    categories: [], // Initialize with empty array
    status: "Draft",
    product_type: "Simple",
  };

  const [formData, setFormData] = useState<ProductType>(initialFormData);
  const [galleryFiles, setGalleryFiles] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState<string[]>([]);

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
    startTransition(() => {
      if (!response.ok) {
        setErrorMsg(result.message);
        toast({
          variant: "destructive",
          title: "Error 😞",
          description: errorMsg,
          duration: 9000,
        });
        console.log(formData);
        console.error("Error creating product:", result.message);
      } else {
        // Handle success
        setSuccess(result.message);
        toast({
          title: "Product Created Successful 😄",
          description: success,
          duration: 9000,
        });
        // revalidatePath("/dashboard/all-products");
        console.log(formData);
        setFormData(initialFormData);
        setSelectedCategories([]);
      }
    });
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // Update formData's gallery
    setFormData((prevFormData) => ({
      ...prevFormData,
      gallery: prevFormData.gallery?.filter((_, i) => i !== index),
    }));
  };

  const handleCategoryChange = (selected: string) => {
    const selectedCategory = categories.find(
      (category) => category.name === selected
    );
    if (
      selectedCategory &&
      !selectedCategories.some((cat) => cat.name === selectedCategory.name)
    ) {
      setSelectedCategories((prevSelected) => [
        ...prevSelected,
        selectedCategory,
      ]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        categories: [...(prevFormData.categories ?? []), selectedCategory.name],
      }));
    }
  };

  const handleNewCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const handleCreateNewCategory = async () => {
    if (
      newCategory.trim() !== "" &&
      !selectedCategories.some((cat) => cat.name === newCategory)
    ) {
      const newSlug = createSlug(newCategory);

      try {
        const categoryData = { name: newCategory, slug: newSlug };
        const result = await createCategory(categoryData); // Replace with actual function to create category

        if (result.success) {
          const createdCategory = { name: newCategory, slug: newSlug }; // Adjust as per your actual data structure
          setSelectedCategories((prevSelected) => [
            ...prevSelected,
            createdCategory,
          ]);
          setFormData((prevFormData) => ({
            ...prevFormData,
            categories: [
              ...(prevFormData.categories ?? []),
              createdCategory.name,
            ],
          }));
          setCategories((prevCategories) => [
            ...prevCategories,
            createdCategory,
          ]);
          setNewCategory("");
        } else {
          console.error("Category creation failed:", result.error); // Log error or handle error state
        }
      } catch (error) {
        console.error("Error creating category:", error);
        // Handle error state or display error message
      }
    }
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
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">SKU</label>
            <div className="flex items-center">
              <input
                type="number"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={handleGenerateSKU}
                className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded"
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
          <div className="flex items-center">
            <label className="block mb-1 font-medium text-gray-700 mr-2">
              In Stock
            </label>
            <input
              type="checkbox"
              name="in_stock"
              checked={formData.in_stock ?? false}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="block mb-1 font-medium text-gray-700 mr-2">
              Taxable
            </label>
            <input
              type="checkbox"
              name="is_taxable"
              checked={formData.is_taxable ?? false}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Image</label>
          <div
            {...getImageRootProps()}
            className="w-full p-4 border-dashed border-2 rounded text-center cursor-pointer"
          >
            <input {...getImageInputProps()} />
            {formData.image ? (
              <img
                src={formData.image}
                alt="Uploaded"
                className="mx-auto mb-2 h-48 w-auto object-contain"
              />
            ) : (
              <p>Drag and drop an image, or click to select one</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">
            Gallery
          </label>
          <div
            {...getGalleryRootProps()}
            className="w-full p-4 border-dashed border-2 rounded text-center cursor-pointer"
          >
            <input {...getGalleryInputProps()} />
            <p>Drag and drop images, or click to select multiple</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {galleryFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file}
                  alt={`Gallery image ${index}`}
                  className="h-24 w-24 object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Video</label>
          <div
            {...getVideoRootProps()}
            className="w-full p-4 border-dashed border-2 rounded text-center cursor-pointer"
          >
            <input {...getVideoInputProps()} />
            {formData.video ? (
              <video
                src={formData.video}
                controls
                className="mx-auto mb-2 h-48 w-auto"
              />
            ) : (
              <p>Drag and drop a video, or click to select one</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">
            Categories
          </label>
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full p-2 border rounded">
              <SelectValue placeholder="Select categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <span
                key={category.id}
                className="bg-gray-200 text-gray-700 p-2 rounded"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">
            New Category
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={newCategory}
              onChange={handleNewCategoryChange}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleCreateNewCategory}
              className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
