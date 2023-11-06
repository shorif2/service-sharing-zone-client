import AddProductForm from "./AddProductForm";


const AddService = () => {
    return (
        <div>
            <div>
                <h3 className="text-3xl font-medium h-[200px] bg-red-200 flex justify-center items-center">
                Add your service here
                </h3>
            </div>
            <AddProductForm></AddProductForm>
        </div>
    );
};

export default AddService;