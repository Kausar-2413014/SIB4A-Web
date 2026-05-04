export default function TaskPage(){
    return(
<section className="h-screen bg-gray-300 flex flex-col justify-center items-center gap-8 relative p-12">
<div className="bg-white p-8 h-150 w-122 rounded-4xl flex flex-col relative gap-35">
    <div className="flex gap-4">
            <div className="flex gap-3">
                 <div className="absolute top-9 right-8">
                        <img src="x.svg" alt="X icon" className="w-6 h-6" />
                    </div>
                <h2 className="text-3xl text-black">Client details</h2>
            <div className="absolute top-25">
            <div className="flex flex-direction gap-3">
            <div className="w-18 h-18 rounded-full bg-white border-2 border-white flex items-center justify-start overflow-hidden">
        <img src="Pria 1.jfif" alt="user" />
</div>
<h2 className="text-2xl font-black text-black">Muhammad Kausar</h2>
<div className="absolute bottom-3 left-21">
<div className="bg-green-300 p-3 h-4 w-25 rounded-4xl flex judtify-start gap-2 relative ">
    <div className="absolute top-0 right-2">
    <h2 className="text-l text-black">Verified</h2>
    </div>
    <div className="absolute top-0 left-2">
<img src="centang.svg" alt="centang" />
    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-200 p-8 w-105 h-40 rounded-4xl flex flex-col justify-between text-black relative">
    <div className="flex gap-2">
<p className="font-bold text-2">Projects</p>
</div>
</div>

</div>
</section>
    )
}