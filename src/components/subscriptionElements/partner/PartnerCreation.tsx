
import { log } from "console";
import { Country, PartnerForm, PartnerType } from "../../../utils/types";
import "./partnercreation.css"
import { useState, useEffect } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";



export function PartnerCreation() {
  const countries: Country[] = [
    { name: "Sénégal", photo: "./assets/log.jpg", iso: "SN", indicatif: 221 },
    { name: "Mali", photo: "./assets/ml.png", iso: "MLI", indicatif: 223 }
  ];
  let [query, setQuery] = useState<string>();
  const [results, setResults] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [isoQuery, setIsoQuery] = useState<number>(countries[0].indicatif);





  const handleIndicatif = (e: React.ChangeEvent<HTMLSelectElement>,) => {
    const value = e.target.value
    const selectItem: Country | undefined = countries.find(country =>
      country.name === value
    );
    if (selectItem) {
      setIsoQuery(selectItem.indicatif)
      setValue('indicatif',isoQuery)
    } else {
      setIsoQuery(0)
    }
  }
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
};

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value)
    if (value.trim() === '') {
      setResults([]);
    } else {
      const filteredResults: Country[] = countries.filter(country =>
        country.name.toLowerCase().startsWith(value.toLowerCase())

      );
      setResults(filteredResults);
      
    }
  };

  const click = (c: Country) => {
    setSelectedCountry(c);
    setQuery(c.name);
    setValue("country", c.name);
    setResults([])
    console.log(query);
  }

  const { register, formState: { errors }, setValue } = useFormContext();
  return (

    <div >
      <div className="grid grid-cols-1 gap-6  sm:grid-cols-2">
        <div>
          <label className={` ${errors.firstName ? 'text-red-600 ' : ''}`}  >Prénom  {errors.firstName?.type === 'required' && <span className="text-red-600 font-bold">*</span>}</label>
          <input  {...register("firstName", { required: true })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border  outline-none rounded-md " />
        </div>

        <div>
          <label className={` ${errors.lastName ? 'text-red-600 ' : ''}`}  >Nom {errors.lastName?.type === 'required' && <span className="text-red-600 font-bold">*</span>}</label>
          <input {...register("lastName", { required: true })} id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border  outline-none rounded-md " />
        </div>


        <div>
          <label className={` ${errors.email ? 'text-red-600 ' : ''}`}  >Email {errors.email?.type === 'required' && <span className="text-red-600 font-bold">*</span>}</label>
          <input id="emailAddress" {...register("email", { required: true, pattern: (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i) })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border  outline-none rounded-md " />
          {errors.email?.type === 'pattern' && <p role="alert" className="alert">email invalide</p>}
        </div>

        <div>
          <label className={` ${errors.lastName ? 'text-red-600 ' : ''}`}  >Numéro Téléphone {errors.phone?.type === 'required' && <span className="text-red-600 font-bold">*</span>}</label>
          <div className="relative mt-2 max-w-xs  ">
            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2 "  >
              <select

                className="text-sm outline-none rounded-lg h-full max-h-40 overflow-y-auto"
                onChange={handleIndicatif}
              >
                {
                  countries.map((country) => (
                    <option key={country.name} value={country.name}>{country.iso}</option>
                  ))
                }
              </select>
            </div>
            <div className="flex items-center border rounded-md ">
              <span className="pl-[4.5rem]  text-md   "   >{`+${isoQuery}`}</span>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="555 000-000"
                className="w-full pr-3 py-1.5 appearance-none bg-transparent outline-none  shadow-sm rounded-lg ml-1 text-md"
                onChange={handlePhoneChange}
              />
            </div>
          </div>
        </div>
        <div>
          <label className=" " >Type partenaire </label>
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
              {...register("type", { required: true })}
              className="appearance-none  relative text-black bg-transparent ring-0 outline-none border border-gray-200   font-medium rounded-lg block w-full p-[9px]"
            >

              <option>{PartnerType.BENEFICIARY}</option>
              <option>{PartnerType.MERCHAND}</option>

            </select>
          </div>


        </div>

        <div>
          <label className={` ${errors.name ? 'text-red-600' : ''}`}>
            Nom partenaire {errors.name && <span className="text-red-600 font-bold">*</span>}
          </label>

          <input
            {...register("name", { required: true, minLength: 3 })}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none"
          />

          {errors.name?.type === 'minLength' && (
            <p role="alert" className="alert text-red-600">minimum 3 caractères</p>
          )}
        </div>

        <div>
          <label className={` ${errors.address ? 'text-red-600' : ''}`} >Adresse {errors.address && <span className="text-red-600 font-bold">*</span>} </label>
          <input  {...register("address", { required: true })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  outline-none" />

        </div>

        <div className="relative pays" >
          <label className={` ${errors.country ? 'text-red-600' : ''}`}>Pays  {errors.country && <span className="text-red-600 font-bold">*</span>}</label>
          <div className="flex items-center justify-between overflow-hidden  px-2 border-2 border-gray-200 rounded-lg h-1/2 mt-2">
            <input
              {...register("country", { required: true })}
              className="w-3/5 h-full border-none outline-none text-sm text-black caret-orange-500 pl-2"
              type="text"
              name="country"
              id="country"
              placeholder="Type here..."
              onChange={handleSearch}
              value={query}

            />
            <div className="flex items-center justify-center relative border border-white rounded-md py-2 pr-2 h-10">
              {
                !selectedCountry && (
                  <img src="./assets/dp.svg" className="w-8 h-8 rounded-sm" alt="Icon" />
                )
              }

              {
                selectedCountry && (
                  <img src={selectedCountry.photo} className="w-4 h-4 rounded-sm" alt="im" />
                )
              }

            </div>
          </div>

          {
            results.length > 0 && (
              <div className=" border border-gray-200 rounded-b-lg shadow-lg p-2 bg-white absolute w-full z-10 overflow-y-auto h-20">
                {
                  results.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => click(result)}
                      className="flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <span className="text-sm">{result.name}</span>
                      <img src={result.photo} className="w-6 h-6 rounded-sm mr-2" alt={result.name} />
                    </div>


                  ))
                }

              </div>
            )
          }

        </div>





      </div>

    </div>

  )

}