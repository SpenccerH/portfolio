import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    
    const ACCESS = import.meta.env.VITE_EMAIL_KEY;

    const onSubmit = async (event : any) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (!ACCESS) {
            console.error("ACCESS key is undefined!");
            return;
        }

        formData.append("access_key", ACCESS);

        const object = Object.fromEntries(formData);
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
        <div className="w-full h-[650px] flex flex-col items-center justify-center text-center px-8">
            <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">Contact Form</div>
                <div className="text-xs">Currently applied to spencerhum15@gmail.com</div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-2.5 w-80">
                    <label className="flex flex-row gap-x-2.5 items-center text-left">
                        <div className="font-medium">Name</div>
                        <div className="text-sm text-amber-600">(required)</div>
                    </label>
                    <input type="text" name="name" className="text-sm bg-transparent border border-amber-600 rounded p-2 focus:outline-none" />
                    <label className="flex flex-row gap-x-2.5 items-center text-left">
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-amber-600">(required)</div>
                    </label>
                    <input type="email" name="email" className="text-sm bg-transparent border border-amber-600 rounded p-2 focus:outline-none" />
                    <label className="flex flex-row gap-x-2.5 items-center text-left">
                        <div className="font-medium">Message</div>
                        <div className="text-sm text-amber-600">(required)</div>
                    </label>
                    <textarea name="message" className="text-sm bg-transparent border border-amber-600 h-24 rounded p-2 focus:outline-none"></textarea>
                    <button type="submit" className="text-sm rounded p-2 focus:outline-none text-white font-medium bg-amber-600 hover:bg-amber-700">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
