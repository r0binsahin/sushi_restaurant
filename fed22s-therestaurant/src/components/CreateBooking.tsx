import axios from "axios";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { IBooking } from "../models/IBooking";
import ReactCalendar from "react-calendar";
import "../reactCalender.css";
import { useState } from "react";
import { DIV } from "./styled/Div";
import { Button } from "./styled/Button";
import { Input, Radio } from "./styled/Input";
import { Spinner } from "react-bootstrap";
import { CHECKBOX } from "./styled/CheckBox";
import { getAllBookings } from "../services/bookingServices";
import { DeleteBooking } from "./DeleteBooking";
import { Link } from "react-router-dom";

export const CreateBooking = () => {
  const [isDayPicked, setIsDayPicked] = useState(false);
  const [isAmountOfGuests, setIsAmountOfGuests] = useState(false);
  const [isTimePicked, setIsTimePicked] = useState(false);
  const [isGuestInfo, setIsGuestInfo] = useState(false);
  const [pickedDay, setPickedDay] = useState("");
  const [loading, setLoading] = useState(false);

  const { control, register, handleSubmit, formState, getValues } =
    useForm<IBooking>({
      defaultValues: {
        amountOfGuests: 12,
        date: "",
        time: "",
        guest: {
          name: "test 1",
          email: "test@mail.se",
          phoneNumber: "073555299",
        },
      },
    });

  const { isSubmitting } = formState;
  const { errors } = formState;
  const [newBooking, setNewBooking] = useState<IBooking>({
    amountOfGuests: 0,
    date: "",
    time: "",
    _id: "",
    guest: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<IBooking> = async () => {
    const formData = {
      date: getValues("date"),
      time: getValues("time"),
      amountOfGuests: getValues("amountOfGuests"),
      guest: {
        name: getValues("guest.name"),
        email: getValues("guest.email"),
        phoneNumber: getValues("guest.phoneNumber"),
      },
    };

    try {
      const res = await axios.post<IBooking>(
        "https://sushi-haket.onrender.com/api/v1/bookings",
        formData
      );
      setLoading(true);
      setNewBooking(res.data);
    } catch (error) {
      console.log(error);
    }

    setIsGuestInfo(true);
  };

  const [timeError, setTimeError] = useState(false);

  const handleTimeClick = () => {
    if (getValues("time") === "") {
      setTimeError(true);
    } else {
      setIsTimePicked(true);
    }
  };

  const handleDay = (day: string) => {
    if (!day) {
      setIsDayPicked(false);
    } else {
      setIsDayPicked(true);
    }
  };

  const calendar = (
    <DIV style={{ backgroundColor: "black" }}>
      {" "}
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <ReactCalendar
            minDate={new Date()}
            className="REACT-CALENDAR p-2"
            view="month"
            onChange={(date) => {
              const theDay = date?.toLocaleString().slice(0, 10) || "";
              setPickedDay(theDay);

              return field.onChange(theDay);
            }}
          ></ReactCalendar>
        )}
      />
      <Button onClick={() => handleDay(getValues("date"))}>nästa </Button>
    </DIV>
  );

  const [gdprAccepted, setGdprAccepted] = useState(false);

  const gdprInfo = (
    <DIV style={{ backgroundColor: "black", color: "white" }}>
      <p style={{ padding: 10 }}>
        Vi värnar om din integritet och skyddar dina personuppgifter. För att
        säkerställa att vi följer den allmänna dataskyddsförordningen (GDPR),
        informerar vi dig om hur vi hanterar dina personuppgifter. Genom att
        använda vår webbplats samtycker du till vår{" "}
        <a href="https://gdpr.eu/" target="_blank">
          integritetspolicy
        </a>{" "}
        . Vill du ha mer information om GDPR? Besök gärna{" "}
        <a href="https://gdpr.eu/" target="_blank">
          denna webbplats
        </a>
        .
      </p>

      <Button onClick={() => setGdprAccepted(true)}>
        Godkänn GDPR och gå till nästa
      </Button>
    </DIV>
  );

  const [amountOfGuestError, setAmountOfGuestError] = useState(false);

  const handleAmountOfGuestClick = (amount: number) => {
    if (amount === 0) {
      setAmountOfGuestError(true);
    } else {
      setIsAmountOfGuests(true);
    }

    limitTableBooking();
  };

  const [disable18, setDisable18] = useState(false);
  const [disable21, setDisable21] = useState(false);

  const limitTableBooking = async () => {
    const allBooking = (await getAllBookings()) || [];
    const guestAmount = getValues("amountOfGuests");

    const earlySitting = allBooking?.filter(
      (booking) =>
        booking.time === "18:00" && booking.date === getValues("date")
    );

    const lateSitting = allBooking?.filter(
      (booking) =>
        booking.time === "21:00" && booking.date === getValues("date")
    );

    //antal bord bokade kl 18
    const bookedTables18 = earlySitting.map((booking) => {
      const bookedTables = Math.ceil(booking.amountOfGuests / 6);
      return bookedTables;
    });

    const totalTablesBooked18 = bookedTables18.reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    );

    //antal bord bokade kl 21
    const bookedTables21 = lateSitting.map((booking) => {
      const bookedTables = Math.ceil(booking.amountOfGuests / 6);
      return bookedTables;
    });

    const totalTablesBooked21 = bookedTables21.reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    );

    if (totalTablesBooked18 >= 15) {
      setDisable18(true);
    }
    if (totalTablesBooked21 >= 15) {
      setDisable21(true);
    }

    if (totalTablesBooked18 === 14 && guestAmount > 6) setDisable18(true);
    if (totalTablesBooked21 === 14 && guestAmount > 6) setDisable21(true);
  };

  const amountAlternatives = [
    { value: 1, label: "1 person" },
    { value: 2, label: "2 personer" },
    { value: 3, label: "3 personer" },
    { value: 4, label: "4 personer" },
    { value: 5, label: "5 personer" },
    { value: 6, label: "6 personer" },
    { value: 7, label: "7 personer" },
    { value: 8, label: "8 personer" },
    { value: 9, label: "9 personer" },
    { value: 10, label: "10 personer" },
    { value: 11, label: "11 personer" },
    { value: 12, label: "12 personer (Max)" },
  ];

  const options = amountAlternatives.map((amount) => (
    <option value={amount.value}>{amount.label}</option>
  ));

  const howManyGuests = (
    <DIV style={{ backgroundColor: "black", color: "white" }}>
      <h4>Valt datum: {pickedDay} </h4>
      <label>Antal gäster: </label>
      <select
        style={{
          height: "30px",
          borderRadius: "15px",
          margin: "10px",
          fontSize: "1.2rem",
        }}
        {...register("amountOfGuests", {
          valueAsNumber: true,
          min: 1,
          max: 12,
          required: {
            value: true,
            message: "Du måste ange antal gäster",
          },
        })}
      >
        {" "}
        {options}
      </select>

      {amountOfGuestError && <p>Du måste ange antal gäster</p>}

      <Button
        onClick={() => handleAmountOfGuestClick(getValues("amountOfGuests"))}
      >
        nästa{" "}
      </Button>
    </DIV>
  );

  const chooseTime = (
    <DIV style={{ backgroundColor: "black", color: "white" }}>
      {" "}
      <h3>Välj tid</h3>
      <Radio style={{ backgroundColor: disable18 ? "grey" : "#2176ff" }}>
        {" "}
        <label>18.00</label>
        <input
          disabled={disable18}
          type="radio"
          {...register("time")}
          value="18:00"
        ></input>
      </Radio>
      <Radio style={{ backgroundColor: disable21 ? "grey" : "#2176ff" }}>
        <label>21.00</label>
        <input
          disabled={disable21}
          type="radio"
          {...register("time")}
          value="21:00"
        ></input>
      </Radio>
      {timeError && <p>Du måste välja tid</p>}
      {disable18 && disable21 ? (
        <>
          <h4>Tyvärr är vi fullbokade den valda dagen!</h4>
          <p>
            {" "}
            Var god välj ett annat datum{" "}
            <a href="http://localhost:5173/bokabord"> här</a>
          </p>{" "}
        </>
      ) : (
        <Button onClick={handleTimeClick}>nästa </Button>
      )}
    </DIV>
  );

  const summary = (
    <div>
      <h4>Sammafattning</h4>
      <p>Datum: {getValues("date")}</p>
      <p>Tid:{getValues("time")}</p>
      <p>Antal: {getValues("amountOfGuests")}</p>
      <p>Namn: {getValues("guest.name")}</p>
      <p>Telefon: {getValues("guest.phoneNumber")}</p>
      <p>Epost: {getValues("guest.email")}</p>
    </div>
  );

  const [discardCancelationRequest, setDiscardCancelationRequest] =
    useState(false);

  const handleDiscard = () => {
    setDiscardCancelationRequest(true);
  };

  const handlingBookingByGuest = () => {
    setHandleBooking(!handleBooking);
  };

  const guestInfo = (
    <DIV style={{ backgroundColor: "black", color: "white" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="namn"
          {...register("guest.name", {
            required: {
              value: true,
              message: "Du måste ange namn",
            },
          })}
        />
        <p className="error">{errors.guest?.name?.message}</p>

        <Input
          placeholder="email"
          {...register("guest.email", {
            required: {
              value: true,
              message: "Du måste ange email adress",
            },
          })}
        />
        <p className="error">{errors.guest?.email?.message}</p>

        <Input
          placeholder="telefonnummer"
          {...register("guest.phoneNumber", {
            required: {
              value: true,
              message: "Du måste ange telefonnummer",
            },
          })}
        />
        <p className="error">{errors.guest?.phoneNumber?.message}</p>

        {isSubmitting && (
          <div>
            <Spinner animation="border" variant="warning" />
          </div>
        )}

        <Button type="submit">Bekräfta bokning</Button>
      </form>
    </DIV>
  );

  const [handleBooking, setHandleBooking] = useState(false);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isDayPicked ? (
          isAmountOfGuests ? (
            isTimePicked ? (
              <>
                {isGuestInfo ? (
                  <DIV style={{ backgroundColor: "black", color: "white" }}>
                    {handleBooking ? (
                      <>
                        <DeleteBooking
                          removeFiltered={() => null}
                          handleDiscard={handleDiscard}
                          booking={newBooking}
                        />
                        {!discardCancelationRequest && (
                          <Button
                            onClick={() => setHandleBooking(false)}
                            style={{ margin: 40 }}
                          >
                            Nej, avboka ej
                          </Button>
                        )}
                      </>
                    ) : (
                      <div>
                        {summary}
                        <h3>
                          Tack för din bokning
                          <CHECKBOX>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              fill="currentColor"
                              className="bi bi-check2-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                          </CHECKBOX>
                        </h3>{" "}
                        <Button onClick={handlingBookingByGuest}>Avboka</Button>
                        <Button>
                          {" "}
                          <Link
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Till startsidan
                          </Link>
                        </Button>
                      </div>
                    )}
                  </DIV>
                ) : gdprAccepted ? (
                  guestInfo
                ) : (
                  gdprInfo
                )}
              </>
            ) : (
              chooseTime
            )
          ) : (
            howManyGuests
          )
        ) : (
          calendar
        )}
      </div>
    </>
  );
};
