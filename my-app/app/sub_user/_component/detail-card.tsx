export default function Detailcard ({ 
    img,
  title,
  qty,
  price,
}: {
  img: string;
  title: string;
  qty: number;
  price: number;
}) {
  return (
    <div className="mt-2 text-black">
      <div className="flex gap-2 items-center   ">
        <img src={img} className="h-4 w-4" />
        <p>{title}</p>
      </div>
      <p className="text-2xl">
        {qty} ${price}
      </p>
    </div>
  );
}