export default function LearnPage(){
    return(
        <section className="h-screen bg-gray-100 flex gap-4">
        <div className="bg-purple-400 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Figma</h2>
    <p className="font-bold">8 Hours ago</p>
</div>
        </div>
        
         <div className="bg-orange-400 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="code.svg" alt="code" />
                <p className="font-bold">Coding</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Phyton</h2>
    <p className="font-bold">2 Days ago</p>
</div>
        </div>  

        <div className="bg-red-400 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <h2 className="text-4xl font-bold">Sketch</h2>
    <p className="font-bold">4 Days ago</p>
</div>
        </div>  
        </section>
    )

}
