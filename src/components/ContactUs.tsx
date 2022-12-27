function ContactUs() {
  return (
    <section className="bg-slate-300">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-lg border-b-2 rounded-md  border-yellow-500 text-gray-900 text-sm block w-full p-2.5  focus:ring-yellow-500 focus:ring-opacity-50"
              placeholder="Jhon Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-lg border-b-2 rounded-md border-yellow-500 text-gray-900 text-sm   block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-lg border-b-2 rounded-md border-yellow-500 text-gray-900 text-sm   block w-full p-2.5"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow-lg border-b-2 rounded-md border-yellow-500 text-gray-900 text-sm   block w-full p-2.5"
              placeholder="Date"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              How did you hear about us?
            </label>
            <input
              type="text"
              id="text"
              className="shadow-lg border-b-2 rounded-md border-yellow-500 text-gray-900 text-sm   block w-full p-2.5"
              placeholder="How did you hear about us?"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center uppercase tracking-wider"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={3}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Dark
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
