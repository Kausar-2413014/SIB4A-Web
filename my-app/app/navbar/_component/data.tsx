export default function Data1 ({
img,
title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="pl-10 text-white">
      <div className="flex gap-5 items-center">
        <img src={img} className="h-6 w-6 bg-white rounded-2xl" />
        <p>{title}</p>
      </div>
    </div>
  );
}