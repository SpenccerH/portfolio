export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[600px] bg-black text-white">
            <div className="text-5xl font-medium">ello me spencer</div>
            <div className="text-xl text-subgray font-medium mt-4">aspiring fullstack developer</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12">
                <button className="text-white font-medium w-48 h-10 text-center items-center bg-amber-600 hover:bg-amber-700 rounded text-lg cursor-pointer">Resume</button>
                <button className="text-amber-600 font-medium w-48 h-10 text-center items-center border border-amber-600 hover:bg-amber-950 rounded text-lg cursor-pointer">GitHub</button>
            </div>
        </div>
    )
}