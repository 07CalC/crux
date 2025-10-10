'use client'

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

interface UploadImageProps {
  className?: string;
  clgId: string;
}

export const UploadImage = ({ className = "", clgId }: UploadImageProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadCount, setUploadCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const MAX_UPLOADS = 5;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const count = parseInt(localStorage.getItem(`uploadCount-${clgId}`) || '0');
      setUploadCount(count);
    }
  }, [clgId]);

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    if (uploadCount >= MAX_UPLOADS) {
      toast.error(`You can only upload ${MAX_UPLOADS} images per college`);
      return;
    }

    setIsUploading(true);

    try {
      const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", uploadPreset as string);

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryResponse.ok) {
        throw new Error('Failed to upload to Cloudinary');
      }

      const cloudinaryData = await cloudinaryResponse.json();
      const imageUrl = cloudinaryData.secure_url;

      const apiResponse = await fetch('/api/v1/uploadImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collegeId: clgId,
          imageUrl: imageUrl
        }),
      });

      if (apiResponse.ok) {
        const newCount = uploadCount + 1;
        setUploadCount(newCount);
        localStorage.setItem(`uploadCount-${clgId}`, newCount.toString());
        setSelectedFile(null);
        setPreviewUrl(null);
        toast.success("Image uploaded successfully!");
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {uploadCount >= MAX_UPLOADS ? (
        <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 p-4 rounded-lg mb-6">
          <p className="text-black dark:text-white text-center">
            Thank you for your contributions! You&apos;ve reached the maximum limit of {MAX_UPLOADS} images for this college.
          </p>
        </div>
      ) : (
        <div className={`flex flex-col items-center gap-4 mb-6 ${className}`}>
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You can upload {MAX_UPLOADS - uploadCount} more images
              </p>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {uploadCount}/{MAX_UPLOADS}
              </span>
            </div>

            <div className="relative w-full max-w-2xl mx-auto aspect-video border-2 border-dashed border-purple-500 rounded-lg overflow-hidden">
              {isUploading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                </div>
              ) : previewUrl ? (
                <div className="relative w-full h-full">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-12 h-12 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Select an image to preview</p>
                </div>
              )}
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleSelectFile}
            ref={fileInputRef}
            className="hidden"
          />

          <div className="flex gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-xl text-black border-2 border-black dark:border-white 
                      dark:text-white transition-all ease-in-out duration-200 
                      sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] 
                      active:shadow-[0px_0px_0px_0px] active:translate-x-1 
                      active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 
                      active:duration-100 dark:shadow-white shadow-black 
                      bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              disabled={isUploading}
            >
              Select Image
            </button>

            <button
              onClick={handleUpload}
              className="px-4 py-2 rounded-xl text-black border-2 border-black dark:border-white 
                      dark:text-white transition-all ease-in-out duration-200 
                      sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] 
                      active:shadow-[0px_0px_0px_0px] active:translate-x-1 
                      active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 
                      active:duration-100 dark:shadow-white shadow-black 
                      bg-purple-500 hover:bg-purple-600"
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
