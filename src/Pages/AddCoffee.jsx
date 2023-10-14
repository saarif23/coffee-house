import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AddCoffee = () => {

    const handleFromSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const quantity = from.quantity.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;
        const coffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(coffee);

    }
    return (
        <div className='font-rancho'>
            <Navbar></Navbar>
            <div className=" text-center min-h-screen bg-cover bg-center pb-16 " style={{ backgroundImage: 'url("https://i.ibb.co/YhwJcHf/11.png")' }}>

                <button className="p-5">Back To Home</button>
                <div className="bg-[#F4F3F0] max-w-5xl mx-auto py-8 rounded-md">
                    <div className="max-w-2xl space-y-3 mx-auto">
                        <h3 className="text-3xl text-center text-[#374151] font-extrabold">Add New Coffee</h3>
                        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleFromSubmit} className="px-10">
                        {/* From row with name and quantity */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Available Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Enter Available Quantity " className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with supplier and taste */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter Supplier" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter taste " className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with category and details */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter Category" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter details " className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* From row with photo */}
                        <div className="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-black">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter PhotoUrl" className="input input-bordered w-full" />
                            </div>

                        </div>
                        {/* From Submit button */}
                        <div className="">
                            <div className="form-control w-full my-5">
                                <input type="submit" value="Add Coffee" placeholder="Enter Category" className="input input-bordered w-full  bg-[#D2B48C] " />
                            </div>

                        </div>

                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;