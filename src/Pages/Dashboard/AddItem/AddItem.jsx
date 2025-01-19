import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componentes/SectionTitle/SectionTitle";
import useAxosPublic from "../../../Hooks/useAxosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2";

console.log(import.meta.env);
const AddItem = () => {
    const imageHostingKey = import.meta.env.VITE_IMAGE_API;
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
    console.log(imageHostingApi, imageHostingKey);
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const image = { image: data.image[0] }
        const res = await axiosPublic.post(imageHostingApi, image, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.url

            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Added To menu",
                    icon: "success",
                    draggable: true
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <div>
                <SectionTitle heading='Add an Item' subHeading="What's new"></SectionTitle>
            </div>
            <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Food Item</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Food Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter food name"
                            {...register("name", { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Recipe */}
                    <div className="mb-4">
                        <label htmlFor="recipe" className="block text-sm font-medium text-gray-700">
                            Recipe
                        </label>
                        <textarea
                            id="recipe"
                            placeholder="Enter recipe details"
                            {...register("recipe", { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="file"
                            id="image"
                            placeholder="Enter image URL"
                            {...register("image", { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            id="category"
                            defaultValue="default"
                            {...register("category", { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="default">Select an category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter price"
                            {...register("price", { required: true, min: 0 })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Add Food Item
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddItem;