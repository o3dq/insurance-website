"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const sentence = "Protect what \nmatters with \nGenerali";

    return (
        <div className="w-full relative min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen px-24 pt-24">
                <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 mb-16">
                    <div className="flex flex-col max-w-xl lg:max-w-2xl items-center xl:items-start gap-4">
                        <motion.span
                            className="border border-black/20 rounded-full w-fit flex items-center justify-center gap-2 px-3 py-1"
                            initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                                x: -50,
                            }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                                x: 0,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-asterisk text-red-500"
                            >
                                <path d="M12 6v12" />
                                <path d="M17.196 9 6.804 15" />
                                <path d="m6.804 9 10.392 6" />
                            </svg>{" "}
                            <p className="apple text-md select-none">
                                Subsidiary of the{" "}
                                <span className="uppercase font-bold applebold">
                                    Generali
                                </span>{" "}
                                group.
                            </p>
                        </motion.span>

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.03 },
                                },
                            }}
                            className="text-4xl md:text-6xl lg:text-[80px] text-center xl:text-left font-extrabold leading-[1.2] applebold"
                        >
                            {sentence.split("").map((char, index) =>
                                char === "\n" ? (
                                    <div
                                        key={index}
                                        className="block h-4"
                                    ></div>
                                ) : (
                                    <motion.span
                                        key={index}
                                        className="inline-block"
                                        variants={{
                                            hidden: {
                                                y: 50,
                                                opacity: 0,
                                                filter: "blur(20px)",
                                            },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                filter: "blur(0px)",
                                            },
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                )
                            )}
                        </motion.h1>

                        <motion.button
                            className="cursor-none w-fit select-none inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium px-8 py-4 bg-black text-white hover:bg-transparent border border-black hover:text-black duration-300 shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, type: "tween" }}
                        >
                            Get an Estimate
                        </motion.button>

                        <hr className="bg-[#deeeed] shadow-lg my-4" />

                        <motion.p
                            className="apple text-lg font-thin text-center xl:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            At{" "}
                            <span className="font-bold applebold">
                                Generali
                            </span>
                            , we offer tailor-made insurance solutions for you, your property and your business. With more than {" "}
                            <span className="font-bold applebold">
                            30 years of expertise
                            </span>
                            , we help you choose the ideal{" "}
                            <span className="font-bold applebold">
                            coverage in home, auto, health insurance
                            </span>{" "}
                            and much more. Secure your future with a team at your service.
                        </motion.p>
                    </div>

                    <div className="relative mt-16 xl:mt-0 aspect-square">
                        <motion.div
                            initial={{
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{
                                type: "tween",
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                            className="w-48 h-[130%] bg-dot-pattern rounded-lg absolute -right-24 top-1/2 -translate-y-1/2 opacity-50"
                        ></motion.div>

                        <motion.div
                            initial={{
                                x: 300,
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                            transition={{
                                type: "tween",
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                            className="relative w-72 h-72 sm:w-96 sm:h-96 aspect-square bg-gray-100 rounded-lg shadow-xl neumorphism-effect"
                        >
                            <span className="border select-none border-black/20 bg-white/50 backdrop-blur-sm rounded-full w-fit flex items-center justify-center gap-2 px-3 py-2 absolute bottom-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-asterisk text-green-500"
                                >
                                    <path d="M12 6v12" />
                                    <path d="M17.196 9 6.804 15" />
                                    <path d="m6.804 9 10.392 6" />
                                </svg>
                                <p>Nous sommes joignable</p>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
