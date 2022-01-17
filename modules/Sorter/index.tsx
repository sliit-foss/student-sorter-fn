import { DocumentAddIcon } from "@heroicons/react/solid";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const Sorter = () => {
    return (
        <>
            <div className="container p-5 flex flex-col items-center">
                <div className="my-4 w-1/3 rounded-md border-2 border-dashed border-slate-200 py-6 px-4 flex flex-col items-center">
                    <DocumentAddIcon className="h-12 mb-3 text-slate-400" />
                    <p className="text-slate-700 text-base mb-2 font-semibold">Drop your spread sheet here, or browse</p>
                    <p className="text-slate-400 text-xs">Supports CSV, XLS, XLSX</p>
                </div>
                <div className="my-4 w-1/3 gap-4 flex flex-row justify-center">
                    <Input
                        type="number"
                        placeHolder="Group into"
                        padding="px-3 py-2"
                    />
                    <Button
                        value="Genarate"
                        padding="px-3 py-2"
                    />
                </div>
            </div>
        </>
    )
}

export default Sorter;