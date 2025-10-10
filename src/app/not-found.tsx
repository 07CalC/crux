import { NotFound } from "../components/common/NotFound";



export default function Not_Found() {
    return (
        <div className="flex flex-col py-40 w-full h-full gap-y-4 justify-center items-center">
                <NotFound text="Page you are looking for does not exist"/>
        </div>
    );
}