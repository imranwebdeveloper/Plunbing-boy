import React from "react";
import toast from "react-hot-toast";
import Container from "../components/common/Container";
import useTitle from "../hook/useTitle";

const AddService = () => {
  useTitle("Add New Service");
  const serviceHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const imgUrl = e.target.url.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const service = { title, imgUrl, description, price, rating };
    fetch("https://plumboy-server-three.vercel.app/user/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Congratulation New Service Added");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container CS="min-h-screen py-16">
      <form
        onSubmit={serviceHandler}
        className="max-w-[700px] mx-auto border p-8"
      >
        <div className="relative w-full mb-3">
          <input
            type="text"
            name="title"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Service Title"
            required
          />
        </div>
        <div className="relative w-full mb-3">
          <input
            type="text"
            name="url"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Image Url"
            required
          />
        </div>
        <div className="relative w-full mb-3">
          <textarea
            name="description"
            className="border-0 px-3 py-3 h-20 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Description"
            required
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="relative w-full mb-3">
            <input
              type="text"
              name="price"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Service price"
              required
            />
          </div>
          <div className="relative w-full mb-3">
            <input
              type="text"
              name="rating"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Rating"
              required
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            className=" bg-white border  dark:text-gray-400 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[120px] ease-linear transition-all duration-150"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </Container>
  );
};

export default AddService;
