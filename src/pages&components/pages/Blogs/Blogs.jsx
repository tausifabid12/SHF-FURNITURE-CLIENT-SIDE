import React from "react";

const Blogs = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What are the different ways to manage a state in a React
              application?
            </h3>

            <p>
              React's useState is the best option for local state management. If
              you need a global state solution, the most popular ones are Redux,
              MobX, and the built-in Context API. Your choice will depend on the
              size of your project, your needs, and your engineers' expertise
            </p>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              React vs. Angular vs. Vue?
            </h3>

            <p>
              Vue.js: Vue.js is, according to its site: “A progressive
              JavaScript framework” Vue.js is developed and led by Evan
              <br />
              React: React is considered a UI library. They define themselves
              as: “A JavaScript library for building user interfaces” Facebook
              developers are behind the development and maintenance of this
              library. And, in this case, most of Facebook’s products are made
              with React.
              <br />
              Angular:Angular is a front-end framework with lots of components,
              services, and tools.
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                How does prototypical inheritance work?
              </h3>

              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                What is a unit test? Why should we write unit tests?
              </h3>

              <p>
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="/"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:dark:text-gray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
