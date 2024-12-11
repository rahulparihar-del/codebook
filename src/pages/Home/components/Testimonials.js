import React from "react";

const Testimonials = () => {
  const testimonailInfo = [
    {
      id: 1,
      name: "Bonnie Green",
      shorttext: "Very easy this was to integrate",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50",
    },
    {
      id: 2,
      name: "Roberta Casas",
      shorttext: "Solid foundation for any project",
      text: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
      image:
        "https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50",
    },
    {
      id: 3,
      name: "Jese Leos",
      shorttext: "Mindblowing workflow",
      text: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60",
    },
    {
      id: 4,
      name: "Joseph McFall",
      shorttext: "Efficient Collaborating",
      text: "You have many examples that can be used to create a fast prototype for your team.",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60",
    },

    {
      id: 5,
      name: "Bonnie Green",
      shorttext: "Very easy this was to integrate",
      text: "You have many examples that can be used to create a fast prototype for your team.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Roberta Casas",
      shorttext: "Solid foundation for any project",
      text: "You have many examples that can be used to create a fast prototype for your team.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="my-20">
      <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12  md:px-12">
          <h1
            className="p-4 font-semibold leading-none text-center"
            style={{ fontSize: "1.7rem" }}
          >
            What our customers are saying about us
          </h1>
        </div>
        <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {testimonailInfo.map(({ id, name, shorttext, text, image }) => (
            <div key={id} className="flex flex-col max-w-sm shadow-lg mx-auto">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-white" style={{backgroundColor: "#2C2E35"}}>
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">{name}</p>
                <p className="text-sm uppercase">{shorttext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
