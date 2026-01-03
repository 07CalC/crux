import { AddReview } from "@/components/collegePage/AddReview";
import { Bonk } from "@/components/collegePage/Bonk";
import { ClgOrcr } from "@/components/collegePage/ClgOrcr";
import { UploadImage } from "@/components/collegePage/UploadImage";
import { NotFound } from "@/components/common/NotFound";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { IoWarning } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default async function College({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params
    const college = await prisma.college.findUnique({
        where: {
            id: id[0],
        },
    });

    if (!college) {
        return (
            <div className="flex flex-col py-40 w-full h-full min-h-screen gap-y-4 justify-center items-center">
                <NotFound text="What you are looking for does not exist in our database" />
            </div>
        );
    }
    // Prepare stats that have data available
    const availableStats = [];
    
    if (college?.totalStudents) {
        availableStats.push({
            label: "Total Students",
            value: college.totalStudents.toLocaleString()
        });
    }
    
    if (college?.maleStudents && college?.femaleStudents && college.maleStudents + college.femaleStudents > 0) {
        const malePercent = Math.round((college.maleStudents / (college.maleStudents + college.femaleStudents)) * 100);
        const femalePercent = 100 - malePercent;
        availableStats.push({
            label: "Gender Ratio (M:F)",
            value: `${malePercent}:${femalePercent}`
        });
    }
    
    if (college?.maleStudents) {
        availableStats.push({
            label: "Male Students",
            value: college.maleStudents.toLocaleString()
        });
    }
    
    if (college?.femaleStudents) {
        availableStats.push({
            label: "Female Students",
            value: college.femaleStudents.toLocaleString()
        });
    }

    const reviews = await prisma.review.findMany({
        where: {
            collegeId: college?.id,
        },
    });

    const gallery: string[] = await prisma.collegeImage.findMany({
        where: {
            collegeId: college?.id,
        },
        select: {
            url: true,
        },
    }).then((images) => images.map((image) => image.url));

    return (
        <section className="min-h-screen bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5">
            {/* Hero Section with Cover Image */}
            <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
                <img
                    src={college?.coverImage || "/defaultCollegeImage.png"}
                    alt={`${college?.name} cover image`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                
                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div className="space-y-3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                                    {college?.name}
                                </h1>
                                <p className="text-lg md:text-xl text-primary-foreground/90 drop-shadow-md flex items-center gap-2">
                                    <span>📍</span> {college?.location}
                                </p>
                                <Bonk clgId={college?.id || ""} bonksCount={college?.bongs || 0} />
                            </div>
                            <div className="flex gap-3">
                                <a 
                                    href={college?.officialWebsite || "#"} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn-primary group"
                                >
                                    <span>Official Website</span>
                                    <LuExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-8">
                {/* Warning Banner */}
                {college?.moderated === false && (
                    <div className="card mb-6 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                        <div className="flex items-start gap-4">
                            <IoWarning className="text-yellow-600 dark:text-yellow-500 text-3xl flex-shrink-0" />
                            <div className="text-yellow-800 dark:text-yellow-200">
                                <p className="font-bold text-lg mb-2">Unverified Information</p>
                                <p className="text-sm">
                                    The information about this college has not been independently verified and may include content submitted by anonymous users. Please exercise discretion and verify details from official sources before relying on them.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Grid - Only show if stats are available */}
                {availableStats.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {availableStats.map((stat, index) => (
                            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{stat.label}</h3>
                                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* NIRF Ranking Card */}
                {college?.nirf && (
                    <div className="card p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-muted-foreground mb-3">NIRF Ranking</h3>
                            <p className="text-6xl font-bold text-gradient">{college.nirf}</p>
                        </div>
                    </div>
                )}

                {/* Cutoffs Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-gradient">Cutoffs</span>
                    </h2>
                    <ClgOrcr clgId={college?.id || ""} clgType={college?.collegeType || "GFTI"} />
                </div>

                {/* Reviews Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-gradient">Student Reviews</span>
                        </h2>
                    </div>
                    
                    <AddReview clgId={college?.id || ""} />
                    
                    {reviews.length > 0 ? (
                        <div className="space-y-6 mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="card p-6 hover:shadow-lg transition-all group">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform">
                                                A
                                            </div>
                                            <div>
                                                <p className="font-bold">Anonymous</p>
                                                <p className="text-sm text-muted-foreground">{new Date(review.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <p className="text-foreground mb-4">{review.comment}</p>

                                        <div className="flex items-center">
                                            <div className="flex items-center text-yellow-400 mr-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < review.rating ? "" : "text-muted/30"}`} viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground">{review.rating}/5</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center card p-4">
                                <p className="text-muted-foreground">
                                    Showing {reviews.length} {reviews.length === 1 ? "review" : "reviews"} for {college?.name}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="card p-12 text-center mt-6">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <h3 className="text-xl font-bold mb-2">No Reviews Yet</h3>
                                <p className="text-muted-foreground mb-6">Be the first to share your experience at {college?.name}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Image Gallery Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-gradient">Campus Gallery</span>
                    </h2>

                    <div className="card p-4 mb-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                        <div className="flex items-start gap-3">
                            <IoWarning className="text-yellow-600 dark:text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                            <div className="text-yellow-800 dark:text-yellow-200 text-sm">
                                <p className="font-semibold mb-1">Community-Contributed Content</p>
                                <p>
                                    These images are uploaded by community members. While we encourage sharing campus photos,
                                    please maintain decency and only upload appropriate content. Any inappropriate uploads will be removed (maybe).
                                </p>
                            </div>
                        </div>
                    </div>

                    <UploadImage clgId={college.id || ""} />
                    
                    {gallery && gallery.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {gallery.map((image, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all">
                                    <Image
                                        src={image}
                                        alt={`${college.name} campus image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white p-4 text-lg font-semibold">
                                            Campus View {index + 1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="card p-12 text-center mt-6">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <h3 className="text-xl font-bold mb-2">No Images Available</h3>
                                <p className="text-muted-foreground">Be the first to add images</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Coming Soon Section */}
                <div className="card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                    <p className="text-2xl md:text-3xl font-bold mb-6">
                        More details about {college?.name} coming soon
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 max-w-xs mx-auto z-20 relative">
                            <div className="card p-4 text-center">
                                <p className="font-bold">literally me working hard to deliver fast</p>
                            </div>
                            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary mx-auto"></div>
                        </div>

                        <Image
                            src="/racoon.jpg"
                            alt="coming soon"
                            width={400}
                            height={400}
                            className="w-full max-w-sm object-contain relative z-10 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
