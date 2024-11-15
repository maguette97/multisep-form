import { useFormContext } from "react-hook-form";
import "./accountcreation.css"
import { Currency } from "../../../utils/types";
export function AccountCreation() {

    const { register, formState: { errors }} = useFormContext();

    return (
        <form className=" flex items-center justify-center">
            <div className="w-2/3 py-8" >
                <div className="space-y-8 ">
                    <div className=" ">
                        <label className={`dark:text-gray-200 ${errors.currency ? 'text-red-600' : ''}`}>Devise {errors.currency && <span className="text-red-600 font-bold">*</span>}</label>
                        <div
                            className="relative group rounded-lg  mt-2  bg-white overflow-hidden before:absolute   before:content[''] before:right-0 before:rounded-full before:blur-lg "
                        >
                            <svg
                                y="0"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                width="100"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="xMidYMid meet"
                                height="100"
                                className="w-8 h-8 absolute right-0 -rotate-45 stroke-[#E53935] top-1.5 group-hover:rotate-0 duration-300"
                            >
                                <path
                                    stroke-width="4"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    fill="none"
                                    d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                                    className="svg-stroke-primary"
                                ></path>
                            </svg>
                            <select
                                {...register("currency", { required: true })}
                                className="appearance-none  relative text-black bg-transparent ring-0 outline-none border border-gray-200  text-sm font-semibold rounded-lg block w-full p-2.5"
                            >
                        

                                <option>{Currency.XOF}</option>
                                <option>{Currency.XAF}</option>
                            </select>
                        </div>


                    </div>
                    <div>
            <label className="">Montant initial </label>
            <input defaultValue={0} {...register("balance")} id="balance" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-md outline-none  " placeholder="le montant" />
          </div>

                </div>
                <div className=" flex flex-col sm:flex-row sm:justify-between space-y-4 mt-8 items-center ">
                    <div className="">Faut-il activer le compte ?</div>
                    <div className="checkbox-wrapper-41 ">
  <input type="checkbox"  defaultChecked {...register("active")}/>
</div>
                </div>

            </div>

        </form>
    )
}