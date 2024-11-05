import { useFormContext } from 'react-hook-form';
import './apisubscribe.css';

export function ApiSubscribe() {
    const { register, formState: { errors } } = useFormContext();
    const apis: string[] = ['Api1', 'Api2'];

    return (
        <div className="flex justify-center h-full">
            <div className="card w-full sm:w-2/3 border-r-red-200 border-4 border-l-red-200 text-black">
                <div className="text-center text-lg font-medium">
                    Apis
                </div>
                <div>
                    <div className="overflow-x-auto font-[sans-serif]">
                        <div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 py-4">
                                {apis.length > 0 && (
                                    apis.map((api) => (
                                        <div key={api} className="w-[90%] mx-auto bg-gray-50 py-1 shadow-sm rounded">
                                            <li className="flex items-center space-x-4 sm:px-10">
                                                <div className="checkbox-wrapper ">
                                                    <input 
                                                        id={api} 
                                                        type="checkbox" 
                                                        {...register("apis", { validate: (value) => Array.isArray(value) && value.length > 0 || "Veuillez sélectionner au moins une API" })}
                                                        value={api}
                                                    />
                                                    <label className="terms-label" htmlFor={api}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="checkbox-svg">
                                                            <mask fill="white" id="path-1-inside-1_476_5-37">
                                                                <rect height="200" width="200"></rect>
                                                            </mask>
                                                            <rect mask="url(#path-1-inside-1_476_5-37)" strokeWidth="40" className="checkbox-box" height="200" width="200"></rect>
                                                            <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64" className="checkbox-tick"></path>
                                                        </svg>
                                                    </label>
                                                </div>
                                                <span className="text-sm">{api}</span>
                                            </li>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    {errors.apis && <p className="text-red-500 text-sm text-center px-2">Veuillez sélectionner au moins une API</p>}
                </div>
            </div>
        </div>
    );
}
