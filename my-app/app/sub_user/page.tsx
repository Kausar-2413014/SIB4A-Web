import Button1 from "./_component/button-1";
import Detailcard from "./_component/detail-card";
export default function user() {
    return(
<section className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <section className="bg-white w-106 h-125 p-7 rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between border-b">
                <p className="font-bold text-[20px] text-black">Client Detail</p>
                <img src="x.svg" />
            </div>
            <div className="flex gap-3">
                <img src="user.svg"/>
                <div className="flex flex-col gap-1 text-black">
                    <p>Cornelius Greenfelder</p>
                        <div className="bg-green-300 w-18 h-5 rounded-2xl flex">
                            <img className="w-4" src="centang.svg "/>
                            <p className="text-[14px] text-black">Verified</p>
                        </div>   
                </div>
            </div>
            <div className="bg-blue-100 w-full h-30 rounded-3xl text-black">
                <div className="p-5 flex flex-col justify-between">
                    <p className="font-bold text-[17px]">Project</p>
                    <div className="flex gap-30">
                        <div>
                            <div className="flex gap-2">
                                <img className="w-3" src="hourglass-empty.svg"/>
                                <p>Ongoing</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-bold">2</p>
                                <p>($3.8k)</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <img className="w-3" src="check.svg"/>
                                <p>Completed</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-bold">25</p>
                                <p>($54k)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-black">
                <p className="font-bold text-[19px]">Location</p>
                <p className="text-[19px]">Unite State, New York</p>
            </div>
             <div className="flex justify-between text-black">
                <p className="font-bold text-[19px]">With Us</p>
                <p className="text-[19px]">6 Jan 2024</p>
            </div>
            <div className="flex gap-4">
                <img className="bg-white shadow-[0px_0px_100px_5px_rgba(0,0,250,10)] rounded-full w-12 p-2 " src="dots-vertical.svg"/>
                <Button1/>
            </div>
      </section>
</section>
    );
}