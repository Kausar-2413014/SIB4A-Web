
const UserAvatar = ({ className = "" }) => (
    <div className={`w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden ${className}`}>
        
        <img src="user.svg" alt="user" className="w-5 h-5 text-gray-400" /> 
    </div>
);

const Badge = ({ text } : { text: string }) => (
    <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm z-10">
        {text}
    </div>
);

export default function TaskPage(){
    return(
        <section className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-8 relative p-12">
            <div className="absolute top-10 left-12">
                <img src="radioactive.svg" alt="Logo" className="w-15 h-15" />
            </div>
            <div className="flex gap-4">
        <div className="bg-blue-400 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-blue-950 relative">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Adobe Photoshop</h2>
    <p className="font-bold">In 3 days</p>
    <div className="absolute bottom-8 right-8">
    <div className="flex -space-x-3 items-center">
                            <UserAvatar />
                            <UserAvatar />
                            <UserAvatar />
                            <Badge text="9+" />
                    </div>
                </div>
            </div>
        </div>

         <div className="bg-green-400 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-blue-950 relative">
            <div className="absolute top-8 right-8">
                        <img src="star.svg" alt="star icon" className="w-6 h-6" />
                    </div>
            <div className="flex gap-3">
                <img src="terminal-2.svg" alt="terminal-2" />
                <p className="font-bold">AI</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">DALL.E, Midjourney, Stable Diffusion</h2>
    <p className="font-bold">In 5 days</p>
</div>
 <div className="absolute bottom-8 right-8">
    <div className="flex -space-x-3 items-center">
                            <UserAvatar />
                            <UserAvatar />
                            <UserAvatar />
                            <Badge text="3+" />
                    </div>
                </div>
        </div>
        </div>

        <div className="flex gap-4">

        <div className="bg-purple-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Figma</h2>
    <p className="font-bold">8 Hours ago</p>
</div>
        </div>
        
         <div className="bg-orange-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="code.svg" alt="code" />
                <p className="font-bold">Coding</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Python</h2>
    <p className="font-bold">2 Days ago</p>
</div>
        </div>  

        <div className="bg-red-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Sketch</h2>
    <p className="font-bold">4 Days ago</p>
</div>
        </div>  
        </div>
        <div className="absolute bottom-8 right-8 text-gray-500 font-bold text-lg">
                Day 020 / 365
            </div>
        </section>
    )

} 
