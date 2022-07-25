import { useUtils } from "../hooks/utils";
import CheckoutHeader from "../components/CheckOutForm/CheckoutHeader";
import FirstStepForm from "../components/CheckOutForm/FirstStepForm";
import SecondStepForm from "../components/CheckOutForm/SecondStepForm";
import ThirdStepForm from "../components/CheckOutForm/ThirdStepForm";
import OrderSummary from "../components/CheckOutForm/OrderSummary";
import Nav from "../components/Nav";

function AllStepCheckOutForm() {
  const {
    getServiceById,
    service,
    step,
    setStep,
    fullAddress,
    setFullAddress,
    bookingDateAndTime,
    setBookingDateAndTime,
    subService,
    setSubService,
    total,
    setTotal,
    service_name,
    setService_name,
    note,
    setNote,
  } = useUtils();
  return (
    <div className="checkout form">
      <Nav />
      {step === 4 ? null : <CheckoutHeader service={service} step={step} />}
      {step === 2 ? (
        <SecondStepForm
          total={total}
          fullAddress={fullAddress}
          setFullAddress={setFullAddress}
          bookingDateAndTime={bookingDateAndTime}
          setBookingDateAndTime={setBookingDateAndTime}
          subService={subService}
          setStep={setStep}
          note={note}
          setNote={setNote}
        />
      ) : step === 3 ? (
        <ThirdStepForm
          total={total}
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}
          setStep={setStep}
          note={note}
          service_name={service_name}
        />
        ) : step === 4 ? (<OrderSummary
          fullAddress={fullAddress}
          bookingDateAndTime={bookingDateAndTime}
          subService={subService}
          total={total}
          note={note}
          service_name={service_name}
        />)
          : (
        <FirstStepForm
          getServiceById={getServiceById}
          service={service}
          setStep={setStep}
          step={step}
          subService={subService}
          setSubService={setSubService}
          setTotal={setTotal}
          setService_name={setService_name}
        />
      )}
    </div>
  );
}

export default AllStepCheckOutForm;
