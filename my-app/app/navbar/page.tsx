import Data1 from "./_component/data"
export default function navbar () {
    return (

        <section className="h-screen bg-gray-200 flex justify-center items-center">
<section className="bg-gray-900 w-80 h-180 p-7 flex flex-col overflow-hidden">

        <div className="flex justify-center gap-4">
             <img className="bg-white rounded-3xl" src="code.svg"/>
            <p className="font-bold text-2xl">CodingLab</p>
        </div>

    <div className="flex justify-start mt-10">
        <p className="p-5 font-bold">Main Menu</p>
    </div>

        <div className="flex flex-col gap-4">
        <Data1 img="check.svg" title="Dashboard"/>
        <Data1 img="globe.svg" title="Overview"/>
        <Data1 img="mail.svg" title="Analytic"/>
        </div>

    <div className="flex justify-start mt-10">
        <p className="p-5 font-bold">General</p>
    </div>

        <div className="flex flex-col gap-4">
        <Data1 img="file.svg" title="Projects"/>
        <Data1 img="globe.svg" title="Groups"/>
        <Data1 img="mail.svg" title="Reports"/>
        </div>
    
    <div className="flex justify-start mt-10">
        <p className="p-5 font-bold">Account</p>
    </div>

        <div className="flex flex-col gap-4">
        <Data1 img="file.svg" title="Profile"/>
        <Data1 img="globe.svg" title="Settings"/>
        </div>

    











        </section>
      </section>
    )



}