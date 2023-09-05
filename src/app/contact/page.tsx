"use client";
import { useState } from "react";
import { Mail, MessageCircle, PersonStanding } from "lucide-react";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const apiKey =
    process.env.EMAIL_KEY || "3b7814a3-dfce-4efc-9d93-b3d66a286208";

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: "Portfolio Form",
      subject: "Portfolio Contact Message",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  const notify = () =>
    toast("Message Sent!!", {
      style: {
        background: "transparent",
        border: "1px solid var(--foreground)",
        color: "var(--foreground)",
      },
      icon: "✉️",
    });

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className=" sm:w-[350px] w-full">
        <div className="p-4 rounded-lg bg-transparent w-full m-auto">
          <form
            className="w-full flex flex-col gap-3 items-center text-foreground"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-2xl text-foreground text-center">
              Feel free to drop me a line!
            </h2>
            <div className="flex flex-col w-4/5">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>
              <label
                htmlFor="email"
                className="flex gap-2 text-foreground pb-[2px]"
              >
                <Mail /> Email:
              </label>
              <input
                type="text"
                placeholder="Email"
                className={`rounded-md px-2 py-1 ${
                  formState.errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label
                htmlFor="name"
                className="flex gap-2 text-foreground pb-[2px]"
              >
                <PersonStanding /> Name:
              </label>
              <input
                type="text"
                placeholder="Name"
                className={`rounded-md px-2 py-1 ${
                  formState.errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Name is required",
                  maxLength: 40,
                })}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label
                htmlFor="message"
                className="flex gap-2 text-foreground pb-[2px]"
              >
                <MessageCircle /> Leave a message:
              </label>
              <textarea
                className="rounded-md px-2"
                // name="message"
                placeholder="Your Message"
                cols={10}
                rows={3}
                {...register("message", {
                  required: true,
                })}
              />
            </div>
            <button
              disabled={!formState.isValid}
              type="submit"
              className={`w-1/2 duration-300 transition ease-in-out  border-[1px] rounded-md p-[4px] mt-2 ${
                formState.isValid
                  ? "text-foreground hover:scale-105 border-foreground"
                  : "border-red-600 text-red-600"
              }`}
              onClick={notify}
            >
              Submit
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
