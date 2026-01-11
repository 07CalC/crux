'use client';

import { useState, useRef } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export default function FeedbackPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !feedback) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = null;

      // Upload image to Cloudinary if selected
      if (selectedFile) {
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
          throw new Error("Failed to upload image");
        }

        const cloudinaryData = await cloudinaryResponse.json();
        imageUrl = cloudinaryData.secure_url;
      }

      // Submit feedback to API
      const response = await fetch("/api/v1/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          feedback,
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      toast.success("Thank you for your feedback!");

      // Reset form
      setEmail("");
      setFeedback("");
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card p-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Send Us Your Feedback</h1>
          <p className="text-muted-foreground mb-8">
            We value your feedback! Please share your thoughts, suggestions, or report any issues you&apos;ve encountered.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="input w-full"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Feedback Textarea */}
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-2 text-foreground">
                Your Feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts, suggestions, or report issues..."
                className="input w-full min-h-[150px] resize-y"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Image Upload (Optional) */}
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Attach Screenshot (Optional)
              </label>
              <p className="text-xs text-muted-foreground mb-3">
                Upload a screenshot if you&apos;re reporting a bug or issue (Max 5MB)
              </p>

              {previewUrl ? (
                <div className="space-y-3">
                  <div className="relative w-full max-w-md aspect-video border-3 border-dashed border-purple-500 rounded-lg overflow-hidden">
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="px-4 py-2 text-sm rounded-lg border-3 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    disabled={isSubmitting}
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSelectFile}
                    ref={fileInputRef}
                    className="hidden"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-lg border-3 border-dashed border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 transition-colors text-foreground"
                    disabled={isSubmitting}
                  >
                    <svg
                      className="w-6 h-6 mx-auto mb-2"
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
                    Select Image
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg text-white border-3 border-purple-600 
                         bg-purple-600 hover:bg-purple-700 transition-all ease-in-out duration-200 
                         sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] 
                         active:shadow-[0px_0px_0px_0px] active:translate-x-1 
                         active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 
                         active:duration-100 shadow-purple-800
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 
                         disabled:active:translate-y-0 disabled:active:shadow-[6px_6px_0px_0px]
                         font-medium text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-8 card p-6">
          <h2 className="text-xl font-semibold mb-3 text-foreground">What happens next?</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>We review all feedback within 24-48 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>For bug reports, we&apos;ll investigate and work on a fix</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Feature suggestions are evaluated for future updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>We may reach out to you via email if we need more information</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
