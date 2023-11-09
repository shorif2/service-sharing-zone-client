import { Helmet } from "react-helmet";
import AddProductForm from "./AddProductForm";


const AddService = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap | Add Service</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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