import './subscription.css';
import { PartnerCreation } from '../../subscriptionElements/partner/PartnerCreation';
import { AccountCreation } from '../../subscriptionElements/account/AccountCreation';
import { ApiSubscribe } from '../../subscriptionElements/apisubscribe/ApiSubscribe';
import { SyntheticEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { PartnerForm } from '../../../utils/types';



export function SubscriptionForm() {
  const methods = useForm<PartnerForm>({
    mode: 'onChange',
  });

  const {handleSubmit, formState : {isValid},watch, getValues} = methods;

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };
  const handleBack = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentStep <= 3 && currentStep !== 1) setCurrentStep(currentStep - 1);
  }
  
  const selectedApis = watch('apis');

 
  const isSubmitDisabled: boolean = currentStep < 3
  ? !isValid
  : !isValid || (selectedApis && selectedApis.length < 1 );

  
  const onSubmit = (data: PartnerForm) => {

    console.log("Form submitted:", data);
    setCurrentStep(1)
    methods.reset();
  };
  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <PartnerCreation />;
      case 2:
        return <AccountCreation />;
      case 3:
        return <ApiSubscribe />;
      default:
        return null;
    }
  };


  return (
    <FormProvider {...methods} >
    <form >
    <div className="modal   border-t-4  border-[#E53935] ">
      <div className="form flex flex-col h-full">
        <label className="title">Souscrire un partenaire</label>
        <div className="tab-container relative bg-[#ebebec] p-[3px] rounded-[9px] mt-[10px] mx-[20px]">
    <button className={`tab flex-1 min-w-[150px] ${currentStep === 1 ? 'active' : ''}`} disabled>Création partenaire</button>
    <button className={`tab flex-1 min-w-[150px] ${currentStep === 2 ? 'active' : ''}`} disabled>Création compte</button>
    <button className={`tab flex-1 min-w-[150px] ${currentStep === 3 ? 'active' : ''}`} disabled>Souscrire aux Apis</button>
    <div className="indicator hidden w-1/3 sm:block" style={{ left: `${(currentStep - 1) * 33.33}%` }} ></div>
</div>
        <div className="benefits ">
          {renderStepComponent()}
        </div>

        <div className="modal--footer w-full    bg-green-300">
       <div className=' flex justify-between '>
       <div>
            {
              currentStep != 1 && <button className="upgrade-btn disabled:bg-[#ea716f] " onClick={handleBack}  >Précédent</button>
            }
          </div>
          <div >
          <button
          type="submit"
          className={`upgrade-btn ${isSubmitDisabled ? 'disabled:bg-[#ea716f]' : ''}`}
          onClick={currentStep < 3 ? handleNext : handleSubmit(onSubmit)}
          disabled={isSubmitDisabled}
        >
          {currentStep < 3 ? "Suivant" : "Valider"}
        </button>

          </div>
       </div>
        </div>
      </div>
    </div>
    </form>
    </FormProvider>
  );
}
