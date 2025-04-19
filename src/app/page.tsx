import { redirect } from "next/navigation";


export default async function Home() {
  redirect('orcr')
  return (
    <div className="flex flex-col py-10 min-h-screen w-full h-full gap-y-4 justify-center items-center">
        
    </div>
  );
}
