"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactMe = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const onSubmit = handleSubmit((formData) => {
		window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
	});

	return (
		<div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="mt-20 flex flex-col space-y-8">
				<h4 className="text-lg font-semibold text-center">
					I have got what you need.{" "}
					<span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
				</h4>

				<div className="space-y-2">
					<div className="flex items-center space-x-5 justify-center">
						<a href="tel:+918850767392">
							<PhoneIcon className="h-5 w-5 animate-pulse text-[#F7AB0A]" />
						</a>
						<p className="text-base">+91 8850767392</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
						<a href="mailto:prathamesh.chavan216@gmail.com">
							<EnvelopeIcon className="h-5 w-5 animate-pulse text-[#F7AB0A]" />
						</a>
						<p className="text-base">prathamesh.chavan216@gmail.com</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="h-5 w-5 animate-pulse text-[#F7AB0A]" />
						<p className="text-base">Mumbai, India</p>
					</div>
				</div>

				<form onSubmit={onSubmit} className="flex flex-col space-y-2 mx-auto">
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>

					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>

					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactMe;
