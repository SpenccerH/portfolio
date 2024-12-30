import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Form() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const navigate = useNavigate();
    
    const ACCESS = import.meta.env.VITE_EMAIL_KEY;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        return formData.name && formData.email && formData.message;
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (!ACCESS) {
            console.error("ACCESS key is undefined!");
            return;
        }

        if (!isFormValid()) {
            setError("All fields are required!");
            return;
        }

        const form = new FormData(event.target);
        form.append("access_key", ACCESS);

        const object = Object.fromEntries(form);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                navigate("/");
            } else {
                console.error("Submission failed", res);
            }
        } catch (error) {
            console.error("Error during submission", error);
        }
    };

    return (
        <div className="w-full h-[675px] flex flex-col items-center justify-center px-8">
            <div className="flex flex-col items-center gap-y-1">
                <div className="text-3xl font-semibold">Get in touch.</div>
                <div>spencerhum04@gmail.com</div>
            </div>
            <form onSubmit={onSubmit} className="w-full place-items-center">
                <div className="flex flex-col gap-y-4 mt-5 max-w-80 w-full">
                    <div className="flex flex-col">
                        <label className="flex flex-row gap-x-2.5 items-center text-left mb-1">
                            <div className="font-medium">Name</div>
                            <div className="text-sm text-amber-600">(required)</div>
                        </label>
                        
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                            className="text-sm bg-transparent border border-amber-600 rounded p-2.5 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="flex flex-row gap-x-2.5 items-center text-left mb-1">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-amber-600">(required)</div>
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                            className="text-sm bg-transparent border border-amber-600 rounded p-2.5 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="flex flex-row gap-x-2.5 items-center text-left mb-1">
                            <div className="font-medium">Message</div>
                            <div className="text-sm text-amber-600">(required)</div>
                        </label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange}
                            className="text-sm bg-transparent border border-amber-600 h-24 rounded p-2.5 focus:outline-none"
                        ></textarea>
                    </div>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    {isFormValid() ?
                        (<button type="submit" className="text-sm rounded p-2 focus:outline-none text-white font-medium bg-amber-600 hover:bg-amber-700">
                            Send
                        </button>)
                        :
                        (<button type="submit" className="text-sm rounded p-2 focus:outline-none text-white font-medium bg-amber-600 cursor-not-allowed" disabled>
                            Send
                        </button>)
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;
